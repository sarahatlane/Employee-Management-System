<!-- Admin user -->

<?php
$servername = "localhost:3306";
$username = "root";
$password = "";
$dbname = "php-employees";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname,4306);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
}
?>
// if (!$conn) {
//   die("Connection failed: " . mysqli_connect_error());
// }
// echo "Connected successfully";

