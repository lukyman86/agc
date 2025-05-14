const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/register", (req, res) => {
  const { name, email, referrer, referralCode } = req.body;
  console.log("User registered:", { name, email, referrer, referralCode });
  res.json({ success: true, referralCode });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
