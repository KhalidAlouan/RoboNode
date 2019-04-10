const express=require('express');
const router=express.Router();

const Jocs=require('../models/jocs');

router.get('/',async(req,res)=>{
	const juegos = await Jocs.vdJocs.find();
	console.log(juegos);
	res.render('index',{
		juegos
	});
});

router.post('/insertar',async (req,res)=>{
	const vijoc = new Jocs.vdJocs(req.body);
	await vijoc.save();
	res.redirect('/');
});

router.get('/editar/:id', async(req, res) =>{
	const { id } = req.params;
	const juegos = await Jocs.vdJocs.findById(id);
	res.render('editar',{
		juegos
	});
});

router.post('/editar/:id', async(req, res) =>{
	const { id } = req.params;
	await Jocs.vdJocs.update({_id: id}, req.body)
	res.redirect('/');
	
});


router.get('/eliminar/:id', async(req, res) =>{
	const { id } = req.params;
	await Jocs.vdJocs.remove({_id: id});
	res.redirect('/');
})

module.exports=router;