import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/proxy", async (req, res) => {
  const { url, method, headers, body } = req.body;

  try {
    const response = await fetch(url, {
      method,
      headers,
      body: method !== "GET" ? JSON.stringify(body) : undefined,
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
