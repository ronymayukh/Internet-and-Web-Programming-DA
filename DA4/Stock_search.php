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

$sql = "SELECT * FROM inventory_stock WHERE id='$ID'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["ID"]. "<br>Category: " . $row["Category"]. "<br>Name: " . $row["Name"]."<br>Srock: " . $row["Stock"]. "<br><br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>


