document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcButton').onclick = calculate;
    document.getElementById('input-item').addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            calculate();
        }
    });
});

function calculate() {
    let inputItem = document.getElementById('input-item');
    let g = inputItem.value;
    let p = 2.49;

    if (g.includes(',')) {
        g = g.replace(',', '.');
        inputItem.value = g;
    }

    let w = g * (p / 100) + 0.35;

    document.getElementById('gebuehren').innerHTML = w.toFixed(2) + ' €';

    let restBetrag = g - w;

    document.getElementById('rest').innerHTML = restBetrag.toFixed(2) + ' €';

    document.getElementById('tableContent').style.display = 'flex';
}
