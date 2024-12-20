import express from "express"
import {addToCart,getCartProducts,removeAllFromCart,updateItem,createCart} from "../controllers/cart.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js"
const router = express.Router()
router.get("/products",protectRoute, getCartProducts);
router.get("/",protectRoute,createCart)
router.post("/",protectRoute, addToCart);
router.put("/:id",protectRoute, updateItem);
router.delete("/",protectRoute, removeAllFromCart);


export default router