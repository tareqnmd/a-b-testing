const style = `
<style>
.meta-save{
    margin-bottom: 10PXpx;
}
</style>
`;

const new_elm_html = `
<div class="new-elm">
</div>
`;

const interval = setInterval(() => {
	const product_meta = document.querySelector('.product-single__meta');
	const meta_save = document.querySelector('.meta_save');
	const head = document.querySelector('head');
	if (
		product_meta &&
		meta_save &&
		head &&
		!document.querySelector('.new-elm')
	) {
		head.insertAdjacentHTML('beforeend', style);
		product_meta.insertAdjacentElement('afterbegin', meta_save);
		clearInterval(interval);
	}
}, 10);
