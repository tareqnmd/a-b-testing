window.addEventListener('scroll', function () {
	const btn_area = document.querySelector('.add-to-cart-custom-btn');
	const btn_wrapper = document.querySelector('.add-to-cart-wrapper');
	const topOffset = btn_area.getBoundingClientRect().bottom;
	if (topOffset <= 0) {
		btn_wrapper.classList.add('new-float-btn');
	} else {
		btn_wrapper.classList.remove('new-float-btn');
	}
});
