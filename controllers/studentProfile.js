const student = require('../models/StudentProfile')

// Line 5-6, using token user_id is fetched and stored in Student Schema
// using this id we can also fetch Student Schema _id for other purposes
// check the flow of controller in stuDetailsRoute 
exports.postBasicDetails = async (req, res, next) =>{
    const basicDetails = req.body.formData;
    const userId = req.userId;
    console.log(basicDetails + "  in studentProfile")

    const studentExists = student.findOne({userId:userId})
    if(!studentExists){
        const newStudent = new student({userId:userId, 
        basicDetails:basicDetails});
    
         _id = await newStudent.
        save()
        .then(
            (res) => {console.log(res)
                return res._id.toString()}
        )
        .catch(
            err => console.log(err)
        )
        console.log(_id);
        res.end();
    }
    console.log("student Exists")
}

exports.postHighestDegree = async (req, res, next) =>{
    const highestDegree = req.body.formData;
    const userId = req.userId;
    console.log(highestDegree)
    await student.findOneAndUpdate({userId : userId}, {$set : {education:{highestDegree:highestDegree}}}, {new:true})
    .then((res) => console.log(res))
    .catch(err => console.log(err))
    // await newStudent.
    // save()
    // .then(hi
    //     () => console.log("added")
    // )
    // .catch(
    //     err => console.log(err)
    // )
    res.end();
}

exports.postEducationDetails = async (req, res ,next)=>{
    const education = req.body.formData;
    const userId = req.userId;
    const twelth = {
        name : education.school12,
        board: education.board12,
        stream:education.stream12,
        aggregate:education.aggregate12,
        tenure: {
            start : education.startC12,
            end: education.endC12
        }
    }
    const tenth = {
        name : education.school10,
        board: education.board10,
        aggregate:education.aggregate10,
        tenure: {
            start : education.startC10,
            end: education.endC10
        }
    }
    await student.findOneAndUpdate({userId : userId}, {$set : {"education.twelth" : twelth , "education.tenth" : tenth}}, {new:true})
    .then((res) => console.log(res))
    .catch(err => console.log(err))
    res.end()
}

exports.postProjectDetails = async (req, res ,next)=>{
    const project = req.body.formData;
    const userId = req.userId;
    await student.findOneAndUpdate({userId : userId}, {$set : {"project" : project}}, {new:true})
    .then((res) => console.log(res))
    .catch(err => console.log(err))
    res.end()
}

exports.postResponsibility = async (req, res ,next)=>{
    const responsibilities = req.body.formData;
    const userId = req.userId;
    await student.findOneAndUpdate({userId : userId}, {$set : {"responsibilities" : responsibilities}}, {new:true})
    .then((res) => console.log(res))
    .catch(err => console.log(err))
    res.end()
}

exports.postInternship = async (req, res ,next)=>{
    const internship = req.body.formData;
    const userId = req.userId;
    await student.findOneAndUpdate({userId : userId}, {$set : {"internship" : internship}}, {new:true})
    .then((res) => console.log(res))
    .catch(err => console.log(err))
    res.end()
}

exports.postAccomplishments = async (req, res ,next)=>{
    const accomplishments = req.body.formData;
    const userId = req.userId;
    await student.findOneAndUpdate({userId : userId}, {$set : {"accomplishments" : accomplishments}}, {new:true})
    .then((res) => console.log(res))
    .catch(err => console.log(err))
    res.end()
}

exports.postVolunteering = async (req, res ,next)=>{
    const volunteering = req.body.formData;
    const userId = req.userId;
    await student.findOneAndUpdate({userId : userId}, {$set : {"volunteering" : volunteering}}, {new:true})
    .then((res) => console.log(res))
    .catch(err => console.log(err))
    res.end()
}

exports.getBasicDetails = async (req, res, next) => {
    const userId = req.userId;
    const result = await student.findOne({userId : userId})
    .then((res) =>{return res.basicDetails})
    .catch(err => console.log(err))
    console.log(result)
    res.send(result);
}

exports.getEducation = async (req, res, next) => {
    const userId = req.userId;
    const result = await student.findOne({userId : userId})
    .then((res) =>{return res.education})
    .catch(err => console.log(err))
    console.log(result)
    res.send(result);
}

exports.getProjects = async (req, res, next) => {
    var identity = '642b89b4b713fc7e58bf81de'
    const result = await student.findById({_id : identity})
    .then((res) =>{return res.project})
    .catch(err => console.log(err))
    console.log(result)
    res.send(result);
}

exports.getJobs = async (req, res, next) => {
    var identity = '642b89b4b713fc7e58bf81de'
    const result = await student.findById({_id : identity})
    .then((res) =>{return {"job" : res.responsibilities, "intern" :res.internship}})
    .catch(err => console.log(err))
    console.log(result)
    res.send(result);
}

exports.getAccomplishment = async (req, res, next) => {
    var identity = '642b89b4b713fc7e58bf81de'
    const result = await student.findById({_id : identity})
    .then((res) =>{return res.accomplishments})
    .catch(err => console.log(err))
    console.log(result)
    res.send(result);
}

exports.getVolunteer = async (req, res, next) => {
    var identity = '642b89b4b713fc7e58bf81de'
    const result = await student.findById({_id : identity})
    .then((res) =>{return res.volunteering})
    .catch(err => console.log(err))
    console.log(result)
    res.send(result);
}

