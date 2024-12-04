/**
 * Truncate a string to a specified number of words.
 * @param {string} text - The text to truncate.
 * @param {number} numWords - The number of words to truncate to.
 * @returns {string} - The truncated text with optional ellipsis.
 */
export function truncateWords(text, numWords) {
    // Check if the first argument is a non-empty string
    if (typeof text !== 'string' || text.trim() === '') {
      return '';
    }
  
    // Check if the second argument is a positive integer
    if (!Number.isInteger(numWords) || numWords < 1) {
      throw new Error('Second argument must be a positive integer');
    }
  
    // Split the text into words
    const words = text.split(/\s+/);
  
    // Return the original text if it's shorter than the maximum number of words
    if (words.length <= numWords) {
      return text;
    }
  
    // Truncate the text to the specified number of words
    const truncatedText = words.slice(0, numWords).join(' ');
  
    // Check if adding ellipsis is necessary
    const remainingText = words.slice(numWords).join(' ');
    if (remainingText.length > 0) {
      return `${truncatedText}...`;
    } else {
      return truncatedText;
    }
  }
  
