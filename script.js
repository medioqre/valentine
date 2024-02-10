let buttonTexts = ['huh', 'no?? really?', 'are you sure???', 'rethink your choice smoly baby'];
    let currentTextIndex = 0;
    
    function changeText() {
        const noButton = document.querySelector('.no');
        noButton.innerText = buttonTexts[currentTextIndex];
        const currentFontSize = parseFloat(getComputedStyle(noButton).fontSize);
    const newFontSize = currentFontSize * 1.4;  // You can adjust the multiplier for the desired text size increase

    noButton.style.fontSize = newFontSize + 'px';
        // Increment the index or reset it to 0 if it reaches the end
        currentTextIndex = (currentTextIndex + 1) % buttonTexts.length;
    }


