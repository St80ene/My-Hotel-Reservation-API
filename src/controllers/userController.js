import signUpModel from "../models/signUpModel";

class UserController {
  constructor() {
    //
  }

  async get(req, res) {
    try {
      const user = await signUpModel.find();
      res.status(200).json({ status: 200, message: "Here's a list of Users", data: user });
    } catch (error) {
      res.status(500).json({ status: 500, message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.id;
      const user = await signUpModel.findById(id);
      if (user) {
        res.status(200).json({ status: 200, message: "Here's your search", data: user });
      } else {
        throw new Error("User with this ID was not found");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    // get the id from request
    try {
      let userId = req.params.id;
      const user = await signUpModel.findByIdAndDelete(userId, req.body);
      if (user) {
        res.status(200).json({ status: 200, message: `User deleted` });
      } else {
        throw new Error("User with this ID was not found");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
        let userId = req.params.id;
        console.log(userId);
      const user = await signUpModel.findByIdAndUpdate(userId, req.body);
      if (user) {
        res.status(200).json({ status: 200, message: "Update successful!!"});
      } else {
        throw new Error("User with this ID does not exist");
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default UserController;
