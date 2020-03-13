<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "inventory";

$ID=$_POST["id"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "DELETE FROM inventory_stock WHERE Id='$ID';";

if ($conn->query($sql) === TRUE) {
    echo 'Record deleted successfully';
} 
else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>


