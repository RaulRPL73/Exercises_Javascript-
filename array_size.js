function main()
{
    const array1 = [1,5], array2 = [-2,1];
    size(array1,array2);
}

function size(a1, a2)
{
    const cont1 = difference(a1);
    const cont2 = difference(a2);

    console.log(`The difference of the numbers in array 1 is ${cont1} and in array 2 is ${cont2}`);
}

function difference(arr)
{
    return Math.abs(arr[1] - arr[0]);
}

main();