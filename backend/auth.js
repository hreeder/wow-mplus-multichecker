import express from 'express';
const router = express.Router();

router.get("/bnet", (req, res) => {
  res.send("/bnet")
});

router.get("/bnet/callback", (req, res) => {
  res.send("/bnet/callback")
})

export { router as auth }