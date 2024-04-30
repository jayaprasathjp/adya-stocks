const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const router = Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  console.log(req.body);
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

    if (stock.availability[0].available < quantity) {
      return res.status(400).json({ error: "Insufficient stock available" });
    }

    const existingMyStocks = await prisma.myStocks.findFirst({
      where: {
        userId: userId,
        stockId: stockId,
      },
    });

    let myStocks;
    if (existingMyStocks) {
      myStocks = await prisma.myStocks.update({
        where: {
          id: existingMyStocks.id,
        },
        data: {
          quantity: existingMyStocks.quantity + quantity,
        },
      });
    } else {
      myStocks = await prisma.myStocks.create({
        data: {
          type: "buy",
          quantity,
          userId,
          stockId,
        },
      });
    }

    console.log(myStocks);

    await prisma.stockAvailability.update({
      where: {
        id: stock.availability[0].id,
      },
      data: {
        available: {
          decrement: quantity,
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
        stockWallet: stockwallet + price * quantity,
      },
    });
    const userWallet = user.wallet;
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        wallet: userWallet - price * quantity,
      },
    });

    return res.json({ myStocks });
  } catch (error) {
    console.error("Error buying stock:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
