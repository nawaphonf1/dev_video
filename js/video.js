
//่กดเลือกวิดิโอ
var video1 = false,
    video2 = false,
    video3 = false,
    video4 = false,
    video5 = false,
    video6 = false,
    video7 = false,
    video8 = false,
    video9 = false,
    video10 = false,
    video11 = false,
    video12 = false,
    video13 = false,
    video14 = false,
    video15 = false,
    video16 = false,
    video17 = false;

if(video1==false){
  document.getElementById("videoLink4").style.pointerEvents = "none";
}else{
  document.getElementById("videoLink4").style.pointerEvents = "auto";
}

function light(Cvideo) {
  let player = videojs("videoP");
  var video;

  //เปลี่ยนวิดีโอ1
  if (Cvideo == 1) {
    document.getElementById("nameV").innerHTML =
      "1.1 แนะนำเว็บแอปพลิเคชัน อพม.Smart";
    video = "video/1.1 แนะนำเว็บแอปพลิเคชัน อพม.Smart.mp4";

    if ((video1 == false)) {
      player.controlBar.progressControl.hide();
      player.on("timeupdate", function () {
        var percentage = (player.currentTime() / player.duration()) * 100;
        document.getElementById("percentage").innerHTML =
          Math.round(percentage) + "%";
        if (percentage == 100) {
          video1 = true;
          return;
        }
      });
    } else if ((video1 == true)) {
      player.controlBar.progressControl.show();
    }

  //เปลี่ยนวิิดีโอ 2
  } else if (Cvideo == 2) {
    document.getElementById("nameV").innerHTML = "2.1 การเข้าสู่ระบบ";
    video = "video/2.1 การเข้าสู่ระบบ.mp4";

    if ((video2 == false)) {
      player.controlBar.progressControl.hide();
      player.on("timeupdate", function () {
        var percentage = (player.currentTime() / player.duration()) * 100;
        document.getElementById("percentage").innerHTML =
          Math.round(percentage) + "%";
        if (percentage == 100) {
          video2 = true;
          return;
        }
      });
    } else if ((video2 == true)) {
      player.controlBar.progressControl.show();
    }
  //เปลี่ยนวิดีโอ3
  } else if (Cvideo == 3) {
    document.getElementById("nameV").innerHTML =
      "3.1 การยื่นคำร้องและการกดรับพิกัด GPS";
    video = "video/3.1 การยื่นคำร้องและการกดรับพิกัด GPS.mp4";

    if ((video3 == false)) {
      player.controlBar.progressControl.hide();
      player.on("timeupdate", function () {
        var percentage = (player.currentTime() / player.duration()) * 100;
        document.getElementById("percentage").innerHTML =
          Math.round(percentage) + "%";
        if (percentage == 100) {
          video3 = true;
          return;
        }
      });
    } else if ((video3 == true)) {
      player.controlBar.progressControl.show();
    }
  //เปลี่ยนวิดีโอ4
  } else if (Cvideo == 4) {
    document.getElementById("nameV").innerHTML =
      "3.2 การกรอกประวัติผู้ประสบปัญหาทางสังคม";
    video = "video/3.2 การกรอกประวัติผู้ประสบปัญหาทางสังคม.mp4";

    if ((video4 == false)) {
      player.controlBar.progressControl.hide();
      player.on("timeupdate", function () {
        var percentage = (player.currentTime() / player.duration()) * 100;
        document.getElementById("percentage").innerHTML =
          Math.round(percentage) + "%";
        if (percentage == 100) {
          video4 = true;
          return;
        }
      });
    } else if ((video4 == true)) {
      player.controlBar.progressControl.show();
    }

  //เปลี่ยนวิดีโอ5
  } else if (Cvideo == 5) {
    document.getElementById("nameV").innerHTML =
      "3.3 การกรอกที่อยู่ตามทะเบียนบ้าน";
    video = "video/3.3 การกรอกที่อยู่ตามทะเบียนบ้าน.mp4";

    if ((video5 == false)) {
      player.controlBar.progressControl.hide();
      player.on("timeupdate", function () {
        var percentage = (player.currentTime() / player.duration()) * 100;
        document.getElementById("percentage").innerHTML =
          Math.round(percentage) + "%";
        if (percentage == 100) {
          video5 = true;
          return;
        }
      });
    } else if ((video5 == true)) {
      player.controlBar.progressControl.show();
    }

  //เปลี่ยนวิดีโอ6
  } else if (Cvideo == 6) {
    document.getElementById("nameV").innerHTML = "3.4 การกรอกที่อยู่ปัจจุบัน";
    video = "video/3.4 การกรอกที่อยู่ปัจจุบัน.mp4";

    if ((video6 == false)) {
      player.controlBar.progressControl.hide();
      player.on("timeupdate", function () {
        var percentage = (player.currentTime() / player.duration()) * 100;
        document.getElementById("percentage").innerHTML =
          Math.round(percentage) + "%";
        if (percentage == 100) {
          video6 = true;
          return;
        }
      });
    } else if ((video6 == true)) {
      player.controlBar.progressControl.show();
    }

  //เปลี่ยนวิดีโอ7
  } else if (Cvideo == 7) {
    document.getElementById("nameV").innerHTML =
      "3.5 การเลือกประภทผู้ขอรับบริการ";
    video = "video/3.5การเลือกประเภทผู้ขอรับบริการ.mp4";

    if ((video7 == false)) {
      player.controlBar.progressControl.hide();
      player.on("timeupdate", function () {
        var percentage = (player.currentTime() / player.duration()) * 100;
        document.getElementById("percentage").innerHTML =
          Math.round(percentage) + "%";
        if (percentage == 100) {
          video7 = true;
          return;
        }
      });
    } else if ((video7 == true)) {
      player.controlBar.progressControl.show();
    }

  //เปลี่ยนวิดีโอ 8
  } else if (Cvideo == 8) {
    document.getElementById("nameV").innerHTML =
      "3.6 การเลือกสภาพปัญหาความเดือดร้อนที่พบ";
    video = "video/3.6 การเลือกสภาพปัญหาความเดือดร้อนที่พบ.mp4";

    if ((video8 == false)) {
      player.controlBar.progressControl.hide();
      player.on("timeupdate", function () {
        var percentage = (player.currentTime() / player.duration()) * 100;
        document.getElementById("percentage").innerHTML =
          Math.round(percentage) + "%";
        if (percentage == 100) {
          video8 = true;
          return;
        }
      });
    } else if ((video8 == true)) {
      player.controlBar.progressControl.show();
    }

  //เปลี่ยนวิดีโอ 9
  } else if (Cvideo == 9) {
    document.getElementById("nameV").innerHTML =
      "3.7 การเลือกเรื่องที่ขอรับความช่วยเหลือที่ต้องการ";
    video = "video/3.7 การเลือกเรื่องที่ขอรับความช่วยเหลือที่ต้องการ.mp4";

    if ((video9 == false)) {
      player.controlBar.progressControl.hide();
      player.on("timeupdate", function () {
        var percentage = (player.currentTime() / player.duration()) * 100;
        document.getElementById("percentage").innerHTML =
          Math.round(percentage) + "%";
        if (percentage == 100) {
          video9 = true;
          return;
        }
      });
    } else if ((video9 == true)) {
      player.controlBar.progressControl.show();
    }

  //เปลี่ยนวิดีโอ10
  } else if (Cvideo == 10) {
    document.getElementById("nameV").innerHTML =
      "3.8 สิทธิสวัสดิการที่เคยได้รับ";
    video = "video/3.8 สิทธิสวัสดิการที่เคยได้รับ.mp4";

    if ((video10 == false)) {
      player.controlBar.progressControl.hide();
      player.on("timeupdate", function () {
        var percentage = (player.currentTime() / player.duration()) * 100;
        document.getElementById("percentage").innerHTML =
          Math.round(percentage) + "%";
        if (percentage == 100) {
          video10 = true;
          return;
        }
      });
    } else if ((video10 == true)) {
      player.controlBar.progressControl.show();
    }

  //เปลี่ยนวิดีโอ11
  } else if (Cvideo == 11) {
    document.getElementById("nameV").innerHTML = "3.9 การรับรองข้อมูลส่วนบุคคล";
    video = "video/3.9 การรับรองข้อมูลส่วนบุคคล.mp4";

    if ((video11 == false)) {
      player.controlBar.progressControl.hide();
      player.on("timeupdate", function () {
        var percentage = (player.currentTime() / player.duration()) * 100;
        document.getElementById("percentage").innerHTML =
          Math.round(percentage) + "%";
        if (percentage == 100) {
          video11 = true;
          return;
        }
      });
    } else if ((video11 == true)) {
      player.controlBar.progressControl.show();
    }

  //เปลี่ยนวิดีโอ12
  } else if (Cvideo == 12) {
    document.getElementById("nameV").innerHTML =
      "3.10 การเยี่ยมบ้านและการแนบเอกสารเพิ่มเติม";
    video = "video/3.10 การเยี่ยมบ้านและการแนบเอกสารเพิ่มเติม.mp4";

    if ((video12 == false)) {
      player.controlBar.progressControl.hide();
      player.on("timeupdate", function () {
        var percentage = (player.currentTime() / player.duration()) * 100;
        document.getElementById("percentage").innerHTML =
          Math.round(percentage) + "%";
        if (percentage == 100) {
          video12 = true;
          return;
        }
      });
    } else if ((video12 == true)) {
      player.controlBar.progressControl.show();
    }

  //เปลี่ยนวิดีโอ 13
  } else if (Cvideo == 13) {
    document.getElementById("nameV").innerHTML =
      "3.11 การยืนยันการบันทึกข้อมูล";
    video = "video/3.11 การยืนยันการบันทึกข้อมูล.mp4";

    if ((video13 == false)) {
      player.controlBar.progressControl.hide();
      player.on("timeupdate", function () {
        var percentage = (player.currentTime() / player.duration()) * 100;
        document.getElementById("percentage").innerHTML =
          Math.round(percentage) + "%";
        if (percentage == 100) {
          video13 = true;
          return;
        }
      });
    } else if ((video13 == true)) {
      player.controlBar.progressControl.show();
    }

  //เปลี่ยนวิดีโอ14
  } else if (Cvideo == 14) {
    document.getElementById("nameV").innerHTML =
      "4.1 การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับตำบล";
    video = "video/4.1 การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับตำบล.mp4";
    
    if ((video14 == false)) {
      player.controlBar.progressControl.hide();
      player.on("timeupdate", function () {
        var percentage = (player.currentTime() / player.duration()) * 100;
        document.getElementById("percentage").innerHTML =
          Math.round(percentage) + "%";
        if (percentage == 100) {
          video14 = true;
          return;
        }
      });
    } else if ((video14 == true)) {
      player.controlBar.progressControl.show();
    }

  //เปลี่ยนวิดีโอ 15
  } else if (Cvideo == 15) {
    document.getElementById("nameV").innerHTML =
      "4.2 การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับอำเภอ";
    video = "video/4.2 การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับอำเภอ.mp4";

    if ((video15 == false)) {
      player.controlBar.progressControl.hide();
      player.on("timeupdate", function () {
        var percentage = (player.currentTime() / player.duration()) * 100;
        document.getElementById("percentage").innerHTML =
          Math.round(percentage) + "%";
        if (percentage == 100) {
          video15 = true;
          return;
        }
      });
    } else if ((video15 == true)) {
      player.controlBar.progressControl.show();
    }

  //เปลี่ยนวิดีโอ16
  } else if (Cvideo == 16) {
    document.getElementById("nameV").innerHTML = "5.1 ความหมายของสถานะ";
    video = "video/5.1 ความหมายของสถานะ.mp4";

    if ((video16 == false)) {
      player.controlBar.progressControl.hide();
      player.on("timeupdate", function () {
        var percentage = (player.currentTime() / player.duration()) * 100;
        document.getElementById("percentage").innerHTML =
          Math.round(percentage) + "%";
        if (percentage == 100) {
          video16 = true;
          return;
        }
      });
    } else if ((video16 == true)) {
      player.controlBar.progressControl.show();
    }


  //เปลี่ยนวิดีโอ17
  } else if (Cvideo == 17) {
    document.getElementById("nameV").innerHTML =
      "6.1 การสร้างทางลัด อพม.Smart ไว้บนหน้าจอหลัก";
    video = "video/6.1 การสร้างทางลัด อพม.Smart ไว้บนหน้าจอหลัก.mp4";

    if ((video17 == false)) {
      player.controlBar.progressControl.hide();
      player.on("timeupdate", function () {
        var percentage = (player.currentTime() / player.duration()) * 100;
        document.getElementById("percentage").innerHTML =
          Math.round(percentage) + "%";
        if (percentage == 100) {
          video17 = true;
          return;
        }
      });
    } else if ((video17 == true)) {
      player.controlBar.progressControl.show();
    }

  }
  player.src({ type: "video/mp4", src: video });
  player.play();
}
function t2(){
  document.getElementById("nameV").innerHTML =video+10;
}

