function main()
{
    const date1="02-03-2025", date2="05-25-2024";
    console.log(`The date difference between ${date1} and ${date2} is ${comapare(date1,date2)} days`);
}

function comapare(time1, time2)
{
    let result=0;
    //Converts our string into new dates
    const dateTime1 = new Date(time1), dateTime2 = new Date(time2);
    //Makes you know the day
    const day1 = dateTime1.getDate(), day2 = dateTime2.getDate();
    //Makes you know the month but beacuse it manages it from 0 to 11 we add the +1 to make balance
    const month1 = dateTime1.getMonth()+1, month2 = dateTime2.getMonth()+1;
    //Makes you know the year
    const year1 = dateTime1.getFullYear(), year2 = dateTime2.getFullYear();
    result=(Math.abs((day1-day2)))+(Math.abs((month1-month2)*30))+(Math.abs((year1-year2)*365));
    return result;
}

main();