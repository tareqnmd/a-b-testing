const style = `
<style>
</style>
`;

const new_elm_html = `
<div class="new-elm">
 
</div>
`;

const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelector('.exist-elm');
		const head = document.querySelector('head');
		if (exist_elm && head && !document.querySelector('.new-elm')) {
			head.insertAdjacentHTML('beforeend', style);
			exist_elm.insertAdjacentHTML('beforeend', new_elm_html);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
