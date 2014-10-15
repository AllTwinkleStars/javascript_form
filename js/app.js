/*
    app.js
    application script for the JavaScript and Forms Demo
*/

"use strict";

/* onReady()
* Called when the DOM is loaded and ready for manipulation.
* We need to populate the class standing select based on the standings array
* and add an event listener for the form's submit event
* */
function onReady() {
    var standings = [
        {
            code: 'f',
            displayText: 'Freshman'
        },
        {
            code: 's',
            displayText: 'Sophomore'
        },
        {
            code: 'j',
            displayText: 'Junior'
        },
        {
            code: 'sn',
            displayText: 'Senior'
        },

        {   code: 'ss',
            displayText: 'Super Senior!'
        }
    ];
    var personForm = document.getElementById('person-form');

    var standingsSelect = personForm.elements['standing'];
    var idx;
    var option;

    for (idx = 0; idx < standings.length; ++idx) {
        option = document.createElement('option');
        option.innerHTML = standings[idx].displayText;
        option.value = standings[idx].code;
        standingsSelect.appendChild(option);
    }

    personForm.addEventListener('submit', onSubmit);

} //onReady()

/* onSubmit()
 * Called when the user attempts to submit the form
 * The browser will pass an event object as the first parameter and we can use this object
 * to stop the form from being submitted if it is invalid.
 * Also the keyword 'this' will refer to the form that is being submitted while inside this function.
 * */
function onSubmit(evt) {
    evt.returnValue = validateForm(this);
    if(!evt.returnValue && evt.preventDefault) {
        evt.preventDefault();
    }
    return evt.returnValue;
} //onSubmit()


/* validateForm()
* This function validates the form's information and returns true if the form is valid or false if the form is invalid.
* It will also let the user know which fields are invalid.
* parameters:
*   form    reference to the form that needs to be validated
* */
function validateForm(form) {
    var requiredFields = ['firstName', 'lastName', 'standing', 'age'];
    var idx;
    var formValid = true;

    for (idx = 0; idx < requiredFields.length; ++idx) {
        formValid &= validateRequiredField(form.elements[requiredFields[idx]]);
    }

    if (!formValid) {
        var errormsg = document.getElementById('error-message');
        errormsg.innerHTML = 'Fill out the required field';
        errormsg.style.display = 'block';
    }

    return formValid;

} //validateForm()

/* validateRequiredField()
* This function validates a field that is required. If the field does not have a value, or has only spaces,
* it will mark the field as invalid and return false. Otherwise it will return true.
* */
function validateRequiredField(field) {
    var value = field.value.trim();
    var valid = value.length > 0;
    if (valid) {
        field.className = 'form-control';
    }
    else {
        field.className = 'form-control invalid-field';
    }
    return valid;
} //validateRequiredField()

document.addEventListener('DOMContentLoaded', onReady);