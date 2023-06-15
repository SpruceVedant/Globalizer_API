
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const Token = require("../models/token");
const sendEmail =require("../util/sendEmail");
const crypto = require("crypto");

exports.authorize = async (req, res, next) =>{
  try {
		const { error } = validateAuth(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		if(!user.verified){
			let token = await Token.findOne({userId:user._id});
			if(!token){
				token = await new Token({
					userId: user._id,
					token: crypto.randomBytes(32).toString("hex")
				}).save();
		
				const url = `${process.env.BASE_URL}/api/users/${user._id}/verify/${token.token}`;
				await sendEmail(user.email, "Verify Email", url);		
			}
			return res.status(400).send({message : "An Email has been sent to your account. Please Verify"});
		}

		const tokenId = user.generateAuthToken();
		const token = await new Token({
			userId: user._id,
			token: tokenId
		}).save();
		res.status(200).send({ data: tokenId, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
}
const validateAuth = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  console.log(schema.validate(data));
  return schema.validate(data);
};

exports.signup = async (req, res, next)=>{
  try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		let user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		user = await new User({ ...req.body, password: hashPassword }).save();
		const token = await new Token({
			userId: user._id,
			token: crypto.randomBytes(32).toString("hex")
		}).save();

		const url = `${process.env.BASE_URL}/api/users/${user._id}/verify/${token.token}`;
		await sendEmail(user.email, "Verify Email", url);

		res.status(201).send({ message: "An Email Sent to your account, please verify" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
}

exports.verifyEmail = async(req, res, next) =>{
	try {
		const user = await User.findOne({_id: req.params.id});
	
		if(!user) return res.status(400).send({message:"Inavlid Link"});
		console.log("after !user"  + user);
		const token = await Token.findOne({
			userId:user._id,
			token:req.params.token
		});
		if(!token)return res.status(400).send({message:"Inavlid Link"});
		console.log(token);
		const result = await User.findByIdAndUpdate({_id:user._id}, {$set:{verified:true}}, {new:true});
		// console.log(token);
		await token.remove();
		
		res.status(200).send({message:"Enail Verified Successfully"});
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
}