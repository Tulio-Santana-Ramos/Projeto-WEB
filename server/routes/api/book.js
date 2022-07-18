const {Router} = require('express')

const Book = require('../../models/Book')

const router = Router()

router.get('/:id', async (req,res)=> {
    let {id} = req.params
    id = id.split("=")[1]
    try {
        const book = await Book.findOne({id:id})
        if (!book) throw  new Error('Sem livros')
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

})

router.get('/', async (req,res)=> {
    try {
        const book = await Book.find()
        if (!book) throw  new Error('Sem livros')
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

})

router.post('/', async(req,res)=>{
    if(req.body.op ==='e'){
        let _id = req.body.id;
        const book = await Book.findOne({id:_id});
        delete req.body.id;
        delete req.body.op;
        book.evaluations.push(req.body);
        Book.findOneAndUpdate({id:_id},book,
            function (err, docs) {}
            );
        res.status(200).json("OK");
    }else {
        const newBook = new Book(req.body)
        try {
            const book = await newBook.save()
            if (!book) throw Error("Erro ao inserir")
            res.status(200).json(book)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
})

router.put('/:id', async (req,res)=>{
    let {id} = req.params
    id = id.split("=")[1]
    console.log(req.body)
    try{
        const response = await Book.findOneAndUpdate({id:id},req.body)
        if (!response) throw Error("Deu errado")
        const updated = { ...response, ...req.body}
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/:id', async (req,res)=>{
    let {id} = req.params
    id = id.split("=")[1]
    try{
        console.log(id)
        const response = await Book.findByIdAndDelete(id)
        if (!response) throw Error("Deu errado")
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router