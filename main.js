// Area Calculator

// Event listener
document.getElementById('btn').addEventListener('click', AreaCalculator)

// Function
function AreaCalculator() {

    // INPUT
    let b1 = Number(document.getElementById('b1').value);
    let b2 = Number(document.getElementById('b2').value);
    let h = Number(document.getElementById('h').value);

    // PROCESS

    let area = (b1 + b2) * h / 2

    // OUTPUT
    document.getElementById('output').innerHTML = area

}