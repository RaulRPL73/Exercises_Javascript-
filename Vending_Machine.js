/*This vending machine it's use only to show the product you can buy, buying and subtracting the total can be done easily bu im not
using html to make that happen */
function main()
{
    const money = [.50, 1, .50];
    selection(money);
}

function selection(money)
{
    let total=0, item;
    const products = {
        "soda":.50,
        "popcorn":3,
        "potatochips":2,
        "candy":1
    }

    for(let value of money){total+=value;}
    for(let index in products)
    {
        item=products[index];
        if(products[index]<=total)
        {
            console.log(`You can buy: ${index}`)
        }
    }

}
main();