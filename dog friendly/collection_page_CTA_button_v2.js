const product_style = `
<style>
	.new-save{
		border-radius: 4px;
		padding: 2px 8px;
		display: flex;
		gap: 6px;
		align-items: center;
		background: #99D6EA;
		width: max-content;
		font-family: Poppins;
	}
	.new-save span{
		font-size: 12px;
		line-height: 12px;
		font-weight: 700;
		text-transform: uppercase;
	}
</style>
`;

const save_price_elm = (price, currency) => `
<div class="new-save">
	<span>Save</span>
	<span>${currency} ${price.toFixed(2)}</span>
</div>
`;

function numberOnly(string) {
	return parseFloat(string.replace(',', '.').replace(/[^0-9\-+\.]/g, ''));
}

function currencyOnly(string) {
	return string.replace(/[0-9,. ]/g, '');
}

const interval = setInterval(() => {
	const products = [...document.querySelectorAll('.grid-product__content')];
	const head = document.querySelector('head');
	if (products.length > 0 && head && !document.querySelector('.new-save')) {
		head.insertAdjacentHTML('beforeend', product_style);
		products.map((item) => {
			const price_parent = item.querySelector('.grid-product__price ');
			const save_child = item.querySelector(
				'.grid-product__price_saving_wrapper'
			);
			price_parent.insertAdjacentElement('beforeend', save_child);
		});
		clearInterval(interval);
	}
}, 10);
