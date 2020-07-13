const lists = document.querySelector("#list");
showComments();
//print comments
function printcomment() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;
  var form = document.getElementById("myForm");
  if (comment) {
    console.log(name, email, comment);
    let values = { id: Date.now(), name: name, email: email, comment: comment };
    let cvalue = localStorage.getItem("allComments");
    if (cvalue == null) {
      allComments = [];
    } else {
      allComments = JSON.parse(cvalue);
    }
    allComments.push(values);
    localStorage.setItem("allComments", JSON.stringify(allComments));
    form.reset();
    showComments();
  }
}

//display comments
function showComments() {
  let cvalue = localStorage.getItem("allComments");
  if (cvalue == null) {
    allComments = [];
  } else {
    allComments = JSON.parse(cvalue);
  }
  let listitems = "";
  allComments.forEach((element, index) => {
    console.log("element", element);
    listitems += `<li>
   <div class="comment-items">
   <span class="material-icons">
person_outline
</span>
       <p class="comments">${element.comment}
       </p>
       
</div>

<i style="color:red" id=${index} onclick="deleteComment(this.id)" class=" delete material-icons">
delete_outline
</i>
<span class="material-icons">
reply
</span>
<span class="material-icons">
thumb_up
</span>
       </li>
       <hr>`;
    //  lists.insertAdjacentHTML("beforeend", listitems);
  });
  if (allComments.length != 0) {
    //  lists.innerHTML=` <hr><br>no comments yet`;
    lists.innerHTML = listitems;
  } else {
    lists.innerHTML = "no comments yet";
  }
}

document.addEventListener("keyup", function () {
  if (event.keyCode == 13) {
    printcomment();
  }
});

//function to delete comments
function deleteComment(id) {
  let comments = localStorage.getItem("allComments");
  if (comments == null) {
    allComments = [];
  } else {
    allComments = JSON.parse(comments);
  }
  allComments.splice(id, 1);
  localStorage.setItem("allComments", JSON.stringify(allComments));
  showComments();
}
