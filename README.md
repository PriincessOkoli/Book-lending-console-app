# Book Lending Console App  

This is a simple JavaScript console application that allows users to borrow and return books from a predefined list.  

## Features  
- **Borrow a Book**: Users can borrow a book by providing its key (e.g., `"book4"`). The book is then removed from the available list.  
- **Return a Book**: Users can return a book by specifying its key and title. The book is then added back to the available list.  

## How It Works  

1. The app starts with a list of available books stored in an object.  
2. The `borrowBook(bookNumber)` function allows a user to borrow a book if it is available.  
3. The `returnBook(bookNumber, bookTitle)` function allows a user to return a book by providing its key and title.  

## Usage Example  

```javascript
borrowBook("book4");
// Output: You've borrowed book4

console.log(availableBooks);
// Output: book4 is removed from the list

returnBook("book4", "The Second Love");
// Output: Thank you for returning The Second Love

console.log(availableBooks);
// Output: book4 is added back to the list
