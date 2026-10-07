import express from "express";
import type {Request, Response} from "express";

const app = express();

const PORT = 3000;

app.get("/",(req:Request,res:Response)=>{
  res.status(200).json({
    success: true,
    message: "BrowserOS Early Beta.1"
  })
})

app.listen(PORT, ()=> {
  console.log(`server is running on port: ${PORT}`);
});