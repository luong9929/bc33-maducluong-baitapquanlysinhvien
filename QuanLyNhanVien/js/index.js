var danhSachNhanVien = [];
function themnhanvien() {
  var taikhoan = document.querySelector("#tknv").value;
  var hovaten = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var matkhau = document.querySelector("#password").value;
  var ngay = document.querySelector("#datepicker").value;
  var luongcoban = document.querySelector("#luongCB").value;
  var chucvu = document.querySelector("#chucvu").value;
  var giolam = document.querySelector("#gioLam").value;

  var nhanvien = new Quanlynhanvien(
    taikhoan,
    hovaten,
    email,
    matkhau,
    ngay,
    luongcoban,
    chucvu,
    giolam
  );
  //kiểm tra rỗng
  var valid = true;

  valid &=
    kiemtrarong(nhanvien.id, "#tbTKNV", "Tài khoản ") &
    kiemtrarong(nhanvien.name, "#tbTen", "Tên ") &
    kiemtrarong(nhanvien.email, "#tbEmail", "Email ") &
    kiemtrarong(nhanvien.password, "#tbMatKhau", "Mật Khẩu ") &
    kiemtrarong(nhanvien.day, "#tbNgay", "Ngày tháng  ") &
    kiemtrarong(nhanvien.salary, "#tbLuongCB", "Lương cơ bản ") &
    kiemtrarong(nhanvien.position, "#tbChucVu", "Chức vụ ") &
    kiemtrarong(nhanvien.time, "#tbGiolam", "Giờ làm ");
   

  if (kiemtrarong(nhanvien.name, "#tbTen", "Tên ")) {
    valid &= kiemtrakytu(nhanvien.name, "#tbTen", "Tên nhân viên ");
  }
  if (kiemtrarong(nhanvien.time, "#tbGiolam", "Giờ làm ")) {
    
    valid &= kiemtragiolam(nhanvien.time, "#tbGiolam", "Giờ làm ", 80, 200);
    
  }
  
  if (kiemtrarong(nhanvien.salary, "#tbLuongCB", "Lương cơ bản ")) {
    valid &= kiemtraso(nhanvien.salary, "#tbLuongCB", "Lương cơ bản ");
  }

  valid &= kiemtraemail(nhanvien.email, "#tbEmail", "Email ");
  if (kiemtrarong(nhanvien.id, "#tbTKNV", "Tài khoản ")) {
    valid &= kiemtradodai(nhanvien.id, "#tbTKNV", "Tài khoản ", 4, 6);
  }

   valid &= kiemtramatkhau(nhanvien.password, "#tbMatKhau", "Mật Khẩu ");

  if (!valid) {
    return;
  }
console.log(
    nhanvien
);
danhSachNhanVien.push(nhanvien)
  inDanhSachNhanVien(danhSachNhanVien);
  console.log(danhSachNhanVien);
  saveLocalStorage(danhSachNhanVien, "arrNV");
}

function inDanhSachNhanVien(arrNV) {
  var output = "";
  for (var i = 0; i < arrNV.length; i++) {
    var obNhanVien = arrNV[i];
    obNhanVien.tongluong = function () {
      var sep = document.querySelector("#sep").value;
      var truongPhong = document.querySelector("#truongphong").value;
      var nhanvien = document.querySelector("#nhanvienquen").value;

      if (this.position === sep) {
        return Number(this.salary) * 3;
      } else if (this.position === truongPhong) {
        return Number(this.salary) * 2;
      } else if (this.position === nhanvien) {
        return Number(this.salary) * 1;
      }
    };
    obNhanVien.xeploai = function () {
      if (this.time >= 192) {
        return "nhân viên xuất xắc";
      } else if (this.time >= 176) {
        return "nhân viên giỏi";
      } else if (this.time >= 160) {
        return "nhân viên loại khá";
      } else {
        return "nhân viên trung bình";
      }
    };

    var trNV = `
          <tr>
            <td>${obNhanVien.id}</td>
            <td>${obNhanVien.name}</td>
            <td>${obNhanVien.email}</td>
            <td>${obNhanVien.day}</td>
            <td>${obNhanVien.position}</td>
            <td>${obNhanVien.tongluong()}</td>
            <td>${obNhanVien.xeploai()}</td>
            <td >
              <button class="btn btn-danger mb-3" onclick="xoaNhanVien('${
                obNhanVien.id
              }')">Del</button>
              <button class="btn btn-primary"  onclick="capNhatNhanVien('${
                obNhanVien.id
              }')"data-toggle="modal"
              data-target="#myModal">Update</button>
            </td>
          </tr>
        `;

    output += trNV;
  }
  document.querySelector("#tableDanhSach").innerHTML = output;
  return output;
}

