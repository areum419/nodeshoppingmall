import express from "express";
import cors from "cors"; //미들웨어 설치
import morgan from "morgan"; //미들웨어 설치

import productRoute from "./routes/product.js";

// order.js 관련해서 순서 3번(order.js)
import orderRoute from "./routes/order.js";

// 상수 const
const app = express();

// 미들웨어 설정
app.use(cors()) //외부에서 api 접근할때 허용해주는거임
app.use(morgan("dev")) //결과에 대한 로그찍는거임 서버 보면 찍혀있음 (요청에 대한 로그임)

// routing
app.use("/product", productRoute); //프로덕트로 요청이 들어오면 productRoute로 보내겠다
app.use("/order", orderRoute); // order.js 관련해서 만듬 이게 만들어져야 위에 import됨


// request respons test
app.get("/test", (req, res) => {
    res.json({
        msg :"test api"
    })
}) // 요청하는 행위 자체 req, 요청받는 행위 res




// port
const port = 8080;

app.listen(port, console.log("server start"));


// 코드 빌드순서.. js , java, phyton, rudy, ....
// 1. 위에서 아래 방향으로 읽음
// 2. "=" 기준으로 오른쪽에서 왼쪽으로 치환
// 3. "." 하위 메소드 호출
// 4. "," 는 그리고 라고 해석
// 5. () 함수들의 모음으로 해석
