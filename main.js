Webcam.set({
    width : 1000,
    height : 500,
    image_format : 'png',
    png_quality : 90
});

Camera = document.getElementById("Camera");

function WebCam_Button(){
Webcam.attach(Camera);
}