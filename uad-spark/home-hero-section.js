const style = `
<style>
#shopify-section-template--15296358711385__hero .flex-wrap.items-center > div {
    display:none;
}
#shopify-section-template--15296358711385__hero .flex-wrap.items-center a {
    min-width: 220px;
}
.new-top-info {
    color:#cecece;
}
</style>
`;

const new_anc = `
<a class="button large mb-4 md:mb-0 md:mr-standard" href="/">
    See All Deals
</a>
`;

const new_para = `
<p class="new-top-info mb-6">
    Everything you need to mix, master, and create. Now 99$ for a limited time.
</p>
`;

const test_int = setInterval(() => {
	const head = document.querySelector('head');
	const badge = document.querySelector(
		'#shopify-section-template--15296358711385__hero .badge'
	);
	const title = document.querySelector(
		'#shopify-section-template--15296358711385__hero .font-extraBold'
	);
	const links = document.querySelector(
		'#shopify-section-template--15296358711385__hero .flex-wrap.items-center'
	);
	const first_link = links.querySelector('a');
	if (badge) {
		head.insertAdjacentHTML('beforeend', style);
		badge.innerHTML = `Holiday Deals`;
		title.innerHTML = `Subscribe to analog tone.`;
		title.insertAdjacentHTML('afterend', new_para);
		title.classList.remove('mb-8');
		title.classList.add('mb-4');
		first_link.href = '/';
		first_link.innerHTML = 'Try for 3 Months';
		links.insertAdjacentHTML('beforeend', new_anc);
		clearInterval(test_int);
	}
}, 10);
