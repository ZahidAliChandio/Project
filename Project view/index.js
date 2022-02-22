let text = document.getElementById('textarea');
let projid=document.getElementById('projid');
let projname=document.getElementById('projname');
let noteContainer = document.getElementById('boxContainer');
let project = localStorage.getItem('project');
let addBtn = document.getElementById('addBtn')

//creating delete note/Box btn
let dltBtn = document.createElement('button');
dltBtn.className = "btn";
dltBtn.id = 'dltBtn';
dltBtn.setAttribute('onclick', 'deleteBox(this)');
dltBtn.innerText = 'delete Project';

//Checking for Already added Projects in local storage
if (project == null) {
    noteObj = []
}
else {
    noteObj = JSON.parse(project);
    noteObj.forEach(element => {
        let noteBox = document.createElement('div');
        noteBox.className = 'noteBox';
        noteBox.innerHTML = `<h3>Project</h3><p>${(element)}</p>` + dltBtn.outerHTML;
        noteContainer.appendChild(noteBox);
    });
}
//Check Ends Here


//To Add Project
addBtn.addEventListener('click', (e) => {
    if (projid.value == '') {
        alert('Enter Project Id ');
    }
    else {
        noteObj.push(projid.value);
        localStorage.setItem('project', JSON.stringify(noteObj))
        let noteBox = document.createElement('div');
        noteBox.className = 'noteBox';
        noteBox.innerHTML = `<h3>Project</h3><span style='font-weight:bold';>Project Id :</span>
        <span>${projid.value}</span><br><span style='font-weight:bold';>Project Name :</span><span>${projname.value}</span>` + dltBtn.outerHTML;
        noteContainer.appendChild(noteBox);
        projid.value = '';
        projname.value = '';
    }
})


//To Delete Project from List
function deleteBox(box) {
    localStorage.removeItem('project');
    box.parentNode.remove();
}