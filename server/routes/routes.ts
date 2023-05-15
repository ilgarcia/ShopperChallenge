import express from "express";
import { productsController } from "../controllers/productsController";

const router = express.Router();

router.get("/validate", productsController.getValidate);
router.post("/update", productsController.postUpdate);

export default router;
