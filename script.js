const inputBox=document.getElementById('inputBox');
const container=document.getElementById('container');


const save=document.getElementById('save')

save.addEventListener('click',()=>{
    const inputBox=document.getElementById('inputBox');
    inputBox.innerText=inputBox.value;

    const task=document.createElement('div');
    task.classList.add('task');
    container.appendChild(task);

    const paragraph=document.createElement('p');
    paragraph.classList.add('paragraph');
    task.appendChild(paragraph);
    let inputValue=inputBox.value.trim();

   paragraph.innerText=inputValue;
const btnBox=document.createElement('div');
task.appendChild(btnBox);

    const edit=document.createElement('button');
    edit.innerText="Edit";
    edit.classList.add('edit');
    btnBox.appendChild(edit);

edit.addEventListener('click',()=>{
    const newValue=prompt("Edit Todo",inputValue);
    paragraph.innerText=newValue;
    console.log("edit")
})

    const deleteBtn=document.createElement('button');
    deleteBtn.innerText="Delete";
    deleteBtn.classList.add('deleteBtn');
    btnBox.appendChild(deleteBtn);
})



