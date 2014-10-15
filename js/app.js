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
    var standings = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Super Senior!'];

} //onReady()

/* onSubmit()
 * Called when the user attempts to submit the form
 * The browser will pass an event object as the first parameter and we can use this object
 * to stop the form from being submitted if it is invalid.
 * Also the keyword 'this' will refer to the form that is being submitted while inside this function.
 * */
function onSubmit(evt) {
    evt.returnValue = validateForm(this);
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

} //validateForm()

/* validateRequiredField()
* This function validates a field that is required. If the field does not have a value, or has only spaces,
* it will mark the field as invalid and return false. Otherwise it will return true.
* */
function validateRequiredField(field) {

} //validateRequiredField()

document.addEventListener('DOMContentLoaded', onReady);