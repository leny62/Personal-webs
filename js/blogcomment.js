const post = (event) => {
    event.preventDefault();
    let com = document.getElementById('comment').value;
    let name = document.getElementById('name').value;
    let p = document.createElement('p');
    let div = document.createElement('div');
    p.style.color = "blue";
    p.innerHTML = "by: " +name;
    div.style.width = "200px";
    div.style.height = "50px";
    div.style.padding = "4px";
    div.style.margin = "5px";
    div.style.backgroundColor = "whitesmoke";
    div.style.color = 'black';
    div.innerHTML = com;
    document.getElementById("allcomments").appendChild(p);
    document.getElementById("allcomments").appendChild(div);
    document.getElementById("form-input").reset();

};



