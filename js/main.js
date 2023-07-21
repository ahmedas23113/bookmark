let boxAbs=document.getElementById("boxAbs");
let caont=document.getElementById("caont");
let bookmarkName=document.getElementById("bookmarkName");
let bookmarkURL=document.getElementById("bookmarkURL");
let regXes = /^\w{2,}$/;
let regXes2 =/^[a-z]{2,}\.[a-z]{2,}$/;


function reads(){
    if(regXes.test(bookmarkName.value)== true){
bookmarkName.style.border="1px solid green";
bookmarkName.classList.add("is-valid")
}else{
    bookmarkName.style.border="1px solid red";
        bookmarkName.classList.replace("is-valid","is-invalid")
}
}
function reads2(){
    if(regXes2.test(bookmarkURL.value)==true){
bookmarkURL.style.border="1px solid green";
bookmarkURL.classList.add("is-valid")
}else{
    bookmarkURL.style.border="1px solid red";
    bookmarkURL.classList.replace("is-valid","is-invalid")

}
}

let container=[];
if(localStorage.getItem("Product")!=null){
    container = JSON.parse(localStorage.getItem("Product"));
    // data(container);
}else{
    container=[];
}
function data(){
    hiddenS();
    var career={
        Name:bookmarkName.value,
        passUrl:bookmarkURL.value
    }
 
  localStorage.setItem('Product', JSON.stringify(container))
  clearData()
  showData()
  bookmarkName.style.border="none";
  bookmarkURL.style.border="none";
if( bookmarkName.value!= null && bookmarkURL.value != null ){
    container.push(career);
    
}else{
    hiddenS()
}
} 
function hiddenS(){
    if(bookmarkName.value=='' && bookmarkURL.value==''){
        boxAbs.classList.replace("d-none","d-block");
        caont.style.zIndex="-1";
        caont.style.opacity=".5";
    }else{
        boxAbs.classList.replace("d-block","d-none")
      }
}
function clearData(){
    bookmarkName.value="";
    bookmarkURL.value="";
}

function showData(){
    let carton =``;
    for(let i=0;i<container.length;i++){
    carton +=` 
    <tr>
    <td>${i}</td>
    <td>${container[i].Name}</td>
    <td><a href="${container[i].passUrl}"><button class="btn btn-sm  btn-visit"><i class="fa-solid fa-eye"></i> Visit</button></a></td>
    <td><button onclick="deleteData(${i})" class="btn btn-sm btn-delete"><i class="fa-regular fa-trash-can"></i> Delete</button></td>
    </tr>
    `
    }
    document.getElementById("tableContent").innerHTML=carton;
}
showData()
function deleteData(i)
{
    container.splice(i,1);
    localStorage.setItem('Product', JSON.stringify(container))
    showData()
}

function replayD(){
    boxAbs.classList.replace("d-block","d-none");
    caont.style.zIndex="99999";
    caont.style.opacity="1";
}




