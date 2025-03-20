function main()
{
    let days=2, hours=7, minutes=15, seconds=36;
    console.log(`${days}:days, ${hours}:hours ${minutes}:minutes ${seconds}:seconds`)
    console.log(`Total miliseconds: ${Miliseconds(days,hours,minutes,seconds)}`);
}

function Miliseconds(days,hours,minutes,seconds)
{
    result=(((((days*24)*60)*60)*60)*1000)+(((hours*60)*60)*1000)+((minutes*60)*1000)+(seconds*1000);
    return result;
}
main();