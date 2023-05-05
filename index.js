import express from "express";
// 상수 const
const app = express();

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
