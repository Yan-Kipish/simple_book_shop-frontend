import axios from 'axios';

export const path = "http://localhost:3000/books/";

export function createBook(newBook) {
  axios
    .post(path, newBook)
    .then((response) => { return response.data; })
    .catch((error) => { console.error(error); });
}

export function updateBook(Book) {
  axios
    .put(path + Book.id, Book)
    .then((res) => { return res; })
    .catch((err) => console.error(err));
}

export function deleteBook(Book) {
  axios
    .delete(path + Book.id)
    .then((res) => { return res; })
    .catch((err) => console.error(err));
}
