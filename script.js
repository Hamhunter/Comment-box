// console.log(input.value)
const lists=document.querySelector("#list")
function print(){
    toprint=input.value;
    const listitems=
    `<li>
    <p class="comments">${toprint}
    </p>
    </li>`
    lists.insertAdjacentHTML("beforeend",listitems)
    input.value="";
}