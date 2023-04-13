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
        'user_id': 1 // ���� �������� ������� ������� ������ ������ ��� ������� 1

      
    }
}
function fillCardByClass(data) {

    // ������ ���� ���� �� ����� �� ������ ��� ������ ������ �������� �������� cardElem, � ��� ����� �������
    //  let cardElem = document.getElementById("author-card-to-fill-by-class"); // ������� � ��������� ������� ����� �������� �� id

    // ������ ������ ��������� � ���������� ������� ����� ���� ���������, ������� ����� .getElementsByClassName() ���������� ������.
    // � ������� �� ����� ��� ������ �������� � ��� ����� ���� ������� ������� ������, ������� ����� ���� ��� �� ������� [0]
    let problemsData = data.application.reason;
    //for (let i = 0; i < 2; i++) {
    //    let nameElem = document.getElementsByClassName("problems")[i];
    //    nameElem.innerText = problemsData[i];
    //}
    let nameElem = document.getElementsByClassName("problems")[0];
    nameElem.innerText = problemsData[0];
    


}

// ��������� �������� ����� �������� ��������
window.onload = function () {
    /* 
        � ������ ������� �� ������������, ��� ������ ��� � ������ �� �����, �� �� ��� ������������ �
        ���������� �������, ������� �������� �� ��� ����������, � ������� ������, ������� ����� ���
        �� �����, � ���� ���������� ������ ������� � ������ ���� �����.
        ����� �� ����, ���������� �� fetch ���� ����������������

        ��������������� �� ������ �������� fetch() ��. ������ 2 ��� �� ������:
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
