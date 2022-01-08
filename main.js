nose_x = 0;
nose_y = 0;

function preload() {
    filters12 = loadImage('https://i.postimg.cc/pTQT05qL/filter.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}

function draw() {
    image(video,0,0,300,300);
    image(filters12,nose_x - 50,nose_y,100,40);
}

function snapshot_take() {
    save('filter.png');
}

function modelLoaded() {
    console.log("modelLoaded")
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log(nose_x, nose_y);
    }
}