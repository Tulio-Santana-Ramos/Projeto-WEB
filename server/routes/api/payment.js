const {Router} = require('express')

const Payment = require('../../models/PaymentForm')

const router = Router()

router.get('/', async (req,res)=> {
    try{
        const payment = await Payment.find()
        //if (!payment) throw  new Error('Sem formas de pagamento')
        res.status(200).json(payment)
    } catch (error){
        res.status(500).json({message: error.message})
    }
})

router.post('/', async(req,res)=>{
    const newBook = new Payment(req.body)
    try{
        const book = await newBook.save()
        if (!book) throw Error("Erro ao inserir")
        res.status(200).json(book)
    }catch (error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router