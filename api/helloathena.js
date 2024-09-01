import express from "express";

const router = express.Router();

router.get("/helloathena", (req, res) => {
    res.send("Hello Athena!");
});


export default router;