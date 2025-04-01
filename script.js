const inputBox=document.getElementById('inputBox');
const container=document.getElementById('container');

inputBox.addEventListener('change',(e)=>{
    let todo=e.target.value;
    console.log(todo,"click")
})

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
   paragraph.innerText=inputBox.value;
const btnBox=document.createElement('div');
task.appendChild(btnBox);

    const edit=document.createElement('button');
    edit.innerText="Edit";
    edit.classList.add('edit');
    btnBox.appendChild(edit);



    const deleteBtn=document.createElement('button');
    deleteBtn.innerText="Delete";
    deleteBtn.classList.add('deleteBtn');
    btnBox.appendChild(deleteBtn);
})



