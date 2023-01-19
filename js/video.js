//่กดเลือกวิดิโอ
function light(Cvideo) {
  var video;
  if (Cvideo == 1) {
    document.getElementById("nameV").innerHTML ="1.1 แนะนำเว็บแอปพลิเคชัน อพม.Smart";
    video = "video/1.แนะนำเว็บแอปพลิเคชัน อพม.Smart.mp4";
  } else if (Cvideo == 2) {
    document.getElementById("nameV").innerHTML = "2.1 การเข้าสู่ระบบ";
    video = "video/2. การเข้าสู่ระบบ.mp4";
  } else if (Cvideo == 3) {
    document.getElementById("nameV").innerHTML ="3.1 การยื่นคำร้องและการกดรับพิกัด GPS";
    video = "video/3.การยื่นคำร้องและการกดรับพิกัด GPS.mp4";
  } else if (Cvideo == 4) {
    document.getElementById("nameV").innerHTML ="3.2 การกรอกประวัติผู้ประสบปัญหาทางสังคม";
    video = "video/4.การกรอกประวัติผู้ประสบปัญหาทางสังคม.mp4";
  } else if (Cvideo == 5) {
    document.getElementById("nameV").innerHTML ="3.3 การกรอกที่อยู่ตามทะเบียนบ้าน";
    video = "video/5.การกรอกที่อยู่ตามทะเบียนบ้าน.mp4";
  } else if (Cvideo == 6) {
    document.getElementById("nameV").innerHTML = "3.4 การกรอกที่อยู่ปัจจุบัน";
    video = "video/6.การกรอกที่อยู่ปัจจุบัน.mp4";
  } else if (Cvideo == 7) {
    document.getElementById("nameV").innerHTML = "3.5 การเลือกประภทผู้ขอรับบริการ";
    video = "video/7.การเลือกประเภทผู้ขอรับบริการ.mp4";
  } else if (Cvideo == 8) {
    document.getElementById("nameV").innerHTML ="3.6 การเลือกสภาพปัญหาความเดือดร้อนที่พบ";
    video = "video/8.การเลือกสภาพปัญหาความเดือดร้อนที่พบ.mp4";
  } else if (Cvideo == 9) {
    document.getElementById("nameV").innerHTML ="3.7 การเลือกเรื่องที่ขอรับความช่วยเหลือที่ต้องการ";
    video = "video/9.การเลือกเรื่องที่ขอรับความช่วยเหลือที่ต้องการ.mp4";
  } else if (Cvideo == 10) {
    document.getElementById("nameV").innerHTML = "3.8 สิทธิสวัสดิการที่เคยได้รับ";
    video = "video/10.สิทธิสวัสดิการที่เคยได้รับ.mp4";
  } else if (Cvideo == 11) {
    document.getElementById("nameV").innerHTML = "3.9 การรับรองข้อมูลส่วนบุคคล";
    video = "video/11.การรับรองข้อมูลส่วนบุคคล.mp4";
  } else if (Cvideo == 12) {
    document.getElementById("nameV").innerHTML ="3.10 การเยี่ยมบ้านและการแนบเอกสารเพิ่มเติม";
    video = "video/12.การเยี่ยมบ้านและการแนบเอกสารเพิ่มเติม.mp4";
  } else if (Cvideo == 13) {
    document.getElementById("nameV").innerHTML = "3.11 การยืนยันการบันทึกข้อมูล";
    video = "video/13.การยืนยันการบันทึกข้อมูล.mp4";
  } else if (Cvideo == 14) {
    document.getElementById("nameV").innerHTML = "4.1 การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับตำบล";
    video = "video/14.การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับตำบล.mp4";
  }else if (Cvideo == 15) {
    document.getElementById("nameV").innerHTML = "4.2 การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับอำเภอ";
    video = "video/15.การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับอำเภอ.mp4";
  }else if (Cvideo == 16) {
    document.getElementById("nameV").innerHTML = "5.1 ความหมายของสถานะ";
    video = "video/16.ความหมายของสถานะ.mp4";
  }else if (Cvideo == 17) {
    document.getElementById("nameV").innerHTML = "6.1 การสร้าง อพม.Smart ไว้บนหน้าจอหลัก";
    video = "video/17.การสร้าง อพม.Smart ไว้บนหน้าจอหลัก.mp4";
  }
  document.getElementById("videoP").src = video;
}

/* for (let i = 0; i <= 17 ; i++) {
  if (Cvideo == i) {
    document.getElementById("nameV").innerHTML ="1.1 แนะนำเว็บแอปพลิเคชัน อพม.Smart";
    video = "video/..";
  } 
  
} */

//ห้ามกรอ
var video = document.getElementById("videoP");
var percentage = document.getElementById("percentage");
var supposedCurrentTime = 0;
video.addEventListener("timeupdate", function () {
  if (!video.seeking) {
    supposedCurrentTime = video.currentTime;
  }
});
video.addEventListener("seeking", function () {
  var delta = video.currentTime - supposedCurrentTime;
  if (delta > 0.01) {
    video.currentTime = supposedCurrentTime;
  }
});
video.addEventListener("ended", function () {
  // reset state in order to allow for rewind
  supposedCurrentTime = 0;
});


//เมื่อดูครั้งแรกจะไม่สามารถกรอได้
const fastForwardButton = document.getElementById("fast-forward-button");

// Check if the user has watched the video before
if (localStorage.getItem("hasWatchedVideo") === "true") {
  // If the user has watched the video before, enable the fast-forward button
  fastForwardButton.disabled = false;
} else {
  // If the user has not watched the video before, disable the fast-forward button
  fastForwardButton.disabled = true;
}

// Add an event listener to the video element that listens for the "ended" event
video.addEventListener("ended", function() {
  // When the video ends, set the "hasWatchedVideo" value in local storage to true
  localStorage.setItem("hasWatchedVideo", "true");
  // Enable the fast-forward button
  fastForwardButton.disabled = false;
});




//เปอร์เซ็น
video.addEventListener("timeupdate", function () {
  // Calculate the percentage of the video that has been viewed
  var percent = (video.currentTime / video.duration) * 100;
  percentage.innerHTML = percent + "%";
});

//ค้นหา
function search() {
  let filter = document.getElementById("find").value.toUpperCase();
  let item = document.querySelectorAll(".accordion");
  let l = document.getElementsByTagName("a");
  for (let i = 0; i < item.length; i++) {
    let a = item[i].getElementsByTagName("a");
    console.log("a[i]: ", a[i]);
    let value = a[i].innerHTML || a[i].innerText || a[i].textContent;
    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}