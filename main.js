song_1 = "";
song_2 = "";

scoreLeftWrist = 0;
leftWristX = 0;
leftWristY = 0;

rigthWristX = 0;
rigthWristY = 0;

function preload()
{
    song_1 = loadSound("114_pirates_of_caribbean_themes_mp3_ringtone_ringtone_mp3.mp3");
    song_1 = loadSound("44_avengers_theme_bgm_mp3_ringtone_ringtone_mp3.mp3");
}
function setup()
{
    canvas = createCanvas(600, 500)
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Posenet Is Initalized");
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);

        rigthWristX = results[0].pose.rigthWrist.x;
        rigthWristY = results[0].pose.rigthWrist.y;

        console.log("rigthWristX = " + rightWristX + "rigthWristY = " + rigthWristY);

        rigthWristX = results[0].pose.rigthWrist.x;
        rigthWristY = results[0].pose.rigthWrist.y;

        console.log("rigthWristX = " + rigthWristX + "rigthWristY = " + rigthWristY);
    }

}
function draw()
{

    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX, leftWristY,20);
    InNumberleftWristX = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
}
}