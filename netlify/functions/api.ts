import express, { Application } from 'express';
import serverless from "serverless-http";
import { router as productRouter } from './routes/products';
import { router as userRouter } from './routes/users';
import { authenticate } from './utils/auth';
import cors, { CorsOptions } from "cors";

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

const app: Application = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use("/api/products", authenticate, productRouter);
app.use("/api/users", userRouter);

app.get('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'Server is up and running' });
});

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Internal server error' });
});

//app.use("/api/", productRouter, userRouter)



export const handler = serverless(app);