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
-- Table structure for table `salas`
--

DROP TABLE IF EXISTS `salas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `precio` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `aforo` int unsigned NOT NULL,
  `nombre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `url_foto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `latitud` double DEFAULT NULL,
  `longitud` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salas`
--

LOCK TABLES `salas` WRITE;
/*!40000 ALTER TABLE `salas` DISABLE KEYS */;
INSERT INTO `salas` VALUES (16,'30',80,'Sala Artística \"El Retiro\"','Calle del Arte, 12, 28001 Madrid','Espacio multifuncional ideal para exposiciones y clases de arte. Cuenta con iluminación especial para destacar las obras expuestas.','https://www.tosiria.com/wp-content/uploads/2022/10/SALA-EXPOSICIONES-2-interior-1024x576.jpg',40.4829793,-3.6707166),(17,'100',100,'Teatro Cultural \"La Escena\"','Plaza de la Cultura, 5, 28004 Madrid','Teatro íntimo con capacidad para 100 espectadores. Perfecto para representaciones teatrales, monólogos y pequeños conciertos','https://staticprd.minuto30.com/wp-content/uploads/2019/06/Peque%C3%B1o-teatro.png',40.4244585,-3.6990948),(18,'25',6,'\"45Revoluciones\"','Calle de la Música, 8, 28005 Madrid','Espacio de ensayo equipado con instrumentos para bandas y grupos musicales. Apto para ensayos.','https://quetescuchen.com/wp-content/uploads/2015/07/sala-de-ensayo.jpg',40.4240976,-3.623303),(19,'20',50,'\"Pasión Flamenca\"','Calle del Flamenco, 15, 28006 Madrid','Ambiente auténtico para disfrutar y aprender flamenco. Espejos y suelo de madera para clases y actuaciones de baile.','https://www.tablaolosgallos.com/wp-content/uploads/2022/11/sala.jpg',40.4351996,-3.68134),(20,'20',30,' Aula de Formación \"Crecer Juntos\"','Avenida del Conocimiento, 25, 28007 Madrid','Espacio versátil para talleres, conferencias y cursos. Equipado con proyector y pizarra para presentaciones.','https://www.coam.org/media/Default%20Files/sede/eventos/images/2015ok/A2.jpg',40.3649033,-3.6721276),(21,'49',60,'Galería de Arte \"Arte Moderno\"','calle montalbán, 3, madrid','Espacio diáfano para exposiciones de arte contemporáneo. Paredes adaptables para diferentes tamaños de obras.','https://www.fmirobcn.org/media/upload/cache/dav_4147_1635342967_525.jpg',40.4182794,-3.6910379),(22,'50',200,' \"Cine y Cultura\"','Plaza del Cine, 10, 28009 Madrid','Sala con proyector y sonido envolvente para proyecciones de películas, documentales y eventos audiovisuales.','https://www.arqhys.com/construccion/fotos/construccion/Salas-de-proyeccion.jpg',40.3792882,-3.6545856),(23,'15',20,'Espacio Creativo \"Arte en Movimiento\"','Calle de la Creatividad, 7, 28010 Madrid','Lugar inspirador para talleres de arte, danza, yoga y actividades creativas. Espacio luminoso y acogedor.','https://www.yogaenred.com/wp-content/uploads/2014/05/clase-yoga.jpg',40.43094,-3.6952896),(24,'60',150,'Teatro Experimental \"La Vanguardia\"','calle pradillo, 50, madrid','Teatro versátil para propuestas innovadoras y experimentales. Equipado con luces y sonido de última generación.','https://offvalencia.com/wp-content/uploads/2022/02/SalaAzul3-scaled.jpg',40.4493593,-3.6696108),(25,'150',150,'Sala de Conciertos \"Música Viva\"','calle de emilio mario, 12','Espacio acústico para conciertos y recitales. Capacidad para 150 personas, con equipo de sonido profesional.','https://musicodiy.cdbaby.com/wp-content/uploads/2016/06/john-matychuk-gUK3lA3K7Yo-unsplash-1.jpg',40.4505197,-3.6663021),(26,'60',80,'Espacio Cultural \"Arte y Tradición\"','calle gabriel y galan, 3, madrid','Sala de exposiciones que promueve el arte tradicional y contemporáneo. Espacio acogedor para artistas locales y visitantes.','https://www.madrid.es/UnidadWeb/Contenidos/EspecialInformativo/TemaCulturaYOcio/Cultura/Centros/Villa/ElCentro/SalaExpo/SalaExposiciones1.jpg',40.4520515,-3.6709512);
/*!40000 ALTER TABLE `salas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-24 15:35:43
