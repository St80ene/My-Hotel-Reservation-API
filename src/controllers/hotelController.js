import hotelModel from "../models/hotelModel";

class Hotel {
  constructor() {
    //
  }

  async createHotel(req, res) {
    try {
      await hotelModel.create({
        name: req.body.name,
        address: req.body.address,
        rooms: req.body.rooms,
      });
      res.status(200).json({ success: "Hotel created..." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getHotel(req, res) {
    try {
      const hotel = await hotelModel.find();
      res.status(200).json({ hotel });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getHotelById(req, res) {
    try {
      const id = req.params.id
      const hotel = await hotelModel.findById(id);
      res.status(200).json({ hotel });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default Hotel;
