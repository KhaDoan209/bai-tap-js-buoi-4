// Bài 2
/**
 * Khối 1: input
 *
 *      Các thành viên trong gia đình
 *
 * Khối 2: Các bước xử lý
 *
 *      B1: khai báo biến và lưu giá trị input
 *
 *      - biến member để lưu giá trị chọn từ select form
 *
 *      B2: Lập công thức tính toán
 *
 *        Dùng câu lệnh switch - case để đưa ra lời chào phù hợp với từng thành viên
 *        
 *        case bố => "Chào bố !"
 *        case mẹ => "Chào mẹ !"
 *        case anh => "Chào anh !"
 *        case em gái => "Chào em gái !"
 * 
 *      B3: Thông báo kết quả
 *
 * Khối 3: Output
 * 
 *      In lời chào tùy theo lựa chọn
 */
function Greeting() {
  var member = document.getElementById("dropdown-family").value;
  var noti = document.getElementById("noti-2");

  noti.classList = "alert alert-success col-9 mt-3 mx-auto";

  switch (member) {
    case "dad":
      noti.innerHTML = "Xin chào bố !";
      break;
    case "mom":
      noti.innerHTML = "Xin chào mẹ !";
      break;
    case "bro":
      noti.innerHTML = "Xin chào anh trai !";
      break;
    case "sis":
      noti.innerHTML = "Xin chào em gái !";
      break;
    default:
      noti.classList = "alert alert-danger col-9 mt-3 mx-auto";
      noti.innerHTML = "Vui lòng chọn";
  }
}
