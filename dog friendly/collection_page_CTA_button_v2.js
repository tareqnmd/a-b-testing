const product_style = `
<style>

</style>
`;

const new_elm_html = (link, price) => `
<a href=${link} class="new-cta-btn">
    <span>SHOP NOW</span>
    <span>${price}</span>
</a>
`;

const interval = setInterval(() => {
	const products = [...document.querySelectorAll('.grid-product__content')];
	const head = document.querySelector('head');
	if (products.length > 0 && head && !document.querySelector('.new-cta-btn')) {
		head.insertAdjacentHTML('beforeend', product_style);
		products.map((item) => {
			const link = item.querySelector('a').href;
			const price_elm = item.querySelector('.price_on_sale');
			const price =
				price_elm.querySelector('.money') ||
				price_elm.querySelector('.product-sales-price');
			item.insertAdjacentHTML('beforeend', new_elm_html(link, price.innerText));
		});
		clearInterval(interval);
	}
}, 10);
