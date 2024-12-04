-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 29 Lis 2021, 10:15
-- Wersja serwera: 10.4.16-MariaDB
-- Wersja PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `salon`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `dodatki`
--

CREATE TABLE `dodatki` (
  `nazwa` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `dodatki`
--

INSERT INTO `dodatki` (`nazwa`) VALUES
('ABS'),
('Climatronic'),
('Czujnik parkowania'),
('Diesel'),
('Electric'),
('Hybrid'),
('Kamera cofania'),
('Nawigacja'),
('Zestaw HiFi');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `doposazenie`
--

CREATE TABLE `doposazenie` (
  `modele_id` int(10) UNSIGNED NOT NULL,
  `doposazenie` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci NOT NULL,
  `doplata` decimal(10,2) NOT NULL,
  `VAT` decimal(4,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `doposazenie`
--

INSERT INTO `doposazenie` (`modele_id`, `doposazenie`, `doplata`, `VAT`) VALUES
(1, 'ABS', '1350.00', '0.00'),
(2, 'Climatronic', '2400.00', '0.00'),
(5, 'Climatronic', '1200.00', '0.00'),
(6, 'Climatronic', '2500.00', '0.00'),
(7, 'Climatronic', '12312.00', '99.99'),
(8, 'Climatronic', '2000.00', '0.00'),
(1, 'Czujnik parkowania', '750.00', '0.00'),
(6, 'Czujnik parkowania', '250.00', '0.00'),
(2, 'Diesel', '1600.00', '0.00'),
(5, 'Diesel', '1200.00', '0.00'),
(8, 'Diesel', '2800.00', '0.00'),
(9, 'Diesel', '899.00', '0.00'),
(9, 'Electric', '15700.00', '0.00'),
(6, 'Hybrid', '21000.00', '0.00'),
(2, 'Kamera cofania', '920.00', '0.00'),
(4, 'Kamera cofania', '1100.00', '0.00'),
(7, 'Kamera cofania', '575.00', '0.00'),
(8, 'Kamera cofania', '150.00', '0.00'),
(9, 'Kamera cofania', '200.00', '0.00'),
(4, 'Nawigacja', '750.00', '0.00'),
(6, 'Nawigacja', '900.00', '0.00'),
(7, 'Nawigacja', '750.00', '0.00'),
(9, 'Nawigacja', '850.00', '0.00'),
(5, 'Zestaw HiFi', '1300.00', '0.00'),
(6, 'Zestaw HiFi', '1500.00', '0.00'),
(7, 'Zestaw HiFi', '1250.00', '0.00'),
(8, 'Zestaw HiFi', '1450.00', '0.00'),
(9, 'Zestaw HiFi', '930.00', '0.00');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `modele`
--

CREATE TABLE `modele` (
  `id` int(10) UNSIGNED NOT NULL,
  `marka` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci NOT NULL,
  `model` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci NOT NULL,
  `cena` decimal(10,2) NOT NULL,
  `rocznik` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `modele`
--

INSERT INTO `modele` (`id`, `marka`, `model`, `cena`, `rocznik`) VALUES
(1, 'Seat', 'Leon', '75000.00', 2019),
(2, 'Seat', 'Ibiza', '55000.00', 2020),
(4, 'Seat', 'Leon', '80000.00', 2020),
(5, 'Seat', 'Ibiza', '50000.00', 2019),
(6, 'Seat', 'Leon', '85000.00', 2021),
(7, 'Seat', 'Ibiza', '70000.00', 2021),
(8, 'Toyota', 'Avensis', '120000.00', 2020),
(9, 'Toyota', 'Corolla', '90000.00', 2021),
(10, 'BMW', 'x3', '125000.00', 2021);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `dodatki`
--
ALTER TABLE `dodatki`
  ADD PRIMARY KEY (`nazwa`);

--
-- Indeksy dla tabeli `doposazenie`
--
ALTER TABLE `doposazenie`
  ADD PRIMARY KEY (`doposazenie`,`modele_id`),
  ADD KEY `modele_id` (`modele_id`);

--
-- Indeksy dla tabeli `modele`
--
ALTER TABLE `modele`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `modele`
--
ALTER TABLE `modele`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `doposazenie`
--
ALTER TABLE `doposazenie`
  ADD CONSTRAINT `doposazenie_ibfk_2` FOREIGN KEY (`modele_id`) REFERENCES `modele` (`id`),
  ADD CONSTRAINT `doposazenie_ibfk_3` FOREIGN KEY (`doposazenie`) REFERENCES `dodatki` (`nazwa`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
