-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2024 at 05:04 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `adyastocks`
--

-- --------------------------------------------------------

--
-- Table structure for table `mystocks`
--

CREATE TABLE `mystocks` (
  `id` int(11) NOT NULL,
  `type` varchar(191) NOT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `userId` int(11) NOT NULL,
  `stockId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mystocks`
--

INSERT INTO `mystocks` (`id`, `type`, `quantity`, `createdAt`, `userId`, `stockId`) VALUES
(1, 'buy', 47, '2024-05-01 14:08:09.509', 2, 7),
(3, 'buy', 9, '2024-05-01 14:24:39.173', 3, 2),
(4, 'buy', 22, '2024-05-01 14:36:08.096', 3, 16);

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `symbol` varchar(191) NOT NULL,
  `price` double NOT NULL,
  `StockImages` varchar(191) NOT NULL,
  `ownerId` int(11) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `totalStocks` int(11) NOT NULL,
  `stockWallet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`id`, `name`, `symbol`, `price`, `StockImages`, `ownerId`, `createdAt`, `totalStocks`, `stockWallet`) VALUES
(1, 'Apple Inc.', 'AAPL', 170.1, 'apple.jpg', NULL, '2024-05-01 12:36:28.538', 100, 50000),
(2, 'Microsoft Corporation', 'MSFT', 300.5, 'microsoft.jpg', NULL, '2024-05-01 12:36:28.545', 100, 82697),
(3, 'Amazon.com Inc.', 'AMZN', 105.3, 'amazon.jpg', NULL, '2024-05-01 12:36:28.561', 100, 52499),
(4, 'Google LLC', 'GOOGL', 98.7, 'google.jpg', NULL, '2024-05-01 12:36:28.567', 100, 118440),
(5, 'Facebook Inc.', 'FB', 200, 'facebook.jpg', NULL, '2024-05-01 12:36:28.573', 100, 220000),
(6, 'Tesla Inc.', 'TSLA', 250.3, 'tesla.jpg', NULL, '2024-05-01 12:36:28.579', 100, 175210),
(7, 'Berkshire Hathaway', 'BRK.A', 410000, 'berkshire.jpg', NULL, '2024-05-01 12:36:28.585', 100, 60270000),
(8, 'Johnson & Johnson', 'JNJ', 165.2, 'johnson.jpg', NULL, '2024-05-01 12:36:28.592', 100, 140420),
(9, 'Walmart Inc.', 'WMT', 145.8, 'walmart.jpg', NULL, '2024-05-01 12:36:28.598', 100, 131220),
(10, 'Procter & Gamble', 'PG', 150.3, 'procter.jpg', NULL, '2024-05-01 12:36:28.605', 100, 142785),
(11, 'Visa Inc.', 'V', 220.1, 'visa.jpg', NULL, '2024-05-01 12:36:28.611', 100, 220100),
(12, 'Exxon Mobil', 'XOM', 90.5, 'exxon.jpg', NULL, '2024-05-01 12:36:28.617', 100, 108600),
(13, 'Chevron Corporation', 'CVX', 170.2, 'chevron.jpg', NULL, '2024-05-01 12:36:28.624', 100, 136160),
(14, 'Netflix Inc.', 'NFLX', 360.4, 'netflix.jpg', NULL, '2024-05-01 12:36:28.631', 100, 234260),
(15, 'Adobe Inc.', 'ADBE', 510, 'adobe.jpg', NULL, '2024-05-01 12:36:28.637', 100, 255000),
(16, 'ADYA 200', 'A200', 5000, 'adya.png', 3, '2024-05-01 14:34:07.961', 100, 110000),
(17, 'git', 'g501', 600, 'Untitled (1).jpg', 3, '2024-05-01 14:35:11.609', 100, 0);

-- --------------------------------------------------------

--
-- Table structure for table `stockavailability`
--

CREATE TABLE `stockavailability` (
  `id` int(11) NOT NULL,
  `stockId` int(11) NOT NULL,
  `available` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stockavailability`
--

INSERT INTO `stockavailability` (`id`, `stockId`, `available`) VALUES
(1, 1, 60),
(2, 2, 81),
(3, 3, 84),
(4, 4, 50),
(5, 5, 100),
(6, 6, 100),
(7, 7, 53),
(8, 8, 100),
(9, 9, 80),
(10, 10, 90),
(11, 11, 50),
(12, 12, 90),
(13, 13, 75),
(14, 14, 62),
(15, 15, 48),
(16, 16, 78),
(17, 17, 100);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `wallet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `createdAt`, `wallet`) VALUES
(1, 'johnDoe', 'john.doe@example.com', 'securePassword123', '2024-05-01 12:36:28.531', 150000),
(2, 'sam', 'sam@gmail.com', '555', '2024-05-01 13:56:02.426', 156000),
(3, 'dube', 'dube@gmail.com', '123', '2024-05-01 14:08:58.111', 110000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mystocks`
--
ALTER TABLE `mystocks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `MyStocks_userId_fkey` (`userId`),
  ADD KEY `MyStocks_stockId_fkey` (`stockId`);

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Stock_symbol_key` (`symbol`),
  ADD KEY `Stock_ownerId_fkey` (`ownerId`);

--
-- Indexes for table `stockavailability`
--
ALTER TABLE `stockavailability`
  ADD PRIMARY KEY (`id`),
  ADD KEY `StockAvailability_stockId_fkey` (`stockId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_username_key` (`username`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mystocks`
--
ALTER TABLE `mystocks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `stockavailability`
--
ALTER TABLE `stockavailability`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `mystocks`
--
ALTER TABLE `mystocks`
  ADD CONSTRAINT `MyStocks_stockId_fkey` FOREIGN KEY (`stockId`) REFERENCES `stock` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `MyStocks_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `Stock_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `stockavailability`
--
ALTER TABLE `stockavailability`
  ADD CONSTRAINT `StockAvailability_stockId_fkey` FOREIGN KEY (`stockId`) REFERENCES `stock` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
