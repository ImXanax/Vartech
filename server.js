import express from "express";

const app = express();
const port = process.env.PORT || 5500;
app.use(express.static("public"));

app.listen(process.env.PORT || 5500, () => {
  console.log(`🟢 Server running http://localhost:${port}`);
});
