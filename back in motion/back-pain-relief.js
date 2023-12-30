/* CUSTOM CODE */
const style = `
<style>
	.float-btn-area {
		position: fixed;
		z-index: 999;
		padding: 10px;
		bottom: 0;
		width: 100%;
		display: grid;
		place-items: center;
		display: none;
	}
	.float-btn {
		border-radius: 8px;
		background: #1cf5e8;
		display: flex;
		padding: 20px;
		justify-content: center;
		align-items: center;
		gap: 20px;
		max-width: 1000px;
		width: max-content;
	}
	.float-btn span {
		color: #111827;
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: 40px;
	}
	.float-btn a {
		border-radius: 12px;
		border-bottom: 8px solid #082249;
		background: #134e84;
		display: flex;
		padding: 20px 28px;
		justify-content: center;
		align-items: center;
		gap: 16px;
		color: #f9f9f9;
		text-align: center;
		font-size: 20px;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
	}
    .fusion-builder-row-5,.fusion-builder-row-4 {
        background:white;

    }
    .fusion-builder-row-4 .fusion-title-heading {
        color: black!important;
    }
	.fusion-builder-column-10, .fusion-builder-nested-column-1 > div:nth-of-type(1) {
		display: none !important;
	}
    .fusion-builder-row-5 > div:nth-of-type(1) .fusion-content-layout-column{
        flex-direction:column-reverse!important;
        padding:0;
    }
    .fusion-builder-row-5 > div:nth-of-type(1) .fusion-content-layout-column div:nth-of-type(3){
        display: none !important;
    }
    .fusion-builder-row-5 > div:nth-of-type(1) .fusion-content-layout-column div:nth-of-type(1) {
        margin:10px!important;
    }
    .fusion-builder-row-5 > div:nth-of-type(1) .fusion-content-layout-column div:nth-of-type(2) {
        margin:0px!important;
    }
    .fusion-builder-row-5 > div:nth-of-type(1) .fusion-content-layout-column div:nth-of-type(1) p{
        color: #3B82F6;
        font-size: 14px!important;
        font-style: normal;
        font-weight: 400;
        line-height: 20px!important;
        position:relative;
        text-align:left;
    }
    .fusion-builder-row-5 > div:nth-of-type(1) .fusion-content-layout-column div:nth-of-type(1) p::after{
        content: '>';
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
    }
	.motion-banner {
		background: url('https://i.ibb.co/607qCPC/bg-back.png');
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
		gap: 10px;
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
		gap: 10px;
	}
	.motion-banner h2 {
		color: #1f2937;
		font-size: 36px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px;
		margin-bottom: 10px;
	}
	.motion-banner li {
		color: #1f2937;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px;
		display: flex;
		align-items: center;
		gap: 4px;
	}
	.motion-banner li svg {
		flex-shrink: 0;
	}
	.quick-call {
		display: flex;
		padding: 20px 28px;
		justify-content: center;
		align-items: center;
		border: 0;
		border-radius: 12px;
		border-bottom: 8px solid #cf4300;
		background: #f85203;
		color: #f9f9f9;
		text-align: center;
		font-size: 20px;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
	}
	.quick-call:hover {
		color: white;
		background: #179cd7;
		border-bottom: 8px solid #127cab;
	}
	.btn-w-banner {
		width: 100%;
		max-width: 320px;
		margin-top: 16px;
	}
	.new-btn {
		width: 200px;
	}
	.fusion-builder-column-1 > div:nth-of-type(1) {
		width: 200px !important;
		margin-left: auto !important;
	}
	.fusion-builder-column-1 > div:nth-of-type(1) > div > div {
		width: 100% !important;
	}
	@media only screen and (max-width: 991px) {
		.motion-banner-info {
			width: 100%;
		}
		.float-btn span {
			display: none;
		}
		.float-btn a {
			width: 100%;
			padding: 10px 14px;
			font-size: 16px;
		}
		.float-btn {
			padding: 10px;
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

const new_banner = `
<div class="motion-banner">
	<div class="motion-area">
		<div class="motion-banner-info">
			<h2>“Discover a Natural Solution to Relieve Back Pain and Stiffness – No Medications or Surgery Required!”</h2>
			<ul>
				<li>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9 11L12 14L22 4"
							stroke="#1F2937"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
						<path
							d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
							stroke="#1F2937"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
					<span>Specialized tools for leak detection and pool maintenance</span>
				</li>
				<li>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9 11L12 14L22 4"
							stroke="#1F2937"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
						<path
							d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
							stroke="#1F2937"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
					<span>Durable and Reliable Products</span>
				</li>
				<li>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9 11L12 14L22 4"
							stroke="#1F2937"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
						<path
							d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
							stroke="#1F2937"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
					<span>Expert advice and support</span>
				</li>
			</ul>
			<a
				href="https://backinmotionsspt.com/contact-us/"
				class="quick-call btn-w-banner"
				>Get a quick callback</a
			>
		</div>
	</div>
