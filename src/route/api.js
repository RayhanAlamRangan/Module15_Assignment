const express=require('express');
const Student=require('../controller/StudentController');
const router=express.Router();





// Task
router.post("/create-task",Student.createStudent);
router.get("/delete-task/:id",Student.deleteStudent);
router.post("/update-task/:id",Student.updateStudent);
router.get("/list-task",Student.listStudent);
router.get("/task-by-id/:id",Student.StudentByID);




module.exports=router;