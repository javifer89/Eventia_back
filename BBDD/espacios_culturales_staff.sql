CREATE DATABASE  IF NOT EXISTS `espacios_culturales` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `espacios_culturales`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: espacios_culturales
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rol` enum('administrador','trabajador') COLLATE utf8mb4_unicode_ci NOT NULL,
  `usuario` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES (1,'Pedro García','administrador','pedritogar','pedritogar1234','pedritogar@gmail.com'),(3,'Gustavo Maldonado','trabajador','gustavomal','gustavomal1234','gustavomal@gmail.com'),(4,'Claudia Hernandez','trabajador','claudiaher','claudiaher1234','claudiaher@gmail.com'),(5,'Javier Fernandez','trabajador','javifer','javifer1234','javifer@gmail.com'),(6,'Julio','trabajador','julito','$2a$06$2n8rkVT1XjHOxoo.VbcECOXZcnSqe/g2lS8QsMRKefj.PxVQijOXG','julio@agosto.com'),(8,'Julio','trabajador','julito','$2a$06$26P31eAFcLd72sHZXhm6ROoc6lt3vUcejamGT7JMjUQ8Dw7nMXGzC','julio2@agosto.com'),(9,'Julito','trabajador','julito','$2a$06$aZv3M4YTYvLeETbknfgzzudu2TNj.yN4huWgGsxZaPl.TyKw29HcS','julio22@agosto.com'),(11,'Julito','trabajador','julito','$2a$06$VxX0lfcFD8qMRaQgqpYG/uMj3waY5BRr1aJRS5ljVTuBHtCnlw.Ie','julio223@agosto.com'),(12,'Julito2','trabajador','julito','$2a$06$VD1jrCsRwrTYZ6K1dacSH.CYdx1N2bdNiHzjPwfppz.YmbNJElCl6','julio2123@agosto.com'),(14,'Julito2','trabajador','julito2','$2a$06$1K06XBMilkoaxV9o5Y40C.X1ZGoMPVOQESxFHihAPONQ9LqjvNalm','julio2133@agosto.com'),(16,'Julito2','trabajador','julito2','$2a$06$82..ZYaWVh6FNNu7.vr/n.lGfF/IGfL8BTxOhfg/zCQ5miLkDJMfu','julio2233@agosto.com');
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-18 12:36:29
