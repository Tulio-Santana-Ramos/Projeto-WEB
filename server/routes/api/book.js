const {Router} = require('express')

const Book = require('../../models/Book')

const router = Router()

router.get('/', async (req,res)=> {
    const {id} = req.params
    if(!id) {
        try {
            const book = await Book.find()
            if (!book) throw  new Error('Sem livros')
            res.status(200).json(book)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }else{
        try {
            const book = await Book.findOne({id:id})
            if (!book) throw  new Error('Sem livros')
            res.status(200).json(book)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
})

router.post('/', async(req,res)=>{
    const newBook = new Book(req.body)
    try{
        const book = await newBook.save()
        if (!book) throw Error("Erro ao inserir")
        res.status(200).json(book)
    }catch (error){
        res.status(500).json({message: error.message})
    }
})

router.put('/:id', async (req,res)=>{
    const {id} = req.params
    try{
        const response = await Book.findByIdAndUpdate(id,req.body)
        if (!response) throw Error("Deu errado")
        const updated = { ...response, ...req.body}
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/:id', async (req,res)=>{
    const {id} = req.params
    try{
        const response = await Book.findByIdAndDelete(id)
        if (!response) throw Error("Deu errado")
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router