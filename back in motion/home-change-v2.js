/* CUSTOM CODE */
const style = `
<style>
	.motion-banner {
		background: url('https://i.ibb.co/28MPfFD/motionbg.png');
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
		font-family: Titillium Web;
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
		font-family: Titillium Web;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		line-height: 24px;
	}
	.motion-banner li svg {
		flex-shrink: 0;
	}
	.quick-call {
		border-radius: 8px;
		background: #FF4D00;
		padding: 16px 40px;
		color: #F9F9F9;
		text-align: center;
		font-family: Titillium Web;
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		width:max-content;
	}
	.quick-call:hover {
		color: white;
		background: #179cd7;
	}
	@media only screen and (max-width: 991px) {
		.motion-banner-info {
			width: 100%;
		}
	}
	@media only screen and (max-width: 640px) {
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
</style>
`;

const check_html = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M12 0C5.37 0 0 5.37 0 12C0 18.624 5.37 24 12 24C18.624 24 24 18.624 24 12C24 5.37 18.624 0 12 0ZM9.6 18L3.6 12L5.298 10.302L9.6 14.604L18.702 5.502L20.4 7.2L9.6 18Z" fill="#FF4D00"/>
</svg>
`;

const new_banner = `
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
			<a
				href="https://backinmotionsspt.com/contact-us/"
				class="quick-call"
				>Get a quick callback</a
			>
		</div>
	</div>
</div>
`;

const interval = setInterval(() => {
	const main = document.querySelector('#main');
	const head = document.querySelector('head');
	if (main && head && !document.querySelector('.motion-banner')) {
		head.insertAdjacentHTML('beforeend', style);
		main.insertAdjacentHTML('beforebegin', new_banner);
		clearInterval(interval);
	}
}, 10);
