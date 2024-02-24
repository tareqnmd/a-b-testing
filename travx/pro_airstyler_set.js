const style = `
<style>
    .new-usps-area{
        margin-bottom: 0;
    }
    .new-usps-area .header-info{
        position: relative;
    }
    .new-usps-area h3{
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        text-align: center;
        position: relative;
        z-index: 10;
        width: max-content;
        max-width: 100%;
        margin: 24px auto 16px;
        color: #141414;
        background: white;
        padding: 0 6px;
    }
    .new-usps-area .header-info span{
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        z-index: 9;
        border-bottom: 1px solid #484848;
    }
    .new-usps-area .new-usps{
        display: grid;
        gap:10px;
        grid-template-columns: repeat(1, 1fr);
    }
    .new-usps-area .new-usps .new-usp{
        display: grid;
        grid-template-columns: 70px 1fr;
    }
    .new-usps-area .new-usps .new-usp svg{
        grid-row: span 2;
    }
    .new-usps-area .new-usps .new-usp strong{
        font-family: Montserrat;
        font-size: 13px;
        font-weight: 700;
        line-height: 16px;
        color: #333333;
    }
    .new-usps-area .new-usps .new-usp span{
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: #707070;
    }
    .pdp-usps{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .pdp-usp{
        display: flex;
        align-items: center;
        padding: 0 4px;
        gap: 2px;
    }
    .pdp-usp:not(:last-child){
        border-right: 1px solid #000;
    }
    .pdp-usp img{
        width: 16px;
    }
    .pdp-usp span{
        font-size: 10px;
        line-height: 10px;
    }
    .btn.btn--full.add-to-cart{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        border-radius: 4px!important;
        box-shadow: none!important;
        background: #1F1F1F;
        border: none;
    }
    .product-block.product-block--price{
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        gap: 16px;
        justify-content: flex-end;
    }
    .product-block.product-block--price .product__price.on-sale{
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 700;
    }
    .product-block.product-block--price .product__price.product__price--compare{
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 500;
        color: #9E9E9E;
    }
    .now-at{
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
    }
    .price-save{
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        gap:10px;
    }
    .price-save span{
        padding: 2px 8px 2px 8px;
        background: #E0F4FF;
        color: #007FC7;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 600;
    }
    .price-save strong{
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 700;
        color: #007FC7;
    }
    .rev-star {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
        gap:10px;
    }
    .rev-star img{
        width: 76px;
        height: 28px;
    }
    .rev-star span{
        color: #3B3B3B;
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
    }
    .rev-star svg{
        flex-shrink: 0;
    }
    @media only screen and (min-width:768px){
        .product-block.product-block--price{
            gap: 8px;
        }
        .product-block.product-block--price .product__price.on-sale{
            font-size: 32px;
            line-height: 28px;
        }
        .product-block.product-block--price .product__price.product__price--compare{
            font-size: 24px;
            line-height: 28px;
        }
        .now-at{
            font-size: 20px;
        }
        .pdp-usp{
            padding: 0 8px;
            gap: 4px;
        }
        .pdp-usp img{
            width: 18px;
        }
        .pdp-usp span{
            font-size: 12px;
            line-height: 12px;
        }
        .new-usps-area .new-usps{
            gap:20px;
            grid-template-columns: repeat(3, 1fr);
        }
        .new-usps-area h3{
            font-size: 28px;
            line-height: 34px;
            padding: 0 20px;
            margin: 32px auto 24px;
        }
        .new-usps-area{
            margin-bottom :20px;
        }
    }
</style>
`;

const car_icon = `
<svg
	width="59"
	height="40"
	viewBox="0 0 59 40"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M52.5879 33.9172H56.1425C56.9884 33.9172 57.6706 33.2366 57.6706 32.3971V22.7304C57.6706 21.8935 57.2415 20.6802 56.7121 20.0263L48.3419 9.68744C47.8123 9.03324 46.7004 8.50342 45.8579 8.50342H37.3396V33.9172H42.4224C42.4224 31.1101 44.698 28.8345 47.5051 28.8345C50.3123 28.8345 52.5879 31.1101 52.5879 33.9172Z"
		stroke="#D1A333"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M7.35117 33.9173H4.80898C3.12224 33.9173 1.76013 32.5517 1.76013 30.8673L1.73169 1.56738H37.311L37.3395 33.9173H17.5167C17.5167 31.1101 15.2411 28.8345 12.4339 28.8345C9.62679 28.8345 7.35117 31.1101 7.35117 33.9173Z"
		stroke="#D1A333"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M12.4338 39C15.241 39 17.5166 36.7244 17.5166 33.9172C17.5166 31.1101 15.241 28.8345 12.4338 28.8345C9.6267 28.8345 7.35107 31.1101 7.35107 33.9172C7.35107 36.7244 9.6267 39 12.4338 39Z"
		stroke="#D1A333"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M47.5051 39C50.3123 39 52.5879 36.7244 52.5879 33.9172C52.5879 31.1101 50.3123 28.8345 47.5051 28.8345C44.698 28.8345 42.4224 31.1101 42.4224 33.9172C42.4224 36.7244 44.698 39 47.5051 39Z"
		stroke="#D1A333"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<line
		x1="36.9817"
		y1="21.1035"
		x2="57.0017"
		y2="21.1035"
		stroke="#D1A333"
		stroke-width="2"
	/>
</svg>
`;

