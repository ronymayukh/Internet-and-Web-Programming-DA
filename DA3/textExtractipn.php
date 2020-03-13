<?php
$my_text = 'Mayukh Ghosh [18BCE0417].';
preg_match('#\[(.*?)\]#', $my_text, $match);
print $match[1]."\n";
?>