/* En este archivo debe agregar las clases JS que considere necesarias para la realización de las pruebas de páginas Estáticas */
/***********************************************************Prueba Estatica 2*****************************************************/
var emailPattern = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
 
var email = document.forms['userRegForm'].inputEmail;
var firstName = document.forms['userRegForm'].inputText1;
var lastName = document.forms['userRegForm'].inputText2;
 
// Email length regex pattern.
var emailLengthPattern = new RegExp($(email).attr('pattern'));
 
// Initialize popover for all required inputs
$('input[required]').popover({
    placement: 'bottom',
    container: 'body',
    trigger: 'manual',
    selector: 'true',
    content: function() {
        return $(this).attr('title');
    },
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
}).focus(function() {
    $(this).popover('hide');
});
 
function validateForm(form) {
    var Text1 = document.getElementById('inputText1').value; 
    var Text2 = document.getElementById('inputText2').value;
    var TextNumber = document.getElementById('inputText3').value;
    var Text3 = document.getElementById('inputText4').value;
    var TextComment = document.getElementById('comment').value; 
    var Email = document.getElementById('inputEmail').value; 
    // Email validation.
if (!emailPattern.test(email.value) || !emailLengthPattern.test(email.value)) {
    $(email).popover('show');
        return false;
    } else {
        $(email).addClass('valid')
    }
     
    // First name validation.
    if (firstName.value.length === 0) {
        $(firstName).popover('show');
        return false;
    }
     
    // No validation errors.
    alert('Nombre: ' + Text1 +'\n'+ 'Apellidos: '+ Text2 +'\n'+
    'Telefono: '+ TextNumber +'\n'+ 'Email: '+ Email +'\n'+
    'Interes: ' + Text3 +'\n'+ 'Observaciones: ' + TextComment);
     
    // In this demo, prevent the form from submitting.
    return false;
}
 
function validateEmail(input) {
    if (emailPattern.test(input.value) && emailLengthPattern.test(input.value)) {
        $(input).addClass('valid')
    } else {
        $(input).removeClass('valid');
    }
}
function validateRequired(input) {
    if (input.setCustomValidity) {
        input.setCustomValidity('');
         
        if (input.validity && !input.validity.valid) {
            input.setCustomValidity(input.title);
        }
    }
     
    if (input.value.length > 0) {
        $(input).addClass('valid');
   } else {
        $(input).removeClass('valid');
    }
}