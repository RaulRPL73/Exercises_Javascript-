function main()
{
    const array = [10,50,20,40,30];
    arrangement(array);
}

function arrangement(array)
{
    let sort = [];
    for(let i=0;i<array.length;i++)
    {
        let insert = false;
        for(let j=0;j<sort.length;j++)
        {
            if(array[i]<sort[j])
            {
                //splice(index, deleteCount, item)
                sort.splice(j,0,array[i]);
                insert=true;
                break;
            }
        }
        //If there's no smallest number to compare to it pushes it to the end
        if(!insert)
        {
            sort.push(array[i]);
        }
    }
    console.log(sort);
}

main();