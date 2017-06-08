var form = document.querySelector('#form');

function buildLabel(labelData) {

  var newLabel = document.createElement('label');
  newLabel.innerHTML = labelData;
  form.appendChild(newLabel);

}

function buildInput(typeData, idData) {

  var newInput = document.createElement('input');
  newInput.setAttribute("type", typeData);
  newInput.setAttribute("id", idData);
  form.appendChild(newInput);

}

for(var i = 0; i < formData.length; i++) {

  var currentObject = formData[i];

  buildLabel(currentObject.label);

  if(currentObject.type == 'text' || currentObject.type == 'email' ||  currentObject.type == 'tel') {

    buildInput(currentObject.type, currentObject.id);

  }

}
/*
for(var i = 0; i < formData.length; i++) {

  var currentObject = formData[i];

  if(currentObject.type == 'text') {
    var textInput = document.createElement('input');
    textInput.setAttribute("type", currentObject.type)
    textInput.setAttribute("label", currentObject.label)
    textInput.setAttribute("id", currentObject.id)
    textInput.setAttribute("icon", currentObject.icon)
    textInput.setAttribute("options", currentObject.options)

    form.appendChild(textInput);
  }

}

for (var i = 0; i < formData.length; i++) {

  var currentObject = formData[i];

  if(currentObject.type == 'email') {
    var emailInput = document.createElement('input');
    textInput.setAttribute("type", currentObject.type)
    textInput.setAttribute("label", currentObject.label)
    textInput.setAttribute('id', currentObject.id)
    textInput.setAttribute('icon', currentObject.icon)
    textInput.setAttribute('options', currentObject.options)

    form.appendChild(emailInput);
  }

}

for (var i = 0; i < formData.length; i++) {

  var currentObject = formData[i];

  if(currentObject.type == 'select') {
    var selectInput = document.createElement('input');
    selectInput.setAttribute("type", currentObject.type)
    selectInput.setAttribute("label", currentObject.label)
    selectInput.setAttribute('id', currentObject.id)
    selectInput.setAttribute('icon', currentObject.icon)
    selectInput.setAttribute('options', currentObject.options)

    form.appendChild(selectInput);
  }
}

for (var i = 0; i < formData.length; i++) {

  var currentObject = formData[i];

  if(currentObject.type == 'textarea') {
    var textAreaInput = document.createElement('input');
    textAreaInput.setAttribute("type", currentObject.type)
    textAreaInput.setAttribute("label", currentObject.label)
    textAreaInput.setAttribute('id', currentObject.id)
    textAreaInput.setAttribute('icon', currentObject.icon)
    textAreaInput.setAttribute('options', currentObject.options)

    form.appendChild(textAreaInput);
  }
}

for (var i = 0; i < formData.length; i++) {

  var currentObject = formData[i];

  if(currentObject.type == 'tel') {
    var telInput = document.createElement('input');
    telInput.setAttribute("type", currentObject.type)
    telInput.setAttribute("label", currentObject.label)
    telInput.setAttribute('id', currentObject.id)
    telInput.setAttribute('icon', currentObject.icon)
    telInput.setAttribute('options', currentObject.options)

    form.appendChild(telInput);
  }
}
*/
