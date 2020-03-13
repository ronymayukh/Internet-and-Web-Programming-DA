<?php
$path = 'www.da3.com/mayukh_ghosh/string.php';
$file_name = substr(strrchr($path, "/"), 1);
echo "path: $path <br>";
echo $file_name;
?>