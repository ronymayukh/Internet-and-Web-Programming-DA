<?php
$str = "Twinkle, twinkle, little star,\nHow I wonder what you are.\nUp above the world so high,\nLike a diamond in the sky.";
echo preg_replace('/\n/', ' ', trim($str));
?>