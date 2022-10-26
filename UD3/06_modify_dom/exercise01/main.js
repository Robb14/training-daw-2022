window.onload = function(e) {
    console.log('documento cargado')
    document.getElementsByTagName('h2')[1].innerText = 'Changed from JS!!'
    let username = document.getElementById("username");
    console.log(username);

    let a = document.getElementsByClassName("first");
    a[0].style.color="blue";
    a[1].style.color="blue";

    console.log(document.querySelectorAll('li.item'));

    console.log(document.querySelectorAll('.buttons > button'));

    document.getElementsByTagName('p')[0].style.backgroundColor = '#FF0000';

    document.querySelectorAll('.buttons > button').forEach( e => e.style.color = 'green');
}