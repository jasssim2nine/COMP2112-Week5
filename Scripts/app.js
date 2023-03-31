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
            for (const contact of contactlist) {
                let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress);
                console.log(newContact.toString());
            }
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map