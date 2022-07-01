function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/f0u0R854x/' , modelReady); 
}

function modelReady()
{
    classifier.classify(gotresults);
}