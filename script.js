let buttonTexts = ['huh', 'no???', 'wth!!!', 'do you want me to get mad?', 'rethink your choice smoly baby', 'end'];
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

    // function happy(){

    //     // do smth when she presses yes, like travel to another webapge saying smth but thats done with html

        
    // }