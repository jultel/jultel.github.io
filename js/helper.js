// function fillplaceholder(){
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(json =>{
//         console.log(json);
//         document.getElementById("placeholder1").innerHTML=json.body;

//     })
       

// }
// fillplaceholder();
// var object1js={
// "name":"Telishchuk","y":24.065178
// };
// document.getElementById("placeholder2").innerHTML=object1js.xcord;

function sendForm(e){
    e.preventDefault();
    fetch('https://jultelwebsite-telishchuk.c9users.io/form', {
    headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            name: document.querySelector('#nameText').value,
            email: document.querySelector('#e-mailText').value,
            message: document.querySelector('#textText').value
        })
});

console.log(document.querySelector('#nameText').value);

}

document.querySelector('#SendBtn').addEventListener('click', sendForm);


function getJoke(e){
e.preventDefault();
fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            },
            method: 'GET'
}).then((res)=> {return res.json();})
.then((json)=>{ 
   document.querySelector('#joke').innerHTML=json.joke;});
}
document.querySelector('#jokeBtn').addEventListener('click',getJoke);
