  // Delay between each character typing (in milliseconds)
  const typingSpeed = 100;

  const sentences = [
    "My name",
    "is Gaurav"
  ];

  let currentSentenceIndex = 0;
  let currentCharacterIndex = 0;
  let isTyping = true;

  function typeText() {
    const currentSentence = sentences[currentSentenceIndex];
    const currentElement = document.getElementById(`sentence${currentSentenceIndex + 1}`);
    const cursorElement = document.querySelector('.input-cursor');

    if (currentCharacterIndex < currentSentence.length) {
      currentElement.textContent += currentSentence.charAt(currentCharacterIndex);
      currentCharacterIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      currentSentenceIndex++;
      currentCharacterIndex = 0;
      if (currentSentenceIndex >= sentences.length) {
        isTyping = false;
        cursorElement.style.display = 'none'; // Hide cursor when typing is done
        return;
      }
      setTimeout(typeText, 800); // Delay before starting the next sentence
    }

    // Show the cursor and set it at the end of the typed text
    cursorElement.style.display = 'inline';
    cursorElement.style.marginLeft = '5px'; // Adjust the margin as needed
    currentElement.appendChild(cursorElement);
  }

  // Wait for the page to load before starting the typing effect
  window.onload = () => {
    typeText();
  };