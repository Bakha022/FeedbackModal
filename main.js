const modal_grade = document.querySelector('.grade-items'),
	clearBtn = document.querySelector('.failBtn')

	modal_grade.innerHTML = ''
	const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	
grades.map((item, index) => {
	modal_grade.innerHTML += `<span id="${index}" class="grade-item">${item}</span>`
})


const modaleGradeItem = document.querySelectorAll('.grade-item')


modaleGradeItem.forEach(element => {
	element.addEventListener('click', ()=> {
		getClick(element.id)
	})
})


function getClick(id) {
	const index = modal_grade.childNodes[id].textContent
	
	if (index >= 5) {
		for (let i = 0; i < index; i++) {
			modal_grade.childNodes[i].style.background = 'green'
		}
	} else {
		for (let i = 0; i < index; i++) {
			modal_grade.childNodes[i].style.background = 'red'
		}
	}
}

clearBtn.addEventListener('click', () => {
	modal_grade.childNodes.forEach(element => {
		element.style.background = '#111628'
	})
})


const popUp = document.querySelector('.modal-content')

function openPopUp() {
	popUp.style.transform = "scale(1)"
	popUp.style.transition = '.8s all'
}


openPopUp()

document.querySelector('.xmark').addEventListener('click', ()=>{
	popUp.style.transform = "scale(0)"
})