function xoaNhanVien(click) {
  var xoaNV = -1;
  for (var i = danhSachNhanVien.length - 1; i >= 0; i--) {
    if (danhSachNhanVien[i].id == click) {
      xoaNV = i;
      danhSachNhanVien.splice(i, 1);
    }
  }
  inDanhSachNhanVien(danhSachNhanVien);
}

function capNhatNhanVien(click) {
  var suaNV = null;
  for (var i = 0; i < danhSachNhanVien.length; i++) {
    if (danhSachNhanVien[i].id == click) suaNV = danhSachNhanVien[i];
  }
  if (suaNV !== null) {
    document.querySelector("#tknv").value = suaNV.id;
    document.querySelector("#name").value = suaNV.name;
    document.querySelector("#email").value = suaNV.email;
    document.querySelector("#password").value = suaNV.password;
    document.querySelector("#datepicker").value = suaNV.day;
    document.querySelector("#luongCB").value = suaNV.salary;
    document.querySelector("#chucvu").value = suaNV.position;
    document.querySelector("#gioLam").value = suaNV.time;
  }
  
}
function luuNV() {
  var luuNV = new Quanlynhanvien();
  luuNV.id = document.querySelector("#tknv").value;
  luuNV.name = document.querySelector("#name").value;
  luuNV.email = document.querySelector("#email").value;
  luuNV.password = document.querySelector("#password").value;
  luuNV.day = document.querySelector("#datepicker").value;
  luuNV.salary = document.querySelector("#luongCB").value;
  luuNV.position = document.querySelector("#chucvu").value;
  luuNV.time = document.querySelector("#gioLam").value;

  var indexluu = -1;
  for (var i = 0; i < danhSachNhanVien.length; i++) {
    if (danhSachNhanVien[i].id == luuNV.id) {
      indexluu = i;
      break;
    }
  }
  if (indexluu !== -1) {
    danhSachNhanVien[indexluu].name = luuNV.name;
    danhSachNhanVien[indexluu].email = luuNV.email;
    danhSachNhanVien[indexluu].password = luuNV.password;
    danhSachNhanVien[indexluu].day = luuNV.day;
    danhSachNhanVien[indexluu].salary = luuNV.salary;
    danhSachNhanVien[indexluu].position = luuNV.position;
    danhSachNhanVien[indexluu].time = luuNV.time;

    var valid = true;

  valid &=
    
    kiemtrarong(luuNV.name, "#tbTen", "Tên ") &
    kiemtrarong(luuNV.email, "#tbEmail", "Email ") &
    kiemtrarong(luuNV.password, "#tbMatKhau", "Mật Khẩu ") &
    kiemtrarong(luuNV.day, "#tbNgay", "Ngày tháng  ") &
    kiemtrarong(luuNV.salary, "#tbLuongCB", "Lương cơ bản ") &
    kiemtrarong(luuNV.position, "#tbChucVu", "Chức vụ ") &
    kiemtrarong(luuNV.time, "#tbGiolam", "Giờ làm ");
   

  if (kiemtrarong(luuNV.name, "#tbTen", "Tên ")) {
    valid &= kiemtrakytu(luuNV.name, "#tbTen", "Tên nhân viên ");
  }
  if (kiemtrarong(luuNV.time, "#tbGiolam", "Giờ làm ")) {
    
    valid &= kiemtragiolam(luuNV.time, "#tbGiolam", "Giờ làm ", 80, 200);
    
  }
  
  if (kiemtrarong(luuNV.salary, "#tbLuongCB", "Lương cơ bản ")) {
    valid &= kiemtraso(luuNV.salary, "#tbLuongCB", "Lương cơ bản ");
  }

  valid &= kiemtraemail(luuNV.email, "#tbEmail", "Email ");
 

   valid &= kiemtramatkhau(luuNV.password, "#tbMatKhau", "Mật Khẩu ");

  if (!valid) {
    return;
  }
  }
  inDanhSachNhanVien(danhSachNhanVien);
}
document.querySelector("#btnTimNV").onclick = function () {
  var tukhoa = document.querySelector("#searchName").value;
  var output = [];

  for (var i = 0; i < danhSachNhanVien.length; i++) {
    if (
      danhSachNhanVien[i].xeploai().search(tukhoa) != -1 ||
      danhSachNhanVien[i].id == tukhoa
    ) {
      output.push(danhSachNhanVien[i]);
    }
  }
  inDanhSachNhanVien(output);
};

function saveLocalStorage(ob, key) {
  var str = JSON.stringify(ob);
  localStorage.setItem(key, str);
}
function getLocalStorage(key) {
  if (localStorage.getItem(key)) {
    var str = localStorage.getItem(key);
    var ob = JSON.parse(str);
    return ob;
  }
  return undefined;
}
window.onload = function () {
  var hehe = getLocalStorage("arrNV")
  if(hehe){
    danhSachNhanVien = hehe
    inDanhSachNhanVien(danhSachNhanVien);

  }
};
