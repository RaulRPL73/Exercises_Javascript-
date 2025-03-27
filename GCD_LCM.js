function main()
{
    //This exercise aims to find the GCD and LCM without built-in methods
    let number1=15, number2=20;
    console.log(`Greatest Common Divisor of ${number1} and ${number2} is: ${GCD(number1,number2)}`);
    console.log(`Least Common Multiple of ${number1} and ${number2} is: ${LCM(number1,number2)}`);
}

function GCD(Num1,Num2)
{
    let result=0;
    const Maximum = Math.max(Num1,Num2);
    for(let i=1;i<Maximum;i++)
    {
        if(Num1%i===0 && Num2%i===0)
        {
            result=i;
        }
    }
    return result;
}

function LCM(Num1,Num2)
{
    let result=0, equation1=0, equation2=0;
    const Maximum = Math.max(Num1,Num2);
    for(let i=1;i<Maximum;i++)
    {
        equation1=Num1*i;
        for(let j=1;j<=Num2;j++)
        {
            equation2=Num2*j;
            if(equation2===equation1)
            {
                result=equation2;
            }
        }
        if(result!=0)
        {
            break;
        }
    }
    return result;
}

main();