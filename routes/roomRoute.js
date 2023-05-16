import express from 'express';
import { createRoom,updateRoom, deleteRoom,getSingleRoom,getRooms} from "../controller/roomController.js";
import { verifyisAdmin } from "../utils/verifyToken.js"

const router = express.Router();

router.post('/:hotelid',verifyisAdmin, createRoom)

router.put('/:id', verifyisAdmin, updateRoom)

router.delete('/:id/:hotelid', verifyisAdmin, deleteRoom)

router.get('/:id', getSingleRoom)



router.get('/', getRooms)


export default router;