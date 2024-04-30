const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    // Retrieve all stocks with available quantities
    const availableStocks = await prisma.stock.findMany({
      where: {
        availability: {
          some: {
            available: {
              gt: 0,
            },
          },
        },
      },
    });

    return res.json({ availableStocks });
  } catch (error) {
    console.error("Error fetching available stocks:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
