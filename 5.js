/* 
MAKE DISCOUNT LOGIC USING CONDITIONS
amount <100 dicount 10%
100-200 20%
200-500 30%
more than 500 40% 
day monday extra 10 rupees

*/

var amount=450

day= "monday"

if(amount<100){
    amount=(amount)-(amount*10)/100;
    console.log("Your amount is ",amount);
}

else if(amount>=100 && amount<=200){
    amount=(amount)-(amount*20)/100;
    console.log("Your amount is ",amount);
}

else if(amount>=200 && amount<=500){
    amount=(amount)-(amount*30)/100;
    console.log("Your amount is",amount);
}



else {
    amount=(amount)+(amount*50)/100;
    console.log("Your amount is ",amount);
}


if(day=='monday'){
    amount-=10;
    console.log("Your amount is Monday special",amount);
}