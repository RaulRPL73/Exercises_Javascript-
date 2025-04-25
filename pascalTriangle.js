//Inspiration taken on https://stackoverflow.com/questions/31023844/how-to-program-pascals-triangle-in-javascript-confusion-re-arrays
function main()
{
    const triangle = [];
    pascal(triangle);
}

function pascal(triangle)
{
    let altitude=10;
    for (let row=0;row<=altitude; row++)
    {
        triangle[row] = [];
        for (let col=0;col<=row;col++)
        {
            if (col===0 || col===row)
            {
                triangle[row][col]=1;
            }
            else
            {
                triangle[row][col] = triangle[row-1][col-1]+triangle[row-1][col];
            }
        }
        console.log(triangle[row]);
    }
}

main();
