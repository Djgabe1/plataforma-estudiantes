const router = require('express').Router();
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');


//Registro admin
router.post('/register', async (req, res) =>{
		try{
		//password encritada
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		//create new user
		const newUser = new Admin({
			username: req.body.username,
			name: req.body.name,
			password: hashedPassword,
		});

		//save Admin 
		const admin = await newUser.save();
		res.status(200).json(admin);
		console.log(admin)
	}catch(e){
		console.log(e.message);
	}
});

//login
router.post('/login', async (req, res)=>{
	try {
		const admin = await Admin.findOne({username: req.body.username});
		!admin && res.status(404).json( 'user not found');

		const validpassword = await bcrypt.compare(req.body.password, admin.password);
		!validpassword	&& res.status(404).json('wrong password ');

		res.status(200).json(admin);

	} catch (error) {
		res.status(500).json(error)
	}
})



module.exports = router;