let buttonTexts = ['huh', 'wha', 'no???', 'wth!!!', '(•ˋ _ ˊ•)', 'do you want me to get mad?', 'rethink your choice smoly baby','LAST CHANCE LITTLE LADY','THERES NO COMING BACK FROM THIS...', 'THATS IT!!!'];
    let currentTextIndex = 0;

    function changeText() {
        const noButton = document.querySelector('.yes');
        noButton.innerText = buttonTexts[currentTextIndex];
        const currentFontSize = parseFloat(getComputedStyle(noButton).fontSize);
    const newFontSize = currentFontSize * 1.25;  // You can adjust the multiplier for the desired text size increase
    
    
    
    if (buttonTexts[currentTextIndex] === 'THATS IT!!!') {
        window.location.href = './no.html';
        return; // Stop further execution if redirected
    }
    
    noButton.style.fontSize = newFontSize + 'px';
        // Increment the index or reset it to 0 if it reaches the end
        currentTextIndex = (currentTextIndex + 1) % buttonTexts.length;
    }



