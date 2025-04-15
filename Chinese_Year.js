function main()
{
    let time = new Date();
    let date = time.getFullYear();
    calendar(date);
}

function calendar(date)
{
    const chinese_calendar = {
        1924: "Rat year, Water Yang",
        1925: "Ox year, Earth Yin",
        1926: "Tiger year, Wood Yang",
        1927: "Rabbit year, Wood Yin",
        1928: "Dragon year, Earth Yang",
        1929: "Serpent year, Fire Yin",
        1930: "Horse year, Fire Yang",
        1931: "Goat year, Earth Yin",
        1932: "Monkey year, Metal Yang",
        1933: "Chicken year, Metal Yin",
        1934: "Dog year, Earth Yang",
        1935: "Pig year, Water Yin"
    };
    console.log(`The year ${date} is the ${chinese_calendar[date-96]} in the Chinese zodiac.`);
}

main();