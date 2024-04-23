const style = `
<style>
    .free-gift-advert-containers + div .mt-5 > div:not(:first-child) {
        display: none;
    }
</style>
`;


const styleInterval = setInterval(() => {
	const head = document.querySelector('head');
	if (head) {
		head.insertAdjacentHTML('beforeend', style);
		clearInterval(styleInterval);
	}
}, 10);
