import hotelModel from "../models/hotelModel";

class HotelController {
  constructor() {
    //
  }

  async create(req, res) {
    try {
      const { name, address, email, phone, password } = req.body;

      //check if hotel already exists
      let savedHotel = await hotelModel.findOne({ email: email });
      
      if (savedHotel) return res.status(400).json({ status: 400, message: 'Hotel with this name already exists' });
      
      //create a new hotel
      await hotelModel.create({
        name,
        address,
        email,
        phone,
        password
      });
      return res.status(200).json({ status: 200, message: "Hotel created successfully..."});

    } catch (error) {
      console.log(error);
      // res.status(500).json({ message: error.details.message });
    }
  }

  async get(req, res) {
    try {
      const hotel = await hotelModel.find();
      res.status(200).json({ status: 200, message: "Here's a list of Hotels", data: hotel });
    } catch (error) {
      res.status(500).json({ status: 500, message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.id;
      const hotel = await hotelModel.findById(id);
      if (hotel) {
        res.status(200).json({ status: 200, message: "Search successful", data: hotel });
      } else {
        throw new Error("Hotel with this ID was not found");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    // get the id from request
    try {
      let hotelId = req.params.id;
      const hotel = await hotelModel.findByIdAndDelete(hotelId, req.body);
      if (hotel) {
        res.status(200).json({ status: 200, message: `${hotel.name} deleted successfully`});
      } else {
        throw new Error("Hotel with this ID was not found");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      let hotelId = req.params.id;
      const hotel = await hotelModel.findByIdAndUpdate(hotelId, req.body);
      if (hotel) {
        res.status(200).json({ status: 200, message: "Update successful...", data: hotel });
      } else {
        throw new Error("Hotel with this ID does not exist");
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default HotelController;