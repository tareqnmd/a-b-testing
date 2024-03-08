const style = `
<style>
	.product-link .product-wishlist-cta.js-wishlist-cta, .product-link .view-details_cta, .product-link .inner .price{
		display: none!important;
	}
	.product-link {
		display: grid!important;
		grid-template-columns: 1fr 1fr;
		gap: 6px;
	}
	.product-link * {
		margin: 0!important;
		padding: 0!important;
	}
	.product-info, .image-cont {
		grid-column: span 2;
	}
	.product-link .inner {
		width: 100%!important;
	}
</style>
`;

const interval = setInterval(() => {
	const product_infos = [...document.querySelectorAll('.product-link')];
	const head = document.querySelector('head');
	if (product_infos.length > 0 && head) {
		product_infos.forEach((item) => {
			const price = item.querySelector('.ss-current-price');
			item.insertAdjacentElement('beforeend', price);
		});
		head.insertAdjacentHTML('beforeend', style);
		clearInterval(interval);
	}
}, 10);
