const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) => {
    let processedText = [...text];
    
    if (removeSpecialChars) {
        processedText = processedText.filter(char => /[a-zA-Z0-9\s]/.test(char));
    }

    if (reverse) {
        processedText = processedText.reverse();
    }

    processedText = processedText.join('');

    if (uppercase) {
        processedText = processedText.toUpperCase();
    }

    return `Processed Text: ${processedText}`;
};

const text = "JakIs, takI tEkst!!!";
const options = { uppercase: true, reverse: true, removeSpecialChars: true };
console.log(processText(text, options));

