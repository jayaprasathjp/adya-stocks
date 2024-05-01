// seeding.js

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      username: "user1",
      email: "user1@example.com",
      password: "password1",
      wallet: 1000,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: "user2",
      email: "user2@example.com",
      password: "password2",
      wallet: 1000,
    },
  });

  // Seed stocks
  const stock1 = await prisma.stock.create({
    data: {
      name: "Stock 1",
      totalStocks:100,
      stockWallet: 0,
      symbol: "STK1",
      price: 10.5,
      availability: {
        create: {
          available: 100,
        },
      },
    },
  });

  const stock2 = await prisma.stock.create({
    data: {
      name: "Stock 2",
      totalStocks:100,
      stockWallet: 0,
      symbol: "STK2",
      price: 20.75,
      availability: {
        create: {
          available: 50,
        },
      },
    },
  });
  console.log("Seeding completed");
}

main()
  .catch((error) => {
    console.error("Seeding error:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
