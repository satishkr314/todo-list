var Obj={
    task:"",
    date:"",
    time:""
};
var Today_date=new Date();
//var index=0;
var temp=document.getElementById('AddTask');
temp.addEventListener('click',addToList);
var tasks=new Array();
function ShowTask()
{
    html="";
    if(localStorage.getItem('userTask')===null)
    {
        return;
    }
    tasks=JSON.parse(localStorage.getItem('userTask'));
    for(var i=0;i<tasks.length;i++)
    {
        html+= `<div class="list">
        <div>${tasks[i].task}</div>
        <div>${tasks[i].date}</div>
        <div>${tasks[i].time}</div>
        <button id="deleteTask" class="delete "onclick="Delete(${i})">delete</button>
        </div>`;
    }
    document.getElementsByClassName('outerList')[0].innerHTML=html;
}

function Delete(index)
{
    console.log("Hello",index);
    tasks=JSON.parse(localStorage.getItem('userTask'));
    tasks.splice(index,1);
    localStorage.setItem('userTask',JSON.stringify(tasks));
    document.getElementsByClassName('outerList')[0].innerHTML="";
    ShowTask();
}

function addToList()
{  
    if(work.value=="")
    {
        alert("Add some Task");
        return;
    }
    Obj.task=document.getElementById('work').value;
    Obj.date=document.getElementById('date').value;
    Obj.time=document.getElementById('time').value;
    var html='';
    html+= `<div class="list">
    <div>${Obj.task}</div>
    <div>${Obj.date}</div>
    <div>${Obj.time}</div>
    <button class="delete" onclick="Delete(${tasks.length})">delete</button>
    </div>`;
    document.getElementsByClassName('outerList')[0].innerHTML+=html;
    if(localStorage.getItem('userTask')===null)
    {
        tasks.push(Obj);
        localStorage.setItem('userTask',JSON.stringify(tasks));
    }
    else
    {
        tasks=JSON.parse(localStorage.getItem('userTask'));
        tasks.push(Obj);
        localStorage.setItem('userTask',JSON.stringify(tasks));
    }


}