function QueryCourses(){

var prefix= document.getElementById('prefix').value;

fetch('https://ofertadecursos.uniandes.edu.co/api/courses?prefix=' + prefix)
.then(response=>response.json())
.then(data=>{


  

var tableBody= document.querySelector('#courses tbody');
tableBody.innerHTML='';
var filteredData=data.filter(d=> d.title.includes('PRACTICA'));
filteredData.forEach(item=>{
var row =AddRowCoursesTable(item);

tableBody.appendChild(row);
})



}).catch(error=>{

    alert(error);
})



}

function AddRowCoursesTable(data){

    var row= document.createElement('tr');

    Object.values(data).forEach(value=>{
    const cell=document.createElement('td');
    cell.textContent=value;
    row.appendChild(cell);
    
    })

    return row;

}


