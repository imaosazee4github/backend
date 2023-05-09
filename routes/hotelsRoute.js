import express from 'express';
import {createHotel, updateHotel, deleteHotel, getHotels, getSingleHotel} from '../controller/hotelsController.js'


const router = express.Router();

router.post('/', createHotel);

router.put('/:id', updateHotel);

router.delete('/:id', deleteHotel);

router.get('/', getHotels);

router.get('/:id', getSingleHotel)

export default router;