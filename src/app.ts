import express, {Express, Request, Response } from "express";
import { UserRoute } from "./app/modules/user/user.route";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const cors = require("cors");

const app  : Express = express();
app.use(express.json());
app.use(cors());
 


app.use("/app/v1/user",UserRoute)

 
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
