-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: campusmaster
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `admin_id` varchar(15) NOT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `middle_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `off_email` varchar(50) NOT NULL,
  `designation` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`admin_id`,`off_email`),
  CONSTRAINT `fk_authadmin` FOREIGN KEY (`admin_id`) REFERENCES `auths` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance` (
  `date` date NOT NULL,
  `course_code` varchar(6) NOT NULL,
  `rollno` varchar(15) NOT NULL,
  PRIMARY KEY (`date`,`course_code`,`rollno`),
  KEY `fk_courseattend_idx` (`course_code`,`rollno`),
  CONSTRAINT `fk_courseattend` FOREIGN KEY (`course_code`, `rollno`) REFERENCES `studenrolledcour` (`course_code`, `rollno`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

LOCK TABLES `attendance` WRITE;
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auths`
--

DROP TABLE IF EXISTS `auths`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auths` (
  `id` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(24) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`,`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auths`
--

LOCK TABLES `auths` WRITE;
/*!40000 ALTER TABLE `auths` DISABLE KEYS */;
INSERT INTO `auths` VALUES ('2020BTechCSE002','abhishekarora@jklu.edu.in','abhi1234','student'),('2020BTechCSE030','divyanshusingh@jklu.edu.in','dave1234','student'),('2020BTechCSE046','meghakhangarot@jklu.edu.in','megh1234','student'),('2020BTechCSE049','mohakgoyal@jklu.edu.in','abcd123','student'),('2020BTechCSE051','mridulgoyal@jklu.edu.in','12345678','student'),('2020IET001','dramitsinhal@jklu.edu.in','faculty001','faculty'),('2020IET002','devendrabhavsar@jklu.edu.in','db123456','faculty'),('2023ADMIN001','admin1@jklu.edu.in','password','admin');
/*!40000 ALTER TABLE `auths` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `course_code` varchar(6) NOT NULL,
  `credits` int DEFAULT NULL,
  `course_name` varchar(45) DEFAULT NULL,
  `course_desc` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`course_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES ('CS1112',4,'Compiler Design','This course aims to familiarize the students with the design and implementation of compilers.'),('CS1113',4,'Software Engineering','In this course, students will gain a broad understanding of the discipline of software engineering and apply theories, models, and techniques to solve real-world problems.'),('CS1212',4,'Full Stack Web-Development with React','This course will equip the students with understanding and skills for MERN stack web development using MongoDB database, NodeJS, Express and React library.'),('CS1213',4,'Advanced Data Structures and Algorithms','•	The course aims to develop a deeper understanding of algorithmic design paradigms and advanced data structures for solving complex algorithmic problems.'),('CS1312',4,'Big Data Engineering','The main goal of this course is to help students learn, understand, and practice modern big data technologies for scaling up data science techniques focusing on industry applications. This course builds upon the foundations laid on operating system, databases, and machine learning.'),('EE1219',4,'CyberSecurity','This course introduces the NIST Cybersecurity framework and sensitizes the students on security risks, malware, and social engineering attacks. It builds skills for ensuring good cyber hygiene, monitoring, and reporting cyber-attacks for an online computer. '),('GC1101',2,'Google Cloud Lab','The objective of this course is to provide hands-on training on Google cloud. The students will learn the infrastructure and services provided by Google cloud based on well-known practices.');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculty`
--

DROP TABLE IF EXISTS `faculty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faculty` (
  `fac_id` varchar(15) NOT NULL,
  `off_email` varchar(50) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `specialization` varchar(50) DEFAULT NULL,
  `designation` varchar(30) DEFAULT NULL,
  `salary` int DEFAULT NULL,
  `institute` varchar(50) DEFAULT NULL,
  `branch` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`fac_id`,`off_email`),
  CONSTRAINT `fk_authfaculty` FOREIGN KEY (`fac_id`, `off_email`) REFERENCES `auths` (`id`, `email`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty`
--

LOCK TABLES `faculty` WRITE;
/*!40000 ALTER TABLE `faculty` DISABLE KEYS */;
INSERT INTO `faculty` VALUES ('2020IET001','dramitsinhal@jklu.edu.in','Amit','','Sinhal','Software Engineering','Professor',100000,'IET','Computer Science'),('2020IET002','devendrabhavsar@jklu.edu.in','Devendra','','Bhavsar','Computer Science','Assistant Professor',70000,'IET','Computer Science');
/*!40000 ALTER TABLE `faculty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculty_info`
--

DROP TABLE IF EXISTS `faculty_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faculty_info` (
  `fac_id` varchar(15) NOT NULL,
  `gender` char(1) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `perm_address` varchar(300) DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  `married` tinyint(1) DEFAULT NULL,
  `undergraduate` varchar(200) DEFAULT NULL,
  `postgraduate` varchar(200) DEFAULT NULL,
  `PhD` varchar(200) DEFAULT NULL,
  `pers_email` varchar(50) DEFAULT NULL,
  `contactno` bigint DEFAULT NULL,
  `emergency_contactno` bigint DEFAULT NULL,
  `spouse_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`fac_id`),
  CONSTRAINT `fk_facultyinfo` FOREIGN KEY (`fac_id`) REFERENCES `faculty` (`fac_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty_info`
--

LOCK TABLES `faculty_info` WRITE;
/*!40000 ALTER TABLE `faculty_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `faculty_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grades`
--

DROP TABLE IF EXISTS `grades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grades` (
  `grade_id` int NOT NULL,
  `Grade` varchar(2) DEFAULT NULL,
  `Grade_point` int DEFAULT NULL,
  `upperbound` int DEFAULT NULL,
  `lowerbound` int DEFAULT NULL,
  PRIMARY KEY (`grade_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grades`
--

LOCK TABLES `grades` WRITE;
/*!40000 ALTER TABLE `grades` DISABLE KEYS */;
INSERT INTO `grades` VALUES (1,'O',10,100,90),(2,'A+',9,89,80),(3,'A',8,79,70),(4,'B+',7,69,60),(5,'B',6,59,50),(6,'C',5,49,40),(7,'D',4,39,30),(8,'E',3,29,20),(9,'F',0,19,0);
/*!40000 ALTER TABLE `grades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studenrolledcour`
--

DROP TABLE IF EXISTS `studenrolledcour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studenrolledcour` (
  `rollno` varchar(15) NOT NULL,
  `course_code` varchar(6) NOT NULL,
  `grade_id` int DEFAULT NULL,
  `semester` int NOT NULL,
  PRIMARY KEY (`rollno`,`course_code`,`semester`),
  KEY `fk_coursereg_idx` (`course_code`),
  KEY `fk_gradeobt_idx` (`grade_id`),
  CONSTRAINT `fk_coursereg` FOREIGN KEY (`course_code`) REFERENCES `courses` (`course_code`) ON UPDATE CASCADE,
  CONSTRAINT `fk_gradeobt` FOREIGN KEY (`grade_id`) REFERENCES `grades` (`grade_id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_studenrolled` FOREIGN KEY (`rollno`) REFERENCES `student` (`rollno`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studenrolledcour`
--

LOCK TABLES `studenrolledcour` WRITE;
/*!40000 ALTER TABLE `studenrolledcour` DISABLE KEYS */;
INSERT INTO `studenrolledcour` VALUES ('2020BTechCSE049','CS1113',NULL,6),('2020BTechCSE049','CS1212',NULL,6),('2020BTechCSE049','CS1213',NULL,6);
/*!40000 ALTER TABLE `studenrolledcour` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `rollno` varchar(15) NOT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `middle_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `off_email` varchar(50) NOT NULL,
  `enr_program` varchar(50) DEFAULT NULL,
  `cur_semester` int DEFAULT NULL,
  `batch` year DEFAULT NULL,
  `institute` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`rollno`,`off_email`),
  CONSTRAINT `fk_authstudent` FOREIGN KEY (`rollno`, `off_email`) REFERENCES `auths` (`id`, `email`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('2020BTechCSE002','Abhishek','','Arora','abhishekarora@jklu.edu.in','B. Tech. Computer Science',6,2020,'IET'),('2020BTechCSE030','Divyanshu','','Singh','divyanshusingh@jklu.edu.in','B. Tech. Computer Science',6,2020,'IET'),('2020BTechCSE046','Megha','','Khangarot','meghakhangarot@jklu.edu.in','B. Tech. Computer Science',6,2020,'IET'),('2020BTechCSE049','Mohak','','Goyal','mohakgoyal@jklu.edu.in','B. Tech. Computer Science',6,2020,'IET'),('2020BTechCSE051','Mridul','','Goyal','mridulgoyal@jklu.edu.in','B. Tech. Computer Science',6,2020,'IET');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_info`
--

DROP TABLE IF EXISTS `student_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_info` (
  `rollno` varchar(15) NOT NULL,
  `pers_email` varchar(50) DEFAULT NULL,
  `contactno` bigint DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `fathers_name` varchar(100) DEFAULT NULL,
  `mothers_name` varchar(100) DEFAULT NULL,
  `perm_address` varchar(300) DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  `emergency_contactno` bigint DEFAULT NULL,
  `data_of_birth` date DEFAULT NULL,
  PRIMARY KEY (`rollno`),
  CONSTRAINT `fk_studentinfo` FOREIGN KEY (`rollno`) REFERENCES `student` (`rollno`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_info`
--

LOCK TABLES `student_info` WRITE;
/*!40000 ALTER TABLE `student_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-19  1:26:51
