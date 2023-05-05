
// 순서 1
import express from "express";
const router = express.Router();

// product와 관련된 CRUD 를 생성할꺼임
//1. product 전체 정보를 가져오는 API
router.get("/all", (req, res) => {
    res.json({
        msg : "product get all"
    })
}) // all 또는 /만 해도됨

// 2. product 생성하는 API
router.post("/create", (req, res) => {
    // 생성
    // 사용자 입력값
    const userInput = {
        name : req.body.produtName,
        price : req.body.produtPrice,
        stock : req.body.productStock
    }

    // 아래는 내보내는것
    res.json({
        msg : "create & product",
        product : userInput
    })
})

// 3. prouct 수정하는 API
router.put("/update", (req, res) => {
    res.json({
        msg : "update & product"
    })
})

// 4. poructe 삭제하는 API
router.delete("/delete", (req, res) => {
    res.json({
        msg : "delete & product"
    })
})

// 순서 2
//다른데서도 쓸수있게끔
export default router; //자체를 내보내서 () 생략.