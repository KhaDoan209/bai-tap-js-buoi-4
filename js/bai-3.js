// Bài 3
/**
 * Khối 1: input
 *
 *     3 số nguyên
 *
 * Khối 2: Các bước xử lý
 *
 *      B1: khai báo biến và lưu giá trị input
 *
 *      - biến numb1 để lưu số thứ 1
 *      - biến numb2 để lưu số thứ 2
 *      - biến numb3 để lưu số thứ 3
 *      - biến evenNumber để đếm số chẵn
 *      - biến oddNumber để đếm số lẻ
 *
 *      B2: Lập công thức tính toán
 *
 *        Xét từng số numb1, numb2, numb3, nếu chia hết cho 2 thì biến evenNumber sẽ tăng lên 1, không thì ngược lại
 *
 *      B3: Thông báo kết quả
 *
 * Khối 3: Output
 *      In kết quả
 */

function CountNumber() {
  var oddNumber = 0,
    evenNumber = 0;

  var numb1 = Number(document.getElementById("number-1").value);
  var numb2 = Number(document.getElementById("number-2").value);
  var numb3 = Number(document.getElementById("number-3").value);
  var noti = document.getElementById("noti-3");
  noti.classList = "alert alert-success col-9 mt-3 mx-auto";

  if (numb1 % 2 == 0) {
    evenNumber++;
  } else {
    oddNumber++;
  }
  if (numb2 % 2 == 0) {
    evenNumber++;
  } else {
    oddNumber++;
  }
  if (numb3 % 2 == 0) {
    evenNumber++;
  } else {
    oddNumber++;
  }
  noti.innerHTML = "Có " + evenNumber + " số chẵn và " + oddNumber + " số lẻ";
}
