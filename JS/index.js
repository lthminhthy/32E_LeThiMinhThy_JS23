// Bài 1
document.getElementById('btntinhLuong').onclick = function () {
    var luongNgay = document.getElementById('luongNgay').value;
    var soNgay = document.getElementById('soNgay').value;

    var soTienLuong = 0;
    soTienLuong = luongNgay * soNgay;

    document.getElementById('soTienLuong').innerHTML = soTienLuong;
}




// Bài 2

document.getElementById('btntinhTrungBinh').onclick = function () {
    var soThu1 = Number(document.getElementById('soThu1').value);

    var soThu2 = Number(document.getElementById('soThu2').value);

    var soThu3 = Number(document.getElementById('soThu3').value);

    var soThu4 = Number(document.getElementById('soThu4').value);

    var soThu5 = Number(document.getElementById('soThu5').value);

    var giaTriTB = 0;
    giaTriTB = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
    document.getElementById('giaTriTB').innerHTML = giaTriTB;
}


// bài 3
document.getElementById('btntinhTien').onclick = function () {
    var soTienUSD = document.getElementById('soTienUSD').value;
    var tienQuyDoi = 0;
    var tiGia = 23500;
    tienQuyDoi = tiGia * soTienUSD;
    document.getElementById('tienQuyDoi').innerHTML = tienQuyDoi + "VND";
}


// bài 4
document.getElementById('btntinhDTCV').onclick = function () {
    var chieuDai = Number(document.getElementById('chieuDai').value);

    var chieuRong = Number(document.getElementById('chieuRong').value);

    var tinhDienTich = 0;
    tinhDienTich = chieuDai * chieuRong;

    var tinhChuVi = 0;
    tinhChuVi = (chieuDai + chieuRong) * 2;
    document.getElementById('tinhDienTich').innerHTML = "Diện tích là: " + tinhDienTich;
    document.getElementById('tinhChuVi').innerHTML = "Chu vi là: " + tinhChuVi;


}




// Bài 5
document.getElementById('btntinhTongKySo').onclick = function () {
    var soCanTinh = Number(document.getElementById("soCanTinh").value);

    var hangDonVi = Math.floor(soCanTinh % 10);
    var hangChuc = Math.floor(soCanTinh / 10);
    var tong = hangDonVi + hangChuc;
document.getElementById('tong').innerHTML = "Tổng 2 ký số là: " + tong; 
}



