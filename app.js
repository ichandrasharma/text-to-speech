let sound = new SpeechSynthesisUtterance();
let arrVoice = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    arrVoice = window.speechSynthesis.getVoices();
    sound.voice = arrVoice[0];

    arrVoice.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () => {
    sound.voice = arrVoice[voiceSelect.value];
})

document.querySelector("button").addEventListener("click", () => {
    sound.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(sound);
})