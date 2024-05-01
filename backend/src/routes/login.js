const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {});

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatch = password === user.password;
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    return res.json({ user });
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
