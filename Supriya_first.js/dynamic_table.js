function table(number)
{
   
        for(var sequence=1;sequence<=10;sequence++)
        {
            console.log(`${number}*${sequence}=${number*sequence}`);

        }
        
    }
var number=prompt("enter the number for printing table");
table(number);