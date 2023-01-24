function table()
{
    for(var number=1;number<=10;number++)
    {
        for(var sequence=1;sequence<=10;sequence++)
        {
            console.log(`${number}*${sequence}=${number*sequence}`);

        }
        console.log("\n");
    }
}
table();