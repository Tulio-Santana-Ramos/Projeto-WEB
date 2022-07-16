const {Router} = require('express')

const Lib = require('../../models/Library')

const router = Router()

router.get('/', async (req,res)=> {
    const {id} = req.params
    try {
        const lib = await Lib.findOne({id:id})
        if (!lib) res.status(200).json([])
        else res.status(200).json(lib)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/', async(req,res)=>{
    if(req.body.op === 'e'){
        const {id_user} = req.body.id;
        console.log(id_user);
        let response = await Lib.findOne({user: id_user});
        for(let i = 0; i < response.length; i++){
            let book = response.lib[i];
            if(book.id === req.body.id_book){
                response.lib[i].eval = true;
            }
        }
        response = await Lib.findOneAndUpdate({user: id_user}, response);
        const updated = {...response, ...req.body}
        res.status(200).json(updated)

    }else {
        const {id} = req.body.id;
        try {
            let response = await Lib.findOne({user: id});
            if (response) {
                response.lib.push(req.body.book);
                response = await Lib.findOneAndUpdate({user: id}, response);
                const updated = {...response, ...req.body}
                res.status(200).json(updated)
            } else {
                let libObj = {user: id, lib: [req.body.book]}
                const newBook = new Lib(libObj)
                const book = await newBook.save()
                if (!book) throw Error("Erro ao inserir")
                res.status(200).json(book)
            }
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
})

module.exports = router