// console.log(input.value)
const lists = document.querySelector("#list");
function printcomment() {
  toprint = input.value;
  if (toprint) {
    const listitems = `<li>
        <p class="comments">${toprint}
        </p>
        
        </li>
        <hr>`;
    lists.insertAdjacentHTML("beforeend", listitems);
    input.value = "";
  }
}
document.addEventListener("keyup", function () {
  if (event.keyCode == 13) {
    printcomment();
  }
});
