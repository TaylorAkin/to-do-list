function keyUpInput() {

    if (event.keyCode === 13) {

        if (this.value != "") {

            var currenttodo = new ToDoListObject(this.value, TODOLIST.length + 1, false);

            TODOLIST.push(currenttodo);

            //Store
            localStorage.setItem("ToDo's", JSON.stringify(TODOLIST));
            // Retrieve

            // PARSEDDATA = JSON.parse(localStorage.getItem("ToDo's"));
            console.log(PARSEDDATA);
            // document.getElementById("todocounterliid").innerHTML = PARSEDDATA[0].title;


            rebuildHTML()
        }
    }
}





function rebuildHTML() {

    document.getElementById('todocounterulid').innerHTML = '';

    for (var i = 0; i < TODOLIST.length; i++) {

        if (TODOLIST[i].archive == false) {

            //if Active is hit only create objects with  TODOLIST[i].complete == false
            // if Complete is hit only create objects with TODOLIST[i].archive == true;
            //if All is hit create Active and Completed

            document.getElementById('inputid').value = "";

            var linediv = document.createElement('div')
            linediv.className = 'row';
            linediv.id = `todocounterdivcontainerid${i}`;

            var completeinput = document.createElement('input');
            completeinput.className = 'col-1 input-group-append px-0';
            completeinput.id = `completeinputid${i}`;
            completeinput.setAttribute("type", "checkbox");
            completeinput.addEventListener('change', objectCompleted);

            if (TODOLIST[i].complete == true) {
                completeinput.checked = true;

            }


            var todocounterli = document.createElement('li')
            todocounterli.className = 'col-10 list-group-item text-center';
            todocounterli.id = `todocounterliid${i}`;
            todocounterli.setAttribute('style', "list-style-type:none;")
            todocounterli.innerHTML = TODOLIST[i].title;

            var deleteinput = document.createElement('input');
            deleteinput.className = 'col-1 input-group-prepend px-0';
            deleteinput.id = `deleteinputid${i}`;
            deleteinput.setAttribute("type", "checkbox");
            deleteinput.addEventListener('change', objectDeleted);

            linediv.appendChild(completeinput);
            linediv.appendChild(todocounterli);
            linediv.appendChild(deleteinput);


            document.getElementById(`todocounterulid`).appendChild(linediv);


            showRemaining();
        }
    }
}


function objectCompleted(e) {

    var idx = e.target.id.split('completeinputid');

    idx = parseInt(idx[1]);

    TODOLIST[idx].complete = !TODOLIST[idx].complete;

    updateLocal()

    showRemaining()

}


function objectDeleted(e) {
    var idx = e.target.id.split('deleteinputid');

    idx = parseInt(idx[1]);

    TODOLIST[idx].archive = !TODOLIST[idx].archive;

    updateLocal();

    rebuildHTML();

    showRemaining()

}

function completeAll() {
    console.log('ta');
    console.log(TODOLIST.length);
    for (var i = 0; i < TODOLIST.length; i++) {

        if (TODOLIST[i].complete == false) {
            console.log('robbie');
            TODOLIST[i].complete = true;
            document.getElementById(`completeinputid${i}`).checked = true;
            // document.getElementById(`todocounterdivcontainerid${i}`).setAttribute('style', 'display: compact');
        }

        else {
            TODOLIST[i].complete = true;
        }
    }
    showRemaining()
}


function backToAct() {
    console.log('ta');
    console.log(TODOLIST.length);
    for (var i = 0; i < TODOLIST.length; i++) {

        if (TODOLIST[i].complete == true) {
            TODOLIST[i].complete = false;
            document.getElementById(`completeinputid${i}`).checked = false;


        }

        else {
            TODOLIST[i].complete = false;
        }
    }
    showRemaining()

}



function displayAll() {

    getLocalArchive();

    // console.log('all');
    for (var i = 0; i < TODOLIST.length; i++) {
        // console.log(`todocounterdivcontainerid${i}`);

        document.getElementById(`todocounterdivcontainerid${i}`).setAttribute('style', 'display: compact');
    }

    showRemaining()
    console.log('ta');

}

function displayActive() {
    // console.log(`todocounterdivcontainerid${i}`);

    for (var i = 0; i < TODOLIST.length; i++) {

        if (TODOLIST[i].complete == false) {
            document.getElementById(`todocounterdivcontainerid${i}`).setAttribute('style', 'display: compact');
        }
        else {
            document.getElementById(`todocounterdivcontainerid${i}`).setAttribute('style', 'display: none');
        }
    }
    showRemaining()
}

function displayCompleted() {
    // console.log('completed');
    // getLocalArchive();
    for (var i = 0; i < TODOLIST.length; i++) {

        if (TODOLIST[i].complete == true) {
            document.getElementById(`todocounterdivcontainerid${i}`).setAttribute('style', 'display: compact');
        }
        else {
            document.getElementById(`todocounterdivcontainerid${i}`).setAttribute('style', 'display: none');
        }
    }
    showRemaining()
}

function showRemaining() {

    var remaining = 0;

    for (let i = 0; i < TODOLIST.length; i++) {
        // console.log('tot');
        if (TODOLIST[i].complete == false  && TODOLIST[i].archive == false) {


            remaining++
        }
        document.getElementById('remainingcountid').innerHTML = `Remaining items: ${remaining}`;
    }

}
















