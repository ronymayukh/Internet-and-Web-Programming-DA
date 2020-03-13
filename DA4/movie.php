<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "movies";
$cnt=0;

$search=strtolower($_POST["search"]);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT movie FROM movie_name";
$result = $conn->query($sql);

if ($result->num_rows > 0) {


    // output data of each row
    while($row = $result->fetch_assoc()) {


        if($search==strtolower($row["movie"])){
            $cnt++;
            echo $row["movie"]."<br>";
        }else if(strpos(strtolower($row["movie"]), $search) !== false){
            echo $row["movie"]."<br>";

        }else{
            
        }

        
    }
} else {
    echo "0 results";
}

echo "<br><br>Total number of exact matches are: ".$cnt;

$conn->close();
?>