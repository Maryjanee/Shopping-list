let button = document.getElementById("enter");
let  ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");
let input = document.getElementById("userinput");

//returns length of value gotten from the input field
const inputLength = () => input.value.length;

//Creates a list element and add all functionalities to it
const createListElement = () => {
	let li = document.createElement("li");
	const text = document.createTextNode(input.value);
	const button = document.createElement('button');
	button.textContent = 'Delete';
	
	li.addEventListener("click", togClass);
	li.appendChild(text);
	li.appendChild(button);
	
	ul.appendChild(li);
	input.value = "";
	button.addEventListener( "click" , deleteItem);

}
//test to ensure that value of the in input field is not empty
const addListAfterClick = () => {
	if (inputLength() > 0) {
		createListElement();
	}
	else{
		alert('Enter a value');
	}
}
//creates the list element when both conditions are satisfied
const addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//Toggles the css class "done"
function togClass (){
	this.classList.toggle('done');
} 

//Remove the list item
const deleteItem = (li) => li.target.parentNode.remove();
	


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

lis.forEach(li => {
	li.addEventListener("click", togClass);
})

lis.forEach(li => {
	const button = document.createElement('button');
	button.textContent = 'Delete';
	li.appendChild(button);
	button.addEventListener( "click" , deleteItem);

	})


