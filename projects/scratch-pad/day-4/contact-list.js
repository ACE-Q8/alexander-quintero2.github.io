// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
var obj = {}; // initialize obj
obj.id = id; // assigning keys to the parameters of the function makeContact()
obj.nameFirst = nameFirst;
obj.nameLast = nameLast;
return obj;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; // empty container variable
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){ // much like object creation we're going to make keys that have the value functions
            contacts.push(contact); // this one push's contact into our contacts container variable
        },
        findContact: function(fullName){ // findContact() will take in a fullName and compare it to our nameFirst and nameLast keys
            for (let i = 0; i < contacts.length; i++){
                if (contacts[i].nameFirst + ' ' + contacts[i].nameLast === fullName){ // if firstName and lastName joined = fullName
                    return contacts[i]; // return that index 
                } else {
                    return undefined;
                }
            }
        },
        removeContact: function(contact){
            for (var i = 0; i < contacts.length; i++){ // loop through contacts
                if (contacts[i].id === contact.id){ // if id in contacts matches the id in contact
                     contacts.splice(contacts[i], 1); // splice out that id
                }
            }
        },
        printAllContactNames: function(){
            var string = ''; // we need two empty strings here so we can make this a little easier on ourselves
            var allNames = ''; 
            for (var i = 0; i < contacts.length; i++){ // loop through contacts
                string += '.' + contacts[i].nameFirst + ' ' + contacts[i].nameLast;  // make our empty string equal our contacts nameFirst and nameLast and add a period
            }              
            allNames = string.split('.').join('\n'); // Now we can assign allNames to the value of string split at the "." and then joined by a line break
              return allNames.slice(1);
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
