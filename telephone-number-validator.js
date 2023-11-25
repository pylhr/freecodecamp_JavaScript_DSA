function telephoneCheck(str) {
    // Define the regular expression pattern for valid US phone numbers
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

    // Test the input string against the regular expression
    return phoneRegex.test(str);
}
