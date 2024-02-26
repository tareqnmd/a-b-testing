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
    #r-1698334340291, #m-1681222740762, #e-1701779074874 {
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
    }
    .new-rev-elm {
        display: flex;
        align-items: center;
        gap: 10px;
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
</style>
`;

const new_elm_html = `
<div class="new-rev-elm">
    <strong>4.9/5</strong>
    ${star_svg}
    <span>Over 14,000+ satisfied customers love</span>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector('#m-1680957036358');
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-rev-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('beforebegin', new_elm_html);
		clearInterval(interval);
	}
}, 10);
