// Copy tulisan rekening bank Mandiri
let textToCopy = document.getElementById("textToCopy").innerHTML;
const copyTextToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

// Copy tulisan rekening bank BRI
let textToCopy2 = document.getElementById("textToCopy2").innerHTML;
const copyTextToClipboard2 = async () => {
  try {
    await navigator.clipboard.writeText(textToCopy2);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

// Audio
function toggleAudio() {
  var audio = document.querySelector("audio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