const check_icon = `
	<svg
		width="42"
		height="44"
		viewBox="0 0 42 44"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M20.6668 42.7692C15.202 41.7078 10.2836 38.8334 6.74914 34.6354C3.21469 30.4373 1.28273 25.1752 1.28223 19.745V5.00873L20.6668 1.23071L40.0515 5.00873V19.745C40.051 25.1752 38.119 30.4373 34.5845 34.6354C31.0501 38.8334 26.1317 41.7078 20.6668 42.7692Z"
			stroke="#D1A333"
			stroke-width="2"
			stroke-miterlimit="10"
		/>
		<path
			d="M10.9744 20.0657L18.2487 27.5384L30.359 15.0769"
			stroke="#D1A333"
			stroke-width="2"
			stroke-miterlimit="10"
		/>
	</svg>
`;

const return_icon = `
<svg
	width="50"
	height="50"
	viewBox="0 0 50 50"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M25.3334 48.5385C38.3333 48.5385 48.8718 37.9999 48.8718 25C48.8718 12.0001 38.3333 1.46155 25.3334 1.46155C12.3334 1.46155 1.79492 12.0001 1.79492 25C1.79492 37.9999 12.3334 48.5385 25.3334 48.5385Z"
		stroke="#D1A333"
		stroke-width="2"
		stroke-miterlimit="10"
	/>
	<path
		d="M14.2566 13.9231H31.7874C34.1152 13.9231 36.3476 14.8726 37.9936 16.5626C39.6396 18.2526 40.5643 20.5448 40.5643 22.9349C40.5582 25.3209 39.6308 27.607 37.9855 29.2919C36.3402 30.9769 34.1112 31.9231 31.7874 31.9231H14.2566"
		stroke="#D1A333"
		stroke-width="2"
		stroke-miterlimit="10"
	/>
	<path
		d="M22.5643 40.2307L14.2566 31.2307L22.5643 22.2307"
		stroke="#D1A333"
		stroke-width="2"
		stroke-miterlimit="10"
	/>
</svg>
`;

const cart_icon = `
<svg
	width="20"
	height="20"
	viewBox="0 0 20 20"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M17.5 4.16667L15.8333 10H6.14726M16.6667 13.3333H6.66667L5 2.5H2.5M13.3333 4.58333H11.25M11.25 4.58333H9.16667M11.25 4.58333V6.66667M11.25 4.58333V2.5M7.5 16.6667C7.5 17.1269 7.1269 17.5 6.66667 17.5C6.20643 17.5 5.83333 17.1269 5.83333 16.6667C5.83333 16.2064 6.20643 15.8333 6.66667 15.8333C7.1269 15.8333 7.5 16.2064 7.5 16.6667ZM16.6667 16.6667C16.6667 17.1269 16.2936 17.5 15.8333 17.5C15.3731 17.5 15 17.1269 15 16.6667C15 16.2064 15.3731 15.8333 15.8333 15.8333C16.2936 15.8333 16.6667 16.2064 16.6667 16.6667Z"
		stroke="white"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
`;

const rev_usp_html = `
<div class="new-elm new-usps-area">
    <div class="header-info">
        <h3>WHY 100,000+ CUSTOMERS LOVE TRAVX.</h3>
        <span></span>
    </div>
    <div class="new-usps">
        <div class="new-usp">
            ${car_icon}
            <strong>GRATIS VERZENDING</strong>
            <span>Wij bieden gratis een verzekerde verzending binnen nl & be</span>
        </div>
        <div class="new-usp">
            ${check_icon}
            <strong>BESTEL NU, BETAAL LATER</strong>
            <span>Klarna geeft de extra flexibiliteit omdat u binnen 30 dagen kunt betalen.</span>
        </div>
        <div class="new-usp">
            ${return_icon}
            <strong>30 DAGEN TESTTIJD</strong>
            <span>Niet tevreden? - geen probleem! Wij bieden een 30 dagen testbeleid als</span>
        </div>
    </div>
</div>
`;

