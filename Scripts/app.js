"use strict";
//IIFE - Immediately Invoked Function Expression
//AKA - Self Executing Function
(function () {
    /**
     *This method saves data to local storage
     *
     * @param {any[]} contactlist
     */
    function SaveContactListData(contactlist) {
        let count = 0;
        for (const contact of contactlist) {
            let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress);
            localStorage.setItem(count.toString(), newContact.toJSON());
            count++;
        }
    }
    /**
     *This method reads data from local storage and returns a contactArray
     *
     * @return {*}  {Contact[]}
     */
    function LoadContactListData() {
        //creates an empty contact array container
        let ContactArray = new Array();
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            let newContact = new Contact();
            newContact.fromJSON(localStorage.getItem(key));
            ContactArray.push(newContact);
        }
        return ContactArray;
    }
    //Named function
    function Start() {
        console.log("App started!!");
        $.getJSON("./Data/contacts.json", function (DataSource) {
            //get data from datasource
            let contactlist = DataSource.ContactList;
            SaveContactListData(contactlist);
            let ContactArray = LoadContactListData();
            for (const contact of ContactArray) {
                console.log(contact.toString());
            }
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map