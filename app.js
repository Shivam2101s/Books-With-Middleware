const express = require('express');

const books = require("./books.json");

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send({books});
})

app.post('/books', (req, res) => {
    const newBook = [...books,req.body];
     res.send(newBook);
})

app.get('/books/:id', (req, res) => {
   const newBook = books.filter((book) => book.id == req.params.id);
   console.log(newBook)
   res.send(newBook);
})

app.patch('/books/:id', (req, res) => {
    let a = {};

    a.name = "Shivam";

const newBook = books.map(book => {
    if(req.params.id == book.id) {
        if(req?.body?.author) book.author = req.body.author;
        if(req?.body?.book) book.book = req.body.book;
        if(req?.body?.pages) book.pages = req.body.pages;
        if(req?.body?.year) book.year = req.body.year;
    }

    a.name = "Anish";
    return book;
})
res.send(newBook)
})

app.delete("/books:id",(req, res) => {
    const newBook = books.filter((book) => book.id !== +req.params.id);
    res.send(newBook);
})


app.listen(2349,function(){
    console.log('listening on port 2349');
})