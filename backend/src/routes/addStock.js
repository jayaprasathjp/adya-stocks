const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const router = Router();
const prisma = new PrismaClient();
router.post("/", async (req, res) => {
  const { name, symbol, price, totalStocks, ownerId } = req.body;
  const stockWallet = 0;

  try {
    // Create the stock
    const newStock = await prisma.stock.create({
      data: {
        name,
        symbol,
        price,
        totalStocks,
        ownerId,
        stockWallet,
        availability: {
          create: {
            available: totalStocks,
          },
        },
      },
    });

    return res.json({ stock: newStock });
  } catch (error) {
    console.error("Error adding stock:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
