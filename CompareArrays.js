const { console } = require("inspector");

function main()
{
    const numbers1 = [1,5,5,7], numbers2 = [2,6,7,5], verify = false;
    if(compare(numbers1,numbers2,verify))
    {
        console.log(`Same elements: ${compare(numbers1,numbers2,verify)}`);
    }
}

function compare(firstArray,secondtArray,verify)
{
    const result = [];
    let index=0;
    for(let value1 of firstArray)
    {
        for(let value2 of secondtArray)
        {
            if(value1===value2 && !result.includes(value2))
            {
                result[index]=value2;
                index++;
                verify=true;
            }
        }
    }
    if(!verify)
    {
        console.log("Theren't same elements");
        return false;
    }
    else
    {
        return result;
    }
}

main();