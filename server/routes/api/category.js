const {Router} = require('express')

const Category = require('../../models/Category')

const router = Router()

router.get('/', async (req,res)=> {
    try{
        const category = await Category.find()
        if (!category) throw  new Error('Sem livros')
        res.status(200).json(category)
    } catch (error){
        res.status(500).json({message: error.message})
    }
})

router.post('/', async(req,res)=>{
    const newCategory = new Category(req.body)
    try{
        const category = await newCategory.save()
        if (!category) throw Error("Erro ao inserir")
        res.status(200).json(category)
    }catch (error){
        res.status(500).json({message: error.message})
    }
})

router.put('/:id', async (req,res)=>{
    const {id} = req.params
    try{
        const response = await Category.findByIdAndUpdate(id,req.body)
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
        const response = await Category.findByIdAndDelete(id,req.body)
        if (!response) throw Error("Deu errado")
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router