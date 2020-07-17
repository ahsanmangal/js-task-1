
var balance =+prompt("Enter Balance")
console.log("Your Remaining Balance is", balance);
var prApple=25;
var qnApple=0;

function qtyAdd(){
    qnApple=qnApple+1;
    console.log("Quantity", qnApple);

    totalPrice = prApple*qnApple;

    if(totalPrice>balance){
        alert("Sorry Sir!! You have no Balance")
    }
    else
    {
    console.log("Total Price", totalPrice);
    }
}   

function qtyMinus(){
    qnApple=qnApple-1;
    console.log("Quantity", qnApple);

    totalPrice = prApple*qnApple;

    if( totalPrice <0){
        alert("Add to Cart");
    }
    else{
        console.log("Total Price", totalprice);
    }
}