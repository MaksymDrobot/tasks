const $set = document.getElementById('set');
const $clear = document.getElementById('clear');
const $input = document.getElementById('input');
const $form = document.getElementById('form');

const value = localStorage.getItem('num23') || null;

function isNumber(e) {
    e = e || window.event;
    var charCode = e.which ? e.which : e.keyCode;
    return /\d/.test(String.fromCharCode(charCode));
}

$form.addEventListener("submit", e => {
    e.preventDefault();

    localStorage.setItem('num23', $input.value)
});

$clear.addEventListener("click", e => {
    $input.value = '';
    localStorage.setItem('num23', null)
    $set.disabled = true;
});


$input.addEventListener("keyup",function(){
    if ($input.value.length === 0){
        $set.disabled = true;
    }

    else {
        $set.disabled = false;
    }
});

if (value) {
    $input.value = value;
    $set.disabled = false;

    const html = `<p style="color: ${value % 2 == 0 ? 'green': 'red'}">${value}</p>`;
    $form.insertAdjacentHTML('afterEnd', html);
}
