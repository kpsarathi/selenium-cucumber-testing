//modell
var movies = [];
var movie;
//VIEW
var container = create_layout();
var screens = {};
var screen = null;

screens.list_screen = create_list_screen();
screens.form_screen = create_form_screen();

openscreen('list_screen');

function create_layout() {
    let header = document.createElement("header");
    header.style.backgroundColor = "red";
    header.appendChild(document.createTextNode("Header"));
    document.body.appendChild(header);

    let container = document.createElement("main");
    container.style.backgroundColor = "blue";
    document.body.appendChild(container);

    let footer = document.createElement("footer");
    footer.style.backgroundColor = "green";
    footer.appendChild(document.createTextNode("Header"));
    document.body.appendChild(footer);

    return container;

}

function create_list_screen() {
    let div = document.createElement("div");
    let table = document.createElement("table");
    table.id = "mytable";
    let add_button = document.createElement("button");
    add_button.appendChild(document.createTextNode("Add"));
    add_button.addEventListener("click", add_movie);
    div.appendChild(add_button);
    let tr = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    th1.appendChild(document.createTextNode('Id'));
    th2.appendChild(document.createTextNode('Name'));
    th3.appendChild(document.createTextNode('Actions'));
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    table.appendChild(tr);
    div.appendChild(table);
    return div;
}



function create_form_screen() {
    let div = document.createElement("div");
    let name_text = document.createElement("input");

    let id_text = document.createElement("input");
    name_text.id = "name";
    id_text.id = "id";
    id_text.placeholder = "Type movie ID here..";
    name_text.placeholder = "Type movie Name here..";
    div.appendChild(id_text);
    div.appendChild(document.createElement("br"));
    div.appendChild(name_text);
    div.appendChild(document.createElement("br"));
    let save_button = document.createElement("button");
    save_button.addEventListener("click", save_movie);
    save_button.appendChild(document.createTextNode("Save"));
    div.appendChild(save_button);
    return div;
}


function openscreen(s_id) {
    if (screen != null) {
        container.removeChild(screen);
    }
    container.appendChild(screens[s_id]);
    screen = screens[s_id];
}


function add_movie() {
    movie = null;
    openscreen('form_screen');
    document.getElementById('id').value = null;
    document.getElementById('name').value = null;



}

function save_movie() {


    if (movie == null) {
        movie = {};
        movie.id = document.getElementById("id").value;
        movie.name = document.getElementById("name").value;

        openscreen('list_screen');
        let table = document.getElementById("mytable");
        let row = table.insertRow();
        row.insertCell().appendChild(document.createTextNode(movie.id));
        row.insertCell().appendChild(document.createTextNode(movie.name));
        let del = document.createElement("button");
        del.appendChild(document.createTextNode("delete"))
        let edit = document.createElement("button");
        edit.appendChild(document.createTextNode("edit"));
        edit.movie = movie;
        let div = document.createElement("div");
        div.appendChild(del);
        del.movie= movie;

        div.appendChild(edit);
        del.addEventListener("click", delete_row);
        edit.addEventListener("click", edit_row);
        row.insertCell().appendChild(div);

        movies.push(movie);

    } else {
        movie.id = document.getElementById("id").value;
        movie.name = document.getElementById("name").value;
        movies.indexOf(movie);
        openscreen('list_screen');
        let tr = document.getElementById("mytable").rows[movies.indexOf(movie)+1];

        tr.children[0].innerHTML=movie.id;
        tr.children[1].innerHTML=movie.name;

    }

}

function edit_row(event) {
    movie = event.currentTarget.movie;
    openscreen('form_screen');
    document.getElementById("id").value = movie.id;
    document.getElementById("name").value = movie.name;
}



function delete_row(event) {
  let index=movies.indexOf(event.currentTarget.movie);
    movies.splice(index, 1);
    let table = document.getElementById("mytable");
    table.deleteRow(index+1);

}
