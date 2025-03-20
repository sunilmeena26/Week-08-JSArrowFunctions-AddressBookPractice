//Create a class to store the contact details
class Contact {
  //Create a constructor to initialize variables
  constructor(
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phoneNumber,
    email
  ) {
    //Check email is valid or not using regex
    if (!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-z]{3,}$/)) {
      //Throw the error
      throw new Error("Invaild Email!");
    }

    //Check first name is valid or not using regex
    if (!firstName.match(/^[A-Z][a-zA-Z]{2,}$/)) {
      //Throw the error
      throw new Error("Invaild FirstName!");
    }

    //Check lat name is valid or not using regex
    if (!lastName.match(/^[A-Z][a-zA-Z]{2,}$/)) {
      //Throw the error
      throw new Error("Invaild LastName!");
    }

    //Check address is valid or not using regex
    if (!address.match(/^[a-zA-Z0-9\s]{4,}$/)) {
      //Throw the error
      throw new Error("Invalid Address!");
    }

    //Check city is valid or not using regex
    if (!city.match(/^[a-zA-Z0-9\s]{4,}$/)) {
      //Throw the error
      throw new Error("Invalid City!");
    }

    //Check state is valid or not using regex
    if (!state.match(/^[a-zA-Z0-9\s]{4,}$/)) {
      //Throw the error
      throw new Error("Invalid State!");
    }

    //Check zip code is valid or not using regex
    if (!zip.match(/^\d{6}$/)) {
      //Throw the error
      throw new Error("Invalid Zip Code!");
    }

    //Check Phone No. is valid or not using regex
    if (!phoneNumber.match(/^\d{10}$/)) {
      //Throw the error
      throw new Error("Invalid Phone Number!");
    }

    //Create  variables and set the value
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  //Create  a  method to display contact details
  displayContact() {
    //print the details
    console.log(`Name: ${this.firstName} ${this.lastName}`);
    console.log(
      `Address: ${this.address}, ${this.city}, ${this.state}, ${this.zip}`
    );
    console.log(`Phone: ${this.phoneNumber}`);
    console.log(`Email: ${this.email}`);
  }
}

//Create a class AddressBook to store the contacts
class AddressBook {
  //Create a constructor to initialize variable
  constructor(addressBookName) {
    this.addressBookName = addressBookName;
    this.contacts = [];
  }

  //Create a  method to add a new contact
  addContact(contact) {
    this.contacts.push(contact);
  }

  //Create a Method to display all contacts
  displayAllContacts() {
    if (this.contacts.length === 0) {
      //print the statement
      console.log("No contacts found.");
      return;
    }

    //print the statement
    console.log("All Contacts are: \n");
    this.contacts.forEach((contact) => {
      //Call the method
      contact.displayContact();
    });
  }
}

//Create an object to store the Multiple address books
const addressBookList = [];

//Create objects of AddressBook
const addressBook1 = new AddressBook("Personal Book");
addressBookList.push(addressBook1); //add to addressBookList

//Create anthor object of AddressBook
const addressBook2 = new AddressBook("Work Book");
addressBookList.push(addressBook2); //add to addressBookList

//Use try block
try {
  //Create an object of contact class
  const contact1 = new Contact(
    "Sunil",
    "Meena",
    "Ashok Bihar",
    "Bhopal",
    "Madhya Pradesh",
    "462022",
    "5656362655",
    "sunilmeena01@gmail.com"
  );
  //Call the method to add contact
  addressBook1.addContact(contact1);
} catch (error) {
  //Catch block to handle the error
  //Print the error
  console.log(error.message);
}

//USe try block
try {
  //Create an object of contact class
  const contact2 = new Contact(
    "Mohit",
    "Sharma",
    "Anand Nagar",
    "Neelbad",
    "Madhya Pradesh",
    "462022",
    "5653414865",
    "sharma3165@gmail.com"
  );
  //Call the method to add contact
  addressBook2.addContact(contact2);
} catch (error) {
  //Catch block to handle the error
  //Print the error
  console.log(error.message);
}

//Display all the contact
addressBookList.forEach((val) => {
  //Call the display method
  val.displayAllContacts();
});
