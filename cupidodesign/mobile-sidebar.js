const style = `
<style>
  #MobileNav{
    border-top: 1px solid #f5f5f5;
    padding: 0px!important;
  }
  #MobileNavFooter,.slide-nav__wrapper{
    padding: 20px;
  }
  #MobileNav .slide-nav__image{
    display: none;
  }
  .slide-nav__image+span{
    padding-left: 0!important;
  }
  .slide-nav__item{
    padding:0!important;
    border-bottom: 1px solid #f5f5f5;
  }
  .slide-nav__link{
    padding: 6px 0px!important;
  }
  .cu-rev{
    background: #ECFCF8;
    display: grid;
    place-items: center;
    gap: 4px;
    padding: 10px;
    margin: 80px 0 10px;
  }
  .cu-rev .rev-star{
    display: flex;
    align-items: center;
    gap:10px;
  }
  .cu-rev .rev-star strong{
    font-size: 20px;
    font-weight: 800;
    display: flex;
  }
  .cu-rev .rev-star strong span{
    font-size: 16px;
    font-weight: 500;
  }
  .cu-rev > span{
    font-size: 14px;
    font-weight: 600;
  }
  .best-sellers-area{
    padding: 20px;
  }
  .best-sellers-area h4{
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-align: center;
    color: #E42022;
  }
  .best-seller-wrapper{
    width: 100%;
    overflow: auto;
  }
  .best-seller-items{
    display: flex;
    gap:20px;
    width: max-content;
  }
  .best-seller-item{
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .best-seller-item img{
    width: 124px;
    height: 140px;
  }
  .best-seller-item .price-area{
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .best-seller-item .price-area span{
    font-size: 8px;
    font-weight: 500;
  }
  .best-seller-item .price-area strong{
    font-size: 10px;
    font-weight: 500;
  }
  .best-seller-item .price-area s{
    font-size: 10px;
    font-weight: 500;
    color: #9A9A9A;
  }
  .best-seller-item .name{
    font-size: 12px;
    font-weight: 300;
  }
</style>
`;

const star_svg = `
	<svg
		width="50"
		height="10"
		viewBox="0 0 50 10"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M5 0L6.45771 2.99364L9.75528 3.45492L7.35862 5.76636L7.93893 9.04508L5 7.48L2.06107 9.04508L2.64138 5.76636L0.244718 3.45492L3.54229 2.99364L5 0Z"
			fill="#E22727"
		/>
		<path
			d="M15 0L16.4577 2.99364L19.7553 3.45492L17.3586 5.76636L17.9389 9.04508L15 7.48L12.0611 9.04508L12.6414 5.76636L10.2447 3.45492L13.5423 2.99364L15 0Z"
			fill="#E22727"
		/>
		<path
			d="M25 0L26.4577 2.99364L29.7553 3.45492L27.3586 5.76636L27.9389 9.04508L25 7.48L22.0611 9.04508L22.6414 5.76636L20.2447 3.45492L23.5423 2.99364L25 0Z"
			fill="#E22727"
		/>
		<path
			d="M35 0L36.4577 2.99364L39.7553 3.45492L37.3586 5.76636L37.9389 9.04508L35 7.48L32.0611 9.04508L32.6414 5.76636L30.2447 3.45492L33.5423 2.99364L35 0Z"
			fill="#E22727"
		/>
		<path
			d="M45 0L46.4577 2.99364L49.7553 3.45492L47.3586 5.76636L47.9389 9.04508L45 7.48L42.0611 9.04508L42.6414 5.76636L40.2447 3.45492L43.5423 2.99364L45 0Z"
			fill="#E22727"
		/>
	</svg>
`;

