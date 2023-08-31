
/*Nhập mảng số nguyên*/
var Arr = [];

function btnThemSoNguyen() {
  var mangSoNguyen = document.querySelector("#mangSoNguyen").value * 1;
  Arr.push(mangSoNguyen);
  document.getElementById("inMangSoNguyen").innerHTML = "Mảng: " + Arr;
}

/*
MÔ HÌNH 3 KHỐI: tính tổng các số dương trong mảng

INPUT: mangSoNguyen
OUTPUT: tongSoDuong
PROCESSING: btnTinhTong()
    - lấy dữ liệu người dùng nhập 
    - duyệt mảng bằng vòng lặp for
    - kiểm tra phần tử > 0
    - tính tổng 
*/
function btnTinhTong() {
  var tongSoDuong = 0;
  for (var i = 0; i < Arr.length; i++) {
    if (Arr[i] > 0) {
      tongSoDuong += Arr[i];
    }
  }
  document.getElementById("tongSoDuong").value = tongSoDuong;
}

/*
MÔ HÌNH 3 KHỐI: Đếm số phần tử dương trong mảng

INPUT: mangSoNguyen
OUTPUT: demSoDuong
PROCESSING: btnDemSoDuong()
    - lấy dữ liệu người dùng nhập 
    - tạo biến count lưu giá trị đếm 
    - duyệt mảng bằng vòng lặp for
    - kiểm tra phần tử dương
    - count++ sau mỗi phần tử dương đếm được
*/

function btnDemSoDuong() {
  var count = 0;
  for (var i = 0; i < Arr.length; i++) {
    if (Arr[i] > 0) {
      count++;
    }
  }
  document.getElementById("demSoDuong").value = count;
}

/*
MÔ HÌNH 3 KHỐI: Số nhỏ nhất trong mảng

INPUT: mangSoNguyen
OUTPUT: soNhoNhat
PROCESSING: btnSoNhoNhat()
    - lấy dữ liệu người dùng nhập 
    - sắp xếp mảng tăng dần
    - lấy phần tử đầu tiên của mảng
*/

function btnSoNhoNhat() {
  var min = 0;
  var Arr1 = Arr.slice()
  Arr1.sort(function (a, b) {
    return a - b;
  });
  min = Arr1[0];
  document.getElementById("soNhoNhat").value = min;
}

/*
MÔ HÌNH 3 KHỐI: Số dương nhỏ nhất trong mảng

INPUT: mangSoNguyen
OUTPUT: soDuongNhoNhat
PROCESSING: btnSoDuongNhoNhat()
    - lấy dữ liệu người dùng nhập 
    - sắp xếp mảng tăng dần
    - duyệt mảng 
    - tìm phần tử trong khoảng > 0, break sau khi tìm được phần tử dầu tiên
*/

function btnSoDuongNhoNhat() {
  var soDuongNhoNhat = 0;
  var Arr2 = Arr.slice();
  Arr2.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < Arr2.length; i++) {
    if (Arr2[i] > 0) {
      soDuongNhoNhat = Arr2[i];
      break;
    }
  }
  document.getElementById("soDuongNhoNhat").value = soDuongNhoNhat;
}

/*
MÔ HÌNH 3 KHỐI: Số chẵn cuối cùng trong mảng

INPUT: mangSoNguyen
OUTPUT: soChanCuoiCung
PROCESSING: btnSoChanCuoiCung()
    - lấy dữ liệu người dùng nhập 
    - sắp xếp mảng tăng dần
    - tạo mảng lưu giá trị phần tử là số chẵn
    - duyệt mảng 
    - tìm phần tử là số chẵn lưu vào mảng số chẵn
    - lấy ra phẩn tử của mảng số chẵn
*/

function btnSoChanCuoiCung() {
  var Arr3 = Arr.slice();
  Arr3.sort(function (a, b) {
    return a - b;
  });
  var j = 0;
  var ArrSoChan = [j];
  var soChanCuoiCung = 0;
  for (var i = 0; i < Arr3.length; i++) {
    if (Arr3[i] % 2 == 0) {
      ArrSoChan[j] = Arr3[i];
    }
  }
  soChanCuoiCung = ArrSoChan[0];
  document.getElementById("soChanCuoiCung").value = soChanCuoiCung;
}

