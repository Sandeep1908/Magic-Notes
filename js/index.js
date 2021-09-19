console.log("Welcome to the Magic Notes")
shownotes();
let addBtn = document.getElementById("addbtn");
let addTitle=document.getElementById("addTitle");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        obj = [];
    }
    else {
        obj = JSON.parse(notes);
    }
    let myobj=
    {
        title:addTitle.value,
        text:addTxt.value,
    }
    obj.push(myobj)
    localStorage.setItem("notes", JSON.stringify(obj));
    // console.log(obj)
    addTxt.value = "";
    addTitle.value="";
    shownotes();
})

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        obj = [];
    }
    else {
        obj = JSON.parse(notes);
    }
    let html = "";
    
    obj.forEach(function (element, index) {
        html += `<div class="notecard my-3 mx-3" style="width: 18rem;" id="unq">
        
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
    <button type="button" class="btn btn-primary" id="${index}" onclick="delNode(this.id)">Delete</button>
    
    </div>
    </div>

        `

    });
    let elem = document.getElementById("notes");
    if (elem.length != 0) {
        elem.innerHTML = html;
    }
    else {
        elem.innerHTML = "Nothing to show here! click above addbutton to add content";
    }

}

function delNode(index) {
    // console.log("del ", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        obj = [];
    }
    else {
        obj = JSON.parse(notes);
    }
    obj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(obj));
    shownotes();

}

let searchbtn = document.getElementById("search");
searchbtn.addEventListener("input", function () {
    // console.log("fires")
    let inputVal = searchbtn.value;
    let nodes = document.getElementsByClassName("notecard");
    Array.from(nodes).forEach(function (element) {
        let elem=element.getElementsByTagName("p")[0].innerText;
        if(elem.includes(inputVal)){
            element.style.display="block"; 
        }
        else{
            element.style.display="none";
        }
        
});
});



