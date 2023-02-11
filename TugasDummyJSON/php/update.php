<?php

    require_once "connect.php";


    $data = stripslashes(file_get_contents("php://input"));
    $dataInput = json_decode($data, true);

    $id = $dataInput['id'];
    $pelanggan = $dataInput['nama'];
    $alamat = $dataInput['alamat'];
    $telp = $dataInput['telp'];

    if (!empty($pelanggan) && !empty($alamat) && !empty($telp)) {

        $sql = "UPDATE `tblpelanggan` SET pelanggan = '$pelanggan', alamat = '$alamat',telp = '$telp' where id = $id";

        if ($result = mysqli_query($con, $sql)) {
            echo "Successfully Changed";
        } else {
            echo "Failed Successfully";
        }
    } else {
        echo "As empty as your bank account";
    }
?>