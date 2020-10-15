import { COLOR_TYPE, SHAPE_TYPE, SHAPE_FORMS, COLORS } from './LanguageConstants';
import { cloneDeep, flatMap } from 'lodash';

const simpleColor = (color) => {
    return {
        type: COLOR_TYPE,
        color: color
    }
}

const simpleShape = (form, color) => {
    return {
        type: SHAPE_TYPE.Simple,
        form: form,
        color: color
    }
}

const combinedShape = (shapes) => {
    return {
        type: SHAPE_TYPE.Combined,
        shapes: flatMap(shapes, shape =>
            shape.type === SHAPE_TYPE.Combined ? shape.shapes : [shape]
        )
    }
}

const combine = (shape1, shape2) => {
    return combinedShape([shape1, shape2])
}

const colorize = (shape, color) => {
    return shape.type === SHAPE_TYPE.Simple ? simpleShape(shape.form, color) : combinedShape(shape.shapes.map(s => simpleShape(s.form, color)))
}


function skipSpace(string) {
    var first = string.search(/\S/);
    if (first == -1) return "";
    return string.slice(first);
}

function parseApply(expr, program) {
    program = skipSpace(program);
    if (program[0] != "(") {
        return {expr: expr, rest: program};
    }
  
    program = skipSpace(program.slice(1));
    expr = {type: "apply", operator: expr, args: []};
    while (program[0] != ")") {
        let arg = parseExpression(program);
        expr.args.push(arg.expr);
        program = skipSpace(arg.rest);
        if (program[0] == ",") {
        program = skipSpace(program.slice(1));
        } else if (program[0] != ")") {
        throw new SyntaxError("Se esperaba ',' o ')'");
        }
    }
    return parseApply(expr, program.slice(1));
}
  
function parseExpression(program) {
    program = skipSpace(program);
    var match, expr;
    if (match = /^"([^"]*)"/.exec(program))
        expr = {type: "value", value: match[1]};
    else if (match = /^\d+\b/.exec(program))
        expr = {type: "value", value: Number(match[0])};
    else if (match = /^[^\s(),"]+/.exec(program))
        expr = {type: "word", name: match[0]};
    else
        throw new SyntaxError("Sintaxis Inesperada: " + program);
  
    return parseApply(expr, program.slice(match[0].length));
}

function parse(program) {
    let {expr, rest} = parseExpression(program);
    if (skipSpace(rest).length > 0) {
        parse(rest);
    }
    return expr;
}
  
var specialForms = Object.create(null);

function evaluate(expr, scope) {
  if (expr.type == "value") {
    return expr.value;
  } else if (expr.type == "word") {
    if (expr.name in scope) {
      return scope[expr.name];
    } else {
      throw new ReferenceError(
        `Undefined binding: ${expr.name}`);
    }
  } else if (expr.type == "apply") {
    let {operator, args} = expr;
    if (operator.type == "word" &&
        operator.name in specialForms) {
      return specialForms[operator.name](expr.args, scope);
    } else {
      let op = evaluate(operator, scope);
      if (typeof op == "function") {
        return op(...args.map(arg => evaluate(arg, scope)));
      } else {
        throw new TypeError("Applying a non-function.");
      }
    }
  }
}

specialForms.Ejecutar = (args, scope) => {
  let value = "No hay ninguna expresión definida.";
  for (let arg of args) {
    value = evaluate(arg, scope);
  }
  return value;
};

specialForms.Definir = (args, scope) => {
    if (args.length != 2) {
      throw new SyntaxError("Definir lleva 2 argumentos.");
    }
    let value = evaluate(args[1], scope);
    scope[args[0].value] = value;
    console.log(scope[args[0].name]);
    return value;
};

specialForms.Colorear = (args, scope) => {
    if (args.length != 2) {
      throw new SyntaxError("'Colorear' lleva 2 argumentos.");
    }

    let shape = evaluate(args[0], scope);
    console.log(shape);
    if(shape.type !== SHAPE_TYPE.Simple && shape.type !== SHAPE_TYPE.Combined) throw new SyntaxError("El primer argumento de 'Colorear' debe ser una forma.");
    let color = evaluate(args[1], scope);
    if(color.type !== COLOR_TYPE) throw new SyntaxError("El segundo argumento de 'Colorear' debe ser un color.");
    
    const value = cloneDeep(colorize(shape, color))
    return value;
};

specialForms.Combinar = (args, scope) => {
    if (args.length != 2) {
      throw new SyntaxError("'Combinar' lleva 2 argumentos.");
    }
    let shape1 = evaluate(args[0], scope);
    let shape2 = evaluate(args[1], scope);
    
    if(shape1.type !== SHAPE_TYPE.Simple && shape1.type !== SHAPE_TYPE.Combined) throw new SyntaxError("El primer argumento de 'Combinar' debe ser una forma.");
    if(shape2.type !== SHAPE_TYPE.Simple && shape2.type !== SHAPE_TYPE.Combined) throw new SyntaxError("El segundo argumento de 'Combinar' debe ser una forma.");
    
    return combine(shape1, shape2);
};

const setRenderer = (setCode) => {  
  specialForms.Dibujar = (args, scope) => {
      if (args.length != 1) {
        throw new SyntaxError("'Dibujar' solo lleva 1 parámetro");
      }
      let shape = evaluate(args[0], scope);
      if(shape.type !== SHAPE_TYPE.Simple && shape.type !== SHAPE_TYPE.Combined) {
        throw new SyntaxError("'Dibujar' espera 1 parámetro del tipo forma.");
      }
      let value = evaluate(args[0], scope);
      setCode(value);
      return value;
  };
}
    
var topScope = Object.create(null);

topScope.Blanco     = simpleColor(COLORS.WHITE)
topScope.Negro      = simpleColor(COLORS.BLACK)
topScope.Rojo       = simpleColor(COLORS.RED)
topScope.Verde      = simpleColor(COLORS.GREEN)
topScope.Azul       = simpleColor(COLORS.BLUE)

topScope.Circulo    = simpleShape(SHAPE_FORMS.Circle, topScope.Blanco)
topScope.Cuadrado   = simpleShape(SHAPE_FORMS.Square, topScope.Blanco)
topScope.Triangulo  = simpleShape(SHAPE_FORMS.Triangle, topScope.Blanco)

const run = (program) => {
  return evaluate(parse(program), Object.create(topScope));
}

const LanguageService = {
    setRenderer: setRenderer,
    run: run
};

export default LanguageService;
