function setup(){
    classifier = ml5.imageClassfier("DoodleNet");
}
function setup(){
    canvas = createCanvas(700,350);
    canvas.center();
    canvas.background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}
function draw(){
    strokeWeight(5);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function clearCanvas(){
    canvas.background("white");
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("label").innerHTML="Label : "+results[0].label;
        document.getElementById("confidence").innerHTML="Confidence : "+Math.round(results[0].confidence*100)+"%";
        var utterthis = new SpeechSynthesisUtterance(results[0].label);
        synth.speek(utterthis);
    }
}