/* //เปอเซนต์และห้ามกรอ
var player = videojs("videoP");
var video1 = false;
player.on("timeupdate", function () {
  var percentage = (player.currentTime() / player.duration()) * 100;
  document.getElementById("percentage").innerHTML =
    Math.round(percentage) + "%";
  if (percentage === 100) {
    video1 = true;
    player.controlBar.progressControl.show();
    document.getElementById("videoLink4").style.pointerEvents = "auto";
    document.getElementById("videoLink5").style.pointerEvents = "auto";
    document.getElementById("videoLink6").style.pointerEvents = "auto";
    document.getElementById("videoLink7").style.pointerEvents = "auto";
    document.getElementById("videoLink8").style.pointerEvents = "auto";
    document.getElementById("videoLink9").style.pointerEvents = "auto";
    document.getElementById("videoLink10").style.pointerEvents = "auto";
    document.getElementById("videoLink11").style.pointerEvents = "auto";
  } else if (video1 === false) {
    player.controlBar.progressControl.hide();
    document.getElementById("videoLink4").style.pointerEvents = "none";
    document.getElementById("videoLink5").style.pointerEvents = "none";
    document.getElementById("videoLink6").style.pointerEvents = "none";
    document.getElementById("videoLink7").style.pointerEvents = "none";
    document.getElementById("videoLink8").style.pointerEvents = "none";
    document.getElementById("videoLink9").style.pointerEvents = "none";
    document.getElementById("videoLink10").style.pointerEvents = "none";
    document.getElementById("videoLink11").style.pointerEvents = "none";
  }
}); */
function search() {
  // อ่านค่าจาก input ค้นหา
  var input, filter, links, i, txtValue;
  input = document.getElementById("find");
  filter = input.value.toUpperCase();
  links = document.getElementsByClassName("nav-link");
  // วนลูปเพื่อค้นหาข้อความใน <a>
  for (i = 0; i < links.length; i++) {
    txtValue = links[i].textContent || links[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      links[i].style.display = "";
    } else {
      links[i].style.display = "none";
    }
  }
}


