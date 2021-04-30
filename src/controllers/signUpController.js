import signUpModel from "../models/signUpModel";
const bycrypt = require("bcryptjs");

class SignUpController {
  constructor() {
    //
  }
  
  async create(req, res) {
    try {
      const { full_name, email, phone, password } = req.body;
      
      //checking if user is saved
      const savedUser = await signUpModel.findOne({ email: req.body.email });
      if (savedUser) return res.status(400).json({ message: "Your record already exists with us!!" });
      
      //hashing user's password
      const hashedPassword = bycrypt.hashSync(password, 10);
      
      //saving a user to database
      await signUpModel.create({
        full_name: full_name,
        email: email,
        phone: phone,
        password: hashedPassword,
      });
      
      return res.status(200).json({ status: 200, message: "You have signed up successfully"});
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  }
}

export default SignUpController;

// const nodemailer = require('nodemailer')

// const transporter = nodemailer.createTransport(transporter, {
//   service: "hotmail",
//   auth: {
//     user: "mepiy95079@iludir.com",
//     pass: "123456",
//   },
// });

// const options = {
//   from: "etienejames5@gmail.com",
//   to: "mepiy95079@iludir.com",
//   subject: "Testing the mail service",
//   text: "Hello World",
// };

// transporter.sendMail(options, (err, info) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("info =>", info.response);
// });