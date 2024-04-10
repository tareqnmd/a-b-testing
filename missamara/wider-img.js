const style = `
<style>
.product-detail .detail .title{
    text-align: left;
}
@media (min-width: 768px) {
    .main-image-wrapper{
        width: 98%!important;
    }
}
</style>
`;

const interval = setInterval(() => {
	const price_wrapper = document.querySelector(
		'#main-product-detail .product-price-wrapper'
	);
	const title = document.querySelector('#main-product-detail .title');
	const thumbs = document.querySelector('#thumbscroll');
	const discount_wrapper = document.querySelector(
		'.main-image.main-image-discount-wrapper'
	);
	const head = document.querySelector('head');
	if (price_wrapper && head && discount_wrapper && thumbs && title) {
		head.insertAdjacentHTML('beforeend', style);
		price_wrapper.insertAdjacentElement('beforebegin', title);
		discount_wrapper.insertAdjacentElement('afterend', thumbs);
		clearInterval(interval);
	}
}, 10);
