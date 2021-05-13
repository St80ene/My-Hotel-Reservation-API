import roomModel from "../models/roomModel";

class RoomController {
  constructor() {
    //
  }

  async create(req, res) {
    const { room_name, total_occupants, price } = req.body;

    try {
      const room = await roomModel.create({
        room_name,
        total_occupants,
        hotel_id,
        customer_id,
        price,
        status,
      });
      res.status(200).json({ status: 200, message: "Room created successfully...", data: room });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async get(req, res) {
    try {
      const room = await roomModel.find();
      res.status(200).json({ status: 200, message: "Here's a list of Rooms", data: room });
    } catch (error) {
      res.status(500).json({ status: 500, message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.id;
      const room = await roomModel.findById(id);
      if (room) {
        res.status(200).json({ status: 200, message: "Here's your search", data: room });
      } else {
        throw new Error("Room with this ID was not found");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    // get the id from request
    try {
      let roomId = req.params.id;
      const room = await roomModel.findByIdAndDelete(roomId, req.body);
      if (room) {
        res.status(200).json({ status: 200, message: `Room deleted` });
      } else {
        throw new Error("Room with this ID was not found");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      let roomId = req.params.id;
      const room = await roomModel.findByIdAndUpdate(roomId, req.body);
      if (room) {
        res.status(200).json({ status: 200, message: "Update successful!!" });
      } else {
        throw new Error("Room with this ID does not exist");
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default RoomController;
