const low_price_html = `
<style>
    color: #F00;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: block;
    margin-bottom: 6px;
</style>
<span class="low-price-html">🔥 Our Lowest Price ever!</span>
`;

setInterval(() => {
	const items = [
		...document.querySelectorAll(
			'.product-list.product-list--collection .column'
		),
	];
	items.map((item) => {
		if (item && !item.querySelector('.low-price-html')) {
			const item_price_string = item.querySelector(
				'.current_price .money .money'
			).innerText;
			const item_price_number = parseFloat(
				item_price_string.replace(/\$/g, '')
			);
			const product_details = item.querySelector('.product-details');
			if (product_details && item_price_number > 70) {
				product_details.insertAdjacentHTML('beforebegin', low_price_html);
			}
		}
	});
}, 10);
