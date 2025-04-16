function main() 
{
    const numbers = [1, 5, 9];
    readNumbers(numbers);
}

function readNumbers(numbers) 
{
    let temp = 0;
    if (numbers.length < 2) 
    {
        console.log("Not enough numbers to find gaps");
        return;
    }
    numbers.sort((a, b) => a - b); // Ensure they're in order
    for (let value of numbers) 
    {
        if ((temp + 1) === value) 
        {
            temp = value;
            continue;
        } 
        else 
        {
            sumNumbers(temp, value);
            temp = value;
        }
    }
}

function sumNumbers(firstNumber, lastNumber) 
{
    let temp = firstNumber + 1;
    console.log(`Numbers missing between ${firstNumber} and ${lastNumber} are:`);
    while (temp < lastNumber) 
    {
        console.log(temp);
        temp++;
    }
}

main();