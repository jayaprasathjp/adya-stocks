const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const router = Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  const { userId, stockId, quantity } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const stock = await prisma.stock.findUnique({
      where: {
        id: stockId,
      },
      include: {
        availability: true, 
      },
    });

    if (!stock) {
      return res.status(404).json({ error: "Stock not found" });
    }
    const userStock = await prisma.myStocks.findFirst({
      where: {
        userId: user.id,
        stockId: stock.id,
        type: "buy",
      },
      select: {
        quantity: true,
      },
    });
    if (!userStock || userStock.quantity < quantity) {
      return res.status(400).json({ error: "Insufficient stock to sell" });
    } else if (userStock.quantity === quantity) {
      await prisma.myStocks.delete({
        where: {
          userId_stockId_type: {
            userId: user.id,
            stockId: stock.id,
            type: "buy",
          },
        },
      });
    } else if (userStock.quantity > quantity) {
      await prisma.myStocks.update({
        where: {
          userId_stockId_type: {
            userId: user.id,
            stockId: stock.id,
            type: "buy",
          },
        },
        data: {
          quantity: {
            decrement: quantity,
          },
        },
      });
    }
    await prisma.stockAvailability.update({
      where: {
        id: stock.availability[0].id,
      },
      data: {
        available: {
          increment: quantity,
        },
      },
    });

    const price = stock.price;
    const stockwallet = stock.stockWallet;
    await prisma.stock.update({
      where: {
        id: stockId,
      },
      data: {
        stockWallet: stockwallet - price * quantity,
      },
    });
    const userWallet = user.wallet;
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        wallet: userWallet + price * quantity,
      },
    });
    res.json({ status: "success" });
  } catch (error) {
    console.error("Error selling stock:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
