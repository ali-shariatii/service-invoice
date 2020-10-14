console.log("main.js loaded");

jQuery(document).ready(function(){
    console.log("jQuery ready");    
})

var total = document.getElementById("total")
var salestaxes = document.getElementById("salestaxes")
var subtotal = document.getElementById("subtotal")

var designtotalprice = document.getElementById("designtotalprice")
var designtotalhours = document.getElementById("designtotalhours")

var backendtotalprice = document.getElementById("backendtotalprice")
var backendtotalhours = document.getElementById("backendtotalhours")

var frontendtotalprice = document.getElementById("frontendtotalprice")
var frontendtotalhours = document.getElementById("frontendtotalhours")

var buttonSoundEffect = document.getElementById("buttonSoundEffect")




function getPriceButton()
{
    total.innerHTML = "$ " + ( calculateSubtotal() * 1.09975 ).toFixed(2);
    salestaxes.innerHTML = "$ " + ( calculateSubtotal() * 0.09975 ).toFixed(2);
    subtotal.innerHTML = "$ " + calculateSubtotal().toFixed(2);
    designtotalprice.innerHTML = "$ " + calculateDesignTotalPrice(designtotalhours.value);
    backendtotalprice.innerHTML = "$ " + calculateBackendTotalPrices(backendtotalhours.value).toFixed(2);
    frontendtotalprice.innerHTML = "$ " + calculateFrontendTotalPrice(frontendtotalhours.value).toFixed(2);
    buttonSoundEffect.play();
}

function calculateSubtotal()
{
    return calculateDesignTotalPrice(designtotalhours.value) + calculateFrontendTotalPrice(frontendtotalhours.value) + calculateBackendTotalPrices(backendtotalhours.value);
}

function calculateDesignTotalPrice(hours)
{
    return hours * 29.99;
}

function calculateBackendTotalPrices(hours)
{
    return hours * 44.99;
}

function calculateFrontendTotalPrice(hours)
{
    return hours * 34.99;
}




function clickPrint()
{
    alert("The printer is not connected! :)");
}