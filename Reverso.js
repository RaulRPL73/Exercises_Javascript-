function main()
{
    let palabra = "Abraham", ultima, j=palabra.length, reverso = "";

    for(let i=0;i<palabra.length;i++)
    {
        j--;
        ultima = palabra[j];
        reverso=reverso+ultima;
    }

    console.log(reverso);

    /*
    Different method to use to make the code more optimize

        const rangeArray = Array.from({length:5},(_,i)=>i);
        rangeArray.forEach((item) => 
        {
            console.log(Item: ${item});
        });
    */
}

main();