function main()
{
    let celsius, fahrenheit=23;
    if(fahrenheit==null)
    {
        console.log(`${celsius}ºC Celsius are in Fahrenheit: ${toFahrenheit(celsius)}ºF`);
    }
    else
    {
        console.log(`${fahrenheit}ºF Fahrenheit are in Celsius: ${toCelsius(fahrenheit)}ºC`);
    }
}

function toFahrenheit(celsius)
{
    return (celsius*1.8)+32;
}

function toCelsius(fahrenheit)
{
    return (fahrenheit-32)/1.8;
}

main();