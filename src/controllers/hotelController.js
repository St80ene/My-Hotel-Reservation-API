import hotelModel from "../models/hotelModel";

class HotelController {
  constructor() {
    //
  }

  async create(req, res) {
    try {
      const hotel = await hotelModel.create({
        name: req.body.name,
        address: {
          state: req.body.address.state,
          city: req.body.address.city,
          street: req.body.address.street,
          number: req.body.address.number,
        },
        rooms: req.body.rooms,
        rating: req.body.rating,
      });
      res.status(200).json({ status: 200, message: "Hotel created successfully...", data: hotel });
    } catch (error) {
      res.status(500).json({ message: error.message });
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
        res.status(200).json({ status: 200, message: "Delete successful", data: hotel });
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
