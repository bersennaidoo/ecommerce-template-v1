import express, { Router } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import serverless from "serverless-http";
import cors, { CorsOptions } from "cors";
import { prisma } from "./db/prisma";

const whitelist = [
  "https://tourofheros.netlify.app",
  "http://localhost:5173",
  "http://localhost:8888",
];
const corsOptions: CorsOptions = {
  origin: (orig, cb) => {
    if (whitelist.indexOf(orig as string) !== -1 || !orig) {
      cb(null, true);
    } else {
      cb(new Error("Not allowed by CORS"));
    }
  },
};
const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const router = Router();

router.get("/heroes", async (req: any, res: any) => {
  const products = await prisma.product.findMany();
  return res.json(products);
});

router.get("/heroes/:id", async (req: any, res: any) => {
  const id = req.params.id;
  const product = await prisma.product.findUnique({ where: { id } });
  return res.json(product);
});

app.use("/api/", router);

export const handler = serverless(app);
