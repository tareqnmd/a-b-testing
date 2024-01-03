const badge_text = 'Holiday Deals';
const title_text = 'Subscribe to analog tone.';
const para =
	'Everything you need to mix, master, and create. Now 99$ for a limited time.';
const first_link_href = '/';
const first_link_name = 'Try for 3 Months';
const sec_link_href = '/';
const sec_link_name = 'See All Deals';

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

const new_anc = `<a class="button mb-4 md:mb-0 md:mr-standard" href=${sec_link_href}>${sec_link_name}</a>`;
const new_para = `<p class="new-top-info mb-6">${para}</p>`;

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
	const check_conditions =
		badge &&
		head &&
		title &&
		links &&
		first_link &&
		!document.querySelector('.new-top-info');
	if (check_conditions) {
		head.insertAdjacentHTML('beforeend', style);
		badge.innerHTML = badge_text;
		title.innerHTML = title_text;
		title.insertAdjacentHTML('afterend', new_para);
		title.classList.remove('mb-8');
		title.classList.add('mb-4');
		first_link.href = first_link_href;
		first_link.innerHTML = first_link_name;
		first_link.classList.remove('large');
		links.insertAdjacentHTML('beforeend', new_anc);
		clearInterval(test_int);
	}
}, 10);
