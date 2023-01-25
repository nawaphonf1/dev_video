var player = videojs("videoP");
//่กดเลือกวิดิโอ
var videos = [
  { name: "1.1 แนะนำเว็บแอปพลิเคชัน อพม.Smart", src: "video/1.1 แนะนำเว็บแอปพลิเคชัน อพม.Smart.mp4" },
  { name: "2.1 การเข้าสู่ระบบ", src: "video/2.1 การเข้าสู่ระบบ.mp4" },
  { name: "3.1 การยื่นคำร้องและการกดรับพิกัด GPS", src: "video/3.1 การยื่นคำร้องและการกดรับพิกัด GPS.mp4" },
  { name: "3.2 การกรอกประวัติผู้ประสบปัญหาทางสังคม", src: "video/3.2 การกรอกประวัติผู้ประสบปัญหาทางสังคม.mp4" },
  { name: "3.3 การกรอกที่อยู่ตามทะเบียนบ้าน", src: "video/3.3 การกรอกที่อยู่ตามทะเบียนบ้าน.mp4" },
  { name: "3.4 การกรอกที่อยู่ปัจจุบัน", src: "video/3.4 การกรอกที่อยู่ปัจจุบัน.mp4" },
  { name: "3.5 การเลือกประภทผู้ขอรับบริการ", src: "video/3.5การเลือกประเภทผู้ขอรับบริการ.mp4" },
  { name: "3.6 การเลือกสภาพปัญหาความเดือดร้อนที่พบ", src: "video/3.6 การเลือกสภาพปัญหาความเดือดร้อนที่พบ.mp4" },
  { name: "3.7 การเลือกเรื่องที่ขอรับความช่วยเหลือที่ต้องการ", src: "video/3.7 การเลือกเรื่องที่ขอรับความช่วยเหลือที่ต้องการ.mp4" },
  { name: "3.8 สิทธิสวัสดิการที่เคยได้รับ", src: "video/3.8 สิทธิสวัสดิการที่เคยได้รับ.mp4" },
  { name: "3.9 การรับรองข้อมูลส่วนบุคคล", src: "video/3.9 การรับรองข้อมูลส่วนบุคคล.mp4" },
  { name: "3.10 การเยี่ยมบ้านและการแนบเอกสารเพิ่มเติม", src: "video/3.10 การเยี่ยมบ้านและการแนบเอกสารเพิ่มเติม.mp4" },
  { name: "3.11 การยืนยันการบันทึกข้อมูล", src: "video/3.11 การยืนยันการบันทึกข้อมูล.mp4" },
  { name: "4.1 การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับตำบล", src: "video/4.1 การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับตำบล.mp4" },
  { name: "4.2 การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับอำเภอ", src: "video/4.2 การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับอำเภอ.mp4" },
  { name: "5.1 ความหมายของสถานะ", src: "video/5.1 ความหมายของสถานะ.mp4" },
  { name: "6.1 การสร้างทางลัด อพม.Smart ไว้บนหน้าจอหลัก", src: "video/6.1 การสร้างทางลัด อพม.Smart ไว้บนหน้าจอหลัก.mp4" },
];

for (var i = 0; i < 17; i++) {
  document.getElementById("videoLink" + (i + 1)).addEventListener("click", function() {
    var videoIndex = this.id.slice(-1) - 1;
    var video = videos[videoIndex];
    player.src({ type: 'video/mp4', src: video.src });
    document.getElementById("videoName").innerHTML = video.name;
  });
}

//เปอเซนต์และห้ามกรอ

video1 = false;
player.on("timeupdate", function () {
  var percentage = (player.currentTime() / player.duration()) * 100;
  document.getElementById("percentage").innerHTML =
    Math.round(percentage) + "%";
  if (percentage === 100) {
    video1 = true;
    player.controlBar.progressControl.show();
  } else if (video1 === false) {
    player.controlBar.progressControl.hide();
  }
});
