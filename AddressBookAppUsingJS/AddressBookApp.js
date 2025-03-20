//Create a class Contact to store contact deatil of the person
class Contact {
  //Create a constructor to initialize person contact details
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phoneNumber = phoneNumber;
      this.email = email;
    }
  
    //Create a method displayContact to display contact details
    displayContact() {
      console.log(`Name: ${this.firstName} ${this.lastName}`);
      console.log(`Address: ${this.address}, ${this.city}, ${this.state}, ${this.zip}`);
      console.log(`Phone: ${this.phoneNumber}`);
      console.log(`Email: ${this.email}`);
    }
  }
  
  //Create a class AddressBook to use the Contact class
  class AddressBook {
    constructor() {
      this.contacts = [];
    }
  
    //Create a method addContact to add a new contact
    addContact(contact) {
      this.contacts.push(contact);
      console.log('Contact added successfully');
    }

    //Create a method displayAllContacts to display all contacts
    displayAllContacts() {
      //check contact details empty or not
      if (this.contacts.length === 0) {
        console.log('No contacts found.');
        return;
      }
  
      this.contacts.forEach(contact => {
        contact.displayContact();
        console.log('----------------------');
      });
    }
  
   
  }
  
  //Create an object of AddressBook class
  const addressBook = new AddressBook();
  
  //Create a object of Contact class and pass person details as argument
  const contact1 = new Contact('Prashant', 'Verma', 'Ram Nagar, Mumbai', 'Mumbai', 'Maharashtra', '627013', '6260121315', 'prashantverma@gmail.com');
  //Add person contact details
  addressBook.addContact(contact1);
  
   //Create a object of Contact class and pass person details as argument
  const contact2 = new Contact('Atul', 'Sharma', 'Anand Nagar, Bhopal', 'Bhopal', 'Madhya Pradesh', '606013', '9703232654', 'atulsharam@gamil.com');
  //Add person contact details
  addressBook.addContact(contact2);
  
  // Call the method displayAllContacts to display all contacts
  addressBook.displayAllContacts();
  
