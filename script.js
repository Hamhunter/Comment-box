// console.log(input.value)
const lists = document.querySelector("#list");
let allComments=[]
function printcomment() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;
  var form = document.getElementById("myForm");
  console.log(name, email, comment);
  // console.log(JSON.parse(localStorage.getItem("names")));
  let values={"id":Date.now(),"name":name,"email":email,"comment":comment}
    // localStorage.setItem("names",JSON.stringify(values))

  if (email) {
    const listitems = `<li>
    <div class="comment-items">
    <span class="material-icons">
person_outline
</span>
        <p class="comments">${comment}
        </p>
        
</div>
<span style="color:red" class="material-icons">
delete_outline
</span>
<span class="material-icons">
reply
</span>
<span class="material-icons">
thumb_up
</span>
        </li>
        <hr>`;
    lists.insertAdjacentHTML("beforeend", listitems);
    allComments.push(values);
    console.log(allComments);
    localStorage.setItem("allComments",JSON.stringify(allComments))
    
    form.reset();
    
  }
};

document.addEventListener("keyup", function () {
  if (event.keyCode == 13) {
    printcomment();
  }
});
