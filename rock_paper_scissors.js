function main()
{
    let player1="Paper", player2="Scissors";
    game(player1,player2);
}

function game(p1,p2)
{
    let player1_choose = p1.charAt(0);
    let player2_choose = p2.charAt(0);
    const interaction = {
        "SP":true,
        "RS":true,
        "PR":true
    }
    if(interaction[player1_choose+player2_choose]||interaction[player2_choose+player1_choose])
    {
        if(interaction[player1_choose+player2_choose])
        {
            console.log("Player 1 wins");
        }
        else
        {
            console.log("Player 2 wins");
        }
    }
    else
    {
        console.log("It's a tie");
    }
}

main();