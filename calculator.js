const { sign } = require('crypto');

function main()
{
    readFile();
}

//Format required to read a file
const fs = require('fs').promises;
async function readFile() 
{
    try 
    {
        const signs = {
            "+":true,
            "-":true,
            "/":true,
            "*":true
        }
        //Reads the file and turns it in utf8 format, with that it turns in automatic in a string
        const data = await fs.readFile('calculator.txt', 'utf8');
        //Join the characters on the file in 1 row, eliminating each space or another information that's not needed
        const reader = data.replace(/\s+/g, '').split("");
        //First value is always a number
        let result = parseInt(reader[0]);
        for(let i=0;i<reader.length;i++)
        {
            let value = reader[i];

            if(signs[value])
            {
                //The number in front of the sign, it's turned into a int and then used depending what sign are we using
                let numberFront= parseInt(reader[i+1]);
                //If it detects a sign then it checks it like NaN because no int data can change the signs
                if(!isNaN(numberFront))
                {
                    if(value==="+")
                    {
                        result+=numberFront;
                    }
                    else if(value==="*")
                    {
                        result*=numberFront;
                    }
                    else if(value==="-")
                    {
                        result-=numberFront;
                    }
                    else if(value==="/")
                    {
                        result/=numberFront;
                    }
                }
            }
        }
        console.log(`The result is: ${result}`);
    } 
    catch (err) 
    {
        console.error('Error reading the file:', err);
    }
}
main();
