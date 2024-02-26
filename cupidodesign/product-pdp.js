const star_svg = `
<svg width="83" height="16" viewBox="0 0 83 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 0.5L9.69097 4.98439L14.6329 5.68237L11.0451 9.15186L11.9084 14.0676L7.5 11.7275L3.09161 14.0676L3.95494 9.15186L0.367076 5.68237L5.30903 4.98439L7.5 0.5Z" fill="#FF9E0D"/>
    <path d="M24.5 0.5L26.691 4.98439L31.6329 5.68237L28.0451 9.15186L28.9084 14.0676L24.5 11.7275L20.0916 14.0676L20.9549 9.15186L17.3671 5.68237L22.309 4.98439L24.5 0.5Z" fill="#FF9E0D"/>
    <path d="M41.5 0.5L43.691 4.98439L48.6329 5.68237L45.0451 9.15186L45.9084 14.0676L41.5 11.7275L37.0916 14.0676L37.9549 9.15186L34.3671 5.68237L39.309 4.98439L41.5 0.5Z" fill="#FF9E0D"/>
    <path d="M58.5 0.5L60.691 4.98439L65.6329 5.68237L62.0451 9.15186L62.9084 14.0676L58.5 11.7275L54.0916 14.0676L54.9549 9.15186L51.3671 5.68237L56.309 4.98439L58.5 0.5Z" fill="#FF9E0D"/>
    <path d="M75.5 0.5L77.691 4.98439L82.6329 5.68237L79.0451 9.15186L79.9084 14.0676L75.5 11.7275L71.0916 14.0676L71.9549 9.15186L68.3671 5.68237L73.309 4.98439L75.5 0.5Z" fill="#FF9E0D"/>
</svg>
`;
const style = `
<style>
    #r-1698334340291, #m-1681222740762, #r-1698331910893, #r-1680958187116, #r-1698333112570, #r-1698337581076 {
        display: none!important;
    }
    #c-1631095168934 #r-1698334184777 {
        border: 0!important;
    }
    .gf_product-prices {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 6px;
    }
    #c-1698330487292 #m-1680957036352 .gf_product-price {
        font-size: 24px !important;
        font-weight: 700 !important;
        color: #00CA8D !important;
    }
    #c-1698330487292 #m-1680957036352 .gf_product-compare-price {
        font-size: 18px !important;
        font-weight: 400;
    }
    #c-1698330487292 #bcpo .bcpo-front-button-option:checked + .bcpo-front-button-label {
        border: 2px solid #000000;
    }
    #c-1698330487292 #m-1680957036352 .gf_pq-discount {
        font-size: 14px !important;
        font-weight: 500 !important;
        line-height: 28px;
        background: #3B82F6 !important;
        color: #fff !important;
        border: none !important;
    }
    #m-1681240900071 #bcpo .bcpo-buttons label.bcpo-front-button-label {
        border: 1px solid #E0E0E0;
        background: white;
        color: black;
        font-size: 14px !important;
        line-height: 14px !important;
        border-radius: 4px !important;
    }
    #m-1681240900071 #bcpo .bcpo-title {
        font-size: 16px;
        font-weight: 400;
    }
    #m-1681240900071 #bcpo .bcpo-value {
        font-size: 16px;
        font-weight: 600;
    }
    #m-1681240900071 #bcpo .bcpo-images input:checked + label {
        border: 2px solid #253368 !important;;
        box-shadow: none !important;
    }
    #m-1681240900071 #bcpo .bcpo-images .bcpo-medium-swatches div.bcpo-image-parent {
        padding: 0;
        border: 1px solid #E1E1E1;
        border-radius: 4px;
        width: 64px;
        overflow: hidden;
    }
    #m-1681240900071 .bcpo-label {
        margin-bottom: 8px;
    }
    #c-1631157248483 #m-1680957036368 .gf_add-to-cart {
        border-radius: 4px!important;
    }
    .bcpo-buttons .bcpo-label {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .ks-chart-container.sizing-chart-container.ks-container-with-modal {
        width: max-content;
    }
    .ks-chart-modal-link.sizing-chart-modal-link.with-icon {
        margin: 0;
    }
    #c-1698330487292 {
        padding-left: 0!important;
        padding-right: 0!important;
    }
    #c-1698330487292 #m-1680957036358 .product-single__title{
        text-align: left!important;
    }
    #r-1698330487290 #e-1701779074874 .text-edit {
        background: #ececec;
        border-radius: 4px;
        overflow: hidden;
        padding: 10px!important;
        border: none!important;
        margin-top: 20px!important;
    }
    .new-rev-elm {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .new-rev-elm svg {
        flex-shrink: 0;
    }
    .new-rev-elm strong {
        font-size: 15px;
        font-weight: 700;
    }
    .new-rev-elm span {
        font-size: 14px;
        font-weight: 500;
        color: #4B5563;
        text-decoration: underline;
    }
    .new-pdp-elm {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
    }
    .new-pdp-elm div {
        display: flex;
        align-items: center;
        border-right: 1px solid;
        gap: 6px;
        padding: 0 10px;
    }
    .new-pdp-elm div:last-child {
        border: 0;
    }
    .new-pdp-elm div img{
        width: 24px;
    }
    .new-pdp-elm div span{
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;
    }
    @media only screen and (max-width:767px) {
        .new-rev-elm {
            gap: 6px;
        }
        .new-rev-elm strong {
            font-size: 13px;
        }
        .new-rev-elm span {
            font-size: 12px;
        }
        .new-pdp-elm {
            margin: 16px 0;
        }
        .new-pdp-elm div {
            gap: 4px;
        }
        .new-pdp-elm div img{
            width: 18px;
        }
        .new-pdp-elm div span{
            font-size: 12px;
            line-height: 14px;
        }
    }
    @media only screen and (max-width:480px) {
        .new-rev-elm {
            gap: 4px;
        }
        .new-rev-elm strong {
            font-size: 11px;
        }
        .new-rev-elm span {
            font-size: 10px;
        }
        .new-pdp-elm {
            margin: 12px 0;
        }
        .new-pdp-elm div {
            gap: 4px;
        }
        .new-pdp-elm div img{
            width: 16px;
        }
        .new-pdp-elm div span{
            font-size: 10px;
            line-height: 12px;
        }
    }
</style>
`;