/*
MÔ HÌNH 3 KHỐI: Đổi chỗ 2 giá trị trong mảng theo vị trí

INPUT: mangSoNguyen, index1, index2
OUTPUT: doiViTri
PROCESSING: btnDoiViTri()
    - lấy dữ liệu người dùng nhập
    - tạo biến value1 = Arr[index1], value2 = Arr[index2 - 1] để lưu giá trị sau khi truy xuất phần tử tại index1, index2
    - gán giá trị vào mảng mới: Arr.splice(index1, 1, value2), Arr.splice(index2, 1, value1);
*/

function btnDoiViTri() {
  var index1 = document.querySelector("#index1").value * 1;
  var index2 = document.querySelector("#index2").value * 1;
  var value1 = Arr[index1];
  var value2 = Arr[index2];
  Arr.splice(index1, 1, value2);
  Arr.splice(index2, 1, value1);
  document.getElementById("doiViTri").innerHTML = Arr;
}

/*
MÔ HÌNH 3 KHỐI: Sắp xếp mảng theo thứ tự tăng dần

INPUT: mangSoNguyen
OUTPUT: mangTangDan
PROCESSING: btnSapXepTangDan()
    - lấy dữ liệu người dùng nhập
    - dùng hàm Arr.sort(function(a, b){return a-b});
*/

function btnSapXepTangDan() {
  Arr.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("mangTangDan").value = Arr;
}

/*
MÔ HÌNH 3 KHỐI: Tìm số nguyên tố đầu tiên trong mảng

INPUT: mangSoNguyen
OUTPUT: soNguyenTo
PROCESSING: btnTimSNT()
    - lấy dữ liệu người dùng nhập
    - định nghĩa hàm checkSNT
    - duyệt mảng để lấy giá trị các phần tử là SNT
    - tạo mảng ArrSNT để lưu giá trị các phần tử tìm được
    - truy xuất ra phần tử đầu tiên trong mảng ArrSNT
*/

function btnTimSNT(){
var ArrSNT = [];
  for (var i = 0; i < Arr.length; i++){
    if (checkSNT(Arr[i]) == 1){
      ArrSNT.push( Arr[i] );
    }  
  }
document.getElementById('soNguyenTo').value = ArrSNT[0];
}
function checkSNT(n){
  var count = 1;
  if (n <2){
    return count = 0; 
  } 
  for(var i = 2; i < n; i++){
    if(n % i == 0){
      count = 0;
      break;
    }
  }
  return count;
}

/*Nhập thêm mảng số thực */

var ArrSoThuc = [];
var NewArr = [];
function btnThemSoThuc(){
  var mangSoThuc = document.querySelector('#mangSoThuc').value*1;
  ArrSoThuc.push(mangSoThuc);
  NewArr = Arr.concat(ArrSoThuc);
  document.getElementById('newArr').innerHTML = 'Mảng: ' + NewArr;
}

/*
MÔ HÌNH 3 KHỐI: Tìm số phần tử là số nguyên trong mảng

INPUT: NewArr
OUTPUT: soNguyen
PROCESSING: btnTimSoNguyen()
    - lấy dữ liệu người dùng nhập
    - duyệt mảng check các phẩn tử là số nguyên
    - tạo biến đếm số phần tử là số nguyên 
*/

function btnTimSoNguyen(){
  var count = 0;
  for(var i = 0; i < NewArr.length; i++){
    if(Number.isInteger(NewArr[i]) == true){
      count++;
    }
  }
  document.getElementById('soNguyen').value = count;
}

/*
MÔ HÌNH 3 KHỐI: So sánh số phần tử dương và âm trong mảng

INPUT: NewArr
OUTPUT: soSanh
PROCESSING: btnSoSanh()
    - lấy dữ liệu người dùng nhập
    - duyệt mảng check các phẩn tử: (soDuong > 0) (soAm < 0)
    - tạo biến đếm số phần tử là số dương và số âm
    - so sánh 2 biến đếm
*/

function btnSoSanh(){
  var countSoDuong = 0;
  var countSoAm = 0;
  for(var i = 0; i < NewArr.length; i++){
    if(NewArr[i] == 0){
      continue;
    } else if(NewArr[i] > 0){
      countSoDuong++;
    } else{
      countSoAm++;
    }  
  }
  if(countSoDuong > countSoAm){
    document.getElementById('soSanh').value = 'Số dương > số âm';
  } else if(countSoDuong < countSoAm){
    document.getElementById('soSanh').value = 'Số dương < số âm';
  } else{
    document.getElementById('soSanh').value = 'Số dương = số âm';
  }
}
