<?php
$target_dir = "uploads/";

$uploadOk = 1;

$content=file_get_contents( $_FILES['fileToUpload']['tmp_name'] );
$info = pathinfo($_FILES['fileToUpload']['name']);
$ext = $info['extension'];

$arr = explode("\n", $content);

$target_file = $target_dir .substr($arr[0],0,-1).".".$ext;


if (file_exists($target_file)) {
     echo "Sorry, file already exists.";
     $uploadOk = 0;
 }

 if ($_FILES["fileToUpload"]["size"] > 500000) {
     echo "Sorry, your file is too large.";
     $uploadOk = 0;
}


if($uploadOk==1){
$myfile = fopen("CSE1001.txt", "a+");
$txt=substr($arr[0],0,-1).":".substr($arr[1],8)."\n";
fwrite($myfile, $txt);
fclose($myfile);


$myfile = fopen("CSE1002.txt", "a+");
$txt=substr($arr[0],0,-1).":".substr($arr[2],8)."\n";
fwrite($myfile, $txt);
fclose($myfile);

$myfile = fopen("CSE1003.txt", "a+");
$txt=substr($arr[0],0,-1).":".substr($arr[3],8)."\n";
fwrite($myfile, $txt);
fclose($myfile);
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ".$arr[0]. " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}

$myfile = fopen("CSE1001.txt", "r");
$text=fread($myfile,filesize('CSE1001.txt'));

$arr=explode("\n", $text);
$num=[];

for($i=0;$i<count($arr);$i++)
{
    array_push($num,(int)substr($arr[$i],10,2));
}

echo "AVERAGE is: ".array_sum($num)/(count($num)-1)."<br>";
echo "HIGHEST is: ".max($num);

?>