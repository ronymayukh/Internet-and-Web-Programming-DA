<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "inventory";

$ID=$_POST["id"];
$Stock=$_POST["stock"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE inventory_stock SET Stock='$Stock' WHERE Id = '$ID'";

if ($conn->query($sql) === TRUE) {
    echo 'Record updated successfully';
} 
else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>


