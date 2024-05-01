const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const router = Router();
const prisma = new PrismaClient();
router.post("/", async (req, res) => {
  const {myStockId} = req.body;
  try {
    const userStocks = await prisma.myStocks.findFirst({
      where: {
        id:myStockId
      },
      include:{
        stock:true
      }
    });


    return res.json(userStocks);
  } catch (error) {
    console.error("Error fetching stocks for user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
