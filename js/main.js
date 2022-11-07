var listNumber = [];
function addNumber() {
    var number = document.getElementById("txtNumber").value * 1;

    listNumber.push(number);

    document.getElementById("infoListNumber").innerHTML = listNumber;
}

/**
 *  Bài 1 : Tinh tong cac so chan
 */
function tinhTongSoDuong() {
    var tong = 0;

    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            tong += listNumber[i];
        }
    }

    var result = "Tong cac so duong la: " + tong;

    document.getElementById("infoTongDuong").innerHTML = result;
}

/**
* Bài 2 Dem so duong
*/
function demSoDuong() {
    /**
     * 0. Tao bien dem = 0;
     * 1. Duyet mang listNumber
     * 2. Nếu phần tử lớn hơn 0
     *    => true => tăng biến đếm
     * 3. Show kết quả
     */

    if (listNumber.length === 0) {
        alert("Vui long nhap so!");
        return;
    }

    var dem = 0;

    for (var i = 0; i < listNumber.length; i++) {
        var item = listNumber[i];
        if (item > 0) {
            dem++;
        }
    }

    var result = "Có: " + dem + " số dương";
    document.getElementById("infoDemSoDuong").innerHTML = result;
}

/**
* Bài 3 Tim so nho nhat
*/

function soNhoNhat() {
    var min = listNumber[0];
    for (var i = 1; i < listNumber.length; i++) {
        var item = listNumber[i];
        if (min > item) {
            min = item;
        }
    }
    var result = "Số nhỏ nhất: " + min;
    document.getElementById("infoSoNhoNhat").innerHTML = result;
}

/**
* Bài 4 Tim so duong nho nhat
*/

function soDuongNhoNhat() {
    var number1 = [];
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            number1[i] = listNumber[i]
        }
    }
    var min = number1[0];
    for (var i = 1; i < number1.length; i++) {
        var item = number1[i];
        if (min > item) {
            min = item;
        }
    }

    var result = min;

    document.getElementById("infoSoDuongNhoNhat").innerHTML = result;
}


/**
* Bài 5 Tim so chan cuoi cung
*/

function soChanCuoiCung() {
    var number2 = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] % 2 === 0) {
            number2 = listNumber[i];
        }
    }
    var result = "số chẵn cuối cùng: " + number2

    document.getElementById("infoSoChanCuoiCung").innerHTML = result;
}

/**
* Bài 6 Doi cho
*/
function doiCho() {
    var local1 = document.getElementById("local1");
    var local2 = document.getElementById("local2");
    var temp = listNumber[local1];
    listNumber[local2] = listNumber[local1]
    listNumber[local2] = temp
    var result = "mảng sau khi đổi: " + listNumber
    document.getElementById("infoDoiCho").innerHTML = result;
}

/**
 * Bài 7 Sap xep tang dan
 */
function sapXepTangDan() {
    for (var i = 0; i < listNumber.length - 1; i++) {
        for (var j = i + 1; j < listNumber.length; j++) {
            if (listNumber[i] > listNumber[j]) {
                var temp = listNumber[i];
                listNumber[i] = listNumber[j]
                listNumber[j] = temp
            }
        }
    }
    var result = listNumber
    document.getElementById("infoSapXepTangDan").innerHTML = result;
}

/**
 * Bài 8 Tìm số nguyên tố đầu tiên
 */
function soNguyenToDauTien() {
    var number3 = 0;
    if (listNumber[i] > 2) {
        for (var i = 2; i <= Math.sqrt(listNumber[i]); i++) {
            if ((listNumber[i] % i) !== 0) {
                number3 = listNumber[i];
                break
            }

        }
    }
    var result = number3;
    document.getElementById("infoSoNguyenToDauTien").innerHTML = result;
}

/**
 * Bài 9 Đếm số nguyên
 */
function demSoNguyen() {
    var dem = 0;

    for (var i = 0; i < listNumber.length; i++) {
        var item = listNumber[i];
        if (Number.isInteger(item)) {
            dem++;
        }
    }

    var result = "Có: " + dem + " số nguyên";
    document.getElementById("infoDemSoNguyen").innerHTML = result;
}

/**
 * Bài 10  So sánh số âm và số dương
 */
function soSanhAmDuong() {
    var dem1 = 0;
    var dem2 = 0;

    for (var i = 0; i < listNumber.length; i++) {
        var item = listNumber[i];
        if (item > 0) {
            dem1++;
        }
        if (item < 0) {
            dem2++;
        }
    }
    if (dem1 = dem2) {
        var result = "số âm = số dương"
    }
    if (dem1 < dem2) {
        var result = "số âm > số dương"
    }
    if (dem1 > dem2) {
        var result = "số âm < số dương"
    }

    document.getElementById("infoSoSanhAmDuong").innerHTML = result;
}
