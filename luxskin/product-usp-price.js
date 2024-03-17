const style = `
<style>
.grid.product-single{
    grid-template-columns: 1.2fr 1fr;
}
.product-single__title {
    text-align: left;
    margin-bottom: 0;
}
.product-single__meta > p {
    display: none!important;
}
.key-point{
    padding: 12px 16px;
    background: #F9FBFE;
    border-radius: 8px;
    margin: 0;
    list-style-type: disc;
}
.price-area{
    display: flex;
}
.stamped-product-reviews-badge.stamped-main-badge .stamped-badge{
    display: flex;
    gap: 6px;
    align-items: center;
}
.box_quantity{
    gap: 10px;
}
.qtybox{
    border-radius: 8px; 
}
.qtybox .btnqty{
    background: #F5F5F5; 
}
.qtybox input{
    background: #FFFFFF!important;
}
.box_quantity .product-single__add-to-cart button{
    background: #FF437B;
    padding: 16px 24px;
    gap: 10px;
    border-radius: 8px; 
}
@media screen and (min-width: 591px){
    .product-single__title {
        font-size: 1.8em!important;
    }
}
</style>
`;

const interval = setInterval(() => {
	const title = document.querySelector('.product-single__title');
	const price = document.querySelector('div[itemprop="offers"]');
	const key_points = document.querySelector('.key-point');
	const add_cart = document.querySelector('#AddToCartForm--product-template');
	const rev_star = document.querySelector(
		'.stamped-product-reviews-badge.stamped-main-badge'
	);
	const head = document.querySelector('head');
	if (title && head && !document.querySelector('.price-area')) {
		head.insertAdjacentHTML('beforeend', style);
		title.insertAdjacentElement('beforebegin', rev_star);
		title.insertAdjacentElement('afterend', price);
		price.classList.add('price-area');
		key_points.insertAdjacentElement('afterend', add_cart);
		clearInterval(interval);
	}
}, 10);
