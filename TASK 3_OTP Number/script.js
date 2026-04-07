function generateOTP()
{
    var otp = Math.floor(1000 + Math.random() * 9000);

    document.getElementById("otpDisplay").innerText = otp;
}


window.onload = function()
{
    generateOTP();
}