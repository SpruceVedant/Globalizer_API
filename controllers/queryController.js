const query = require('../models/Query')

exports.postNewQuery = async (req, res, next) =>{
    const {name, email, subject, desc} = req.body;
    const saveQuery = new query({name, email, subject, desc});

     _id = await saveQuery.
    save()
    .then(
        (res) => {return res._id.toString()}
    )
    .catch(
        err => console.log(err)
    )
    console.log(_id);
    res.end();
}

