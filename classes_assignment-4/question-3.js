// Q3: Library Management System
"use strict";

class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = false;
  }

  issueBook() {
    this.isIssued = true;
  }

  returnBook() {
    this.isIssued = false;
  }
}

const library = [
  new Book("The Hobbit", "J.R.R. Tolkien", "978-0-345-33968-3"),
  new Book("The Lord of the Rings", "J.R.R. Tolkien", "978-0-618-64015-7"),
  new Book("1984", "George Orwell", "978-0-452-28423-4"),
];

console.log("--- Library Management System ---");

console.log("\n--- Available Books ---");
library.filter(book => !book.isIssued).forEach(book => console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`));

function issueBookByISBN(isbn) {
  const bookToIssue = library.find(book => book.ISBN === isbn);
  if (bookToIssue && !bookToIssue.isIssued) {
    bookToIssue.issueBook();
    console.log(`\nBook "${bookToIssue.title}" has been issued.`);
    return true;
  } else if (bookToIssue && bookToIssue.isIssued) {
    console.log(`\nBook with ISBN ${isbn} is already issued.`);
    return false;
  } else {
    console.log(`\nBook with ISBN ${isbn} not found.`);
    return false;
  }
}

issueBookByISBN("978-0-452-28423-4");

console.log("\n--- Available Books After Issuing ---");
library.filter(book => !book.isIssued).forEach(book => console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`));
