let addFilmUrlBtn = document.querySelector('#addFilmUrlBtn')
let addSeriesBtn = document.querySelector('#addSeriesBtn')
let urls = document.querySelector('#urls')

function addSeries(){
    addFilmUrlBtn.style.display = 'none'
    let output = urls.innerHTML
    let number = document.querySelectorAll('.series')
    let series = document.createElement('div')
    series.classList.add("series")
    let title = document.createElement('p')
    let input = document.createElement('input')
    title.innerHTML = number.length +1 + 'серия'
    input.name = "series"
    input.placeholder = "Введите ссылку на серию"
    series.append(title)
    series.append(input)

    urls.append(series)
}

function addFilmUrl(){
    addSeriesBtn.style.display = 'none'
        urls.innerHTML = `
        <fieldset class="fieldset">
        <label for="">Ссылка на фильм</label>
        <input type="text" name="video" id="" placeholder="Введите ссылку на фильм">
    </fieldset>`
    
}