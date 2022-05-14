var modal = document.getElementById("myModal");
var addButton = document.getElementById("AddButton");
var span =  document.getElementsByClassName("close")[0];
var insertButton = document.getElementById("InsertButton");
var updateButton = document.getElementById("UpdateButton");

addButton.onclick= function(){
    modal.style.display="block";
}
span.onclick= function(){
    modal.style.display="none";
}
function GetCheckedRadioValue(RadiosName){
    var radios = document.getElementsByName(RadiosName);
    var selectedOption = "";
    for (var i= 0, length= radios.length; i<length; i++){
        if(radios[i].checked){
            selectedOption= radios[i].value;
            break;
        }
    }
}

function GetCheckedBoxesValue(ChkboxName){
    var checkboxes = document.getElementsByName(ChkboxName);
    var checkboxesChecked = "";
    for (var i= 0; i< checkboxes.length; i++){
        if(checkboxes[i].checked){
            checkboxesChecked= checkboxesChecked.concat(checkboxes[i].value).concat("","");
            break;
        }
    }
    checkboxesChecked = checkboxesChecked.trim().substring(0,checkboxesChecked.trim().length-1);
    return checkboxesChecked.length>0?checkboxesChecked:"";
}

function InsertarRegistro(){
    if(document.getElementById("IDTextBox").value!==null && 
       document.getElementById("IDTextBox").value!==undefined &&
       document.getElementById("IDTextBox").value.toString().length==14)
    {
        var a=  document.getElementById("PersonTable").insertRow(1);
        var b= a.insertCell(0);
        var c= a.insertCell(1);
        var d= a.insertCell(2);
        var e= a.insertCell(3);
        var f= a.insertCell(4);
        var g= a.insertCell(5);
        b.innerHTML = document.getElementById("IDTextBox").value;
        c.innerHTML = document.getElementById("FirstNameTextBox").value;
        d.innerHTML = document.getElementById("LastNameTextBox").value;
        e.innerHTML = GetCheckedRadioValue("Sexo");
        f.innerHTML = GetCheckedBoxesValue("Pasatiempos");
        var buttons = "<button name='EditButton' onclick= 'ShowModalForEdit(this)'>Editar</button>" ;
        buttons = buttons.concat("&nbsp;").concat("<button name='DeleteButton' onclick= 'deleteRow(this)'>Eliminar</button>");
        g.innerHTML = buttons;

        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }   

}
function deleteRow(){
    var i= sender.parentNode.parentNode.rowIndex;
    document.getElementById("PersonTable").deleteRow(i);
}
function ShowModalForEdit(sender){
    modal.style.display= "block";
}
function ClearForm (){
    document.getElementById("IDTextBox").value='';
    document.getElementById("FirstNameTextBox").value='';
   document.getElementById("LastNameTextBox").value='';
}