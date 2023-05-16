import express from 'express';
import  {updateUser,deleteUser,getSingleUser,getUsers}  from '../controller/userController.js';
import { verifyToken, verifyUser, verifyisAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send('You are authenticated!')
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello user, you can delete your accounts");
// });

// router.get("/checkadmin/:id", verifyisAdmin, (req, res, next) => {
//     res.send("You are login you can delete all accounts");
// });

router.put('/:id',verifyUser, updateUser);

router.delete('/:id',verifyUser, deleteUser);

router.get('/:id', verifyUser,getSingleUser);

router.get('/', verifyisAdmin, getUsers);



export default router;