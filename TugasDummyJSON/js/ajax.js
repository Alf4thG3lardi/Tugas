// ITEM
let Url = "https://dummyjson.com/products";

function getData() {
    let out;
    $.ajax({
        type: "get",
        url: Url,
        cache: false,
        data: "contentType",
        dataType: "json",
        success: function (response) {
            $.each(response.products, function (key, val) { 
                out += `<tr>
                <td>${val.id}</td>
                <td>${val.title}</td>
                <td>${val.description}</td>
                <td>
                    <button class="btn btn-warning" id="update" data-bs-toggle="modal" data-bs-target="#exampleModal" value="${val.id}">UPDATE</button>
                </td>
                <td>
                    <button class="btn btn-danger" id="delete" value="${val.id}">DELETE</button>
                </td>
                </tr>`;
            });
            $("#tbody").html(out);
        }
    });
}
function showData() {
    let out = "<h1>Chose a Category</h1>";
    $.ajax({
        type: "get",
        url: Url+"/categories",
        cache: false,
        data: "contentType",
        dataType: "json",
        success: function (response) {
            $.each(response, function (key, val) { 
                out += `<button class='btn btn-outline-dark m-1 ' id="filter" value="${val}">#${val}</button>`;
            });
            $("#isi").html(out);
        }
    });
}

function filterData(Cat) {
    let out;
    $.ajax({
        type: "get",
        url: Url+"/category/"+Cat,
        cache: false,
        data: "contentType",
        dataType: "json",
        success: function (response) {
            $.each(response.products, function (key, val) { 
                out += `<tr>
                <td>${val.id}</td>
                <td>${val.title}</td>
                <td>${val.description}</td>
                <td>
                    <button class="btn btn-warning" id="update" data-bs-toggle="modal" data-bs-target="#exampleModal" value="${val.id}">UPDATE</button>
                </td>
                <td>
                    <button class="btn btn-danger" id="delete" value="${val.id}">DELETE</button>
                </td>
                </tr>
                </tr>`;
            });
            $("#tbody").html(out);
        }
    });      
}

function form(id) {
    let out = '<option selected>Choose...</option>';
    if (id) {
        $.ajax({
            type: "get",
            url: Url+"/"+id,
            data: "contentType",
            dataType: "json",
            success: function (response) {
                var cat = response.category;
                $.ajax({
                    type: "get",
                    url: Url+"/categories",
                    cache: false,
                    data: "contentType",
                    dataType: "json",
                    success: function (response) {
                        $.each(response, function (key, val) { 
                                if (cat == val) {
                                    out += `<option value="${val}" selected >${val}</option>`;
                                } else{
                                    out += `<option value="${val}">${val}</option>`;
                                }
                        });
                        $("#cat").html(out);
                    }
                });
            }
        });
    } else {
        $.ajax({
            type: "get",
            url: Url+"/categories",
            cache: false,
            data: "contentType",
            dataType: "json",
            success: function (response) {
                $.each(response, function (key, val) { 
                        out += `<option value="${val}">${val}</option>`;
                });
                $("#cat").html(out);
            }
        });
    }
}

function addData() {
    let data ={
        title: title, 
        description: description,
        category: category,
    };
    $.ajax({
        type: "POST",
        url: Url+"/add",
        data: JSON.stringify({
            title: data['title'],
            description: data['description'],
            category: data['category'],
            /* other product data */
        }),
        contentType: "application./json",
        success: function (response) {
            console.log(response);
            alert(data['title'] + " Added");
        }
    });
    // fetch('https://dummyjson.com/products/add', {
    // method: 'POST',
    // headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({
    //     title: data['title'],
    //     description: data['description'],
    //     category: data['category'],
    //     /* other product data */
    // })
    // })
    // .then(res => res.json())
    // .then(console.log);
}

function selectUpdateData(id) {
    $.ajax({
        type: "get",
        url: Url+"/"+id,
        cache: false,
        data: "contentType",
        dataType: "json",
        success: function (response) {

            $("#id").val(response.id);
            $("#title").val(response.title);
            $("#des").val(response.description);
            $("#cat").val(response.category);

        }
    });
    
}

function updateData(id) {
    let data = {
        title: title,
        description: description,
        category: category,
    }
    $.ajax({
        method: "PATCH",
        url: Url+"/"+id,
        contentType: "application/json",
        data:  JSON.stringify({
            title: data["title"],
            description: data["description"],
            category: data["category"]
            }),
        success: function (response) {
            console.log(response)
            alert(data["title"] + " Updated")
        }
    });
    // fetch(Url+"/"+id, {
    //     method: 'PATCH', /* or PATCH */
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         title: data["title"],
    //         description: data["description"],
    //         category: data["category"]
    //     })
    // })
    // .then(res => res.json())
    // .then(console.log)type
    // .then(alert(data["title"] + " Updated"))

}

function deleteData(id) {
    $.ajax({
        type: "DELETE",
        url: Url+"/"+id,
        success: function (response) {
            console.log(response)
            alert("Deleted");
        }
    });

    // fetch(Url+"/"+id, {
    // method: 'DELETE',
    // })
    // .then(res => res.json())
    // .then(console.log)
    // .then(alert("Deleted"));
}

