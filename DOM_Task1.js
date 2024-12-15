
//Hover
let a = document.getElementById("p1")
a.style.backgroundColor="yellow"
a.style.color="red"
a.style.padding="10px"
a.style.borderRadius="10px"
a.style.boxShadow="2px 2px 2px black"
a.style.textAlign="center"
a.style.cursor="pointer"
a.style.fontSize="20px"


function hover(){
    a.textContent="Task Completed"
    a.style.backgroundColor="yellow"
    a.style.color="red"
    a.style.padding="10px"
    a.style.borderRadius="10px"
    a.style.boxShadow="2px 2px 2px black"
    a.style.textAlign="center"
    a.style.fontSize="30px"
}
function onhoverout(){
    a.textContent="Saiteja"
    a.style.backgroundColor="yellow"
    a.style.color="red"
    a.style.padding="10px"
    a.style.borderRadius="10px"
    a.style.boxShadow="2px 2px 2px black"
    a.style.textAlign="center"
    a.style.fontSize="20px"

}

// Single_Click
let b = document.getElementById("p2")
b.style.backgroundColor="green"
b.style.color="white"
b.style.padding="10px"
b.style.borderRadius="10px"
b.style.boxShadow="2px 2px 2px black"
b.style.textAlign="center"
function tap(){
    b.textContent="Task Completed"
    b.style.backgroundColor="pink"
    b.style.color="red"
    b.style.padding="10px"
    b.style.borderRadius="10px"
    b.style.boxShadow="2px 2px 2px black"
    b.style.textAlign="center"
    b.style.fontSize="30px"
    b.style.cursor="pointer"
}

//Double_Click
let c = document.getElementById("p3")
c.style.backgroundColor="blue"
c.style.color="white"
c.style.padding="10px"
c.style.borderRadius="10px"
c.style.boxShadow="2px 2px 2px black"
c.style.textAlign="center"
function dtap(){
    c.textContent="Task Completed"
    c.style.backgroundColor="orange"
    c.style.color="red"
    c.style.padding="10px"
    c.style.borderRadius="10px"
    c.style.boxShadow="2px 2px 2px black"
    c.style.textAlign="center"
    c.style.fontSize="30px"
    c.style.cursor="pointer"
}