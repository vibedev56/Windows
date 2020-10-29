/*modal-windows-start */

const modals = document.querySelectorAll('.modal');
const modalBtns = document.querySelectorAll('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseBtn = document.querySelectorAll('.modal-form__close');

modalBtns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});


    /*close-button-start*/
modalCloseBtn.forEach((el) => {
	el.addEventListener('click', (e) => {
		modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	});
});
    /*close-button-end */

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
    }

});

/*modal-windows-end */



/*modal-mask-start */

let selector = document.querySelectorAll('input[type="tel"]');

let im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

/*modal-mask-end */


/*glazing-tabs-start*/

let tabs = document.querySelector('.container_glazing')
let btns = tabs.querySelectorAll('.glazing__item')
let items = tabs.querySelectorAll('.glazing-description-block')

function change(arr, i) {
	arr.forEach( item => {
		item.forEach( i => {i.classList.remove('glazing_active')})
		item[i].classList.add('glazing_active')
	})
}

for(let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', () => {
		change([btns, items], i)
	})
}

/*glazing-tabs-end*/