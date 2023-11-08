
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "php-employees";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname, 4306);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
// echo "Connected successfully";

