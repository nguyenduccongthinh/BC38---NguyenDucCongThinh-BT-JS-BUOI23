// BÀI 1:
// Sơ đồ 3 khối

/**
 * INPUT: số ngày làm
 *
 * PROCESS: (pseudo code)
 *      1.  lương 1 ngày  = 10000; số ngày lấy từ dữ liệu người dùng nhập;
 *      2. công thức tính tiền : lương 1 ngày * số ngày làm
 *      3. In kết quả
 *
 * OUTPUT: lương
 */
function ex1(){
 var workingDays = document.getElementById("soNgay").value*1;
 var salaryPerDay = 10000;
 
 var totalSalary = "Số tiền lương là " +  (salaryPerDay * workingDays) + " VND";
document.getElementById("tienLuong").innerHTML = totalSalary;
document.getElementById("tienLuong").style.paddingTop="10px";
document.getElementById("tienLuong").style.color="red";

}
 
 // BÀI 2:
 // Sơ đồ 3 khối
 
 /**
  * INPUT: 5 số thực
  *
  * PROCESS: (pseudo code)
  *      1. lấy input giá trị 5 số thực từ người dùng
  *      2. Tính tổng 5 số thực
  *      3. Công thức tính trung bình: tổng 5 số thực chia cho 5
  *      4. In kết quả
  *
  * OUTPUT: số trung bình
  */
 function ex2(){
    var num1 = document.getElementById("so1").value*1;
    var num2 = document.getElementById("so2").value*1;
    var num3 = document.getElementById("so3").value*1;
    var num4 = document.getElementById("so4").value*1;
    var num5 = document.getElementById("so5").value*1;
    var sum;
    var average;
   
    sum = num1 + num2 + num3 + num4 + num5;
    average = "Giá trị trung bình là:" + (sum / 5);
    document.getElementById("trungBinh").innerHTML = average;
    document.getElementById("trungBinh").style.paddingTop="10px";
    document.getElementById("trungBinh").style.color="red";

 }

 
 
 
 // BÀI 3:
 // Sơ đồ 3 khối
 
 /**
  * INPUT: Số tiền USD
  *
  * PROCESS: (pseudo code)
  *      1. lấy input (hardcode) số tiền USD người dùng nhập vào
  *      2. Số tiền sau quy đổi VND bằng số tiền USD * 23.500
  *      3. In kết quả
  *
  * OUTPUT: Số tiền sau quy đổi VND 
  */
 function ex3(){
    var soTienUSD = document.getElementById("soTien").value*1;
    var soTienVND = "Số tiền sau quy đổi VND là: " + (soTienUSD * 23500) + " VND";
    document.getElementById("doiTien").innerHTML = soTienVND;
    document.getElementById("doiTien").style.paddingTop="10px";
    document.getElementById("doiTien").style.color="blue";
 }
  
  
  // BÀI 4:
 // Sơ đồ 3 khối
 
 /**
  * INPUT: Chiều dài và chiều rộng của hình chữ nhật
  *
  * PROCESS: (pseudo code)
  *      1. lấy input Chiều dài và chiều rộng của hình chữ nhật từ dữ liệu người dùng nhập vào
  *      2. Công thức tính diện tích hình chữ nhật: chiều dài * chiều rộng
  *      3. Công thức tính chu vi hình chữ nhật: (chiều dài + chiều rộng) * 2
  *      4. In kết quả
  *
  * OUTPUT: Diện tích và chu vi của hình chữ nhật
  */
 

 function ex4(){
   var chieuDai = document.getElementById("chieuDai").value*1;
   var chieuRong = document.getElementById("chieuRong").value*1;;
   var dienTich;
   var chuVi;
   
   dienTich = "Diện tích hình chữ nhật là " + (chieuDai * chieuRong);
   chuVi = "Chu vi hình chữ nhật là " + (chieuDai + chieuRong)*2;
   document.getElementById("dienTich").innerHTML = dienTich;
   document.getElementById("dienTich").style.paddingTop="10px";
   document.getElementById("dienTich").style.color="blue";
   document.getElementById("chuVi").innerHTML = chuVi;
   document.getElementById("chuVi").style.paddingTop="10px";
   document.getElementById("chuVi").style.color="blue";
 }
 
 
  // BÀI 5:
 // Sơ đồ 3 khối
 
 /**
  * INPUT: Nhập vào 1 số có 2 chữ số
  *
  * PROCESS: (pseudo code)
  *      1. lấy input từ người dùng nhập vào  vào 1 số có 2 chữ số ;
  *      2. Công thức rút ra chữ số hàng đơn vị: số đó chia cho 10 lấy phần dư
  *      3. Công thức rút ra chữ số hàng chục: số đó chia cho 10, lấy kết quả làm tròn xuống
  *      4. In kết quả
  *
  * OUTPUT: Tổng 2 ký số
  */
function ex5(){
   var n = document.getElementById("chuSo").value*1;
   var num1;
   var num2;
   var tong;
  
   num1 = n % 10;
   num2 = Math.floor(n / 10);
   tong = num1 + num2;
  
document.getElementById("tinhTong").innerHTML = tong;
document.getElementById("tinhTong").style.paddingTop ="10px";
document.getElementById("tinhTong").style.color = "blue";
 }

 