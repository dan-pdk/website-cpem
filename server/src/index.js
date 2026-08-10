import "./config.js";

import db from "./db.js";

import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello from Express using ESM!" });
});

app.get('/health', async (req, res) => {
  try {
    await db.query('SELECT 1;');
    res.status(200).json({ status: 'OK', database: 'healthy' });
  } catch (error) {
    res.status(500).json({ status: 'ERROR', database: 'unhealthy', error: error.message});
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await db.query('SELECT * FROM USERS')
    res.status(200).json({users})
  }
  catch (error) {
    console.log(error)
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
