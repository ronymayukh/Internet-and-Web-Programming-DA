<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "inventory";

$ID=$_POST["id"];
$Category=$_POST["category"];
$Name=$_POST["name"];
$Stock=$_POST["stock"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO inventory_stock VALUES ('$ID', '$Category', '$Name','$Stock')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>


