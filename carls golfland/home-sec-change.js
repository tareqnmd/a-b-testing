const message_int = setInterval(() => {
	const review = document.querySelector('.column>div:nth-child(1)');
	const brands = document.querySelector('.home-page-brands');
	const widget = document.querySelector('.widget:nth-child(6)');

	if (review && widget && brands && !document.querySelector('.brand-new')) {
		brands.classList.add('brand-new');
		review.insertAdjacentElement('afterend', brands);
		review.insertAdjacentElement('afterend', widget);
		clearInterval(message_int);
	}
}, 10);
