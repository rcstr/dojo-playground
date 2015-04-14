define(['dojo/dom', 'dojo/on', 'dojo/dom-class', 'dojo/domReady!'], function appExpenseReport(dom, on, domClass) {
    "use strict";

    setupFormValidation();

    function setupFormValidation() {
        var form = dom.byId('expenseReportForm'),
            tripPurposeElem = dom.byId('tripPurpose'),
            tripPurposeError = dom.byId('tripPurposeError');

        on(form, 'submit', function (e) {
            var isValid = true;

            if (!tripPurposeElem.value || tripPurposeElem.value.length === 0) {
                tripPurposeError.innerHTML = "Purpose of this trip is required";

                domClass.add(tripPurposeElem, 'error');
                domClass.remove(tripPurposeError, 'hide');
                isValid = false;
            } else {
                tripPurposeError.innerHTML = "";

                domClass.remove(tripPurposeElem, 'error');
                domClass.add(tripPurposeError, 'hide');
            }

            if (!isValid) {
                e.preventDefault();
            }
        });
    }
});