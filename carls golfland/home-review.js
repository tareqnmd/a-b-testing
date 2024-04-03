const reviews = [
	{
		user: 'Marita',
		title: 'Perfect!!!!',
		description:
			'Rating Great Big Bertha ladies - ordered online from Switzerland, delivery our House on time 4 days after ordering. Great price, great service - perfect - thank you',
	},
	{
		user: 'Brian M',
		title: 'Cobra Radspeed Driver',
		description:
			'Just purchased a Cobra Radspeed XB driver. Driver came as promised. Excellent shipping package. Driver in pristine condition and would highly recommend this seller.',
	},
	{
		user: 'David R.',
		title: "Carl's should have a loyalty",
		description:
			"Carl's should have a loyalty program for people such as myself who buy a ton of stuff there.",
	},
	{
		user: 'Kimberly T.',
		title: "Women's Golf Shoes",
		description:
			"Fantastic selection and quick delivery on my golf shoes! I would order from Carl's Golfland again!",
	},
	{
		user: 'Harriet W.',
		title: 'Order arrived on time. Great',
		description: 'Order arrived on time. Great shoes for a great price.',
	},
	{
		user: 'Ben B.',
		title: 'Putter was delivered fast and in perfect condition',
		description:
			'Putter was delivered fast and in perfect condition. Love the selection , will be ordering more clubs from Carls',
	},
];

const star_svg = ``;

const getSingleRev = (rev) => `
<div class="single-review">
    ${star_svg}
    <strong>${rev.user}</strong>
    <h3>${rev.title}</h3>
    <p>${rev.description}</p>
</div>
`;

const style = `
<style>
</style>
`;

const new_elm_html = `
<div class="new-review-elm">
    <h1>Over XX,XXX Golfers Served Since 1958</h1>
    <h6>16000+ Reviews - 94% 5-Stars</h6>
    <div class="reviews-section">
        <button class="prev">Prev</button>
        <button class="next">Next</button>
        <div class="all-reviews">
            ${reviews?.map((review) => getSingleRev(review)).join()}
        </div>
    </div>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector('.home-page-slider');
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-review-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('afterend', new_elm_html);
		clearInterval(interval);
	}
}, 10);
