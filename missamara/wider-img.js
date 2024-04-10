const style = `
<style>
.product-detail .detail .title{
    text-align: left;
}
</style>
`;

const interval = setInterval(() => {
	const price_wrapper = document.querySelector(
		'#main-product-detail .product-price-wrapper'
	);
	const title = document.querySelector('#main-product-detail .title');
	const head = document.querySelector('head');
	if (price_wrapper && head && title) {
		head.insertAdjacentHTML('beforeend', style);
		price_wrapper.insertAdjacentElement('beforebegin', title);
		clearInterval(interval);
	}
}, 10);
