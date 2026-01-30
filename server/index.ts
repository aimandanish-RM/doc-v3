import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/proxy", async (req, res) => {
  const {
    url,
    method,
    headers,
    body,
  }: {
    url: string;
    method: string;
    headers?: Record<string, string>;
    body?: string;
  } = req.body;

  try {
    const response = await fetch(url, {
      method,
      headers,
      body: method !== "GET" ? body : undefined,
    });

    const text = await response.text();

    res.status(response.status).send(text);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5050, () => {
  console.log("🚀 API Proxy running on http://localhost:5050");
});
