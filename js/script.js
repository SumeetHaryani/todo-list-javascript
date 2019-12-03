let ul = document.getElementById("list");
let li;
let addBtn = document.getElementById("add");

addBtn.addEventListener("click", event => {
    let input = document.querySelector("#input");
    let val = input.value;
    let textNode = document.createTextNode(val);
    if (val === "") {
        let p = document.createElement("p");
        let alert = document.createTextNode("Enter Your Todo");
        p.appendChild(alert);
        input.insertAdjacentElement("afterend", p);
        setTimeout(function () {
            input.nextSibling.remove(p)
        }, 2100);
    } else {
        li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let label = document.createElement("label");
        let span = document.createElement("span");
        span.appendChild(textNode);
        label.appendChild(checkbox);
        label.appendChild(span);
        // console.log(label);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        input.value = "";
    }
});
let removeBtn = document.getElementById("remove");
removeBtn.addEventListener("click", event => {
    li = ul.children;
    //console.log(li);
    // console.log(li);

    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].childNodes[0].childNodes[0].checked) {
            ul.removeChild(li[index]);
        }
    }
});