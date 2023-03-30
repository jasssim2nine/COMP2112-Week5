"use strict";
//IIFE - Immediately Invoked Function Expression
//AKA - Self Executing Function
(function () {
    //Named function
    function Start() {
        console.log("App started!!");
        let contactlist;
        $.getJSON("./Data/contacts.json", function (DataSource) {
            //get data from datasource
            contactlist = DataSource.ContactList;
            //load data into objects
            let contact = new Contact();
            console.log(contact.toString());
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map