const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
        username: "johnDoe",
        email: "john.doe@example.com",
        password: "securePassword123", 
        wallet: 150000,
    },
});
    const stocks = [
        { name: 'Apple Inc.', symbol: 'AAPL', price: 170.10, StockImages: 'apple.jpg', totalStocks: 100, stockWallet: 50000, available: 60 },
        { name: 'Microsoft Corporation', symbol: 'MSFT', price: 300.50, StockImages: 'microsoft.jpg', totalStocks: 100, stockWallet: 80000, available: 90 },
        { name: 'Amazon.com Inc.', symbol: 'AMZN', price: 105.30, StockImages: 'amazon.jpg', totalStocks: 100, stockWallet: 52500, available: 84 },
        { name: 'Google LLC', symbol: 'GOOGL', price: 98.70, StockImages: 'google.jpg', totalStocks: 100, stockWallet: 118440, available: 50 },
        { name: 'Facebook Inc.', symbol: 'FB', price: 200.00, StockImages: 'facebook.jpg', totalStocks: 100, stockWallet: 220000, available: 100 },
        { name: 'Tesla Inc.', symbol: 'TSLA', price: 250.30, StockImages: 'tesla.jpg', totalStocks: 100, stockWallet: 175210, available: 100 },
        { name: 'Berkshire Hathaway', symbol: 'BRK.A', price: 410000, StockImages: 'berkshire.jpg', totalStocks: 100, stockWallet: 41000000, available: 100 },
        { name: 'Johnson & Johnson', symbol: 'JNJ', price: 165.20, StockImages: 'johnson.jpg', totalStocks: 100, stockWallet: 140420, available: 100 },
        { name: 'Walmart Inc.', symbol: 'WMT', price: 145.80, StockImages: 'walmart.jpg', totalStocks: 100, stockWallet: 131220, available: 80 },
        { name: 'Procter & Gamble', symbol: 'PG', price: 150.30, StockImages: 'procter.jpg', totalStocks: 100, stockWallet: 142785, available: 90 },
        { name: 'Visa Inc.', symbol: 'V', price: 220.10, StockImages: 'visa.jpg', totalStocks: 100, stockWallet: 220100, available: 50 },
        { name: 'Exxon Mobil', symbol: 'XOM', price: 90.50, StockImages: 'exxon.jpg', totalStocks: 100, stockWallet: 108600, available: 90 },
        { name: 'Chevron Corporation', symbol: 'CVX', price: 170.20, StockImages: 'chevron.jpg', totalStocks: 100, stockWallet: 136160, available: 75 },
        { name: 'Netflix Inc.', symbol: 'NFLX', price: 360.40, StockImages: 'netflix.jpg', totalStocks: 100, stockWallet: 234260, available: 62 },
        { name: 'Adobe Inc.', symbol: 'ADBE', price: 510.00, StockImages: 'adobe.jpg', totalStocks: 100, stockWallet: 255000, available: 48 }
    ];

    for (const stock of stocks) {
        await prisma.stock.create({
            data: {
                name: stock.name,
                symbol: stock.symbol,
                price: stock.price,
                StockImages: stock.StockImages,
                totalStocks: stock.totalStocks,
                stockWallet: stock.stockWallet,
                availability: {
                    create: {
                        available: stock.available,
                    },
                },
            },
        });
    }

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
