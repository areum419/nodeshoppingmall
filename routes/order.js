// 순서 1번
import express from "express";
const router = express.Router();



// 순서 4번 order 관련해서 CRUD 생성
router.get("/", (req, res) => {
    res.json({
        msg : "order get all"
    })
})

router.post("/create", (req, res) => {
    res.json({
        msg : "create & order"
    })
})

router.put("/update", (req, res) => {
    res.json({
        msg : "update & order"
    })
})

router.delete("/delete", (req, res) => {
    res.json({
        msg : "delete & order"
    })
})




// 순서 2번
export default router;