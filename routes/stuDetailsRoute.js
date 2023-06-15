const express = require('express');

const router = express.Router();

const stuDetails = require('../controllers/studentProfile')
const verifyToken = require('../controllers/verifyToken')

router.post('/form1',verifyToken.verifyToken, stuDetails.postBasicDetails);

router.post('/form2',verifyToken.verifyToken, stuDetails.postHighestDegree);

router.post('/form3',verifyToken.verifyToken, stuDetails.postEducationDetails);

router.post('/form4',verifyToken.verifyToken, stuDetails.postProjectDetails);

router.post('/form5',verifyToken.verifyToken, stuDetails.postResponsibility);

router.post('/form6',verifyToken.verifyToken, stuDetails.postInternship);

router.post('/form7',verifyToken.verifyToken, stuDetails.postAccomplishments);

router.post('/form8',verifyToken.verifyToken, stuDetails.postVolunteering);

router.get('/basicdetails',verifyToken.getverifyToken, stuDetails.getBasicDetails);

router.get('/education',verifyToken.getverifyToken, stuDetails.getEducation);

router.get('/projects', stuDetails.getProjects);

router.get('/work', stuDetails.getJobs);

router.get('/accomplishment', stuDetails.getAccomplishment);

router.get('/volunteer', stuDetails.getVolunteer);



// router.post('/form4', stuDetails.getHighestDegree);





module.exports = router;