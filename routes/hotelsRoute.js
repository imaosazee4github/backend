import express from 'express';
import {createHotel, updateHotel, deleteHotel, getHotels, getSingleHotel, countByCity, countByType} from '../controller/hotelsController.js'
import { verifyisAdmin } from '../utils/verifyToken.js';


const router = express.Router();

router.post('/', verifyisAdmin,createHotel);

router.put('/:id', verifyisAdmin,updateHotel);

router.delete('/:id', verifyisAdmin, deleteHotel);



router.get('/find/:id', getSingleHotel)

router.get('/', getHotels);
router.get('/countByCity', countByCity)
router.get('/countByType', countByType)


export default router;