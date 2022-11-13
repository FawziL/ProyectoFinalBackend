import { Router } from "express";
const router = Router();
import path from "path";
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import routesApiCarts from "./routesApiCarts.js"
import routesApiProducts from "./routesApiProducts.js"

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
})
router.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/register.html"));
})
router.use("/api", routesApiCarts);
router.use("/api", routesApiProducts);

export default router;