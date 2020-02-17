function calculate(){
    let total=parseInt(document.getElementById("total").value);
    console.log(typeof total);
    let rate=parseInt(document.getElementById("rate").value);
    console.log(typeof rate);
    let grand_total=document.getElementById("grand_total");

    grand_total.innerHTML = ((total*(rate/100)) + 5.50 + total);

}