<?php

    require_once "connect.php";

    $data = stripslashes(file_get_contents("php://input"));
    $dataInput = json_decode($data, true);

    $idorder = $dataInput['idorder'];
    $idbarang = $dataInput['idbarang'];
    $jumlah = 1;
    $harga = $dataInput['harga'];
    $barang = $dataInput['barang'];
    $idpelanggan = $dataInput['idpelanggan'];
    $pelanggan = $dataInput['pelanggan'];
    $alamat = $dataInput['alamat'];

    $sql = "INSERT INTO tblorderdetail VALUES (null, $idorder, $idbarang, $jumlah, $harga, '$barang', $idpelanggan, '$pelanggan', '$alamat')";
    if ($result = mysqli_query($con, $sql)) {
        echo "Successfully Saved";
    } else {
        echo "Failed Successfully";
    }

?>