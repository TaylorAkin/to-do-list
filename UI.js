var TODOLIST = [];
var PARSEDDATA;


// Set and Get for Local Storage
function updateLocal() {

    localStorage.setItem("ToDo's", JSON.stringify(TODOLIST));
}

function getLocalArchive() {
    var archive = localStorage.getItem("ToDo's");
    if (archive) {

        archive = JSON.parse(archive);
        TODOLIST = archive;
    }
    else {
        TODOLIST = [];
    }

}



//Object Constructor for each item
class ToDoListObject {
    constructor(title, id, complete) {
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
        todocol.className = "col-4 text-center";
        todocol.id = `todocol${i}`;
        todorow.appendChild(todocol);

    }

    var apptitle = document.createElement('div');
    apptitle.className = "h1";
    apptitle.id = "apptitleid";
    apptitle.innerHTML = "To-Do-List";

    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'input-group input-group-lg text-center h3 border'
    input.id = 'inputid';
    input.value = "";
    input.addEventListener('keyup', keyUpInput);

    //task list counter UI

 

    var todocounterul = document.createElement('ul')
    todocounterul.className = 'container list-group';
    todocounterul.id = 'todocounterulid';




    //buttons under tasks
    buttoncontainer = document.createElement('div');
    buttoncontainer.className = 'container mt-5';
    buttoncontainer.id = 'buttoncontainerid';

    buttonrow1 = document.createElement('div');
    buttonrow1.className = 'row';
    buttonrow1.id = 'buttonrow1id';

    buttonrow1col = document.createElement('div');
    buttonrow1col.className = 'col-12';
    buttonrow1col.id = 'buttonrow1col';

    buttonrow2 = document.createElement('div');
    buttonrow2.className = 'row';
    buttonrow2.id = 'buttonrow2id';

    buttonrow2col1 = document.createElement('button');
    buttonrow2col1.className = 'col-4 btn btn-secondary';
    buttonrow2col1.id = 'buttonrow1col1';
    buttonrow2col1.innerHTML = 'All'
    buttonrow2col1.addEventListener('click', displayAll);

    buttonrow2col2 = document.createElement('button');
    buttonrow2col2.className = 'col-4 btn btn-light';
    buttonrow2col2.id = 'buttonrow1col2';
    buttonrow2col2.innerHTML = 'Active';
    buttonrow2col2.addEventListener('click', displayActive);


    buttonrow2col3 = document.createElement('button');
    buttonrow2col3.className = 'col-4 btn btn-secondary';
    buttonrow2col3.id = 'buttonrow1col3';
    buttonrow2col3.innerHTML = 'Completed';
    buttonrow2col3.addEventListener('click', displayCompleted);

    completeallbutton = document.createElement('button');
    completeallbutton.className = 'col-6 btn btn-dark';
    completeallbutton.id = 'completeid';
    completeallbutton.innerHTML = 'Complete All';
    completeallbutton.addEventListener('click', completeAll);

    backtoactive = document.createElement('button');
    backtoactive.className = 'col-6 btn btn-dark';
    backtoactive.id = 'backtoactiveid';
    backtoactive.innerHTML = 'Back to Active';
    backtoactive.addEventListener('click', backToAct);

    remainingcount = document.createElement('div');
    remainingcount.className = 'col-12 h3';
    remainingcount.id = 'remainingcountid';




    buttonrow1.appendChild(buttonrow1col);
    buttonrow2.appendChild(remainingcount);
    buttonrow2.appendChild(buttonrow2col1);
    buttonrow2.appendChild(buttonrow2col2);
    buttonrow2.appendChild(buttonrow2col3);
    buttonrow2.appendChild(completeallbutton);
    buttonrow2.appendChild(backtoactive);

    buttoncontainer.appendChild(buttonrow2);
    buttoncontainer.appendChild(buttonrow1);


    todocontainer.appendChild(todorow);

    document.getElementById('list').appendChild(todocontainer);
    document.getElementById('list').appendChild(buttoncontainer);




    document.getElementById('todocol1').appendChild(apptitle);
    document.getElementById('todocol1').appendChild(input);
    document.getElementById('todocol1').appendChild(todocounterul);
    document.getElementById('todocol0').setAttribute('class', 'col-2');
    document.getElementById('todocol1').setAttribute('class', 'col-8 text-center');
    // document.getElementById('todocounterliid').setAttribute('class', 'col-2');

    getLocalArchive();

    rebuildHTML();

    showRemaining();
}

