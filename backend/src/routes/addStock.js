const { PrismaClient } = require("@prisma/client");
const { Router } = require("express");
const router = Router();
const multer = require('multer');
const prisma = new PrismaClient();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/routes/files/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

router.post("/", upload.single('stockImages'), async (req, res) => {
  const { name, symbol, price, totalStocks, ownerId } = req.body;

  if (!name || !symbol || !price || !totalStocks || !ownerId) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    const prices = parseFloat(req.body.price);
    const fileName = req.file.originalname;
    console.log(fileName);
    const stockWallet = 0;
    const newStock = await prisma.stock.create({
      data: {
        name,
        symbol,
        StockImages: fileName,
        price: prices,
        totalStocks: parseInt(totalStocks),
        ownerId: parseInt(ownerId),
        stockWallet,
        availability: {
          create: {
            available: parseInt(totalStocks),
          },
        },
      },
    });

    return res.json({ status: 'success' });
  } catch (error) {
    console.error("Error adding stock:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;