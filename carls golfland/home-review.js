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

const star_svg = `
<svg width="83" height="16" viewBox="0 0 83 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 0.5L9.69097 4.98439L14.6329 5.68237L11.0451 9.15186L11.9084 14.0676L7.5 11.7275L3.09161 14.0676L3.95494 9.15186L0.367076 5.68237L5.30903 4.98439L7.5 0.5Z" fill="#FF9E0D"/>
    <path d="M24.5 0.5L26.691 4.98439L31.6329 5.68237L28.0451 9.15186L28.9084 14.0676L24.5 11.7275L20.0916 14.0676L20.9549 9.15186L17.3671 5.68237L22.309 4.98439L24.5 0.5Z" fill="#FF9E0D"/>
    <path d="M41.5 0.5L43.691 4.98439L48.6329 5.68237L45.0451 9.15186L45.9084 14.0676L41.5 11.7275L37.0916 14.0676L37.9549 9.15186L34.3671 5.68237L39.309 4.98439L41.5 0.5Z" fill="#FF9E0D"/>
    <path d="M58.5 0.5L60.691 4.98439L65.6329 5.68237L62.0451 9.15186L62.9084 14.0676L58.5 11.7275L54.0916 14.0676L54.9549 9.15186L51.3671 5.68237L56.309 4.98439L58.5 0.5Z" fill="#FF9E0D"/>
    <path d="M75.5 0.5L77.691 4.98439L82.6329 5.68237L79.0451 9.15186L79.9084 14.0676L75.5 11.7275L71.0916 14.0676L71.9549 9.15186L68.3671 5.68237L73.309 4.98439L75.5 0.5Z" fill="#FF9E0D"/>
</svg>
`;

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
    .new-review-elm{
        display: grid;
        margin: 30px 10px;
    }
    .new-review-elm *{
        margin:0;
        padding:0;
    }
    .new-review-elm h1{
        text-align: center;
    }
    .new-review-elm h6{
        margin:12px 0;
        text-align: center;
    }
    .reviews-section{
        position: relative;
    }
    .reviews-section button{
        position: absolute;
        top:50%;
        transform: translateY(-50%);
    }
    .reviews-section button.next{
        right:10px;
    }
    .reviews-section button.prev{
        left:10px;
    }
    .all-reviews {
        display: grid;
        grid-template-columns: repeat(12, 32%);
        gap: 2%;
        overflow-y: auto;
        scroll-snap-type: x mandatory;
    }
    .single-review{
        scroll-snap-align: start;
        display: grid;
    }
    .single-review strong{
    }
    .single-review h3{
        margin: 12px 0 6px;
    }
    .single-review p{
    }
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
            ${reviews?.map((review) => getSingleRev(review)).join('')}
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
