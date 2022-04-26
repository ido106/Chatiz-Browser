var mediaRecorder = null;

let stopRecording = () => {
    if(mediaRecorder !=null) 
        mediaRecorder.stop();
    document.getElementById('closeRecordingBtn').click();
};

let startRecording = () => {
    navigator.mediaDevices.getUserMedia({audio : true})
    .then(stream => {
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();

        const audioChunks = [];
        mediaRecorder.addEventListener("dataavailable", event => {
            audioChunks.push(event.data);
        });

        mediaRecorder.addEventListener("stop", () => {
            const audioBlob = new Blob(audioChunks);
            const audioUrl = URL.createObjectURL(audioBlob);
            addMessage('audio',audioUrl,'audio');
        });
    });
};