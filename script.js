document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let tempvalue = document.getElementById('temp');
    let celcisusbutton = document.getElementById('hello');
    let fareheitbutton = document.getElementById('hai');
    let result = document.getElementById('res');

    //  Jere i have to convert temprarture to Celsius
    fareheitbutton.addEventListener('click', () => {
        let temp = tempvalue.value;
        let celsius = (temp - 32) * 5 / 9;
        result.innerHTML = 'Converted Celsius Temperature is ' + celsius;
    });

    // Here I am Converting temp to Fahrenheit
    celcisusbutton.addEventListener('click', () => {
        let temp = tempvalue.value;
        let farenheit = (temp * 9 / 5) + 32;
        result.innerHTML = 'Converted Fahrenheit Temperature is ' + farenheit;
    });

});
