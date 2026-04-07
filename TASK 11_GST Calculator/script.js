function calculateGST(){

    let amount = document.getElementById("amount").value;
    let rate = document.getElementById("rate").value;

    amount = parseFloat(amount);
    rate = parseFloat(rate);

    if(isNaN(amount) || amount <= 0){
        alert("Please enter valid amount");
        return;
    }

    let gst = (amount * rate) / 100;
    let total = amount + gst;

    document.getElementById("base").innerText = amount.toFixed(2);
    document.getElementById("gst").innerText = gst.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);
}