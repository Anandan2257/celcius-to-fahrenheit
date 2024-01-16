function convert(){
    const celciVal = Number(document.getElementById("type").value);
    const fahrenheitval = (9/5 * celciVal) + 32;
    const result = document.getElementById("result");
    result.innerHTML = fahrenheitval.toFixed(1) + ' °F';
    };