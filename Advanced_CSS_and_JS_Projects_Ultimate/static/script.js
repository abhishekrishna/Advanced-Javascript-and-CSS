//Challange your lifetime water usage



function getAge() {
    var age = prompt('What is your age as of today?');
    var h3 = document.getElementById('h3');
    h3.remove();
    var totalWater = (age * 80) * 365;
    var h4 = document.createElement('h4');
    var textResult = document.createTextNode('You have used ' + totalWater + ' Gallons of water. ');
    h4.setAttribute('id', 'value');
    h4.appendChild(textResult);
    document.getElementById('flex-result-box').appendChild(h4);

    //Implement Reset Button ??
}

//Reset Button Implementation as 0 Gallons

function resetGallons() {
    document.getElementById('value').remove();
    var h5 = document.createElement('h5');
    var resetCount = document.createTextNode('0 Gallons');
    h5.setAttribute('id', 'resetCount');
    h5.appendChild(resetCount);
    document.getElementById('flex-result-box').appendChild(h5);
    

//call getAge() again and comment out resetGallons() to reset prompt without refresh.
}


function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=verysmall";
    div.appendChild(image);
}
//Refactored