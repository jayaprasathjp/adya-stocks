const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const router = Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  const {userId} = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        id:Number(userId)
      }
    });

    return res.json({ "amount":user.wallet });
  } catch (error) {
    console.error("Error fetching available stocks:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
