function main()
{
    let order = "Descending";
    const matrix = [
        [5, 2, 4],
        [10, 7, 6],
        [1, 3, 9]
    ];
    if(order=="Ascending")
    {
        ascending(matrix);
    }
    else if(order=="Descending")
    {
        descending(matrix);
    }
}

function ascending(matrix)
{
    let temp=matrix[0][0];
    const result = [];
    for(let i=0; i<matrix.length; i++)
    {
        for(let j=0; j<matrix[i].length; j++)
        {
            result.push(matrix[i][j]);
        }
    }
    
    for(let index of result)
    {
        for(let i=0; i<result.length; i++)
        {
            if(result[i]>result[i+1])
            {
                temp=result[i];
                result[i]=result[i+1];
                result[i+1]=temp;
            }
        }
    }
    console.log(result);
}

function descending(matrix)
{
    let temp=matrix[0][0];
    const result = [];
    for(let i=0; i<matrix.length; i++)
    {
        for(let j=0; j<matrix[i].length; j++)
        {
            result.push(matrix[i][j]);
        }
    }
    
    for(let index of result)
    {
        for(let i=0; i<result.length; i++)
        {
            if(result[i]<result[i+1])
            {
                temp=result[i];
                result[i]=result[i+1];
                result[i+1]=temp;
            }
        }
    }
    console.log(result);
}
main();