const rightArrow = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12H8M21 12L15 6M21 12L15 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const categories = [
	{
		title: 'Bracelets',
		image:
			'https://ryanchristiandesigns.com/cdn/shop/collections/FD670065-EE1D-4726-A87B-9B032B4C1D16_360x.jpg',
		link: '/pages/search-results-page?collection=bracelets',
	},
	{
		title: 'FOR HIM',
		image: 'https://ryanchristiandesigns.com/cdn/shop/collections/2_360x.jpg',
		link: '/pages/search-results-page?collection=gifts-for-him-1',
	},
	{
		title: 'CHAINS',
		image:
			'https://ryanchristiandesigns.com/cdn/shop/collections/9076776E-E889-4F02-918C-5FD837E64046_360x.jpg',
		link: '/pages/search-results-page?collection=chains',
	},
	{
		title: 'RINGS & THINGS',
		image:
			'https://ryanchristiandesigns.com/cdn/shop/collections/993DE9F6-1691-4A8D-9E84-699F0461BE60_360x.JPG',
		link: '/pages/search-results-page?collection=accessories',
	},
];

const style = `
<style>
</style>
`;

const category = (item) => `
    <div class="category-item">
        <img src=${item.image} alt=${item.title} />
        <span>${item.title}</span>
        <a href=${item.link}>SHOP NOW ${rightArrow}</a>
    </div>
`;

const new_elm_html = `
<div class="home-category">
    <div class="category-header">
        <h2>OUR COLLECTION</h2>
    </div>
    <div class="category-content">
        ${categories.map((item) => category(item)).join('')}
    </div>
</div>
`;

const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelector('main.main-content');
		const head = document.querySelector('head');
		if (exist_elm && head && !document.querySelector('.home-category')) {
			head.insertAdjacentHTML('beforeend', style);
			exist_elm.insertAdjacentHTML('beforebegin', new_elm_html);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
