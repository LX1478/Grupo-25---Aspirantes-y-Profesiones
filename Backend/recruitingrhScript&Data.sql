-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: recruitingrh
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `applicants`
--

DROP TABLE IF EXISTS `applicants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applicants` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `dni` int unsigned NOT NULL,
  `name` varchar(120) NOT NULL,
  `surname` varchar(60) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `urlLinkedin` varchar(255) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `sex` enum('Masculino','Femenino','Otro') NOT NULL,
  `image` varchar(255) DEFAULT 'default.png',
  `professionId` bigint NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`),
  UNIQUE KEY `email` (`email`),
  KEY `professionId` (`professionId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applicants`
--

LOCK TABLES `applicants` WRITE;
/*!40000 ALTER TABLE `applicants` DISABLE KEYS */;
INSERT INTO `applicants` VALUES (1,46234865,'Gloria','Medina','gloriamedina@gmail.com','+54 9 223 123-4567','www.linkedin.com/in/Gloria-Medina','2000-11-02','Femenino','applicant1.png',2,NULL,NULL,NULL),(2,12345678,'Juan','Perez','juanperez@gmail.com','+54 9 223 234-5678','www.linkedin.com/in/Juan-Perez','1995-03-15','Masculino','applicant2.png',1,NULL,NULL,NULL),(3,59765432,'María','López','marialopez@gmail.com','+54 9 223 345-6789','www.linkedin.com/in/María-López','1998-08-20','Femenino','applicant3.png',4,NULL,NULL,NULL),(4,34567891,'Carlos','González','carlosgonzalez@gmail.com','+54 9 223 456-7890','www.linkedin.com/in/Carlos-González','1992-05-10','Masculino','applicant4.png',5,NULL,NULL,NULL),(5,56789123,'Ana','Martínez','anamartinez@gmail.com','+54 9 223 567-8901','www.linkedin.com/in/Ana-Martínez','1997-12-25','Femenino','applicant5.png',6,NULL,NULL,NULL),(6,78912345,'Pedro','Rodríguez','pedrorodriguez@gmail.com','+54 9 223 678-9012','www.linkedin.com/in/Pedro-Rodríguez','1990-09-30','Masculino','applicant6.png',7,NULL,NULL,NULL),(7,91234567,'Laura','García','lauragarcia@gmail.com','+54 9 223 789-0123','www.linkedin.com/in/Laura-García','1994-04-05','Femenino','applicant7.png',8,NULL,NULL,NULL),(8,23456789,'Miguel','Fernández','miguelfernandez@gmail.com','+54 9 223 890-1234','www.linkedin.com/in/Miguel-Fernández','1988-07-17','Masculino','applicant8.png',9,NULL,NULL,NULL),(9,45678912,'Sofía','Díaz','sofiadiaz@gmail.com','+54 9 223 901-2345','www.linkedin.com/in/Sofía-Díaz','1996-02-28','Femenino','applicant9.png',10,NULL,NULL,NULL),(10,67891234,'José','Sánchez','josesanchez@gmail.com','+54 9 223 012-3456','www.linkedin.com/in/José-Sánchez','1993-10-12','Masculino','applicant10.png',5,NULL,NULL,NULL),(11,89123456,'Lucía','Hernández','luciahernandez@gmail.com','+54 9 223 123-4567','www.linkedin.com/in/Lucía-Hernández','1999-06-18','Femenino','applicant11.png',1,NULL,NULL,NULL),(12,10987654,'Diego','Torres','diegotorres@gmail.com','+54 9 223 234-5678','www.linkedin.com/in/Diego-Torres','1991-09-08','Masculino','applicant12.png',3,NULL,NULL,NULL),(13,98765432,'Andrés','Gómez','andresgomez@gmail.com','+54 9 223 345-6789','www.linkedin.com/in/Andrés-Gómez','1997-10-30','Masculino','applicant13.png',2,NULL,NULL,NULL);
/*!40000 ALTER TABLE `applicants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `professions`
--

DROP TABLE IF EXISTS `professions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `professions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(120) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professions`
--

LOCK TABLES `professions` WRITE;
/*!40000 ALTER TABLE `professions` DISABLE KEYS */;
INSERT INTO `professions` VALUES (1,'Abogado',NULL,NULL,NULL),(2,'Administrador',NULL,NULL,NULL),(3,'Arquitecto',NULL,NULL,NULL),(4,'Botánico',NULL,NULL,NULL),(5,'Computista',NULL,NULL,NULL),(6,'Economista',NULL,NULL,NULL),(7,'Técnico de sonido',NULL,NULL,NULL),(8,'Técnico electrónico',NULL,NULL,NULL),(9,'Profesor',NULL,NULL,NULL),(10,'Linguista',NULL,NULL,NULL);
/*!40000 ALTER TABLE `professions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-18 20:27:25
