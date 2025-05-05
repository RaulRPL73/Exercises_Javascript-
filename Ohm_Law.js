function main()
{
    let Voltage=7, Resistance, Intensity=2;
    if(Intensity==null)
    {
        Intensity=getIntensity(Resistance,Voltage);
        console.log(`Using the law of Ohm the intensity would be: ${Intensity}A`);
    }
    else if(Voltage==null)
    {
        Voltage=getVoltage(Resistance,Intensity);
        console.log(`Using the law of Ohm the voltage would be: ${Voltage}V`);
    }
    else if(Resistance==null)
    {
        Resistance=getResistance(Intensity,Voltage);
        console.log(`Using the law of Ohm the resistance would be: ${Resistance}Ω`);
    }
}

function getIntensity(Resistance,Voltage)
{
    return Voltage/Resistance;
}

function getVoltage(Resistance,Intensity)
{
    return Resistance*Intensity;
}

function getResistance(Intensity,Voltage)
{
    return Voltage/Intensity;
}

main();