const new_elm_html = `
<div class="new-rev-elm">
    <strong>4.9/5</strong>
    ${star_svg}
    <span>Over 14,000+ satisfied customers love</span>
</div>
`;

const new_elm_html_sec = `
<div class="new-pdp-elm">
    <div>
        <img src="https://ucarecdn.com/acf20fcc-bbda-4d3c-ae1e-dd840006969e/-/format/auto/-/preview/3000x3000/-/quality/lighter/Icon%20Spedizione%20Gratuita%20Cupido.png" alt="" />
        <span>Made In Italy</span>
    </div>
    <div>
        <img src="https://ucarecdn.com/afe8f111-1052-4189-8bbd-3dcec57e4e14/-/format/auto/-/preview/3000x3000/-/quality/lighter/Icon%20Pagamento%20Sicuro%20Cupido.png" alt="" />
        <span>Secure Payment</span>
    </div>
    <div>
        <img src="https://ucarecdn.com/131f2e4a-5013-402e-9ead-2a89029dc92c/-/format/auto/-/preview/3000x3000/-/quality/lighter/Installments%20Payments%20_1_.png" alt="" />
        <span>Payment by rate</span>
    </div>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector('#m-1680957036358');
	const exist_elm_pay = document.querySelector('#r-1680958187116');
	const title_lab_btn = document.querySelector('.bcpo-buttons .bcpo-label');
	const size_modal = document.querySelector(
		'.ks-chart-container.sizing-chart-container.ks-container-with-modal'
	);
	const title_btn = document.querySelector('.bcpo-buttons .bcpo-title');
	const title_img = document.querySelector('.bcpo-images .bcpo-title');
	const head = document.querySelector('head');
	if (
		exist_elm &&
		exist_elm_pay &&
		title_btn &&
		title_img &&
		head &&
		title_lab_btn &&
		size_modal &&
		!document.querySelector('.new-rev-elm')
	) {
		head.insertAdjacentHTML('beforeend', style);
		title_btn.innerHTML = 'CHOOSE: (height x width):';
		title_img.innerHTML = 'CHOOSE: Product type:';
		title_lab_btn.insertAdjacentElement('beforeend', size_modal);
		exist_elm.insertAdjacentHTML('beforebegin', new_elm_html);
		exist_elm_pay.insertAdjacentHTML('beforebegin', new_elm_html_sec);
		clearInterval(interval);
	}
}, 10);

function numberOnly(string) {
	return parseFloat(string.replace(',', '.').replace(/[^0-9\-+\.]/g, ''));
}

function currencyOnly(string) {
	return string.replace(/[0-9,. ]/g, '');
}

let dis_prev_price = null;

const price_chk_int = setInterval(() => {
	const dis_select = document.querySelector(
		'.gf_pq-discount-selector .gf_pq-discount'
	);
	const comp_price = document.querySelector(
		'.gf_product-compare-price'
	).innerText;
	const prod_price = document.querySelector('.gf_product-price').innerText;
	const dis_price = numberOnly(comp_price) - numberOnly(prod_price);
	const currency = currencyOnly(prod_price);

	if (dis_select && dis_price && currency && dis_price !== dis_prev_price) {
		dis_prev_price = dis_price;
		dis_select.innerHTML = `Save ${currency}${dis_price}`;
	}
}, 500);
