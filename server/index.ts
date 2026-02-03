import express from "express";
import cors from "cors";
import path from "path";

const app = express();
const PORT = 3000;

// ---- middleware ----
app.use(cors());
app.use(express.json());

// ---- API PROXY ----
app.post("/api/proxy", async (req, res) => {
  const { url, method, headers, body } = req.body;

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

// ---- SERVE DOCUSAURUS BUILD ----
const docsPath = path.join(__dirname, "..", "build");
app.use(express.static(docsPath));

app.get("*", (_, res) => {
  res.sendFile(path.join(docsPath, "index.html"));
});

// ---- START SERVER ----
app.listen(PORT, () => {
  console.log(`🚀 Docs + API running at http://localhost:${PORT}`);
});
