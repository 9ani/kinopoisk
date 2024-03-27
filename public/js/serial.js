let addFilmUrlBtn = document.querySelector('#addFilmUrlBtn')
let addSeriesBtn = document.querySelector('#addSeriesBtn')
let urls = document.querySelector('#urls')

function addSeries(){
    addFilmUrlBtn.style.display = 'none'
    let output = urls.innerHTML
    let number = document.querySelectorAll('.series')
    output += `<div class="series">
    <p>${number.length + 1} серия</p>
    <input type="text" placeholder="Введите ссылку на серию">
</div>`
    urls.innerHTML = output
}

function addFilmUrl(){
    addSeriesBtn.style.display = 'none'
        urls.innerHTML = `
        <fieldset class="fieldset">
        <label for="">Ссылка на фильм</label>
        <input type="text" name="video" id="" placeholder="Введите ссылку на фильм">
    </fieldset>`
    
}