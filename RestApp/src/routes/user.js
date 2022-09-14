import { Router } from "express";
const user = require("../controllers/user.controller");
const router = Router();

router.get('/:id', user.getUser);
router.post('/createUser', user.createUser);
router.post('/delete', user.deleteUser);

export default router;
