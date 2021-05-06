import RoomController from '../../controllers/roomController';

import express from "express";

const roomRouter = express.Router();
const room = new RoomController();

roomRouter.post("/", room.create);

roomRouter.get('/', room.get);

roomRouter.get('/:id', room.getById);

roomRouter.put('/:id', room.update);

roomRouter.delete('/:id', room.delete)

export default roomRouter;