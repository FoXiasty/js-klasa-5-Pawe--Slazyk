<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="index.js" defer></script>
    <link rel="stylesheet" href="index.css">
</head>
    
<body>
    <form action="index.php" method="post" onsubmit="return validateForm()">
        
<?php
    $success = true;
    try{
        $DB = new mysqli(
            "127.0.0.1",
            "paszport1",
            "Paszport2024",
            "paszport1",
        );
    } 
    catch (Exception $e){
        $success = false;
?>
    <p class="error">Błąd łączenia z bazą danych: <?= $e ?></p>
<?php
    }

    if($success){
?>
        <p class="success">Połączono z bazą danych paszport1</p>
<?php
    }

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $PESEL = $_POST["pesel"];
        $firstname = $_POST["imie"];
        $lastname = $_POST["nazwiko"];
        $color = $_POST["kolor"];
        $DB -> query("INSERT INTO paszporty VALUES ('$PESEL' , '$firstname' , '$lastname' , '$color')");
    }
?>
        <table>
            <tr>
                <td> <label for="pesel"> PESEL</label> </td> 
                <td> <input type="text" id="pesel" name="pesel"> </td>
            </tr>
            <tr>
                <td> <label for="imie"> Imię</label> </td> 
                <td> <input type="text" id="imie" name="imie"> </td>
            </tr>
            <tr>
                <td> <label for="nazwisko"> Nazwisko</label> </td> 
                <td> <input type="text" id="nazwisko" name="nazwisko"> </td>
            </tr>
        </table>

        <fieldset>
            <legend> Kolor oczu </legend>
                <input type="radio" id="niebieskie" name="kolor_oczu" value="1">
                <label for="niebieskie">niebieskie</label><br>

                <input type="radio" id="zielone" name="kolor_oczu" value="2">
                <label for="zielone">zielone</label><br>

                <input type="radio" id="piwne" name="kolor_oczu" value="3">
                <label for="piwne">piwne</label><br>
        </fieldset>

        <button id="baton" type="submit"> Zapisz</button>
    </form>
    
</body>
</html>