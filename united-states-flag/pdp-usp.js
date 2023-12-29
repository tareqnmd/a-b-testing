const style = `
<style>
   .promo.promo-badge-left {
        max-width: 160px;
   }
   .productView-img-container .promo{
        margin:16px;
   }
</style>
`;
const right_promo_html = `<img class="promo promo-badge-left" src="https://i.ibb.co/v3QS9hh/am-flag-seen.png">`;

const pdp_usp_int = setInterval(() => {
	const promo_right = document.querySelector('.promo.promo-badge-right');
	const head = document.querySelector('head');
	if (promo_right && style) {
		head.insertAdjacentHTML('beforeend', style);
		promo_right.insertAdjacentHTML('afterend', right_promo_html);
		clearInterval(pdp_usp_int);
	}
}, 10);
