const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const router = Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  const { userId, amount } = req.body;
  try {
    const user = await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        wallet: Number(amount),
      },
    });

    return res.json({
      message: "Wallet balance updated successfully",
      wallet: user.wallet,
    });
  } catch (error) {
    console.error("Error fetching available stocks:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
