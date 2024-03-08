const style = `
<style>
	.product-link .product-wishlist-cta.js-wishlist-cta, .product-link .view-details_cta, .product-link .inner .price{
		display: none!important;
	}
	.product-link {
		display: grid!important;
		grid-template-columns: 1fr 1fr;
		padding: 10px;
		gap: 6px;
	}
	.product-link *, .product-block .block-inner {
		margin: 0!important;
		padding: 0!important;
	}
	.product-info, .image-cont {
		grid-column: span 2;
	}
	.product-block .image-cont .image-label-wrap div img {
		width: 100%;
	}
	.product-link .ss-current-price {
		text-align: right!important;
	}
	.product-link .inner {
		width: 100%!important;
	}
	.product-link .inner .title {
		font-family: Lato;
		font-size: 13px;
		font-weight: 700;
		line-height: 16px;
		color: #464646;
	}
	.product-link .ss-current-price .from {
		color: #798086;
		font-family: Lato;
		font-size: 14px;
		font-weight: 700;
		line-height: 16px;
	}
	.product-link .ss-current-price .ss__price {
		font-family: Lato;
		font-size: 14px;
		font-weight: 900;
		line-height: 16px;
		color: #000;
	}
	#bc-sf-filter-products > div > div:nth-last-of-type(1) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap:10px;
	}
	.ss__toolbar.ss__toolbar--top{
		grid-column: span 3;
	}
	.collection-listing .product-block {
		margin: 0!important;
		width: 100%!important;
	}
	@media only screen and (max-width:991px){
		#bc-sf-filter-products > div > div:nth-last-of-type(1) {
			grid-template-columns: 1fr 1fr;
		}
		.ss__toolbar.ss__toolbar--top{
			grid-column: span 2;
		}
	}
	@media only screen and (max-width:540px){
		#bc-sf-filter-products > div > div:nth-last-of-type(1) {
			grid-template-columns: 1fr;
		}
		.ss__toolbar.ss__toolbar--top{
			grid-column: span 1;
		}
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
