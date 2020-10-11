//q1

const cat = {
    complain: function(){
        console.log("Meow")
    };
}

//q2

const Heading = document.querySelector("h3")

Heading.innerHTML = "Updated heading"

//q3

Heading.style.fontsize = "2em"

//q4

const Heading = document.querySelector("h3");

console.log(heading.className);

heading.className = "subheading";

console.log(heading.className);

//q5

document.querySelectorAll("p")

const paragraphs = document.querySelectorAll("p");

const listItems = document.querySelectorAll("p");

for(let i = 0; i < listItems; i++){
    listItems.style.color = "red";
}

//q6

document.querySelector("div-results")

const resultsContainer = document

resultsContainer.innerHTML = "<p>New paragraph</p>";

resultsContainer.style.background = "yellow"

//q7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catList(list){
    for(let i = 0; i < list.length; i++){
        console.log(list[i].name)
    }
}

catList(cats);

//q8

function createCats(cats) {

    let html = "";

    for(let i = 0; i < cats.length; i++) {

        let catAge = "Age unknown";

        if(cats[i].age){
            catAge = cats[i].age
        }

        html += `<div class="age">
                    <h5>${cats[i].name}</h5>
                    <p>Released: ${catAge}</p>
                </div>`;
    }

    return html;
}

const newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;
