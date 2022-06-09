var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)){  // aca empieza el recorrido , va a validar si el elemento recibido es igual al selector,en caso sea falso pasa a recorrer sobre sus hijos
    resultSet.push(startEl)  // si es que elemento = selector ,lo pushea
  }

  for (let i = 0; i < startEl.children.length; i++) {
    let elements = traverseDomAndCollectElements(matchFunc,startEl.children[i]);
    resultSet = [...resultSet, ...elements];
    
  }
  return resultSet;
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";
  var i = 1;
  while (selector) {
    if (selector[i] === ".") return "tag.class";
    if(i === selector.length - 1) return "tag";
    i++
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = (el) => {return `#${el.id}` === selector }
   
  } else if (selectorType === "class") {
    
    matchFunction = (el) => {
      let classes = el.classList;
      for( let i = 0 ; i < classes.length; i++){
        if(`.${classes[i]}` === selector) return true
      } return false
    };   
    
  } else if (selectorType === "tag.class") {
    matchFunction = function (el){
    let[tagBuscado, classBuscada] = selector.split(".");
    return matchFunctionMaker(tagBuscado)(el) && matchFunctionMaker(`.${classBuscada}`)(el);
    }
    
  } else if (selectorType === "tag") {
    matchFunction = (el) => {return el.tagName.toLowerCase() === selector }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
