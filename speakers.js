export const speech = (text) => {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1.0;
    msg.rate = 1.0;
    msg.pitch = 1.0;
    msg.lang = "ja-JP"; // or "en-US"
    msg.text = text;
    console.log(speechSynthesis)
    console.log(msg);
    speechSynthesis.speak(msg);
    msg.onend = (e) => {
      console.log(e.elapsedTime);
    }
    return msg; // .pause(), .resume()
  };
