const {Router} = require('express')

const Buy = require('../../models/Buy')

const router = Router()

router.get('/', async (req,res)=> {
    try{
        const buy = await Buy.find()
        if (!buy) throw  new Error('Sem livros')
        res.status(200).json(buy)
    } catch (error){
        res.status(500).json({message: error.message})
    }
})

router.post('/', async(req,res)=>{
    const newBuy = new Buy(req.body)
    try{
        const buy = await newBuy.save()
        if (!buy) throw Error("Erro ao inserir")
        res.status(200).json(buy)
    }catch (error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router