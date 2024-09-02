//@ts-check

/**
 * 
 * @param {number} max 
 * @param {number} min 
 * @returns 
 */
function randomNumber(max, min) {
    if (max < min) [max, min] = [min, max];
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * 
 * @param {number} age 
 * @param {number} maxAge 
 */
function lifeInWeeks(age, maxAge = 90) {
    
    // Calculate the time left
    const yearsLeft = maxAge - age;
    const daysLeft = yearsLeft * 365;
    const weeksLeft = yearsLeft * 52;
    const monthsLeft = yearsLeft * 12;

    // Log the result
    console.log(`You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`);
};

// Example usage:
lifeInWeeks(5, 50);
console.log(`John and Marry are a ${randomNumber(100, 0)}% match`);

