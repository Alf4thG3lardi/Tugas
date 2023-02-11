<?php

    require_once "connect.php";


    $data = stripslashes(file_get_contents("php://input"));
    $dataInput = json_decode($data, true);

    $pelanggan = $dataInput['nama'];
    $alamat = $dataInput['alamat'];
    $telp = $dataInput['telp'];

    if (!empty($pelanggan) && !empty($alamat) && !empty($telp)) {

        $sql = "INSERT INTO `tblpelanggan` (`id`, `pelanggan`, `alamat`, `telp`) VALUES (NULL, '$pelanggan', '$alamat', '$telp')";

        if ($result = mysqli_query($con, $sql)) {
            echo "Successfully Saved";
        } else {
            echo "Failed Successfully";
        }
    } else {
        echo "As empty as your bank account";
    }
?>