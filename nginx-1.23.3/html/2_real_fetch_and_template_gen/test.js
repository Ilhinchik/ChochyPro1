async function getResponse()
{
let response = await fetch("http://127.0.0.1/backend/api/articles/", {
	mode: 'cors',

});
let content = await response.json()
console.log(content)

}

getResponse()
