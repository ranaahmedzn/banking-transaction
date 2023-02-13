// for login page 
function getInputElementValueById(inputFieldId){
    const inputElement = document.getElementById(inputFieldId);
    const inputElementValue = inputElement.value;
    return inputElementValue;
}

// for bank page 
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(textElementId){
    const textElement = document.getElementById(textElementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementValueById(textElementId, newValue){
    const textElement = document.getElementById(textElementId);
    textElement.innerText = newValue;
}