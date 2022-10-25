window.onload = function(e) {
    console.log('documento cargado')
    document.getElementsByTagName('h2')[1].innerText = 'Changed from JS!!'
    let username = document.getElementById("username");
    console.log(username);

    let a = document.getElementsByClassName("first");
    a[0].style.color="blue";
    a[1].style.color="blue";

    let lis = document.getElementsByTagName('li')
    let items = lis.getElementsByClassName("item");
    console.log(items);

    let buttons = document.getElementsByTagName('button').getElementsByClassName("buttons");
    console.log(buttons);

    document.getElementById("color").style.backgroundColor = "#0000FF";

    
}