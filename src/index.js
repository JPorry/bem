export default function bem(initialClass, modifierClasses) {
  var classes = [];
  if (initialClass) {
    classes.push(initialClass);
  }

  for (var key in modifierClasses) {
    if (modifierClasses.hasOwnProperty(key) && modifierClasses[key]) {
      classes.push(key[0] === '-' ? initialClass + key : key);
    }
  }

  function element(component, modifierClasses) {
    return bem(initialClass + '_' + component, modifierClasses);
  }

  element.className = classes.join(' ');

  return element;
}

bem.withPrefix = function(prefix) {
  return function(initialClass, modifierClasses) {
    return bem(prefix + '-' + initialClass, modifierClasses);
  };
};
