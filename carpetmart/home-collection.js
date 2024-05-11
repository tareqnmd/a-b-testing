const style = `
<style>
	.shogun-root
		> div:nth-of-type(2)
		> div:nth-of-type(1)
		> div:nth-of-type(1)
		> div:nth-of-type(2)
		> div:nth-of-type(1) {
		display: none !important;
	}
	#s-b13170db-9bb7-4c65-ab04-ca4cd2e0f673
		.shg-box-content
		> div:not(
			#s-59ded273-fd06-4e7c-9c05-ab0aa79fb6f2,
            .new-elm,
			:nth-last-child(-n + 5)
		) {
		display:  none;
	}
    .new-elm{
        margin: 30px auto;
        max-width: 1520px;
        width: 100%;
        display: grid;
        gap: 10px;
    }
</style>
`;

const category = (link = '', src = '', name = '') => `
<div class="category-details">
    <img src=${src} alt="" />     
    <a href=${link}>${name}</a>
</div>
`;

const uspDetails = (svg, text = '') => `
<div class="usp-details">
    ${svg}    
    <span>${text}</span>
</div>
`;

const new_elm_html = `
<div class="new-elm">
    <div class="cat-header">
        <h2>Shop Our Popular Categories</h2>
    </div>
    <div class="cat-wrapper cat-right">
        ${category()}
        ${category()}
    </div>
    <div class="cat-wrapper cat-left">
        ${category()}
        ${category()}
    </div>
    <div class="usp-store">
        ${uspDetails()}
        ${uspDetails()}
        ${uspDetails()}
    </div>
    <div class="cat-wrapper cat-equal">
        ${category()}
        ${category()}
    </div>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector(
		'#s-b13170db-9bb7-4c65-ab04-ca4cd2e0f673 #s-59ded273-fd06-4e7c-9c05-ab0aa79fb6f2'
	);
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('afterend', new_elm_html);
		clearInterval(interval);
	}
}, 10);
