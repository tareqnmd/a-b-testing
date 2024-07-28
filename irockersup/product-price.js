const style = `
<style>
    .rev-area .yotpo-bottom-line-scroll-panel{
        align-items: center!important;
    }
    .finance-area{
        margin: 10px 0;
        display: grid;
        gap: 4px;
    }
    .price-elm{
        color: #db614b;
        font-size: 24px;
        line-height: 24px;
    }
	@media (max-width:420px){
		.rev-area .yotpo-star-rating-reviews-summary-text {
			font-size: 12px;
		}
	}
	@media (max-width:380px){
		.rev-area .yotpo-star-rating-reviews-summary-text {
			font-size: 10px;
		}
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
		const oldPrice = document.querySelector(
			'#product-form-main-product div:nth-of-type(4)'
		);
		const paymentOption = document.querySelector(
			'#product-form-main-product div:nth-of-type(7)'
		);
		const head = document.querySelector('head');

		if (!document.querySelector('.finance-area')) {
			head.insertAdjacentHTML('beforeend', style);
			rating.classList.add('rev-area');
			limitedQuantity.classList.add('hidden');
			oldPrice.classList.add('hidden');
			title.insertAdjacentElement('beforebegin', rating);
			title.insertAdjacentElement('afterend', paymentOption);
			title.insertAdjacentHTML('afterend', financeElm(priceText));
			title.insertAdjacentElement('afterend', freeVibe);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
