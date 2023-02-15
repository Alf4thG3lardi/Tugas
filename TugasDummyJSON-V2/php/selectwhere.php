<?php

require_once "connect.php";

$id = $_GET["id"];
$sql = "SELECT * FROM tblpelanggan where id = $id";
$result = mysqli_query($con, $sql);

if (mysqli_num_rows($result) > 0) {
    $row=mysqli_fetch_assoc($result);
    echo json_encode($row);
}

?>