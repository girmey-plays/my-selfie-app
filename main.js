var speechRecognition = webkitSpeechRecognition;

var recognition = new speechRecognition();

function start()
{
document.getElementById("textbox").innerHTML = "";

recognition.start();

}

recognition.onresult = function(event)
{

console.log(event);
var content = event.results[0][0].transcript;
console.log(content);

document.getElementById("textbox").innerHTML = content;
speak();

if(content == "take my selfie"){

console.log("taking selfie");

speak();

}


}

function speak()
{

var synth = window.speechSynthesis;
speak_data = "taking selfie in 5 seconds...";

var utterthis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);
Webcam.attach(camera);

setTimeout(function(){

take_snapshot();

save();
},5000);
}


Webcam.set({

width:350,
height:250,
image_format:"png",
png_quality:90

});

camera=document.getElementById("camera");

function take_snapshot()
{
Webcam.snap(function(data_uri){

    document.getElementById("result").innerHTML = '<img id = "snapshot" src ="'+data_uri+'">';


});



}

function save(){

link = document.getElementById("link");

image = document.getElementById("snapshot").src;

link.href = image;

link.click();
}