const express = require('express')

const router = express.Router()

require('../db')

const Book = require('../model/bookSchema')

router.get('/all', (req, res) => {
    console.log(req.query)
    console.log("All Book Show")

    Book.find()
        .then((results) => {
            res.send(results)
        })
        .catch((err) => {
            res.send(err)
        })

})

router.get('/all/:id', (req, res) => {

    Book.findById(req.params.id)

        .then((results) => {
            res.send(results)
        })
        .catch((err) => {
            res.send(err)
        })

})

router.post('/all/add', async (req, res) => {
    
    // res.json({message:req.body}) 

    const { bookName, author, description } = req.body;
    console.log(bookName, author, description);


    try {
        const response = await Book.findOne({ bookName: bookName })
        // if (response) {
        //     return res.status(422).json({ error: 'Duplicate value occure' })
        // }
        const book = new Book({ bookName, author, description })
        const bookData = await book.save()

        res.status(200).json({ message: 'Book successfully added' })
    }
    catch (err) {
        console.log(err)
    }


})

router.delete('/all/delete/:id', async (req, res) => {

    console.log("delete data")

    const result = await Book.findByIdAndDelete(req.params.id)
    if (result) {
        return res.status(422).json({ message: 'delete Book data' })
    }

})

router.put('/:id', (req, res) => {

    console.log("update record")

    Book.findByIdAndUpdate(req.params.id, {
        bookName: req.body.bookName,
        author: req.body.author,
        description: req.body.description,
    })

        .then((results) => {
            res.send(results)
        })
        .catch((err) => {
            res.send(err)
        })

})

module.exports = router;