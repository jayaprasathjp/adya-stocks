const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const router = Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);

  try {
    const existingUser = await prisma.user.findUnique({
      where: { username, email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password,
        wallet: 10000,
      },
    });
    newUser.password = undefined;
    return res.json({ user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
