const style = `
<style>
    .limited-qty{
        display: none!important;
    }
    .rev-area .yotpo-bottom-line-scroll-panel{
        align-items: center!important;
    }
    .finance-area{
        margin: 10px 0;
        display: grid;
        gap: 4px;
    }
    .price-elm{
        color: red;
        font-size: 24px;
        line-height: 24px;
    }
</style>
`;

const financeElm = (priceText) => `
<div class="finance-area">
    <strong class="price-elm">
        Starting at: ${priceText}
    </strong>
</div>
`;

const interval = setInterval(() => {
	try {
		const headerSection = document.querySelector(
			'#shopify-section-main-product > div > div > div.block.top > div'
		);
		const limitedQuantity = headerSection.querySelector('p:nth-of-type(2)');
		const rating = headerSection.querySelector(
			'.yotpo-pdp-rating.yotpo-widget-instance'
		);
		const freeVibe = headerSection.querySelector('span:nth-of-type(1)');
		const title = headerSection.querySelector('.product_title');
		const priceText = document.querySelector(
			'#product-form-main-product [data-product-price]'
		).innerText;
		const head = document.querySelector('head');

		if (!document.querySelector('.new-elm')) {
			head.insertAdjacentHTML('beforeend', style);
			rating.classList.add('rev-area');
			limitedQuantity.classList.add('limited-qty');
			title.insertAdjacentElement('beforebegin', rating);
			title.insertAdjacentHTML('afterend', financeElm(priceText));
			title.insertAdjacentElement('afterend', freeVibe);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
