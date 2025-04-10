function main()
{
    const date = new Date();
    leapyear(date);
}

function leapyear(date)
{
    let tempYear = date.getFullYear();
    for(let i=0;i<=30;i++)
    {
        if((tempYear % 4 === 0 && tempYear % 100 !== 0) || tempYear % 400 === 0)
        {
            date.setFullYear(tempYear);
            console.log(`In exactly 4 years, on the day (${date}, it will be a leap year!`);
        }
        tempYear++;
    }
}

main();