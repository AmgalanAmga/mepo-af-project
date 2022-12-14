import { Router } from "express";
import { auth } from "../middleware/auth";
import { authAdmin } from "../middleware/authAdmin";
import { productCtrl } from "../controllers/productCtrl";

export const productRouter = Router();

productRouter.get("/product/men", productCtrl.getMenProducts);
productRouter.get("/product/women", productCtrl.getWomenProducts);
productRouter.route("/product").get(productCtrl.getProducts).post(auth, authAdmin, productCtrl.createNewProduct);
productRouter.route("/product/:id").get(productCtrl.getProductDetail).patch(auth, authAdmin, productCtrl.updateProduct).delete(auth, authAdmin, productCtrl.deleteProduct);
