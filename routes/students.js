const router = require('express').Router();
const Students = require('../models/Student');

//Create Students
router.post('/create', async (req,res)=>{
    try {
        const newStudent = new Students({
            complete_name: req.body.complete_name,
            document: req.body.document,
            age: req.body.age,
            gender: req.body.gender
        });
        const student = await newStudent.save();
        res.status(200).json(student);

    } catch (error) {
        res.status(500).json(error);
    }
});

//get all students
router.get('/', async (req, res)=>{
    try {
        const students = await Students.find();
        res.status(200).json(students);
        
    } catch (error) {
        res.status(500).json(error);
    }
});
//get a students
router.get('/:id', async (req, res) =>{
    try {
        const student = await Students.findById(req.params.id);
        res.status(200).json(student)
        
    } catch (error) {
        res.status(500).json(error);
    }
});

//insert note
router.put('/note/:id', async (req, res) =>{
    try {
        const student = await Students.findById(req.params.id);
        if (student.id === req.body.id) {
            console.log(req.body.note);
            const note = req.body.note;
            console.log(note);
            function between(note, min, max) {
                
                return note > min && note <= max;
            }
            if (between(note,0,5)) {
                await student.updateOne({$set: req.body});
                res.status(200).json('data saved');
            } else {
                res.json({message: 'la nota no esta permitida'})
            }

            
        } else {
            res.status(403).json('student no existe');
        }
        
    } catch (error) {
        res.status(500).json(error);
    }
});

//insert autoevalution

router.post('/autoevaluation', async (req, res) =>{
    try {
        const student = await Students.findOne({document: req.body.document});
        if (!student) {
            res.status(401).json({message: 'Document not found'})
        } else {
            const autoevaluation = req.body.autoevaluation;
            function between(autoevaluation, min, max) {
                return autoevaluation >= min && autoevaluation <= max;
            }
            if (between(autoevaluation,0,5)) {
                await student.updateOne({$set: req.body});
                res.status(200).json('data saved');
            } else {
                res.json({message: 'la nota no esta permitida'})
            }
        }
        
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;