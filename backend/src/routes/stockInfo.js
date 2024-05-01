const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const router = Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  const {stockId} = req.body;
  console.log(stockId);
  try {
    const info = await prisma.stock.findFirst({
      where: {
        id:Number(stockId)
      },
      include:{
        availability:true
      }
    });

    return res.json({ info });
  } catch (error) {
    console.error("Error fetching available stocks:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
