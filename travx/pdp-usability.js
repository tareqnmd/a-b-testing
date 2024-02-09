const style = `
<style>
.product-single__meta > div:nth-of-type(2) > div:nth-of-type(1) div{
    margin: 0;
}
.product-single__meta {
    padding: 20px;
}
.pdp-usps{
    display: flex;
    align-items: center;
    justify-content: center;
}
.pdp-usp{
    display: flex;
    align-items: center;
    padding: 0 8px;
    gap: 2px;
}
.pdp-usp img{
    width: 18px;
}
.pdp-usp span{
    font-size: 12px;
}
.pdp-usp:not(:last-child){
    border-right: 1px solid #000;
}
</style>
`;

const new_elm_html = `
<div class="product-block pdp-usps">
    <div class="pdp-usp">
        <img src="https://i.ibb.co/3dvttp8/usp1.png" alt="" />
        <span>Bestel nu, betaal later</span>
    </div>
    <div class="pdp-usp">
        <img src="https://i.ibb.co/0ZKPfwX/usp2.png" alt="" />
        <span>Bestel nu, betaal later</span>
    </div>
    <div class="pdp-usp">
        <img src="https://i.ibb.co/3rFcVkW/usp3.png" alt="" />
        <span>Gratis Verzending</span>
    </div>
</div>
`;

const interval = setInterval(() => {
	const header = document.querySelector(
		'.product-block.product-block--header.product-single__header'
	);
	const rating = document.querySelector(
		'.product-single__meta > div:nth-of-type(2) > div:nth-of-type(1)'
	);
	const form_cart = document.querySelector(
		'.product-single__meta > div:nth-of-type(2) > div:nth-of-type(8)'
	);
	const sale_points = document.querySelectorAll(
		'.product-block.product-block--sales-point'
	);
	const product_price = document.querySelector(
		'.product-block.product-block--price'
	);
	const head = document.querySelector('head');
	if (
		header &&
		product_price &&
		sale_points &&
		rating &&
		head &&
		!document.querySelector('.pdp-usps')
	) {
		head.insertAdjacentHTML('beforeend', style);
		header.insertAdjacentElement('beforebegin', rating);
		const spec_div = document.createElement('div');
		spec_div.classList.add('product-spec');
		spec_div.innerHTML = `
		    <h3>Product Specificaties</h3>
		    <div class="div-specs">
		    </div>
		`;
		[...sale_points].map((item) => {
			console.log('item', item);
			spec_div.querySelector('.div-specs').appendChild(item);
		});
		product_price.insertAdjacentElement('afterend', spec_div);
		form_cart.insertAdjacentHTML('afterend', new_elm_html);
		clearInterval(interval);
	}
}, 10);
