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
            let count = 0;
            for (const contact of contactlist) {
                let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress);
                localStorage.setItem(count.toString(), newContact.toJSON());
                count++;
            }
            let keys = Object.keys(localStorage);
            for (let key of keys) {
                let newContact = new Contact();
                newContact.fromJSON(localStorage.getItem(key));
                console.log(newContact.toString());
            }
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map