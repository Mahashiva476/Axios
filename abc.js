//const axios=require('axios')

async function Insert(){
    var id=document.getElementById('roll').value
    var name=document.getElementById('name').value
    var branch=document.getElementById('branch').value
    var obj={
        "name":name,
        "id":id,
        "branch":branch
    }
    await axios.post('http://localhost:3000/users',obj)
}
async function Delete(roll){
    //var roll=document.getElementById('roll').value
    await axios.delete(`http://localhost:3000/users/${roll}`)
}
async function Update(){
    var roll=document.getElementById('roll').value
    var obj={
        "name":document.getElementById('name').value,
        "branch":document.getElementById('branch').value
    }
    await axios.patch(`http://localhost:3000/users/${roll}`,obj)
}
async function Display(){
    var s=``;
    s+=`<table><tr><th>Name</th><th>Roll No</th><th>Branch</th><th>Operation</th></tr>`
    console.log("hello")
    let data=await axios.get('http://localhost:3000/users');
    data.data.forEach(element => {
        s+=`<tr><td>${element.name}</td><td>${element.id}</td><td>${element.branch}</td><td><button onclick="Delete(${element.id})"><i class="fas fa-trash"></i> Delete</button></td></tr>`
        console.log(element)
    });
    s+=`</table>`
    document.getElementById('result').innerHTML=s;
}