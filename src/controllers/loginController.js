import signUpModel from "../models/signUpModel";
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class loginController {
  constructor() {
    //
  }

  async validate(req, res) {
    try {
        const { email, password } = req.body;
        const secretKey = process.env.SECRETKEY

      //checking if user is saved
      const savedUser = await signUpModel.findOne({ email: email });

      if (!savedUser) return res.status(400).json({ message: "Your records do not exist with us" });

      //comparing user's password
      const isValidPassword = bycrypt.compareSync(password, savedUser.password);

      if (!isValidPassword) {
        return res.status(400).json({ status: 400, message: "invalid crendetials" });
      }
      console.log(savedUser._id);

      //generate jsonwebtoken for valid user
      const token = jwt.sign({ _id: savedUser._id }, secretKey);
      return res.header("x-login-token", token).status(200).json({ status: 200, message: token });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  }
}

export default loginController;
