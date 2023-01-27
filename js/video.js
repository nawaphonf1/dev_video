//่กดเลือกวิดิโอ
function light(Cvideo) {
  var video;
  if (Cvideo == 1) {
    document.getElementById("nameV").innerHTML =
      "1.1 แนะนำเว็บแอปพลิเคชัน อพม.Smart";
    video = "video/1.1 แนะนำเว็บแอปพลิเคชัน อพม.Smart.mp4";
  } else if (Cvideo == 2) {
    document.getElementById("nameV").innerHTML = "2.1 การเข้าสู่ระบบ";
    video = "video/2.1 การเข้าสู่ระบบ.mp4";
  } else if (Cvideo == 3) {
    document.getElementById("nameV").innerHTML =
      "3.1 การยื่นคำร้องและการกดรับพิกัด GPS";
    video = "video/3.1 การยื่นคำร้องและการกดรับพิกัด GPS.mp4";
  } else if (Cvideo == 4) {
    document.getElementById("nameV").innerHTML =
      "3.2 การกรอกประวัติผู้ประสบปัญหาทางสังคม";
    video = "video/3.2 การกรอกประวัติผู้ประสบปัญหาทางสังคม.mp4";
  } else if (Cvideo == 5) {
    document.getElementById("nameV").innerHTML =
      "3.3 การกรอกที่อยู่ตามทะเบียนบ้าน";
    video = "video/3.3 การกรอกที่อยู่ตามทะเบียนบ้าน.mp4";
  } else if (Cvideo == 6) {
    document.getElementById("nameV").innerHTML = "3.4 การกรอกที่อยู่ปัจจุบัน";
    video = "video/3.4 การกรอกที่อยู่ปัจจุบัน.mp4";
  } else if (Cvideo == 7) {
    document.getElementById("nameV").innerHTML =
      "3.5 การเลือกประภทผู้ขอรับบริการ";
    video = "video/3.5การเลือกประเภทผู้ขอรับบริการ.mp4";
  } else if (Cvideo == 8) {
    document.getElementById("nameV").innerHTML =
      "3.6 การเลือกสภาพปัญหาความเดือดร้อนที่พบ";
    video = "video/3.6 การเลือกสภาพปัญหาความเดือดร้อนที่พบ.mp4";
  } else if (Cvideo == 9) {
    document.getElementById("nameV").innerHTML =
      "3.7 การเลือกเรื่องที่ขอรับความช่วยเหลือที่ต้องการ";
    video = "video/3.7 การเลือกเรื่องที่ขอรับความช่วยเหลือที่ต้องการ.mp4";
  } else if (Cvideo == 10) {
    document.getElementById("nameV").innerHTML =
      "3.8 สิทธิสวัสดิการที่เคยได้รับ";
    video = "video/3.8 สิทธิสวัสดิการที่เคยได้รับ.mp4";
  } else if (Cvideo == 11) {
    document.getElementById("nameV").innerHTML = "3.9 การรับรองข้อมูลส่วนบุคคล";
    video = "video/3.9 การรับรองข้อมูลส่วนบุคคล.mp4";
  } else if (Cvideo == 12) {
    document.getElementById("nameV").innerHTML =
      "3.10 การเยี่ยมบ้านและการแนบเอกสารเพิ่มเติม";
    video = "video/3.10 การเยี่ยมบ้านและการแนบเอกสารเพิ่มเติม.mp4";
  } else if (Cvideo == 13) {
    document.getElementById("nameV").innerHTML =
      "3.11 การยืนยันการบันทึกข้อมูล";
    video = "video/3.11 การยืนยันการบันทึกข้อมูล.mp4";
  } else if (Cvideo == 14) {
    document.getElementById("nameV").innerHTML =
      "4.1 การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับตำบล";
    video = "video/4.1 การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับตำบล.mp4";
  } else if (Cvideo == 15) {
    document.getElementById("nameV").innerHTML =
      "4.2 การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับอำเภอ";
    video = "video/4.2 การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับอำเภอ.mp4";
  } else if (Cvideo == 16) {
    document.getElementById("nameV").innerHTML = "5.1 ความหมายของสถานะ";
    video = "video/5.1 ความหมายของสถานะ.mp4";
  } else if (Cvideo == 17) {
    document.getElementById("nameV").innerHTML =
      "6.1 การสร้างทางลัด อพม.Smart ไว้บนหน้าจอหลัก";
    video = "video/6.1 การสร้างทางลัด อพม.Smart ไว้บนหน้าจอหลัก.mp4";
  }
  player.src({ type: 'video/mp4', src: video });
  player.play();
}
//เปอเซนต์และห้ามกรอ
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
});