const pdp_usp_html = `
<div class="product-block pdp-usps">
    <div class="pdp-usp">
        <img src="https://i.ibb.co/3dvttp8/usp1.png" alt="" />
        <span>Bestel nu, betaal later</span>
    </div>
    <div class="pdp-usp">
        <img src="https://cdn.shopify.com/s/files/1/0682/9644/2123/files/klarna_logo.png?v=1697923808" alt="" />
        <span>Bestel nu, betaal later</span>
    </div>
    <div class="pdp-usp">
        <img src="https://cdn.shopify.com/s/files/1/0682/9644/2123/files/postnl-3-logo-png-transparent-removebg-preview.png?v=1705871635" alt="" />
        <span>Gratis Verzending</span>
    </div>
</div>
`;

const numberOnly = (string) => {
	return parseFloat(string.replace(/[^0-9\-+\.]/g, ''));
};

const currencyOnly = (string) => {
	return string.replace(/[0-9,. ]/g, '');
};

const save_html = (price, currency) => `
<div class="price-save">
    <span>You save</span>
    <strong>${currency}${price}</strong>
</div>
`;

const rev_star_html = `
<div class="rev-star">
    <img src="https://i.ibb.co/PzNMPXk/rev-user.png" alt="" />
    <span>Over 14,000+ satisfied customers love TravX®</span>
    <svg
    width="88"
    height="16"
    viewBox="0 0 88 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <rect
        width="16"
        height="16"
        fill="#E48000"
    />
    <path
        d="M8 3L9.46065 5.98959L12.7553 6.45492L10.3634 8.76791L10.9389 12.0451L8 10.485L5.06107 12.0451L5.63662 8.76791L3.24472 6.45492L6.53935 5.98959L8 3Z"
        fill="white"
    />
    <rect
        width="16"
        height="16"
        transform="translate(18)"
        fill="#E48000"
    />
    <path
        d="M26 3L27.4606 5.98959L30.7553 6.45492L28.3634 8.76791L28.9389 12.0451L26 10.485L23.0611 12.0451L23.6366 8.76791L21.2447 6.45492L24.5394 5.98959L26 3Z"
        fill="white"
    />
    <rect
        width="16"
        height="16"
        transform="translate(36)"
        fill="#E48000"
    />
    <path
        d="M44 3L45.4606 5.98959L48.7553 6.45492L46.3634 8.76791L46.9389 12.0451L44 10.485L41.0611 12.0451L41.6366 8.76791L39.2447 6.45492L42.5394 5.98959L44 3Z"
        fill="white"
    />
    <rect
        width="16"
        height="16"
        transform="translate(54)"
        fill="#E48000"
    />
    <path
        d="M62 3L63.4606 5.98959L66.7553 6.45492L64.3634 8.76791L64.9389 12.0451L62 10.485L59.0611 12.0451L59.6366 8.76791L57.2447 6.45492L60.5394 5.98959L62 3Z"
        fill="white"
    />
    <rect
        width="16"
        height="16"
        transform="translate(72)"
        fill="#E48000"
    />
    <path
        d="M80 3L81.4606 5.98959L84.7553 6.45492L82.3634 8.76791L82.9389 12.0451L80 10.485L77.0611 12.0451L77.6366 8.76791L75.2447 6.45492L78.5394 5.98959L80 3Z"
        fill="white"
    />
    </svg>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector(
		'.product-grid__container.grid.grid--product-images--partial'
	);
	const form_cart = document.querySelector(
		'.product-single__meta > div:nth-of-type(2) > div:nth-of-type(8)'
	);
	const cart_btn = document.querySelector('#product-form__cart-submit');
	const price_elm = document.querySelector(
		'.product-block.product-block--price'
	);
	const header = document.querySelector(
		'.product-block.product-block--header.product-single__header'
	);
	const head = document.querySelector('head');
	const sale_price = price_elm.querySelector(
		'.product__price.on-sale .money'
	).innerText;
	const compare_price = price_elm.querySelector(
		'.product__price.product__price--compare .money'
	).innerText;
	const price = numberOnly(compare_price) - numberOnly(sale_price);
	const currency = currencyOnly(sale_price);
	const check = exist_elm && head && form_cart && cart_btn && price_elm;
	if (check && !document.querySelector('.new-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		cart_btn.insertAdjacentHTML('afterbegin', cart_icon);
		exist_elm.insertAdjacentHTML('afterend', rev_usp_html);
		form_cart.insertAdjacentHTML('afterend', pdp_usp_html);
		price_elm.insertAdjacentHTML(
			'beforeend',
			'<span class="now-at">Now at</span>'
		);
		price_elm.insertAdjacentHTML('afterend', save_html(price, currency));
		header.insertAdjacentHTML('beforebegin', rev_star_html);
		clearInterval(interval);
	}
}, 10);
