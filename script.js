var btc=document.getElementById("bitcoin")
var eth=document.getElementById("ethereum")
var dog=document.getElementById("dogecoin")
var settingd ={
    "async" : true,
    "scrossDomain" : true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}

}
$.ajax(settingd).done(function(response){
    btc.innerHTML=response.bitcoin.usd;
    eth.innerHTML=response.ethereum.usd;
    dog.innerHTML=response.dogecoin.usd;
});