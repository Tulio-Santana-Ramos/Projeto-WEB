const {Router} = require('express')

const Account = require('../../models/Account')

const router = Router()

router.post('/', async(req,res)=> {
    if (req.body.op === 'l') {//login
        try {
            const account = await Account.findOne({email: req.body.email})
            console.log(req.body);
            if (!account || account.senha !== req.body.senha) throw  new Error('Email ou senha incorreta')
            res.status(200).json(account)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }else if('u'){
        try{
            let _id = req.body._id;
            delete req.body._id;
            delete req.body.op;
            let response = await Account.findById(_id);
            console.log(_id)
            response.cards.push(req.body);
            response = await Account.findByIdAndUpdate(_id,response);
            const updated = { ...response, ...req.body}
            res.status(200).json(updated)
        }catch (error){
            res.status(500).json({message: error.message})
        }
    } else if(req.body.op==='a'){//listAdmins
        let response = await Account.findById(req.body._id)
        if(response && response.admin)
            res.status(200).json(await Account.find({admin: true}))
        else
            throw new Error("você não é adm");
    }else{
        const newAcount = new Account(req.body)
        try{
            const account = await Account.findOne({email: req.body.email})
            if(account) throw  new Error('Email ja cadastrado')
            const acc = await newAcount.save()
            if (!acc) throw Error("Erro ao inserir")
            res.status(200).json(acc)
        }catch (error){
            res.status(500).json({message: error.message})
        }
    }
})

module.exports = router