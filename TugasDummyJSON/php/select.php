<?php

    require_once "connect.php";

    $iddata = stripslashes(file_get_contents("php://input"));
    $iddataInput = json_decode($iddata, true);
    $idData = $iddataInput['id'];

    if ($idData) {
        $sql = "SELECT * FROM tblpelanggan where id = $idData";
        $result = mysqli_query($con, $sql);
        echo json_encode($result);
    }
    else {
        $sql = "SELECT * FROM tblpelanggan";
        $result = mysqli_query($con, $sql);

        if (mysqli_num_rows($result) > 0) {
            $data = array();
            while ($row=mysqli_fetch_assoc($result)) {
                $data[] = $row;
            }
        }
        echo json_encode($data);
    }
    
?>