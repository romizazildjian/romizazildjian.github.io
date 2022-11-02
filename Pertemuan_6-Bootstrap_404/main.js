var selected_tr = null;

var btn = document.querySelector(".button")
btn.addEventListener("click", studentData);
// $(".button").on("click", function(){
//   studentData()
// })


function studentData(){
  var tf_data = readData()
  if(selected_tr == null){
    insertData(tf_data)
    resetData()
  }else{
    updateData(tf_data)
    resetData()
    selected_tr = null
  }
  resetData()
}
function readData(){
  var empy = {}
  // empy["id"] = document.querySelector(".student-id").value;
  empy["id"] = $(".student-id").val()
  // empy["name"] = document.querySelector(".student-name").value;
  empy["name"] = $(".student-name").val()
  return empy
}

function insertData(x){
  var table = document.querySelector(".list");
  // var table = $(".list");
  var tr = table.insertRow(table.length);
  var td1 = tr.insertCell(0)
  var td2 = tr.insertCell(1)
  var td3 = tr.insertCell(2)
  td1.innerHTML = x.id;
  td2.innerHTML = x.name; 
  td3.innerHTML = "<a class='edit' onClick='editData(this)'>Edit</a> || <a onClick='deleteData(this)'>Delete</a>";
}

function resetData(){
  document.querySelector(".student-id").value = "";
  document.querySelector(".student-name").value = "";
}

function editData(y){
  // selected_tr = document.querySelector("a.edit");
  selected_tr = $("a.edit");
  selected_tr = y.parentElement.parentElement;
  // selected_tr = y.parent.parent()
  document.querySelector(".student-id").value = selected_tr.cells[0].innerHTML;
  document.querySelector(".student-name").value = selected_tr.cells[1].innerHTML;
  // $(".student-name").val() = selected_tr.cells[1].html();
}

function deleteData(del) {
  if (confirm('Are you sure to delete this record ?')) {
  var delete_tr = del.parentElement.parentElement;
  delete_tr.remove();
  }
}

function updateData(){
  selected_tr.cells[0].innerHTML = document.querySelector(".student-id").value;
  selected_tr.cells[1].innerHTML = document.querySelector(".student-name").value;
}



