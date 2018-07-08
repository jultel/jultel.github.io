function fillplaceholder(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json =>{
        console.log(json);
        document.getElementById("placeholder1").innerHTML=json.body;

    })
       

}
fillplaceholder();
var object1js={
"name":"Telishchuk",
"city":"lviv",
"eage":21,
"feemale": true,
"xcord":49.795149, "y":24.065178
};
document.getElementById("placeholder2").innerHTML=object1js.xcord;

