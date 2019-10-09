var TODOLIST = [];


class ToDoListObject {
    constructor(title, id, dateadded) {
        this.title = title;
        this.complete = false;
        this.id = id;
        this.dateadded = new Date();
        this.archive = false;
    }
}



function generateUI() {

    var todocontainer = document.createElement('div');
    todocontainer.className = "container-fluid";
    todocontainer.id = "containerid";

    var todorow = document.createElement('div');
    todorow.className = "row";
    todorow.id = "rowid";

    for (var i = 0; i < 3; i++) {
        var todocol = document.createElement('div');
        todocol.className = "col";
        todocol.id = `todocol${i}`;
        todorow.appendChild(todocol);

    }





    var apptitle = document.createElement('div');
    apptitle.className = "display-1";
    apptitle.id = "apptitleid";
    apptitle.innerHTML = "To-Do-List";

    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'input-group input-group-lg'
    input.id = 'inputid';
    input.value = "";
    input.addEventListener('keyup', keyUpInput);

    var todocounterdiv = document.createElement('div')
    todocounterdiv.className = 'border';
    todocounterdiv.id = 'todocounterdivid';

    var todocounterul = document.createElement('ul')
    todocounterul.className = 'border list-group';
    todocounterul.id = 'todocounterulid';

    var todocounterli = document.createElement('li')
    todocounterli.className = 'border list-group';
    todocounterli.id = 'todocounterliid';




    document.getElementById('todocounterulid').appendChild(todocounterli);
    document.getElementById('todocounterdivid').appendChild(todocounterul);



    todocontainer.appendChild(todorow);
    document.getElementById('list').appendChild(todocontainer);


    document.getElementById('todocol1').appendChild(apptitle);
    document.getElementById('todocol1').appendChild(input);
    document.getElementById('todocol1').appendChild(todocounterdiv);
    document.getElementById('todocol0').setAttribute('class', 'col-2');
    document.getElementById('todocol1').setAttribute('class', 'col-8 text-center');
    document.getElementById('todocol2').setAttribute('class', 'col-2');



}

function keyUpInput() {

    if (event.keyCode === 13) {

        console.log('ta');
        if (typeof (Storage) !== "undefined") {
            // console.log(this.value);

            var currenttodo = new ToDoListObject(this.value, 1, "5-13-19"); 

            TODOLIST.push(currenttodo);

            //Store
            localStorage.setItem("ToDo's",JSON.stringify(TODOLIST));
            // Retrieve

            var parseddata = JSON.parse(localStorage.getItem("ToDo's"));
            console.log(parseddata);
            document.getElementById("todocounterliid").innerHTML = parseddata[0].title;


        }
    }
}






// //tidbits

// window.localStorage


//   // Store
// localStorage.setItem("lastname", "Smith");

// // Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");

// function clickCounter() {
//     if (typeof(Storage) !== "undefined") {
//       if (localStorage.clickcount) {
//         localStorage.clickcount = Number(localStorage.clickcount)+1;
//       } else {
//         localStorage.clickcount = 1;
//       }
//       document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
//     } else {
//       document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
//     }
//   }
