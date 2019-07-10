document.querySelector('.timestamp').innerText = (new Date()).toLocaleTimeString();


// document.querySelector('.ajax-html').addEventListener('click', getHtmlAjax);
// function getHtmlAjax() {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         const XHR_STATE_DONE = 4;
//         const HTTP_STATUS_DONE = 200;
//         if (xhr.readyState === XHR_STATE_DONE &&
//             xhr.status === HTTP_STATUS_DONE) {
//            document.querySelector('.html-conteiner').innerHTML = xhr.responseText;
//         }
//     }
//     xhr.open('GET', 'hospital-data.html', true);
//     xhr.send();
// }

document.querySelector('.fetch-html').addEventListener('click', getFetchHtml);
function getFetchHtml() {
    fetch('hospital-data.html')
    .then (response => response.text() )
    .then (html => document.querySelector('.html-conteiner').innerHTML = html);
}

document.querySelector('.feth-json').addEventListener('click', getFetchJSON);
function getFetchJSON () {
    fetch('doctors-data.json')
    .then(response => response.json())
    .then(doctorsData => {
        document.querySelector('.doctor-name').innerHTML = doctorsData.name;
        document.querySelector('.doctor-surname').innerHTML = doctorsData.surname;
        document.querySelector('.doctor-activity').innerHTML = doctorsData.activity;
    });
}