</div>
`;

const float_btn = `
<div class="float-btn-area">
	<div class="float-btn">
		<span>Get in Contact Us With Today Click To Fill Out Form</span>
		<a href="https://backinmotionsspt.com/contact-us/">
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M18.7333 7.99996C20.0357 8.25405 21.2325 8.89097 22.1708 9.82921C23.1091 10.7674 23.746 11.9643 24 13.2666M18.7333 2.66663C21.4391 2.96721 23.9621 4.17885 25.8884 6.10264C27.8145 8.02641 29.0295 10.548 29.3333 13.2533M24.6667 28C13.2528 28 4 18.7472 4 7.33329C4 6.81833 4.01884 6.30777 4.05585 5.80227C4.09833 5.22212 4.11957 4.93205 4.2716 4.668C4.39752 4.44931 4.62067 4.24191 4.84797 4.13229C5.12241 3.99996 5.44251 3.99996 6.08268 3.99996H9.83909C10.3774 3.99996 10.6466 3.99996 10.8774 4.08856C11.0812 4.16683 11.2627 4.29395 11.4059 4.45876C11.568 4.64533 11.66 4.89831 11.844 5.40424L13.3988 9.68002C13.6128 10.2687 13.7199 10.563 13.7017 10.8422C13.6857 11.0885 13.6016 11.3254 13.4589 11.5267C13.2971 11.755 13.0286 11.9161 12.4915 12.2384L10.6667 13.3333C12.2692 16.8652 15.1335 19.7332 18.6667 21.3333L19.7616 19.5085C20.0839 18.9713 20.2449 18.7028 20.4732 18.541C20.6745 18.3984 20.9115 18.3142 21.1577 18.2982C21.4369 18.2801 21.7313 18.3872 22.32 18.6012L26.5957 20.156C27.1016 20.34 27.3547 20.432 27.5412 20.5941C27.706 20.7373 27.8332 20.9188 27.9113 21.1226C28 21.3533 28 21.6225 28 22.1609V25.9173C28 26.5574 28 26.8776 27.8676 27.152C27.758 27.3793 27.5507 27.6025 27.332 27.7284C27.0679 27.8804 26.7779 27.9016 26.1977 27.9441C25.6921 27.9812 25.1816 28 24.6667 28Z"
					fill="white"
				></path>
			</svg>
			Get a Quick Callback
		</a>
	</div>
</div>
`;

const interval = setInterval(() => {
	const main = document.querySelector('#main');
	const head = document.querySelector('head');
	const header_first = document.querySelector(
		'.fusion-tb-header>div>div .fusion-builder-column-1'
	);
	const last_nav_li = document.querySelector('#menu-item-48449');
	const last_nav_li_a = last_nav_li.querySelector('a');
	const pains = [
		...document.querySelectorAll(
			'.fusion-builder-row-5 > div:nth-of-type(1) .fusion-content-layout-column div:nth-of-type(1) p'
		),
	];
	if (
		main &&
		head &&
		last_nav_li_a &&
		pains &&
		header_first &&
		!document.querySelector('.motion-banner')
	) {
		head.insertAdjacentHTML('beforeend', style);
		main.insertAdjacentHTML('beforebegin', new_banner);
		main.insertAdjacentHTML('beforebegin', float_btn);
		header_first.insertAdjacentElement('beforeend', last_nav_li_a);
		last_nav_li_a.classList.add('new-btn');
		last_nav_li.remove();
		pains.map((pain) => {
			pain.innerHTML = pain.innerText;
		});
		clearInterval(interval);
	}
}, 10);

window.addEventListener('scroll', function () {
	const float = document.querySelector('.float-btn-area');
	const exist = document.querySelector('.motion-banner');
	const topOffset = exist.getBoundingClientRect().bottom;
	if (topOffset <= 0) {
		float.style.display = 'grid';
	} else {
		float.style.display = 'none';
	}
});
