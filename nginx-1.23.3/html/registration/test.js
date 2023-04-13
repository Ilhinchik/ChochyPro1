async function getResponse() {
    let response = await fetch("http://localhost:8000/api/user/1", {
        mode: 'cors',
    });
    let content = await response.json()
    console.log(content)

}

getResponse()


function getDataAndFill() {
    let link = "http://localhost:8000/api/user/2";
    fetch(link, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            //'Content-Type': 'application/json',
            //'X-CSRFToken': getCookie('csrftoken')
        },
        //body: JSON.stringify({'email':this.state.email, 'password':this.state.password})
    }).then((response) => {
        let data = response.json();
        return data;
    }).then((data) => {
        console.log(data)
        document.getElementById("get-response").innerText = JSON.stringify(data, null, '    ');


        fillBlocks(data.applications);
    }).catch((err) => {
        console.log('Fetch Error:', err);
    });
}

function sendDataAndFill() {
    let data = {
        'article': {
            //'first_name': document.getElementById('floatingInput').value,
            //'last_name': document.getElementById('floatingInput2').value,
            //'group': document.getElementById('floatingInput3').value,
            //'password': document.getElementById('floatingPassword').value,
            //'user_id': 2 // ���� �������� ������� ������� ������ ������ ��� ������� 1'
            'first_name':'sd',
            //'last_name': 'ds',
            'group': 'asd',
          //  'password': '123',
            'user_id': 2 // ���� �������� ������� ������� ������ ������ ��� ������� 1
        }
    }

    document.getElementById("post-request").innerText = JSON.stringify(data, null, '    ');

    let link = "http://localhost:8000/api/user/2";
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

}

let element_template = `<div id="article-{i}" class="article-block">
                            <h2 id="article-title-{i}" class="article-title">{title}</h2>
                            <p id="article-description-{i}" class="article-description">{description}</p>
                            <details>
                                <summary>���������� ������</summary>
                                <div id="article-body-{i}" class="article-body">{body}</div>
                            </details>
                        </div>`


function fillBlocks(applications) {
    let main_element = document.getElementById("main")
    let html_to_insert = "" // ����������, ��� ��������� ���� ����������� �����

    let element_html = ""
    for (let index = 0; index < applications.length; index++) {
        const article = applications[index];

        // �������� g �������� �������� �� ���� ������, � �� ������ � �����
        // ����������� � ������:     ������(index) ������ {i}   ��������(title) ������ {title} 
        element_html = element_template.replace(/{i}/g, index)                          // ������(index) ������ {i} 
            .replace(/{title}/, article.title)
            .replace(/{reason}/, article.description)
            .replace(/{details}/, article.body);


        // ��������� � �������, ����� ����� �������� ����� ��������
        console.log(element_html)

        // ����� ��������� ������� ���� ��������� �����, ������� ���� �������� �� ��� � ��������� ����������
        html_to_insert = html_to_insert + element_html;
    }

    // ��������� ������� ��������
    main_element.innerHTML = html_to_insert
}
function onclick() {
    sendDataAndFill();
}

// ��������� �������� ����� �������� ��������
window.onload = function () {
    getDataAndFill();
};