const new_elm_html = `
<div class="new-elm">
	<div class="cu-rev">
		<div class="rev-star">
			<strong>
				4.9/ <span>5</span>
			</strong>
			<svg
				width="89"
				height="17"
				viewBox="0 0 89 17"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					width="16"
					height="16"
					transform="translate(0.5 0.5)"
					fill="#00CA8D"
				/>
				<path
					d="M8.5 3.5L9.96065 6.48959L13.2553 6.95492L10.8634 9.26791L11.4389 12.5451L8.5 10.985L5.56107 12.5451L6.13662 9.26791L3.74472 6.95492L7.03935 6.48959L8.5 3.5Z"
					fill="white"
				/>
				<rect
					width="16"
					height="16"
					transform="translate(18.5 0.5)"
					fill="#00CA8D"
				/>
				<path
					d="M26.5 3.5L27.9606 6.48959L31.2553 6.95492L28.8634 9.26791L29.4389 12.5451L26.5 10.985L23.5611 12.5451L24.1366 9.26791L21.7447 6.95492L25.0394 6.48959L26.5 3.5Z"
					fill="white"
				/>
				<rect
					width="16"
					height="16"
					transform="translate(36.5 0.5)"
					fill="#00CA8D"
				/>
				<path
					d="M44.5 3.5L45.9606 6.48959L49.2553 6.95492L46.8634 9.26791L47.4389 12.5451L44.5 10.985L41.5611 12.5451L42.1366 9.26791L39.7447 6.95492L43.0394 6.48959L44.5 3.5Z"
					fill="white"
				/>
				<rect
					width="16"
					height="16"
					transform="translate(54.5 0.5)"
					fill="#00CA8D"
				/>
				<path
					d="M62.5 3.5L63.9606 6.48959L67.2553 6.95492L64.8634 9.26791L65.4389 12.5451L62.5 10.985L59.5611 12.5451L60.1366 9.26791L57.7447 6.95492L61.0394 6.48959L62.5 3.5Z"
					fill="white"
				/>
				<rect
					width="16"
					height="16"
					transform="translate(72.5 0.5)"
					fill="#00CA8D"
				/>
				<path
					d="M80.5 3.5L81.9606 6.48959L85.2553 6.95492L82.8634 9.26791L83.4389 12.5451L80.5 10.985L77.5611 12.5451L78.1366 9.26791L75.7447 6.95492L79.0394 6.48959L80.5 3.5Z"
					fill="white"
				/>
			</svg>
		</div>
		<span>Over 100,000 5-star reviews!</span>
	</div>
	<div class="best-sellers-area">
		<h4>BEST SELLERS</h4>
		<div class="best-seller-wrapper">
			<div class="best-seller-items">
				<div class="best-seller-item">
					<img
						src="https://cupidodesign.com/cdn/shop/collections/Post-modern-Simplicity-Floor-Lamps-LED-Lights-Vloerlamp-Nordic-Stand-Lamp-Living-Room-Bedroom-Restaurant-E27_800x_bc482f51-c59c-48bc-8afe-ea3e2a41c599.jpg"
						alt=""
					/>
					${star_svg}
					<div class="price-area">
						<span>from</span>
						<strong>€9490</strong>
						<s>$119.00</s>
					</div>
					<span class="name">Floral elegance</span>
				</div>
                <div class="best-seller-item">
					<img
						src="https://cupidodesign.com/cdn/shop/collections/Post-modern-Simplicity-Floor-Lamps-LED-Lights-Vloerlamp-Nordic-Stand-Lamp-Living-Room-Bedroom-Restaurant-E27_800x_bc482f51-c59c-48bc-8afe-ea3e2a41c599.jpg"
						alt=""
					/>
					${star_svg}
					<div class="price-area">
						<span>from</span>
						<strong>€9490</strong>
						<s>$119.00</s>
					</div>
					<span class="name">Floral elegance</span>
				</div>
                <div class="best-seller-item">
					<img
						src="https://cupidodesign.com/cdn/shop/collections/Post-modern-Simplicity-Floor-Lamps-LED-Lights-Vloerlamp-Nordic-Stand-Lamp-Living-Room-Bedroom-Restaurant-E27_800x_bc482f51-c59c-48bc-8afe-ea3e2a41c599.jpg"
						alt=""
					/>
					${star_svg}
					<div class="price-area">
						<span>from</span>
						<strong>€9490</strong>
						<s>$119.00</s>
					</div>
					<span class="name">Floral elegance</span>
				</div>
			</div>
		</div>
	</div>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector('#MobileNavFooter');
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('beforebegin', new_elm_html);
		clearInterval(interval);
	}
}, 10);
