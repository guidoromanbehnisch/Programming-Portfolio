-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-12-2025 a las 16:26:16
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gearup`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `route_img` varchar(255) NOT NULL,
  `category` varchar(50) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `route_img`, `category`, `active`) VALUES
(1, 'Mouse SteelSeries Aerox 9a', 212950, 'https://res.cloudinary.com/dcimgacib/image/upload/v1764437669/mouse1_ooetvl.jpg', 'mouse', 1),
(2, 'Mouse Glorious Model O 2', 147350, 'https://res.cloudinary.com/dcimgacib/image/upload/v1764437670/mouse2_mduc3p.jpg', 'mouse', 1),
(3, 'Mouse Logitech G903', 123800, 'https://res.cloudinary.com/dcimgacib/image/upload/v1764437669/mouse3_cmdubt.jpg', 'mouse', 1),
(4, 'Mouse Logitech G305', 48900, 'https://res.cloudinary.com/dcimgacib/image/upload/v1764437670/mouse4_refefu.jpg', 'mouse', 1),
(5, 'Mouse Redragon Griffin M607 RGB Black', 21000, 'https://res.cloudinary.com/dcimgacib/image/upload/v1764437670/mouse5_uskxeq.jpg', 'mouse', 1),
(6, 'Teclado Hipermagnético Steel Series Apex', 404200, 'https://res.cloudinary.com/dcimgacib/image/upload/v1764437583/teclado1_jsll31.jpg', 'keyboard', 1),
(7, 'Teclado Mecanico Glorious GMMK3', 274350, 'https://res.cloudinary.com/dcimgacib/image/upload/v1764437583/teclado2_o9lijj.jpg', 'keyboard', 1),
(8, 'Teclado Logitech K120', 12350, 'https://res.cloudinary.com/dcimgacib/image/upload/v1764437583/teclado3_tuzfkq.jpg', 'keyboard', 1),
(9, 'Teclado Mecanico Redragon K550', 93100, 'https://res.cloudinary.com/dcimgacib/image/upload/v1764437583/teclado4_qmft73.jpg', 'keyboard', 1),
(10, 'Teclado Mecanico Redragon Kumara K552', 56900, 'https://res.cloudinary.com/dcimgacib/image/upload/v1764437583/teclado5_rhx7g4.jpg', 'keyboard', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
