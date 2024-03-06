const five_star_svg = `
<svg width="73" height="14" viewBox="0 0 73 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 0.5L8.39884 4.38647L12.6819 4.99139L9.57239 7.99828L10.3206 12.2586L6.5 10.2305L2.6794 12.2586L3.42761 7.99828L0.318133 4.99139L4.60116 4.38647L6.5 0.5Z" fill="#FF9E0D"/>
<path d="M21.5 0.5L23.3988 4.38647L27.6819 4.99139L24.5724 7.99828L25.3206 12.2586L21.5 10.2305L17.6794 12.2586L18.4276 7.99828L15.3181 4.99139L19.6012 4.38647L21.5 0.5Z" fill="#FF9E0D"/>
<path d="M36.5 0.5L38.3988 4.38647L42.6819 4.99139L39.5724 7.99828L40.3206 12.2586L36.5 10.2305L32.6794 12.2586L33.4276 7.99828L30.3181 4.99139L34.6012 4.38647L36.5 0.5Z" fill="#FF9E0D"/>
<path d="M51.5 0.5L53.3988 4.38647L57.6819 4.99139L54.5724 7.99828L55.3206 12.2586L51.5 10.2305L47.6794 12.2586L48.4276 7.99828L45.3181 4.99139L49.6012 4.38647L51.5 0.5Z" fill="#FF9E0D"/>
<path d="M66.5 0.5L68.3988 4.38647L72.6819 4.99139L69.5724 7.99828L70.3206 12.2586L66.5 10.2305L62.6794 12.2586L63.4276 7.99828L60.3181 4.99139L64.6012 4.38647L66.5 0.5Z" fill="#FF9E0D"/>
</svg>
`;

const style = `
<style>
#shopify-block-0ea9ebc0-7253-46a7-9047-dbfee3f45c63 {
    display: none!important;
}
.product-icons-text-container .icons-text-box:last-child {
    display: none;
}
.main-product-white-bg .product__info-wrapper .product-icons-text-container .icons-text-box p {
    max-width: unset!important;
}
.price--on-sale > .badge.price__badge-sale {
    background: none!important;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 0 0 !important;
}
.price--on-sale > .badge.price__badge-sale .you-save {
    background: #DCF8EF;    
    padding: 6px 8px;
    gap: 10px;
    font-size: 15px;
    font-weight: 600;
    color: #009E6E;
}
.price--on-sale > .badge.price__badge-sale .badge.price__badge-sale {
    background: none;
    font-size: 15px;
    font-weight: 600;
    color: #009E6E;
    padding: 0;
}
.price--on-sale > dl .price__sale .you-now {
    color: #F5222D;
    font-size: 18px;
    font-weight: 600;
    margin-right: 6px;
}
.new-rev-elm{
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 10px 0!important;
    color: black;
}
.new-rev-elm strong{
    font-size: 12px;
    font-weight: 700;
}
.new-rev-elm span{
    font-size: 11px;
    font-weight: 500;
    text-decoration: underline;
}
</style>
`;

const new_elm_html = `
<div class="new-rev-elm">
    <strong>4.9/5</strong>
    ${five_star_svg}
    <span>Over 500+ customers love</span>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector('.product__title');
	const price_sale = document.querySelector(
		'.price--on-sale > dl .price__sale'
	);
	const price_badge_sale = document.querySelector(
		'.price--on-sale .badge.price__badge-sale'
	);
	const price_badge_sale_price = price_badge_sale.querySelector(
		'.badge.price__badge-sale'
	);
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-rev-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('beforebegin', new_elm_html);
		price_badge_sale.insertAdjacentHTML(
			'afterbegin',
			'<span class="you-save">You Saved</span>'
		);
		price_badge_sale_price.innerText = price_badge_sale_price.innerText.replace(
			' OFF',
			''
		);
		price_sale.insertAdjacentHTML(
			'beforeend',
			'<span class="you-now">Now</span>'
		);
		clearInterval(interval);
	}
}, 10);
