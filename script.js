// simple book lending console app
let availableBooks = {
  book1: "The first love",
  book2: "half of a yellow sun",
  book3: "dantes love",
  book4: "The second love",
  book5: "The witcher",
  book6: "The catcher in the rye",
  book7: "The great gatsby",
  book8: "To Kill a Mockingbird",
  book9: "Pride and Prejudice",
  book10: "Moby Dick",
};

function borrowBook(bookNumber) {
  if (availableBooks[bookNumber]) {
    console.log(`You've borrowed ${bookNumber}`);
    delete availableBooks[bookNumber];
  } else {
    console.log(`Sorry, but ${bookNumber} is not available.`);
  }
}
borrowBook("book4");
console.log(availableBooks);
function returnBook(bookNumber, bookTitle) {
  if (!availableBooks[bookNumber]) {
    availableBooks[bookNumber] = bookTitle;
    console.log(`thank you for returning ${bookTitle}`)
  }
}
returnBook("book4", "The second love2")
console.log(availableBooks);

