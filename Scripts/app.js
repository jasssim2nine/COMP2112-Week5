"use strict";
//IIFE - Immediately Invoked Function Expression
//AKA - Self Executing Function
(function () {
    //Named function
    function Start() {
        console.log("App started!!");
        $.getJSON("./Data/contacts.json", function (DataSource) {
            console.log(DataSource);
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map