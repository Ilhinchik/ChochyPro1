async function getResponse() {
    let response = await fetch("http://localhost:8000/api/applications", {
        mode: 'cors',
    });
    let content = await response.json()
    console.log(content)

}
const data = {
    'article': {
        
        'title': document.getElementById('title-field'),
        'reason': document.getElementById('description-field'),
        'details': document.getElementById('body-field'),
        'user_id': 1 // ради простоты примера железно укажем автора под номером 1

      
    }
}
function fillCardByClass(data) {

    // »скать наши пол€ мы будем по одному уже внутри нашего элемента карточки cardElem, а дл€ этого сначала
    //  let cardElem = document.getElementById("author-card-to-fill-by-class"); // находим в документе элемент нашей карточки по id

    // ¬ообще говор€ элементов с одинаковым классом может быть несколько, поэтому метод .getElementsByClassName() возвращает массив.
    //   счастью мы знаем что внутри карточки у нас всего один элемент каждого класса, поэтому смело берЄм его по индексу [0]
    let problemsData = data.application.reason;
    //for (let i = 0; i < 2; i++) {
    //    let nameElem = document.getElementsByClassName("problems")[i];
    //    nameElem.innerText = problemsData[i];
    //}
    let nameElem = document.getElementsByClassName("problems")[0];
    nameElem.innerText = problemsData[0];
    


}

// выполнить действи€ после загрузки страницы
window.onload = function () {
    /* 
        ¬ данном примере мы предпологаем, что бэкенд ещЄ к работе не готов, но мы уже договорились с
        участником команды, который отвечает за его разработку, о формате данных, поэтому можем его
        не ждать, а пока подставить данные вручную и делать свою часть.
         уски же кода, отвечающие за fetch пока закомментированы

        Ќепосредственно по работе запросов fetch() см. пример 2 или по адресу:
        https://learn.javascript.ru/fetch
    */

    let link = "http://localhost:8000/api/applications";
    fetch(link, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            //'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify(data)
    }).then((response) => {
        let data = response.json();
        return data;
    }).then((data) => {
        console.log(data)
        document.getElementById("post-response").innerText = JSON.stringify(data, null, '    ');
        getDataAndFill();
    }).catch((err) => {
        console.log('Fetch Error:', err);
    });

    fillCardByClass(json.application);


};
