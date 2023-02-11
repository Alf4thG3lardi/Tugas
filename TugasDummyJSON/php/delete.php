<?php

    require_once "connect.php";


    $iddata = stripslashes(file_get_contents("php://input"));
    $iddataInput = json_decode($iddata, true);
    $idData = $iddataInput['id'];
    if (!empty($idData)) {

        $sql = "DELETE FROM tblpelanggan WHERE id = $idData";

        if ($result = mysqli_query($con, $sql)) {
            echo "Successfully Deleted";
        } else {
            echo "Failed Successfully";
        }
    } else {
        echo "Failed because idk y";
    }
?>