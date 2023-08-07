<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Formularz</title>
</head>
<body>
   <form action="" method="get">
     <input type="text" name="ul" placeholder= "Wpisz ulibią liczbę"><br>
   <button type="submit" value="wyslij">Wyslij</button>
   </form>
   <?php

   $fp = fopen('text.txt', "a");
   $name=$_GET['ul'];
    fputs($fp, $name);
    fclose($fp);
?>
</body>
</html>