function keyUpInput() {

    if (event.keyCode === 13) {

            if(this.value != ""){

                var currenttodo = new ToDoListObject(this.value, TODOLIST.length +1, "5-13-19");

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

        document.getElementById('inputid').value = "";

        var linediv = document.createElement('div')
        linediv.className = 'row';
        linediv.id = 'todocounterdivcontainerid';


        var completeinput = document.createElement('input');
        completeinput.className = 'col-1 input-group-append px-0';
        completeinput.id = `completeinputid${i}`;
        completeinput.setAttribute("type", "checkbox");

        var todocounterli = document.createElement('li')
        todocounterli.className = 'col-10 list-group-item text-center';
        todocounterli.id = `todocounterliid${i}`;
        todocounterli.setAttribute('style', "list-style-type:none;")
        todocounterli.innerHTML = TODOLIST[i].title;

        var deleteinput = document.createElement('input');
        deleteinput.className = 'col-1 input-group-prepend px-0';
        deleteinput.id = `deleteinputid${i}`;
        deleteinput.setAttribute("type", "checkbox");

        linediv.appendChild(completeinput);
        linediv.appendChild(todocounterli);
        linediv.appendChild(deleteinput);

        document.getElementById(`todocounterulid`).appendChild(linediv);


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