$("#get").click(function (e) { 
    e.preventDefault();
    getData();
});
$("#show").click(function (e) { 
    e.preventDefault();
    showData();
});
$("#post").click(function (e) {
    e.preventDefault();
    form();
});
$("#save").click(function (e) { 
    e.preventDefault();
    id = $("#id").val();
    title = $("#title").val();
    description = $("#des").val();
    category = $("#cat").val();

    if (id) {
        updateData(id);
    } else {
        addData()
    }
});
$(document).on("click", "#filter", function (e) {
    let cat = $(this).attr("value");
    filterData(cat)
})
$(document).on("click", "#update", function (e) {
    let id =  $(this).attr("value");
    form(id);
    selectUpdateData(id);
})
$(document).on("click", "#delete", function (e) {
    let id = $(this).attr("value");
    deleteData(id);
})

// PELANGGAN 

function getDataCustom() {
    $.ajax({
        type: "get",
        url: "php/select.php",
        dataType: "json",
        success: function (response) {
            let out = "";
            $.each(response, function (key, val) { 
                out += `<tr>
                    <td>${val.pelanggan}</td>
                    <td>${val.alamat}</td>
                    <td>${val.telp}</td>
                    <td>
                        <button class="btn btn-warning" id="update-cus" value="${val.id}">Update</button>
                    </td>
                    <td>
                        <button class="btn btn-danger" id="delete-cus" value="${val.id}">DELETE</button>
                    </td>
                </tr>`;
            });
            $("#tbody").html(out);
        }
    });
}

function formCustom() {
    let out = `
    <input class="form-control" hidden type="text" name="" id="id">

    <label class="form-label mt-4" for="">Nama</label>
    <input class="form-control" type="text" name="" id="nama">
    
    <label class="form-label mt-4" for="">Alamat</label>
    <input class="form-control" type="text" name="" id="alamat">

    <label for="" class="form-label mt-4">Telp</label>
    <input class="form-control" type="number" name="" id="telp">
    
    <input type="submit" id="cus-submit" class="btn btn-primary mt-4" value="Save">`;
    $("#isi").html(out);

}

function addDataCustom() {
    let data = {
        nama: nama,
        alamat: alamat, 
        telp: telp
    };
    $.ajax({
        type: "post",
        url: "php/insert.php",
        cache: false,
        data: JSON.stringify(data),
        success: function (response) {
            alert(response);
        }
    });
}

function selectUpdateDataCustom(id) {
    let Id = {
        id: id
    }
    $.ajax({
        type: "post",
        url: "php/selectupdate.php",
        cache: false, 
        data: JSON.stringify(Id),
        success: function (response) {
            let data = JSON.parse(response)
            $("#id").val(data.id);
            $("#nama").val(data.pelanggan);
            $("#alamat").val(data.alamat);
            $("#telp").val(data.telp);
        }
    });
}

function upddateDataCustom(id) {
    let data = {
        id: id,
        nama: nama, 
        alamat: alamat, 
        telp: telp
    };
    $.ajax({
        type: "post",
        url: "php/update.php",
        cache: false,
        data: JSON.stringify(data),
        success: function (response) {
            alert(response);
        }
    });
}

function deleteDataCustom(id) {
    let Id = {
        id: id
    }
    $.ajax({
        type: "post",
        url: "php/delete.php",
        data: JSON.stringify(Id),
        success: function (response) {
            alert(response)
        }
    });
}
$("#get-custom").click(function (e) { 
    e.preventDefault();
    getDataCustom();
});

$("#post-custom").click(function (e) { 
    e.preventDefault();
    formCustom();
});

$(document).on("click", "#update-cus", function () {
    let id = $(this).attr("value");
    formCustom();
    selectUpdateDataCustom(id);
    // alert(id);
});

$(document).on("click", "#delete-cus", function () {
    let id = $(this).attr("value");
    deleteDataCustom(id);
});

$(document).on("click", "#cus-submit", function () {
    id = $("#id").val();
    nama = $("#nama").val();
    alamat = $("#alamat").val();
    telp = $("#telp").val();
    // alert(nama);
    if (id) {
        upddateDataCustom(id);
    } else {
        addDataCustom();
    }
})

//ORDER

function getDataOrder() {
    $.ajax({
        type: "get",
        url: "php/order.php",
        dataType: "json",
        success: function (response) {
            let out = "<tr>";
            $.each(response, function (key, val) { 
                out += `
                    <td>${getCustomDataOrder(val.idpelanggan)}</td>
                    <td>${val.tglorder}</td>
                    <td>${val.total}</td>
                    <td>
                        <button class="btn btn-primary" id="detail-order" value="${val.idorder}">Detail</button>
                    </td>
                </tr>`;
            });
            $("#tbody").html(out);
        }
    });
}
function getCustomDataOrder(id) {
    Id = {
        id: id
    }
    $.ajax({
        type: "post",
        url: "php/select.php",
        cache: false,
        data: JSON.stringify(Id),
        success: function (response) {
            let data = JSON.parse(response);
            return data.pelanggan;
        }
    });
}
function getDataDetail(id) {
    let Id = {
        id: id
    }
    $.ajax({
        type: "post",
        url: "php/orderdetail.php",
        cache: false,
        data: JSON.stringify(Id),
        success: function (response) {
            let data = JSON.parse(response);
            let out = `
                <table id="table" class="table table-striped-columns">
                    <thead>
                        <tr>
                            <th>Id Barang</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${data.idbarang}</td>
                        </tr>
                    </tbody>
                </table>
            `;
            $("#isi").html(out);
        }
    });
}
$("#get-order").click(function (e) { 
    e.preventDefault();
    getDataOrder();
});

$(document).on("click", "#detail-order", function () {
    id = $(this).attr("value");
    getDataDetail(id);
});