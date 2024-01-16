const style = `
<style>
	html {
		scroll-behavior: smooth;
	}
	.motion-banner {
		background: url('https://i.ibb.co/MgLNsZp/motion-v2-bg.png');
		display: flex;
		justify-content: center;
		padding: 80px 30px;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.motion-area {
		max-width: 1220px;
		width: 100%;
	}
	.motion-banner-info {
		display: flex;
		flex-direction: column;
		gap: 32px;
		width: 50%;
	}
	.motion-banner * {
		margin: 0;
		padding: 0;
	}
	.motion-banner ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.motion-banner h2 {
		color: #111827;
		font-family: Titillium Web!important;
		font-size: 48px;
		font-style: normal;
		font-weight: 700;
		line-height: 64px;
	}
	.motion-banner li {
		display: flex;
		align-items: center;
		gap: 16px;
	}
	.motion-banner li span {
		color: #374151;
		font-family: Titillium Web!important;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		line-height: 24px;
	}
	.motion-banner li svg {
		flex-shrink: 0;
	}
	.motion-page {
		padding: 80px 30px;
		background: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 40px;
	}
	.motion-page-header {
		color: #090d2b;
		font-family: Titillium Web!important;
		font-size: 40px;
		font-style: normal;
		font-weight: 700;
		line-height: 40px!important;
		letter-spacing: -1.2px;
		margin: 0;
	}
	.motion-page-infos {
		max-width: 1220px;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 30px;
	}
	.motion-page-info {
		display: flex;
		padding: 12px 12px 20px;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		flex: 1 0 0;
		border-radius: 8px;
		background: #fff;
		box-shadow: 0px 6px 16px 0px rgba(79, 110, 161, 0.17);
	}
	.motion-page-info img {
		border-radius: 6px;
	}
	.motion-page-info span {
		color: #000;
		text-align: center;
		font-family: Titillium Web!important;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
	}
	@media only screen and (max-width: 991px) {
		.motion-banner-info {
			width: 100%;
		}
		.motion-page-infos {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media only screen and (max-width: 640px) {
		.motion-page-infos {
			gap: 10px;
		}
		.motion-page {
			padding: 40px 10px;
		}
		.motion-banner {
			padding: 40px 10px;
			background-position: center;
		}
		.motion-banner li {
			font-size: 12px;
			line-height: 20px;
		}
		.motion-banner h2 {
			font-size: 30px;
			line-height: 40px;
		}
		.quick-call {
			font-size: 14px;
		}
		.quick-call {
			padding: 12px 20px;
		}
	}
	@media only screen and (max-width: 480px) {
		.motion-page-infos {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
`;

const check_html = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M12 0C5.37 0 0 5.37 0 12C0 18.624 5.37 24 12 24C18.624 24 24 18.624 24 12C24 5.37 18.624 0 12 0ZM9.6 18L3.6 12L5.298 10.302L9.6 14.604L18.702 5.502L20.4 7.2L9.6 18Z" fill="#FF4D00"/>
</svg>
`;

const arrow_svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
  	<path d="M0.75 1L6.75 7L0.75 13" stroke="black" stroke-width="2"/>
</svg>
`;

const new_data = `
<div class="motion-banner">
	<div class="motion-area">
		<div class="motion-banner-info">
			<h2>Get Back In Motion with Physical Therapy in Fort Myers, FL</h2>
			<ul>
				<li>
					${check_html}
					<span>Specialized tools for leak detection and pool maintenance</span>
				</li>
				<li>
					${check_html}
					<span>Durable and Reliable Products</span>
				</li>
				<li>
					${check_html}
					<span>Expert advice and support</span>
				</li>
			</ul>
		</div>
	</div>
</div>
<div class="motion-page">
	<h4 class="motion-page-header">On This Page</h4>
	<div class="motion-page-infos">
		<a href="#conditions" class="motion-page-info">
			<img src="/wp-content/uploads/2023/12/img-1.jpg.webp">
			<span>What We Treat ${arrow_svg}</span>
		</a>
		<a href="#why-choose" class="motion-page-info">
			<img src="/wp-content/uploads/2023/12/img-2.jpg.webp">
			<span>Why Choose Us ${arrow_svg}</span>
		</a>
		<a href="#cape-coral-location" class="motion-page-info">
			<img src="/wp-content/uploads/2023/11/locations.jpg.webp">
			<span>Cape Coral Location ${arrow_svg}</span>
		</a>
		<a href="#get-in-touch" class="motion-page-info">
			<img src="/wp-content/uploads/2023/11/get-touch.jpg.webp">
			<span>Get In Touch ${arrow_svg}</span>
		</a>
	</div>
</div>
`;

const interval = setInterval(() => {
	const main = document.querySelector('#main');
	const head = document.querySelector('head');
	if (main && head && !document.querySelector('.motion-banner')) {
		head.insertAdjacentHTML('beforeend', style);
		main.insertAdjacentHTML('beforebegin', new_data);
		clearInterval(interval);
	}
}, 10);
