import express from "express";
import { home, hello, world } from "../controllers/mainController";

const globalRouter = express.Router();

globalRouter.get("/", home);


export default globalRouter;