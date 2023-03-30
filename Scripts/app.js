"use strict";
//IIFE - Immediately Invoked Function Expression
//AKA - Self Executing Function
(function () {
    /**
     *This function loads data Asynchronously from a URL.
    * It calls the callback function when the data is loading
     * @param {string} method
     * @param {string} url
     * @param {function} callback
     */
    function LoadData(method, url, callback) {
        {
            //Step 1 create a new empty XHR object
            let XHR = new XMLHttpRequest();
            //Step 2 - Compose a request
            XHR.open(method, url);
            // Step 3 - Send the request to the server
            XHR.send();
            //Step 4 - setup an event listener
            XHR.addEventListener("readystatechange", function () {
                if ((XHR.status == 200) && (XHR.readyState == 4)) {
                    callback(XHR.responseText);
                }
            });
        }
        //Named function
        function Start() {
            console.log("App started!!");
            //  LoadData("GET","./Data/contacts.json",function(XHR){
            //         console.log(XHR);
            //  });
            $.getJSON("./Data/contacts.json", function (data) {
                console.log(data);
            });
        }
        window.addEventListener("load", Start);
    }
    ;
    function callback(responseText) {
        throw new Error("Function not implemented.");
    }
    
});
//# sourceMappingURL=app.js.map