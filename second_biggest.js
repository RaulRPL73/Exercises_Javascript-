function main()
{
    const numbers = [10,50,20,100,30,80,60];
    console.log(`The second biggest number is: ${selection(numbers)}`);
}

function selection(num)
{
    let  biggest=0, second=0;
    for(let value of num)
    {
        if(value > biggest)
        {
            second=biggest;
            biggest=value;
        }

        else if(value >second && value < biggest)
        {
            second=value;
        }
    }
    return second;
}
main();