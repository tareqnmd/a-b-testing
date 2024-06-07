const style = `
<style>
.nav-sections .nav-sections-items .header.links>.parent>a::after{
    content:'>'
}
</style>
`;

const interval = setInterval(() => {
	try {
		const head = document.querySelector('head');
		if (head) {
			head.insertAdjacentHTML('beforeend', style);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
