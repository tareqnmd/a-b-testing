setInterval(() => {
	const check_sibling = document.querySelector(
		'input[name=Size]:checked'
	).nextSibling;
	const cart_button = document.querySelector('.add-to-cart-wrapper button');
	if (check_sibling && cart_button) {
		if (
			check_sibling.classList.contains('disabled') &&
			cart_button.value === 'Add to cart'
		) {
			cart_button.setAttribute('disabled', true);
			cart_button.value = 'Sold Out';
			cart_button.innerText = 'Sold Out';
		} else if (!check_sibling.classList.contains('disabled')) {
			cart_button.Inner = 'Add to cart';
			cart_button.innerText = 'Add to cart';
			cart_button.removeAttribute('disabled');
		}
	}
}, 10);
