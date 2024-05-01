const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const router = Router();
const prisma = new PrismaClient();
router.post("/", async (req, res) => {
  const {userId} = req.body;
console.log(userId);
  try {
    const userStocks = await prisma.myStocks.findMany({
      where: {
        userId: userId
      }
    });


    return res.json(userStocks);
  } catch (error) {
    console.error("Error fetching stocks for user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
