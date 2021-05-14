const recursive = (x) => {
    console.log(x)
    if (x == 0) return 0; return x + recursive(x - 1);
};
const iterative = (x) => {
    let total = 0; for (let i = 0; i <= x; i++) { total += i }; return total
};
document.getElementById('recursiveSubmitButton').addEventListener('click', () => {
    const int = parseInt(document.getElementById('exampleInputEmail1').value);
    document.getElementById('outputInt').textContent = 'Output: ' + recursive(int);
    console.log(recursive(int))

    const d = new Date()
    const hours = d.getHours();
    let minutes = d.getMinutes().toString();
    minutes.length == 1 ? minutes = '0' + minutes : null

    document.getElementById('date').textContent = hours + ':' + minutes;
    document.getElementById('toast').style.opacity = '1';

    document.getElementById('outputToast').textContent = 'Successfully Calculated Using Recursion'
})
document.getElementById('iterativeSubmitButton').addEventListener('click', () => {
    const int = parseInt(document.getElementById('exampleInputEmail1').value);
    document.getElementById('outputInt').textContent = 'Output: ' + iterative(int);

    const d = new Date()
    const hours = d.getHours();
    let minutes = d.getMinutes().toString();
    minutes.length == 1 ? minutes = '0' + minutes : null

    document.getElementById('date').textContent = hours + ':' + minutes;
    document.getElementById('toast').style.opacity = '1';

    document.getElementById('outputToast').textContent = 'Successfully Calculated Using A Loop'
})

document.getElementById('toastClose').addEventListener('click', () => {
    document.getElementById('toast').style.opacity = '0'
})

$(document).ready(function () {
    $('#modalButton').hide();
    document.getElementById('modalButton').click();
});