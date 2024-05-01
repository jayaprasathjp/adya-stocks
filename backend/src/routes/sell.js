const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const router = Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  const { myStockId, quantity } = req.body;

  try {

    const userStock = await prisma.myStocks.findFirst({
      where: {
        id:myStockId
      },
      include:{
        stock:{
          include:{
            availability:true
          }
        },
        user:true
      }
    });
    if (!userStock || userStock.quantity < quantity) {
      return res.status(400).json({ error: "Insufficient stock to sell" });
    } else if (userStock.quantity === quantity) {
      await prisma.myStocks.delete({
        where: {
          id:myStockId
        },
      });
    } else if (userStock.quantity > quantity) {
      await prisma.myStocks.update({
        where: {
          id:myStockId
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
        id: userStock.stock.availability[0].id
      },
      data: {
        available: {
          increment: quantity,
        },
      },
    });

    const price = userStock.stock.price
    const stockwallet = userStock.stock.stockWallet;
    await prisma.stock.update({
      where: {
        id: userStock.stockId,
      },
      data: {
        stockWallet: stockwallet - price * quantity,
      },
    });
    const userWallet = userStock.user.wallet;
    await prisma.user.update({
      where: {
        id: userStock.userId,
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
