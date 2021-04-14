import roomModel from "../models/roomModel";

class RoomController {
  constructor() {
    //
  }

  async create(req, res) {
    try {
      const room = await roomModel.create({
        price: req.body.price,
      });
      res.status(200).json({ status: 200, message: "Room created successfully...", data: room });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default RoomController;
