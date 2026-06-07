let prompt = require("prompt-sync")();

class Library {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.borrowed = false;
  }

  display() {
    console.log("\nBook Details");
    console.log(`ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
  }
}

let books = [];

while (true) {
  let choice = Number(
    prompt(`
1. Create Book
2. Delete Book
3. Show Books
4. Borrow Book
5. Return Book
6. Exit

Enter your choice: `)
  );

  if (choice === 1) {
    let id = prompt("Enter Book ID: ");
    let title = prompt("Enter Book Title: ");
    let author = prompt("Enter Author Name: ");

    let book = new Library(id, title, author);
    books.push(book);

    console.log("\nBook Created Successfully!");
    book.display();
  } 
  else if (choice === 2) {
    let deleteid = prompt("Enter Book ID to Delete: ");

    let index = books.findIndex(book => book.id === deleteid);

    if (index !== -1) {
      books.splice(index, 1);
      console.log("Book Deleted Successfully!");
    } else {
      console.log("Book Not Found!");
    }

    console.log(books);
  } 
  else if (choice === 3) {
    console.log(books);
  } 
  else if (choice === 4) {
    let borrowid = prompt("Enter Book ID to Borrow: ");

    let book = books.find(book => book.id === borrowid);

    if (book) {
      if (!book.borrowed) {
        book.borrowed = true;
        console.log("Book Borrowed Successfully!");
      } else {
        console.log("Book Already Borrowed!");
      }
    } else {
      console.log("Book Not Found!");
    }
  }
  else if (choice === 5) {
    let returnid = prompt("Enter Book ID to Return: ");
    let book = books.find(book => book.id === returnid);
    if (book) {
      if (book.borrowed) {
        book.borrowed = false;
        console.log("Book Returned Successfully!");
      } else {
        console.log("Book Was Not Borrowed!");
      }
    } else {
      console.log("Book Not Found!");
    }
  }
  else if (choice === 6) {
    console.log("Thank You! Exit");
    break;
  } 
  else {
    console.log("Invalid Choice");
  }
}