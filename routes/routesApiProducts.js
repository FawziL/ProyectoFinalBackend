import { Router } from "express";
const router = Router();

router.get("/products", (req, res) => {
    res.send("Hola");
})

export default router;