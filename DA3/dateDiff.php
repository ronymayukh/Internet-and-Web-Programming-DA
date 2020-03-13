<!Doctype html>
<html>
<head></head>
<body>
<?php
$date1 = new DateTime('2000-01-12 04:12:51');
$date2 = $date1->diff(new DateTime('2020-03-09 22:00:00'));
echo $date2->days." Total days <br>";
echo $date2->y." years <br>";
echo $date2->m." months <br>";
echo $date2->d." days <br>";
echo $date2->h." hours <br>";
echo $date2->i." minutes <br>";
echo $date2->s." seconds <br>";
?>

</html>