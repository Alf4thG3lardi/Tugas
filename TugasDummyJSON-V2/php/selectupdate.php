<?php

    require_once "connect.php";

    $iddata = stripslashes(file_get_contents("php://input"));
    $iddataInput = json_decode($iddata, true);
    $idData = $iddataInput['id'];

    $sql = "SELECT * FROM tblpelanggan where id = $idData";
    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_assoc($result);
    echo json_encode($row);
?>