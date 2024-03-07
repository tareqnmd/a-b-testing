const style = `
<style>
	.product-info .product-wishlist-cta.js-wishlist-cta, .product-info .view-details_cta{
		display: none!important;
	}
</style>
`;

const interval = setInterval(() => {
	const product_infos = [...document.querySelectorAll('.product-link')];
	const head = document.querySelector('head');
	if (product_infos.length > 0 && head) {
		head.insertAdjacentHTML('beforeend', style);
		product_infos.forEach((item) => {
			const price = item.querySelector('.ss-current-price');
			item.insertAdjacentElement('beforeend', price);
		});
		clearInterval(interval);
	}
}, 10);
