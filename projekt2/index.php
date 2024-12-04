<!DOCTYPE html>
<html lang="en">
<head>
<?php
$db = new mysqli("localhost", "root", "", "salon1");
?>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Konfigurator wyposażenia</title>
<link rel="stylesheet" href="styl.css">
<script src="index.js" defer></script>
</head>
<body>
<main>
    <header>
        <img src="baner.jpg" alt="baner">
    </header>
        <div class="left">
        <hr>
<h2>Model</h2>
    <select id="model">
        <option></option>
        <?php
        $tak = $db->query("SELECT id, marka, model, rocznik FROM modele ORDER BY marka, model, rocznik;");
        while($row = $tak->fetch_assoc()) {
        ?>
            <option value="<?=$row["id"]?>"><?=$row["marka"]?> <?=$row["model"]?> <?=$row["rocznik"]?></option>
        <?php
        }
        ?>
    </select>

<h2>Kolor</h2>
    <select id="kolor">
        <option>szary</option>
        <option>niebieski</option>
        <option>czerwony</option>
        <option>żółty</option>
        <option>zielony</option>
    </select>
    <hr>
    </div>
    <div class="right">

<h1>Twój samochód</h1>
    <img src="szary.png" alt="foto" id="samohud">
    <hr>
    <div class="info">

<h1>Model</h1>
        <?php
        $model_id = $_GET["model"] ?? 1;
        $asdfa = $db->query("SELECT marka, model, rocznik, cena FROM modele WHERE id = $model_id");
        $car = $asdfa->fetch_assoc();
        ?>
    <table>
        <tr>
            <td><?=$car["marka"]?> <?=$car["model"]?> <?=$car["rocznik"]?></td>
            <td><?=$car["cena"]?> zł</td>
        </tr>
    </table>   

<h1>Wyposażenie dodatkowe</h1>
    <table>
        <?php
            $asdfa = $db->query("SELECT doposazenie, doplata FROM doposazenie WHERE modele_id = $model_id");
            while($row = $asdfa->fetch_assoc()) {
        ?>
        <tr>
            <td><?=$row["doposazenie"]?></td>
            <td><?=$row["doplata"]?> zł</td>
        </tr>
        <?php
        }
        ?>
    </table>
            </div>
        </div>
        <footer>
            Autor strony: <i>Slazyk</i>
        </footer>
    </main>
</body>
</html>