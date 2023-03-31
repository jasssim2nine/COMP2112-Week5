class Contact {
    //private instances (members)
    fullName;
    contactNumber;
    emailAddress;
    //public properties
    get FullName() {
        return this.fullName;
    }
    set FullName(name) {
        this.fullName = name;
    }
    get ContactNumber() {
        return this.contactNumber;
    }
    set ContactNumber(name) {
        this.contactNumber = name;
    }
    get EmailAddress() {
        return this.emailAddress;
    }
    set EmailAddress(name) {
        this.emailAddress = name;
    }
    //constructor
    /**
     * Creates an instance of Contact.
     * @param {string} [fullName="unknown name"]
     * @param {string} [contactNumber="no contact number"]
     * @param {string} [emailAddress=" unknown email address"]
     * @memberof Contact
     */
    constructor(fullName = "unknown name", contactNumber = "no contact number", emailAddress = " unknown email address") {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }
    //public methods
    /**
     *this method overrides  the built-in toString method for the Contact class
     *
     * @return {*}  {string}
     * @memberof Contact
     */
    toString() {
        let outputString = "";
        outputString += `Full name : ${this.FullName}\n`;
        outputString += `Contact Number : ${this.ContactNumber}\n`;
        outputString += `Email Address: ${this.EmailAddress}\n`;
        return outputString;
    }
    /**
     *This method converts class data members to a comma seperated list
     compatible with JSON
     *
     * @return {*}  {string}
     * @memberof Contact
     */
    toJSON() {
        return `${this.FullName},${this.ContactNumber},${this.emailAddress}`;
    }
    /**
     *This method reads data from comma seperated list and
     assigns it to class data members
     *
     * @param {string} data
     * @memberof Contact
     */
    fromJSON(data) {
        let stringArray = data.split(",");
        this.FullName = stringArray[0];
        this.ContactNumber = stringArray[1];
        this.EmailAddress = stringArray[2];
    }
}
//# sourceMappingURL=contact.js.map