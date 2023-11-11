import express from "express";
import { tempRouter } from "./src/router/tempRouter.js";
import { memberRouter } from "./src/router/memberRouter.js";
import { missionRouter } from "./src/router/missionRouter.js";
import { status } from "./config/responseStatus.js";
import { response } from "./config/response.js";

const app = express();
const port = process.env.PORT || 3000;

// router setting
app.use("/temp", tempRouter);
app.use("/member", memberRouter);
app.use("/mission", missionRouter);

app.use((req, res, next) => {
  const err = new BaseError(status.NOT_FOUND);
  next(err);
});

app.use((err, req, res, next) => {
  // 템플릿 엔진 변수 설정
  res.locals.message = err.message;
  // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
  res.locals.error = process.env.NODE_ENV !== "dev" ? err : {};
  res.status(err.data.status).send(response(err.data));
});

app.listen(port, () => {
  console.log("Listening on port ${port}");
});
