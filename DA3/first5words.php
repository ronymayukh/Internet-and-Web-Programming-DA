<?php
$my_string = 'My name is Mayukh Ghosh, registration number is 18BCE0417';
echo "String: $my_string <br>";
echo implode(' ', array_slice(explode(' ', $my_string), 0, 5));
?>