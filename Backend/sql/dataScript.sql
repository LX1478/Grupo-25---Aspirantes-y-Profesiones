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
-- Dumping data for table `applicants`
--

LOCK TABLES `applicants` WRITE;
/*!40000 ALTER TABLE `applicants` DISABLE KEYS */;
INSERT INTO `applicants` VALUES (1,2,46234865,'Gloria','Medina','Profesional especializado en gestión de recursos humanos','gloriamedina@gmail.com','password123','+54 9 223 123-4567','www.linkedin.com/in/Gloria-Medina','2000-11-02','Femenino','applicant1.jpg','Argentina, Buenos Aires, Ciudad Autónoma de Buenos Aires',2,'2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(2,2,12345678,'Juan','Perez','Experto en análisis de datos y estadísticas','juanperez@gmail.com','password123','+54 9 223 234-5678','www.linkedin.com/in/Juan-Perez','1995-03-15','Masculino','applicant2.jpg','Argentina, Córdoba, Córdoba',1,'2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(3,2,59765432,'María','López','Especialista en diseño gráfico y creatividad','marialopez@gmail.com','password123','+54 9 223 345-6789','www.linkedin.com/in/María-López','1998-08-20','Femenino','applicant3.jpg','Argentina, Santa Fe, Rosario',4,'2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(4,2,34567891,'Carlos','González','Desarrollador web con experiencia en varios frameworks','carlosgonzalez@gmail.com','password123','+54 9 223 456-7890','www.linkedin.com/in/Carlos-González','1992-05-10','Masculino','applicant4.jpg','Argentina, Mendoza, Mendoza',5,'2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(5,2,56789123,'Ana','Martínez','Analista financiera con amplio conocimiento en inversiones','anamartinez@gmail.com','password123','+54 9 223 567-8901','www.linkedin.com/in/Ana-Martínez','1997-12-25','Femenino','applicant5.jpg','Argentina, Salta, Salta',6,'2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(6,2,78912345,'Pedro','Rodríguez','Experto en redes y seguridad informática','pedrorodriguez@gmail.com','password123','+54 9 223 678-9012','www.linkedin.com/in/Pedro-Rodríguez','1990-09-30','Masculino','applicant6.jpg','Argentina, Tucumán, San Miguel de Tucumán',7,'2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(7,2,91234567,'Laura','García','Profesional en marketing digital y estrategias online','lauragarcia@gmail.com','password123','+54 9 223 789-0123','www.linkedin.com/in/Laura-García','1994-04-05','Femenino','applicant7.jpg','Argentina, Buenos Aires, La Plata',8,'2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(8,2,23456789,'Miguel','Fernández','Consultor empresarial con experiencia en startups','miguelfernandez@gmail.com','password123','+54 9 223 890-1234','www.linkedin.com/in/Miguel-Fernández','1988-07-17','Masculino','applicant8.jpg','Argentina, San Juan, San Juan',9,'2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(9,2,45678912,'Sofía','Díaz','Psicóloga clínica con enfoque en terapia cognitivo-conductual','sofiadiaz@gmail.com','password123','+54 9 223 901-2345','www.linkedin.com/in/Sofía-Díaz','1996-02-28','Femenino','applicant9.jpg','Argentina, Santa Fe, Santa Fe',10,'2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(10,2,67891234,'José','Sánchez','Desarrollador de aplicaciones móviles para sistemas iOS y Android','josesanchez@gmail.com','password123','+54 9 223 012-3456','www.linkedin.com/in/José-Sánchez','1993-10-12','Masculino','applicant10.jpg','Argentina, Buenos Aires, Bahía Blanca',5,'2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(11,2,89123456,'Lucía','Hernández','Diseñadora de moda con experiencia en diseño de prendas de alta costura','luciahernandez@gmail.com','password123','+54 9 223 123-4567','www.linkedin.com/in/Lucía-Hernández','1999-06-18','Femenino','applicant11.jpg','Argentina, Neuquén, Neuquén',1,'2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(12,2,10987654,'Diego','Torres','Fotógrafo profesional especializado en fotografía de retratos y eventos','diegotorres@gmail.com','password123','+54 9 223 234-5678','www.linkedin.com/in/Diego-Torres','1991-09-08','Masculino','applicant12.jpg','Argentina, Buenos Aires, Mar del Plata',3,'2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(13,2,98765432,'Andrés','Gómez','Ingeniero de software con experiencia en desarrollo de aplicaciones web','andresgomez@gmail.com','password123','+54 9 223 345-6789','www.linkedin.com/in/Andrés-Gómez','1997-10-30','Masculino','applicant13.jpg','Argentina, Buenos Aires, Ciudad Autónoma de Buenos Aires',2,'2024-02-22 14:49:25','2024-02-22 14:49:25',NULL);
/*!40000 ALTER TABLE `applicants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,3,'Tecnología Avanzada SA','Empresa líder en desarrollo de software y soluciones tecnológicas','Tecnología','http://www.tecnologiaavanzada.com.ar','company1.jpg','info@tecnologiaavanzada.com.ar','password123','Buenos Aires, Argentina','2024-02-22 14:49:25','2024-02-24 01:21:26',NULL),(2,3,'Industrias del Sur SRL','Fabricante de productos industriales y maquinaria pesada','Manufactura','http://www.industriasdelsur.com.ar','company2.jpg','info@industriasdelsur.com.ar','password123','Córdoba, Argentina','2024-02-22 14:49:25','2024-02-24 02:17:02',NULL),(3,3,'Alimentos Frescos SA','Productor de alimentos frescos y saludables','Alimentación','http://www.alimentosfrescos.com.ar','company3.jpg','info@alimentosfrescos.com.ar','password123','Rosario, Argentina','2024-02-22 14:49:25','2024-02-24 02:17:07',NULL),(4,3,'Energía Solar Verde SA','Empresa especializada en energía solar y renovable','Energía','http://www.energiasolarverde.com.ar','company4.jpg','info@energiasolarverde.com.ar','password123','Mendoza, Argentina','2024-02-22 14:49:25','2024-02-24 02:17:12',NULL),(5,3,'Consultoría Empresarial Total','Proveedor de servicios de consultoría para empresas','Consultoría','http://www.consultoriaempresarial.com.ar','company5.jpg','info@consultoriaempresarial.com.ar','password123','Buenos Aires, Argentina','2024-02-22 14:49:25','2024-02-24 02:17:17',NULL),(6,3,'Jardines del Norte','Vivero especializado en plantas ornamentales y jardinería','Jardinería','http://www.jardinesdelnorte.com.ar','company6.jpg','info@jardinesdelnorte.com.ar','password123','Salta, Argentina','2024-02-22 14:49:25','2024-02-24 02:17:22',NULL);
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `professions`
--

LOCK TABLES `professions` WRITE;
/*!40000 ALTER TABLE `professions` DISABLE KEYS */;
INSERT INTO `professions` VALUES (1,'Abogado','Profesional especializado en derecho y asuntos legales','2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(2,'Administrador','Persona encargada de la gestión y dirección de una empresa u organización','2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(3,'Arquitecto','Profesional encargado del diseño y construcción de edificios y estructuras','2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(4,'Botánico','Experto en el estudio de las plantas','2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(5,'Computista','Profesional de la informática o la computación','2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(6,'Economista','Persona especializada en el estudio de la economía','2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(7,'Técnico de sonido','Persona encargada de la operación y mantenimiento de equipos de sonido','2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(8,'Técnico electrónico','Profesional especializado en el área de la electrónica','2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(9,'Profesor','Educador encargado de impartir conocimientos en instituciones educativas','2024-02-22 14:49:25','2024-02-22 14:49:25',NULL),(10,'Linguista','Experto en el estudio científico del lenguaje y las lenguas','2024-02-22 14:49:25','2024-02-22 14:49:25',NULL);
/*!40000 ALTER TABLE `professions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `recruiting`
--

LOCK TABLES `recruiting` WRITE;
/*!40000 ALTER TABLE `recruiting` DISABLE KEYS */;
/*!40000 ALTER TABLE `recruiting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','Administrador'),(2,'applicant','Aspirante'),(3,'companie','Empresa');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `vacancies`
--

LOCK TABLES `vacancies` WRITE;
/*!40000 ALTER TABLE `vacancies` DISABLE KEYS */;
/*!40000 ALTER TABLE `vacancies` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-23 23:38:37
