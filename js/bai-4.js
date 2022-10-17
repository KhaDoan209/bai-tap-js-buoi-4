// Bài 4
/**
 * Khối 1: input
 *
 *      3 cạnh của tam giác
 *
 * Khối 2: Các bước xử lý
 *
 *      B1: khai báo biến và lưu giá trị input
 *
 *      - biến edge1 để lưu cạnh 1
 *      - biến edge2 để lưu cạnh 2
 *      - biến edge3 để lưu cạnh 3
 *
 *
 *      B2: Lập công thức tính toán
 *
 *       Nếu cạnh 1 + cạnh 2 > cạnh 3 hoặc cạnh 1 + cạnh 3 > cạnh 2 hoặc cạnh 2 + cạnh 3 > cạnh 1 thì xét tiếp
 *
 *          Nếu 3 cạnh = nhau => tam giác đều
 *          Nếu có cặp cạnh bằng nhau => tam giác cân
 *          Nếu bình phương 1 cạnh = tổng bình phương 2 cạnh còn lại => tam giác vuông
 *          Ngoài những trường hợp trên => tam giác thường
 *
 *      B3: Thông báo kết quả
 *
 * Khối 3: Output
 *      In kết quả
 */

function GuessTriangle() {
  var noti = document.getElementById("noti-4");
  noti.classList = "alert alert-success col-9 mt-3 mx-auto";

  var edge1 = Number(document.getElementById("edge1").value);
  var edge2 = Number(document.getElementById("edge2").value);
  var edge3 = Number(document.getElementById("edge3").value);

  var a = Math.pow(edge1, 2);
  var b = Math.pow(edge2, 2);
  var c = Math.pow(edge3, 2);

  if (edge1 + edge2 > edge3 || edge1 + edge3 > edge2 || edge2 + edge3 > edge1) {
    console.log(edge1, edge2, edge3);

    if (edge1 == edge2 && edge2 == edge3) {
      noti.innerHTML = "Đây là tam giác đều";
    } else if (edge1 == edge2 || edge2 == edge3 || edge3 == edge1) {
      noti.innerHTML = "Đây là tam giác cân";
    } else if ((a = b + c) || (b = a + c) || (c = a + b)) {
      noti.innerHTML = "Đây là tam giác vuông";
    } else {
      noti.innerHTML = "Đây là tam giác thường";
    }
  } else {
    noti.classList = "alert alert-danger col-9 mt-3 mx-auto";
    noti.innerHTML = "Vui lòng nhập dữ liệu hợp lệ";
  }
}
