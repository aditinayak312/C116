noseX=0;
noseY=0;
leftshX=0;
leftshY=0;
rightshX=0;
rightshY=0;
lefteyeX=0;
lefteyeY=0;
righteyeX=0;
righteyeY=0;
mideyeX=0;
mideyeY=0;

function preload(){
clownnose=loadImage("https://i.postimg.cc/Y91wRdW9/Clown-nose-removebg-preview.png");
clownhair=loadImage("https://i.postimg.cc/59RmpffX/clown-hair-removebg-preview.png");
leftangelwing=loadImage("https://i.postimg.cc/vmY9bKQR/left-angel-wing-removebg-preview.png");
rightangelwing=loadImage("https://i.postimg.cc/nVgWdyxh/right-angel-wing-removebg-preview.png");
sunglasses=loadImage("https://i.postimg.cc/rsrfXpTF/sunglasses-removebg-preview.png");
hairband=loadImage("https://i.postimg.cc/L8H3vDJs/hairband-removebg-preview.png");
halo=loadImage("https://i.postimg.cc/28x4qW0N/halo-removebg-preview.png");
moustache=loadImage("https://i.postimg.cc/KY1LsHxm/moustache-removebg-preview.png");
}

function setup(){
   canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose", gotposes);
}

function draw(){
image(video,0,0,300,300);
image(clownnose,noseX-25,noseY-20,50,50);
image(moustache,noseX-20,noseY+10,50,20);
image(clownhair,noseX-45,noseY-90,90,50);
image(sunglasses,mideyeX-35,mideyeY-20,80,50);
image(leftangelwing,leftshX-290,leftshY-80,200,200);
image(rightangelwing,rightshX+70,rightshY-80,200,200);
}

function takesnapshot(){
    save("selfie.jpg");
}

function modelloaded(){
    console.log("posenet is initialised");
}

function gotposes(results){
   if (results.length>0){
       console.log(results);
       console.log("nosex="+results[0].pose.nose.x);
       console.log("nosey="+results[0].pose.nose.y);
       noseX=results[0].pose.nose.x;
       noseY=results[0].pose.nose.y;
       leftshX=results[0].pose.leftShoulder.x;
       leftshY=results[0].pose.leftShoulder.y;
       rightshX=results[0].pose.rightShoulder.x;
       rightshY=results[0].pose.rightShoulder.y;
       lefteyeX=results[0].pose.leftEye.x;
       lefteyeY=results[0].pose.leftEye.y;
       righteyeX=results[0].pose.rightEye.x;
       righteyeY=results[0].pose.rightEye.y;
       mideyeX=(lefteyeX+righteyeX)/2;
       mideyeY=(lefteyeY+righteyeY)/2;

   } 
}