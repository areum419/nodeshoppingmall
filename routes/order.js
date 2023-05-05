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

    // 생성
    // 주문 입력값
    const orderInput = {
        product : req.body.orderProduct,
        qty : req.body.orderQty
    } // key 값


    res.json({
        msg : "create & order",
        order : orderInput
    }) // order : orderInput 지정해야 출력됨
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