<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Podlączenie</title>
</head>
<body>
  <?php

$username="root";
$password="";
$database="Pasha_loh";

mysql_connect('localhost',$username,$password);
@mysql_select_db($database) or die("Nie odnaleziono bazy danych");
$query="SELECT * FROM Pasha_loh";
$result=mysql_query($query);

$num=mysql_numrows($result);

mysql_close();

echo "<b><center>Struktura bazy danych</center></b><br><br>";

$i=0;
while ($i < $num) {

$id=mysql_result($result,$i,"id");
$Film=mysql_result($result,$i,"film");
$Rok=mysql_result($result,$i,"rok");
$Zbior=mysql_result($result,$i,"zbior");



echo "<b>$id $film,</b><br>telefon stacjonarny: $rok<br>Telefon komórkowy: $zbior<br>";

$i++;
}

?>
</body>
</html>