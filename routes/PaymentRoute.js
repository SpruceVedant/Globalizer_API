// const express = require('express');
// const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
// const bodyParser = require("body-parser")
// const cors = require("cors")
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// app.use(cors())

// app.post("/payment", cors(), async (req, res) => {
// 	let { amount, id } = req.body
// 	try {
// 		const payment = await stripe.paymentIntents.create({
// 			amount,
// 			currency: "USD",
// 			description: "Spatula company",
// 			payment_method: id,
// 			confirm: true
// 		})
// 		console.log("Payment", payment)
// 		res.json({
// 			message: "Payment successful",
// 			success: true
// 		})
// 	} catch (error) {
// 		console.log("Error", error)
// 		res.json({
// 			message: "Payment failed",
// 			success: false
// 		})
// 	}
// })

const express = require('express');
const router = express.Router;

const{createOrder,getLogo,paymentCallback,getPayment} = require("../controllers/paymentController");

router.get("/createOrder",createOrder);
router.get("/payment/callback",paymentCallback);
router.get("/payments/:paymentID",getPayment);
router.get("/logo",getLogo);
module.exports = router;