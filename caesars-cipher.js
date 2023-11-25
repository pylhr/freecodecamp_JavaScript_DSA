function rot13(str) {
    return str.split('').map(char => {
        // Check if the character is an uppercase letter
        if (/[A-Z]/.test(char)) {
            // Rotate the letter by 13 positions
            const code = char.charCodeAt(0);
            return String.fromCharCode((code - 65 + 13) % 26 + 65);
        }
        // If the character is not an uppercase letter, return it unchanged
        return char;
    }).join('');
}

// Test case
console.log(rot13("SERR PBQR PNZC"));  // Output: FREE CODE CAMP
