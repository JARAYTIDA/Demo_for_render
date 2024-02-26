import  express  from "express";

// local imports
import { createUser, getUser, getUsers } from "../controllers/users_fun.js";


const router = express.Router();

router.get('/users', getUsers);
router.get('/user', getUser);
router.post('/create', createUser);

export default router; 