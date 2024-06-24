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
		const navActions = document.querySelector(
			'.grid__item.large--one-sixth.one-quarter.custom-misc'
		);
		const navActionsLast = navActions.querySelector('li:last-child');
		const head = document.querySelector('head');
		if (
			navActions &&
			navActionsLast &&
			head &&
			!document.querySelector('.new-elm')
		) {
			head.insertAdjacentHTML('beforeend', style);
			navActions.insertAdjacentElement('afterbegin', navActionsLast);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
