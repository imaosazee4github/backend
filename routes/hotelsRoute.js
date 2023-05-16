import express from 'express';
import {createHotel, updateHotel, deleteHotel, getHotels, getSingleHotel} from '../controller/hotelsController.js'
import { verifyisAdmin } from '../utils/verifyToken.js';


const router = express.Router();

router.post('/', verifyisAdmin,createHotel);

router.put('/:id', verifyisAdmin,updateHotel);

router.delete('/:id', verifyisAdmin, deleteHotel);

router.get('/', getHotels);

router.get('/:id', getSingleHotel)

export default router;