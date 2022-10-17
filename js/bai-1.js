//Bài 1
/**
 * Khối 1: input
 *     3 số nguyên nhập từ bàn phím
 *
 * Khối 2: Các bước xử lý
 *      B1: khai báo biến và lưu giá trị input
 *
 *      - biến numb1 để lưu số thứ nhất
 *      - biến numb2 để lưu số thứ hai
 *      - biến numb3 để lưu số thứ hai
 *
 *      B2: Lập công thức tính toán
 *
 *       Nếu numb1 < numb2 && numb2 < numb3 => numb1 < numb2 < numb3
 *       Nếu numb1 > numb2 && numb2 > numb3 => numb3 < numb2 < numb1
 *
 *       Nếu numb1 < numb3 && numb3 < numb2 => numb1 < numb3 < numb2
 *       Nếu numb1 > numb3 && numb3 > numb2 => numb2 < numb3 < numb1
 *
 *       Nếu numb2 < numb1 && numb1 < numb3 => numb2 < numb1 < numb3
 *       Nếu numb2 > numb1 && numb1 > numb3 => numb3 < numb1 < numb2
 *
 *  B3: Thông báo kết quả
 *
 * Khối 3: Output
 *      In kết quả sắp xếp
 */

function ArrangeNumber() {
  var numb1 = Number(document.getElementById("numb1").value);
  var numb2 = Number(document.getElementById("numb2").value);
  var numb3 = Number(document.getElementById("numb3").value);
  var noti = document.getElementById("noti-1");

  noti.classList = "alert alert-success col-12 mt-2";

  if (numb1 == " " || numb2 == " " || numb3 == " ") {
    noti.classList = "alert alert-danger col-12 mt-2 ";
    noti.innerHTML = "Dữ liệu không hợp lệ";
  } else {
    if (numb1 < numb2 && numb2 < numb3) {
      noti.innerHTML =
        "Thứ tự tăng dần: " + numb1 + " < " + numb2 + " < " + numb3;
    } else if (numb1 > numb2 && numb2 > numb3) {
      noti.innerHTML =
        "Thứ tự tăng dần: " + numb3 + " < " + numb2 + " < " + numb1;
    } else if (numb1 < numb3 && numb3 < numb2) {
      noti.innerHTML =
        "Thứ tự tăng dần: " + numb1 + " < " + numb3 + " < " + numb2;
    } else if (numb1 > numb3 && numb3 > numb2) {
      noti.innerHTML =
        "Thứ tự tăng dần: " + numb2 + " < " + numb3 + " < " + numb1;
    } else if (numb2 < numb1 && numb1 < numb3) {
      noti.innerHTML =
        "Thứ tự tăng dần: " + numb2 + " < " + numb1 + " < " + numb3;
    } else if (numb2 > numb1 && numb1 > numb3) {
      noti.innerHTML =
        "Thứ tự tăng dần: " + numb3 + " < " + numb1 + " < " + numb2;
    } else {
      noti.classList = "alert alert-danger col-12 mt-2 ";
      noti.innerHTML = "Vui lòng nhập 3 số khác nhau";
    }
  }
}
