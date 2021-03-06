
leftWristX = 0;
rightWristX = 0;
difference= 0;

function setUp(){
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    pose.on( 'pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
   if( results.length >0){
       console.log(results);
     leftWristX = results[0].pose.leftWrist.x;
     rightWristX = results[0].pose.rightWrist.x;
     difference = floor(leftWristX - rightWristX);
   }
}
 
function draw(){
    background('#d499f2');
    fill('#de216d');
    textSize(difference);
    text('Eva Tandiya', 10, 10);
    document.getElementById("font_size").innerHTML = "Font Size Is" + difference + "px";
}