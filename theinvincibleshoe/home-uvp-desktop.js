const fiveStarDeskHome = `
<svg width="78" height="15" viewBox="0 0 78 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 0.5L9.05725 4.66844L13.6574 5.33688L10.3287 8.58156L11.1145 13.1631L7 11L2.8855 13.1631L3.6713 8.58156L0.342604 5.33688L4.94275 4.66844L7 0.5Z" fill="white"/>
<path d="M23 0.5L25.0572 4.66844L29.6574 5.33688L26.3287 8.58156L27.1145 13.1631L23 11L18.8855 13.1631L19.6713 8.58156L16.3426 5.33688L20.9428 4.66844L23 0.5Z" fill="white"/>
<path d="M39 0.5L41.0572 4.66844L45.6574 5.33688L42.3287 8.58156L43.1145 13.1631L39 11L34.8855 13.1631L35.6713 8.58156L32.3426 5.33688L36.9428 4.66844L39 0.5Z" fill="white"/>
<path d="M55 0.5L57.0572 4.66844L61.6574 5.33688L58.3287 8.58156L59.1145 13.1631L55 11L50.8855 13.1631L51.6713 8.58156L48.3426 5.33688L52.9428 4.66844L55 0.5Z" fill="white"/>
<path d="M71 0.5L73.0572 4.66844L77.6574 5.33688L74.3287 8.58156L75.1145 13.1631L71 11L66.8855 13.1631L67.6713 8.58156L64.3426 5.33688L68.9428 4.66844L71 0.5Z" fill="white"/>
</svg>
`;

const checkSvgDeskHome = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="8" fill="#F36523"/>
<path d="M11.3335 5.5L6.7502 10.0833L4.66687 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const styleDeskHome = `
<style>
    #shopify-section-hero-1{
        display: none!important;
    }
    .index-desk-hero *{
        margin: 0;
        padding: 0;
    }
    .index-desk-hero{
        display: grid;
        margin-bottom: 20px;
    }
    .index-desk-hero img{
        width: 100%;
    }
    .index-desk-hero .revs{
        background: #F36523;
        padding: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap:10px;
    }
    .index-desk-hero .revs strong{
        font-size: 12px;
        font-weight: 700;
        color:white;
    }
    .index-desk-hero .revs span{
        font-size: 12px;
        font-weight: 400;
        color:white;
    }
    .index-desk-hero .details{
        padding: 16px;  
        display: grid;
        gap: 16px;
    }
    .index-desk-hero .details .info h2{
        font-size: 22px;
        line-height: 24px;
        font-weight: 700;
        color: #473505;
        margin-bottom: 10px;
    }
    .index-desk-hero .details .info p{
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #393939;
    }
    .index-desk-hero .details .features{
        display: grid;
        gap: 4px;
    }
    .index-desk-hero .details .features li{
        display: flex;
        align-items: center;
        gap: 4px;
    }
    .index-desk-hero .details .features li strong{
        font-size: 12px;
        font-weight: 500;
        line-height: 20px;
        color: #0D0C22;
    }
    .index-desk-hero .details a{
        background: #F36523;
        padding: 12px;
        color: #0D0C22;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        border-radius: 6px;
        text-align: center;
    }
</style>
`;

const newDeskHomeElm = `
<div class="index-desk-hero">
    <img src="https://theinvincibleshoe.com/cdn/shop/files/Be_gentle_with_yourself._1800_x_1000_px_300x300.jpg" alt="" />
    <div class="revs">
        ${fiveStarDeskHome}
        <strong>4.6/5</strong>
        <span>400+ verified reviews</span>
    </div>
    <div class="details">
        <div class="info">
            <h2>Built To Last. Built To Protect</h2>
            <p>Explore our custom line of safety shoes, each featuring a steel toe and nail resistant soles.</p>
        </div>
        <ul class="features">
            <li>
                ${checkSvgDeskHome}
                <strong>Safe, cost-effective, and durable
                </strong>
            </li>
            <li>
                ${checkSvgDeskHome}
                <strong>Significantly reduce waste and pollution</strong>
            </li>
            <li>
                ${checkSvgDeskHome}
                <strong>Made from bamboo, cornstarch, and cellulose</strong>
            </li>
        </ul>
        <a href="">
            SHOP NOW
        </a>
    </div>
</div>
`;

const intervalDeskHome = setInterval(() => {
	try {
		const header = document.querySelector('.template-index header.site-header');
		const head = document.querySelector('head');
		if (header && head && !document.querySelector('.index-desk-hero')) {
			head.insertAdjacentHTML('beforeend', styleDeskHome);
			header.insertAdjacentHTML('beforeend', newDeskHomeElm);
			clearInterval(intervalDeskHome);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
