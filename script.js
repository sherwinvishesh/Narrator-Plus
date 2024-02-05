const speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
})

//document.querySelector("button").addEventListener("click", () => {
//    speech.text = document.querySelector("textarea").value;
//    window.speechSynthesis.speak(speech);
//})

const listenBtn = document.getElementById('listen');
const pauseBtn = document.getElementById('pause');
const resumeBtn = document.getElementById('resume');
const stopBtn = document.getElementById('stop');
let isPaused = false;

listenBtn.addEventListener('click', function() {
    speech.text = document.querySelector("textarea").value;
    speechSynthesis.speak(speech);
    listenBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
    stopBtn.style.display = 'inline';
});

pauseBtn.addEventListener('click', function() {
    speechSynthesis.pause();
    isPaused = true;
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'inline';
});

resumeBtn.addEventListener('click', function() {
    speechSynthesis.resume();
    isPaused = false;
    resumeBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
});

stopBtn.addEventListener('click', function() {
    speechSynthesis.cancel();
    resetButtons();
});

speech.onend = function() {
    if (!isPaused) resetButtons();
};

speech.onend = function(event) {
    resetButtons();
};

function resetButtons() {
    listenBtn.style.display = 'inline';
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'none';
    stopBtn.style.display = 'none';
    isPaused = false; // Ensure isPaused is reset correctly
}

function resetButtons() {
    listenBtn.style.display = 'inline';
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'none';
    stopBtn.style.display = 'none';
}

