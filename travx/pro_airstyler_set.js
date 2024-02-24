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
    @media only screen and (min-width:768px){
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

const new_elm_html = `
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

const interval = setInterval(() => {
	const exist_elm = document.querySelector('.product-grid__container.grid.grid--product-images--partial');
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('afterend', new_elm_html);
		clearInterval(interval);
	}
}, 10);
