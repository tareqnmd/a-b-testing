const style = `
<style>
</style>
`;

const interval = setInterval(() => {
	const title = document.querySelector('.product__title');
	const rating = document.querySelector('#shopify-block-loox-rating');
	const head = document.querySelector('head');
	if (title && rating && head) {
		head.insertAdjacentHTML('beforeend', style);
		title.insertAdjacentElement('beforebegin', rating);
		clearInterval(interval);
	}
}, 10);
