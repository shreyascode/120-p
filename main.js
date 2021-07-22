function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/47wr0FePg/',modelLoaded);
  }
  
  function modelLoaded() {
      console.log('Model Loaded!');
  }
  function draw(){
    if(error){
      console.error(error);
    }else{
      console.log(results);
      document.getElementById("result_object_name").innerHTML = results[0].label;
      document.getElementById("result_object_accuracy").innerHTML = results[0].confidence. toFixed (3)
    }
  }
  