
const res = document.getElementById('res');

const input = document.getElementById('entry-bar-content');
input.classList.add('entry-bar-content-animation');

input.addEventListener('input', inputResponse);

function inputResponse(e){
    input.classList.remove('entry-bar-content-animation');

    factor = input.value;
    console.log(factor);

    if (isNaN(factor)){
        res.innerText = "";
    }
    if (!isNaN(factor)){
        getPrice(parseFloat(factor));
    }  
}

function getPrice(factor){
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
        .then(function(response) {
            return response.json();
        })
        .catch(function(err) {
            console.log("Could not fetch from coingecko");
        })
        .then(function(response) {
            console.log(response.market_data.current_price.cad);
            price = parseFloat(response.market_data.current_price.cad);
            result = (price * factor).toFixed(2);
            if (isNaN(result)){
                res.innerText = "";
                
            }
            else{
                res.innerText = result + " CAD" ;
            }
        });
}
    