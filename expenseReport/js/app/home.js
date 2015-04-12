define(['dojo/on', 'dojo/dom', 'dojo/ready'], function appHome(on, dom, ready) {
    'use strict';

    var form = dom.byId('loginForm'),
        employeeNumberElem = dom.byId('employeeNumber');

    if (form) {
        on(form, 'submit', function onFormSubmit(e) {
            var isValid = true,
                employeeNumber = parseInt(employeeNumberElem.value);

            if (isNaN(employeeNumber) || employeeNumber !== 12345) {
                alert('Employee Number must be \'12345\'');
                isValid = false;
            }

            if (!isValid) {
                e.preventDefault();
            }
        });
    }
});