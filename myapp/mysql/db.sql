-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: catalogo
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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
-- Table structure for table `comments`
--
CREATE SCHEMA db;
USE db;

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `productid` int(10) unsigned DEFAULT NULL,
  `usersid` int(10) unsigned DEFAULT NULL,
  `commenttext` varchar(500) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `productid` (`productid`),
  KEY `usersid` (`usersid`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`productid`) REFERENCES `products` (`id`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`usersid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,1,'¡Muy bueno me encantó!','2025-04-09 23:12:09','2025-04-09 23:12:09',NULL),(2,1,2,'¡Super recomendado!','2025-04-09 23:12:09','2025-04-09 23:12:09',NULL),(3,1,3,'¡Súper recomendado!','2025-04-09 23:12:09','2025-04-09 23:30:00','2025-04-09 23:30:00');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `productimage` varchar(500) NOT NULL,
  `productname` varchar(500) NOT NULL,
  `productdescription` varchar(500) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'https://http2.mlstatic.com/D_NQ_NP_702169-MLA79667134087_092024-O.webp','Base líquida de larga duración',' Cobertura media a completa con acabado natural. Resiste todo el día sin sentirse pesada. Ideal para pieles mixtas a grasas.','2025-04-09 23:05:47','2025-04-09 23:23:20','2025-04-09 23:23:20'),(2,'https://www.maybelline.com.ar/-/media/project/loreal/brand-sites/mny/americas/latam/products/face/concealer/instant-age-rewind-concealer/product-packshot.jpeg?rev=a3f024830ea249daaff24fdc9d832df6&cx=0.25&cy=0.31&cw=315&ch=472&hash=2CBAAF902D73D62619168645E654C814','Corrector iluminador','Cubre ojeras y manchas al instante con un efecto luminoso. Textura cremosa que se difumina fácil y no se acumula','2025-04-09 23:05:47','2025-04-09 23:23:20','2025-04-09 23:23:20'),(3,'https://m.media-amazon.com/images/I/511naEb-UOL._AC_UF1000,1000_QL80_.jpg','Rubor en crema','Aporta un toque de color suave y radiante que se integra perfectamente con la piel. Su fórmula liviana deja un acabado natural, ideal para realzar tu brillo.','2025-04-09 23:05:47','2025-04-09 23:23:20','2025-04-09 23:23:20'),(4,'https://farmaciasdelpueblo.vtexassets.com/arquivos/ids/178206/Revlon-Polvo-Traslucido-Colorstay-Blot-0309970165123_img1.png?v=637892742963630000','Polvo matificante translúcido','Sella el maquillaje y controla el brillo sin alterar el color. Acabado suave y sin flashback.','2025-04-09 23:05:47','2025-04-09 23:23:20','2025-04-09 23:23:20'),(5,'https://juleriaque.vtexassets.com/arquivos/ids/205595/hypnose-palette-5-couleurs-9808663CBA7CFDD04FAD9911C081B2F6.jpg?v=638085769004670000','Sombra de ojos en barra',' Fórmula cremosa de alta pigmentación que se aplica con facilidad. Deja un acabado natural y duradero, ideal para un look fresco que se mantiene todo el día.','2025-04-09 23:05:47','2025-04-09 23:23:20','2025-04-09 23:23:20'),(6,'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw3ef1caeb/NATARG-95757_1.jpg','Delineador líquido waterproof','Punta ultra precisa para trazos definidos o dramáticos. Secado rápido y a prueba de todo.','2025-04-09 23:05:47','2025-04-09 23:23:20','2025-04-09 23:23:20'),(7,'https://cdn2.primor.eu/media/catalog/product/0/M/0MO20544_1_c58b.jpg','Máscara de pestañas volumen extremo','Alarga, curva y da volumen desde la primera pasada. No se corre ni se descascara.','2025-04-09 23:05:47','2025-04-09 23:23:20','2025-04-09 23:23:20'),(8,'https://m.media-amazon.com/images/I/71Z6khL9EPL._SL1500_.jpg','Lápiz de cejas retráctil','Trazo fino y natural para definir, rellenar y dar forma con precisión. Ideal para lograr unas cejas prolijas y con acabado impecable.','2025-04-09 23:05:47','2025-04-09 23:23:20','2025-04-09 23:23:20'),(9,'https://http2.mlstatic.com/D_NQ_NP_833586-MLA79890068758_102024-O.webp','Iluminador en polvo',' Brillo radiante sin partículas gruesas. Ideal para darle luz a mejillas, nariz y arco de cupido.','2025-04-09 23:05:47','2025-04-09 23:23:20','2025-04-09 23:23:20'),(10,'https://getthelookar.vtexassets.com/arquivos/ids/164106/222118_labial-liquido-maybelline-superstay-matte-ink-x-5-ml_imagen-1.jpg?v=637612688756770000','Labial líquido mate','Color intenso que no se transfiere. Textura ligera, no reseca y se mantiene intacto por horas.','2025-04-09 23:05:47','2025-04-09 23:23:20','2025-04-09 23:23:20');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(500) NOT NULL,
  `mail` text NOT NULL,
  `userpassword` varchar(500) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `birthday` date NOT NULL,
  `dni` char(8) NOT NULL,
  `profileimage` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Celina','celimaccari@gmail.com','Hola123','2025-04-09 22:44:47','2025-04-09 22:53:44','2025-04-09 22:53:44','2006-01-05','47127379','https://em-content.zobj.net/source/apple/237/blonde-woman-type-1-2_1f471-1f3fb-200d-2640-fe0f.png'),(2,'Pilar','pilaruncal@gmail.com','Hola345','2025-04-09 22:44:47','2025-04-09 22:53:44','2025-04-09 22:53:44','2005-11-12','46861068','https://em-content.zobj.net/source/apple/237/blonde-woman-type-1-2_1f471-1f3fb-200d-2640-fe0f.png'),(3,'Sol','solburgos@gmail.com','Hola678','2025-04-09 22:44:47','2025-04-09 22:53:44','2025-04-09 22:53:44','2005-11-15','47248478','https://emojitool.com/img/apple/ios-14.5/woman-medium-skin-tone-473.png'),(4,'Catalina','catalinapiantoni@gmail.com','Hola910','2025-04-09 22:44:48','2025-04-09 22:53:44','2025-04-09 22:53:44','2006-01-05','47000000','https://em-content.zobj.net/source/apple/237/blonde-woman-type-1-2_1f471-1f3fb-200d-2640-fe0f.png'),(5,'Tini','tinistoessel@gmail.com','Hola112','2025-04-09 22:44:48','2025-04-09 22:53:44','2025-04-09 22:53:44','2000-03-21','41000000','https://emojitool.com/img/apple/ios-14.5/woman-medium-skin-tone-473.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'catalogo'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-14  8:59:04
