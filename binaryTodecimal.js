function main()
{
    let number = "1111101";
    console.log(`The value of ${number} in decimal is: ${decimal(number)}`);
}

function decimal(number)
{
    let value=0, result=0, temp=1;
    for(let i=(number.length-1);i>=0;i--)
    {
        if(number[i]==="1")
        {
            value+=temp;
        }
        temp*=2;
    }
    result=value;
    return result;
}

main();