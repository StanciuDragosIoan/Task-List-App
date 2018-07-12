const thingToDo = document.querySelector('#todo');
let Things;

 
	 

 

//add item + LS
document.querySelector('#add').addEventListener('click', function(){

	if(thingToDo.value === '' || thingToDo.value === ' ' || thingToDo.value === '  '){

					 const alertDiv = document.querySelector('.bg-warning');
					 	if(alertDiv){
					 		alertDiv.remove();
					 	} 
					let div = document.createElement('div');
					div.className = 'card-body bg-warning text-dark font-weight-bold';
					div.appendChild(document.createTextNode('Please add something!'));
					const parent = document.querySelector('.card-body');
					const before = document.querySelector('h1');
					parent.insertBefore(div, before);
					
					setTimeout(function(){
						document.querySelector('.bg-warning').remove();
					}, 2000); 
					
					
		} else {
			const thing = document.createElement('li');
			thing.className = 'list-group-item text-center';
			thing.appendChild(document.createTextNode(thingToDo.value));
			document.querySelector('ul').appendChild(thing);
			const link = document.createElement('a');
			link.innerHTML = `<a href="#" class='delete'>X</a>`;
			link.className = "nav-item blockquote float-right"; 
			thing.appendChild(link);
			
			if(localStorage.getItem('Things') === null){
				Things = [];
			} else {
				Things = JSON.parse(localStorage.getItem('Things'));
			}
				Things.push(thingToDo.value);
				localStorage.setItem('Things', JSON.stringify(Things));
				document.querySelector('#todo').value = '';
		}
 		
					 
});



//get item from LS/display UI 
document.addEventListener('DOMContentLoaded', function(){
	if(localStorage.getItem('Things') === null){
		Things = [];
	} else {
		Things = JSON.parse(localStorage.getItem('Things'));
	}
	

	Things.forEach(function(item){
		const thing = document.createElement('li');
		thing.className = 'list-group-item text-center';
		thing.appendChild(document.createTextNode(item));
		document.querySelector('ul').appendChild(thing);
		const link = document.createElement('a');
		link.innerHTML = `<a href="#" class='delete'>X</a>`;
		link.className = 'nav-item blockquote float-right'; 
		thing.appendChild(link);
	}); 
})



//delete item LS + UI
document.querySelector('ul').addEventListener('click', function(e, index){
if(e.target.className === 'delete' ){	
	//console.log('test');
	Things.splice(index, 1);
	localStorage.setItem('Things', JSON.stringify(Things));
	e.target.parentElement.parentElement.remove(); 
	}	
	e.preventDefault();
});

//clear
document.querySelector("#clear").addEventListener("click", function(){
		let items = document.querySelectorAll('.list-group-item');
	 	items.forEach(function(){
			document.querySelector('.list-group-item').remove();
		});
		localStorage.clear();
});
 