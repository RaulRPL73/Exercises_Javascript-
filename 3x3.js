function main()
{
    const matrix = [["x","o","x"],["o","o","o"],["x","o","x"]];
    comapare(matrix);
}

function comapare(matrix)
{
    let valueRow="", valueColumn="";
    const result = {
        "xxx": true,
        "xxo": false,
        "xox": false,
        "xoo": false,
        "oxx": false,
        "oxo": false,
        "oox": false,
        "ooo": true,
    };

    //For to check the rows
    for(let i=0;i<3;i++)
    {
        valueRow=matrix[i].join("");
        if(result[valueRow]===true)
        {
            if(valueRow==="xxx")
            {
                console.log("X Wins");
                break;
            }
            else if(valueRow==="ooo")
            {
                console.log("O Wins");
                break;
            }
        }
    }
        if(result[valueRow]===false)
        {
            //For to check the columns
            for(let i=0;i<3;i++)
            {
                valueColumn="";
                for(let j=0;j<3;j++)
                {
                    valueColumn+=matrix[j][i];
                }
        
                if(result[valueColumn]===true)
                {
                    if(valueColumn==="xxx")
                    {
                        console.log("X Wins");
                        break;
                    }
                    else if(valueColumn==="ooo")
                    {
                        console.log("O Wins");
                        break;
                    }
                }
                else
                {
                    console.log("It's a tie");
                }  
            }
        }
}
main();