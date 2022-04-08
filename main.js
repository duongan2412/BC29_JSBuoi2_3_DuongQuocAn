// Bai 1
document.getElementById("btnTienLuong").onclick = function() {
    var luongNgay = document.getElementById("txtLuongngay").value * 1;
    var ngayCong = document.getElementById("txtNgaycong").value * 1;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var tienLuong = currentFormat.format(luongNgay * ngayCong);
    document.getElementById("tienLuong").innerHTML = "Lương của " + ngayCong + " ngày công là: " + tienLuong + " vnđ";
};
// Bai 1 End

// Bai 2
document.getElementById("btnTinhTB").onclick = function() {
    var soThu1 = document.getElementById("txtSothuc1").value * 1;
    var soThu2 = document.getElementById("txtSothuc2").value * 1;
    var soThu3 = document.getElementById("txtSothuc3").value * 1;
    var soThu4 = document.getElementById("txtSothuc4").value * 1;
    var soThu5 = document.getElementById("txtSothuc5").value * 1;
    var trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
    document.getElementById("tinhTB").innerHTML = "Trung bình 5 số trên là: " + trungBinh;
};
// Bai 2 End

// Bai 3
document.getElementById("btnQuydoi").onclick = function(){
    const TYGIA = 23500;
    var usdNhap = document.getElementById("txtUSD").value;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var vndQuyDoi = currentFormat.format(usdNhap * TYGIA);
    document.getElementById("tienQuydoi").innerHTML = usdNhap + "usd sẽ quy đổi được: " + vndQuyDoi + "vnd";
};
// Bai 3 End

// Bai 4
document.getElementById("btnChuvi").onclick = function(){
    var chieuDai = document.getElementById("txtChieudai").value * 1;
    var chieuRong = document.getElementById("txtChieurong").value * 1;
    var chuVi = (chieuDai + chieuRong) * 2;
    document.getElementById("hinhChuNhat").innerHTML = "Chu vi hình chữ nhật là: " + chuVi;
};

document.getElementById("btnDientich").onclick = function(){
    var chieuDai = document.getElementById("txtChieudai").value * 1;
    var chieuRong = document.getElementById("txtChieurong").value * 1;
    var dienTich = chieuDai * chieuRong ;
    document.getElementById("hinhChuNhat").innerHTML = "Diện tích hình chữ nhật là: " + dienTich;
};
// Bai 4 End

// Bai 5
document.getElementById("btnTongso").onclick = function(){
    var soInput = document.getElementById("txtSo").value * 1;
    var hangDonvi = soInput % 10;
    var hangChuc = Math.floor(soInput / 10);
    var tong2so = hangDonvi + hangChuc
    document.getElementById("tongSo").innerHTML = "Tổng 2 số là: " + tong2so;
};
// Bai 5 End