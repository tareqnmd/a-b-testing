const style = `
<style>
.new-free-style *{
	margin:0;
	padding: 0;
}
.new-free-style svg{
	fill: transparent;
}
.major-sub-message{
	font-family: Lato;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: center;
	margin-bottom: 20px;
}
.fsa-stylist{
	border-radius: 8px;
    overflow: hidden;
    display: grid;
    background: #F7DFD3;
    grid-template-columns: 1fr;
}
.fsa-stylist-content{
	display: grid;
    place-content: center;
	gap: 6px;
	padding : 20px 10px;
}
.fsa-stylist-content h6{
	font-family: Cardo;
	font-size: 20px;
	font-weight: 700;
	line-height: 27px;
	letter-spacing: 0em;
	text-align: center;
}
.fsa-stylist-content small{
	font-family: Inter;
	font-size: 14px;
	font-weight: 400;
	line-height: 18px;
	letter-spacing: 0em;
	text-align: center;
}
.fsa-stylist-content a{
	display: flex;
    align-items: center;
	padding:6px 16px;
	border-radius: 28px;
	background: #000000;
	gap: 10px;
	margin: 12px auto 0;
	width: max-content;
}
.fsa-stylist-content span{
	font-size: 16px;
	text-align: center;
	color:white;
}
.fsa-stylist-content svg{
	width: 12px;
	height: 12px;
}
.call-now{
	background: #E0EEF2;
	padding: 10px;
	display: grid;
	grid-template-columns: 75px 1fr;
	gap: 10px;
	border-radius: 8px;
	margin-top: 20px;
}
.call-now > svg{
	grid-row: span 2;
	width: 75px;
	height: 75px;
}
.call-now-info{
	display: grid;
	gap: 6px;
}
.call-now-info span{
	font-family: Lato;
	font-size: 15px;
	font-weight: 700;
	line-height: 18px;
	color: #333333;
}
.call-now-info small{
	font-family: Inter;
	font-size: 10px;
	font-weight: 400;
	line-height: 14px;
	color: #333333;
}
.call-now a{
	padding: 6px 24px;
	border-radius: 48px;
	gap: 8px;
	background: #ffffff;
	display:flex;
	align-items: center;
	width: max-content;
	gap: 10px;
}
.call-now a svg{
	width: 17px;
	height: 16px;
}
.call-now-info a span{
	font-size: 14px;
	text-align: center;
}
.fsa-team-img{
	margin-top: 20px;
}
.how-work{
	margin: 20px 0;
}
.how-work .header-info{
	font-family: Cardo;
	font-size: 24px;
	font-weight: 700;
	line-height: 32px;
	text-align: center;
	margin-bottom: 20px;
}
.how-work-types{
	display: grid;
	grid-template-rows: 1fr;
	gap: 20px;
}
.how-work-type{
	display: grid;
	grid-template-columns: 40px 1fr;
	gap: 0px 10px;
}
.how-work-type strong{
	font-size: 14px;
	font-weight: 600;
	line-height: 24px;
	color: #333333;
}
.how-work-type small{
	font-size: 12px;
	font-weight: 400;
	line-height: 17px;
	color: #333333;
}
.how-work-type > svg{
	grid-row: span 2;
	width: 40px;
	height: 40px;
}
.how-work-type > svg g{
	fill: transparent;
}
.our-stylist{
	background: #FBE6E3;
	margin-bottom: 20px;
	border-radius: 8px;
	padding: 20px;
}
.our-stylist .header-info{
	font-family: Cardo;
	font-size: 16px;
	font-weight: 700;
	line-height: 22px;
	letter-spacing: 0em;
	text-align: center;
	margin-bottom: 20px;
}
.our-stylist-wrapper{
	width:100%;
	overflow: auto;
	-ms-overflow-style: none;
	scrollbar-width: none;
}
.our-stylist-wrapper::-webkit-scrollbar {
	display: none;
}
.stylist-features{
	display: flex;
	align-items: center;
	justify-content: center;
	gap:20px;
	width: max-content;
}
.stylist-feature{
	border: 1px solid #000000;
}
@media only screen and (min-width:768px){
	.fsa-stylist{
		grid-template-columns: 1fr 1fr;
	}
	.call-now{
		grid-template-columns: 75px 1fr 1fr;
		align-items: center;
	}
	.call-now a{
		margin-left: auto;
	}
	.call-now > svg{
		grid-row: auto;
	}
	.how-work-types{
		grid-template-columns: 1fr 1fr 1fr;
	}
	.how-work-type{
		gap: 2px 10px;
		place-content: flex-start;
	}
}
</style>
`;
const stylist_features = [
	'https://i.ibb.co/Zft1sBS/int-add-removebg-preview.png',
	'https://i.ibb.co/4fkSjQN/aus-who-removebg-preview.png',
	'https://i.ibb.co/5vQfWxk/daily-mail-removebg-preview.png',
	'https://i.ibb.co/CvsgZ8F/idea-removebg-preview.png',
];
const how_work_types = [
	{
		svg: `
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="20" cy="20" r="20" fill="#F7DFD3"/>
			<path d="M20.0141 19C19.7492 19 19.4952 19.1054 19.308 19.2929C19.1207 19.4804 19.0155 19.7348 19.0155 20V23C19.0155 23.2652 19.1207 23.5196 19.308 23.7071C19.4952 23.8946 19.7492 24 20.0141 24C20.2789 24 20.5329 23.8946 20.7202 23.7071C20.9075 23.5196 21.0127 23.2652 21.0127 23V20C21.0127 19.7348 20.9075 19.4804 20.7202 19.2929C20.5329 19.1054 20.2789 19 20.0141 19ZM20.0141 16C19.8166 16 19.6235 16.0586 19.4593 16.1685C19.2951 16.2784 19.1671 16.4346 19.0915 16.6173C19.0159 16.8 18.9961 17.0011 19.0347 17.1951C19.0732 17.3891 19.1683 17.5673 19.308 17.7071C19.4476 17.847 19.6255 17.9422 19.8193 17.9808C20.013 18.0194 20.2137 17.9996 20.3962 17.9239C20.5787 17.8482 20.7346 17.72 20.8444 17.5556C20.9541 17.3911 21.0127 17.1978 21.0127 17C21.0127 16.7348 20.9075 16.4804 20.7202 16.2929C20.5329 16.1054 20.2789 16 20.0141 16ZM20.0141 10C18.7027 10 17.4042 10.2587 16.1926 10.7612C14.9811 11.2638 13.8802 12.0003 12.953 12.9289C11.0802 14.8043 10.0281 17.3478 10.0281 20C10.0194 22.3091 10.8178 24.5485 12.285 26.33L10.2878 28.33C10.1492 28.4706 10.0554 28.6492 10.018 28.8432C9.98071 29.0372 10.0016 29.2379 10.0781 29.42C10.161 29.5999 10.2955 29.7511 10.4644 29.8544C10.6333 29.9577 10.829 30.0083 11.0267 30H20.0141C22.6625 30 25.2025 28.9464 27.0752 27.0711C28.9479 25.1957 30 22.6522 30 20C30 17.3478 28.9479 14.8043 27.0752 12.9289C25.2025 11.0536 22.6625 10 20.0141 10ZM20.0141 28H13.4333L14.362 27.07C14.4564 26.9774 14.5315 26.8669 14.5829 26.7451C14.6343 26.6232 14.6611 26.4923 14.6616 26.36C14.6579 26.0962 14.5502 25.8446 14.362 25.66C13.0545 24.352 12.2402 22.6305 12.058 20.7888C11.8758 18.947 12.3368 17.099 13.3627 15.5595C14.3885 14.02 15.9156 12.8844 17.6839 12.346C19.4521 11.8076 21.352 11.8998 23.06 12.6069C24.7679 13.314 26.1782 14.5923 27.0506 16.2239C27.923 17.8555 28.2034 19.7395 27.8442 21.555C27.4849 23.3705 26.5082 25.005 25.0805 26.1802C23.6527 27.3554 21.8622 27.9985 20.0141 28Z" fill="black"/>
		</svg>
		`,
		strong: `Tell us what you’re looking for`,
		small: `Fill in our form - it takes 30 seconds`,
	},
	{
		svg: `
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="40" height="40" rx="20" fill="#F7DFD3"/>
			<path d="M29.1654 18.1666V14.5C29.1654 14.0137 28.9722 13.5474 28.6284 13.2036C28.2846 12.8598 27.8183 12.6666 27.332 12.6666H12.6654C11.657 12.6666 10.8412 13.4825 10.8412 14.5V18.1666C11.8495 18.1666 12.6654 18.9916 12.6654 20C12.6654 21.0083 11.8495 21.8333 10.832 21.8333V25.5C10.832 26.5083 11.657 27.3333 12.6654 27.3333H27.332C28.3404 27.3333 29.1654 26.5083 29.1654 25.5V21.8333C28.157 21.8333 27.332 21.0083 27.332 20C27.332 18.9916 28.157 18.1666 29.1654 18.1666ZM27.332 16.8283C26.2412 17.4608 25.4987 18.6525 25.4987 20C25.4987 21.3475 26.2412 22.5391 27.332 23.1716V25.5H12.6654V23.1716C13.7562 22.5391 14.4987 21.3475 14.4987 20C14.4987 18.6433 13.7654 17.4608 12.6745 16.8283L12.6654 14.5H27.332V16.8283Z" fill="black"/>
			</svg>		
		`,
		strong: `We curate a rug selection for you`,
		small: `Email or call us - our team is here to help you from rug selection to delivery`,
	},
	{
		svg: `
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="40" height="40" rx="20" fill="#F7DFD3"/>
			<g clip-path="url(#clip0_2208_511)">
			<path d="M24.5827 12.0834H15.416L15.1668 12.905C14.5134 15.061 13.2498 16.9816 11.5285 18.435L10.416 19.375V19.5834M24.5827 12.0834L24.331 12.9209C23.6796 15.0931 22.4092 17.0284 20.6752 18.49L19.6243 19.375L19.3743 19.5834H10.416M24.5827 12.0834L24.8343 12.9209C25.486 15.0932 26.7567 17.0285 28.491 18.49L29.541 19.375L29.5827 19.4167V27.9167H10.416V19.5834M19.5827 19.41V27.9167M24.5827 27.9167V24.1667" stroke="black" stroke-width="1.6"/>
			</g>
			<defs>
			<clipPath id="clip0_2208_511">
			<rect width="20" height="20" fill="white" transform="translate(10 10)"/>
			</clipPath>
			</defs>
		</svg>		
		`,
		strong: `Try it at Home`,
		small: `Shop with confidence with our free styling advice, free delivery & free returns`,
	},
];
const mobile_svg = `
<svg
	width="73"
	height="73"
	viewBox="0 0 73 73"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M52.5475 7.29657C52.0077 3.5477 48.5262 0.942594 44.7773 1.48239L18.6789 5.24026C14.93 5.78006 12.3249 9.26157 12.8647 13.0104L20.4519 65.7034C20.9917 69.4523 24.4732 72.0574 28.2221 71.5176L54.3205 67.7597C58.0693 67.2199 60.6744 63.7384 60.1346 59.9895L52.5475 7.29657ZM39.0621 4.57899L39.3858 6.82708C39.4749 7.44577 39.0454 8.02031 38.4268 8.1094L26.6411 9.8064C26.0224 9.89548 25.4484 9.46543 25.3593 8.84674L25.0356 6.59865L18.9996 7.46775C16.4803 7.8305 14.7295 10.1704 15.0922 12.6897L22.6794 65.3827C23.0421 67.9019 25.3821 69.6528 27.9014 69.2901L53.9997 65.5322C56.519 65.1694 58.2699 62.8295 57.9072 60.3103L50.32 7.6173C49.9572 5.09801 47.6173 3.34713 45.098 3.70988L39.0621 4.57899ZM47.8376 61.2179C47.7438 60.5663 47.1386 60.1135 46.487 60.2073L33.6066 62.0619C32.955 62.1558 32.5022 62.761 32.596 63.4125C32.6898 64.064 33.295 64.5169 33.9465 64.4231L46.827 62.5684C47.4785 62.4746 47.9314 61.8694 47.8376 61.2179Z"
		fill="#333333"
	/>
</svg>
`;
const phone_svg = `
<svg
	width="17"
	height="16"
	viewBox="0 0 17 16"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g clip-path="url(#clip0_2234_21)">
		<path
			d="M13.2933 15.9645C12.5977 15.9645 11.6206 15.7129 10.1574 14.8954C8.37818 13.8976 7.00197 12.9765 5.23234 11.2115C3.52615 9.50638 2.69586 8.40241 1.53381 6.28785C0.22103 3.90032 0.444817 2.64883 0.694973 2.11395C0.992879 1.47466 1.43261 1.0923 2.00099 0.712792C2.32382 0.501276 2.66546 0.31996 3.02157 0.171143C3.0572 0.15582 3.09034 0.14121 3.11992 0.128025C3.29631 0.0485599 3.56357 -0.0715292 3.9021 0.0567559C4.12802 0.141567 4.32972 0.315108 4.64544 0.626912C5.29292 1.26549 6.17773 2.68767 6.50415 3.38611C6.7233 3.85684 6.86834 4.16758 6.86869 4.51609C6.86869 4.92411 6.66344 5.23876 6.41435 5.57836C6.36767 5.64215 6.32134 5.70308 6.27644 5.76223C6.00526 6.11858 5.94575 6.22157 5.98495 6.40544C6.06442 6.77497 6.65702 7.87502 7.63092 8.84678C8.60482 9.81854 9.67315 10.3737 10.0441 10.4528C10.2358 10.4938 10.3409 10.4318 10.7087 10.151C10.7614 10.1107 10.8156 10.069 10.8723 10.0274C11.2521 9.74477 11.5522 9.54486 11.9506 9.54486H11.9527C12.2994 9.54486 12.5963 9.69524 13.088 9.94326C13.7295 10.2668 15.1944 11.1402 15.8369 11.7884C16.1494 12.1034 16.3237 12.3044 16.4088 12.53C16.5371 12.8696 16.4163 13.1358 16.3376 13.3139C16.3244 13.3435 16.3098 13.376 16.2944 13.4119C16.1444 13.7674 15.9621 14.1083 15.7496 14.4304C15.3708 14.997 14.987 15.4356 14.3463 15.7339C14.0173 15.8895 13.6572 15.9684 13.2933 15.9645Z"
			fill="black"
		/>
	</g>
	<defs>
		<clipPath id="clip0_2234_21">
			<rect
				width="16"
				height="16"
				fill="white"
				transform="translate(0.5)"
			/>
		</clipPath>
	</defs>
</svg>
`;

const top_elms = `
<div class='new-free-style'>
	<h3 class="major-sub-message">We have worked with over 20,000 customers to design their dream space!</h3>
	<div class="fsa-stylist">
	<img src="https://cdn.shopify.com/s/files/1/2594/4244/files/Banner_a5c7ca34-7474-4448-8a00-3d710be42620.png?v=1692676935">
	<div class="fsa-stylist-content">
		<h6 class="small-header">Need Help Choosing a Rug?</h6>
		<small>Our Interior Experts will help you find your perfect rug.</small>
		<a href="#free-styling-form-wrapper">
		<span>Get Free Styling Now</span>
		<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 1L6 6L1 11" stroke="white" stroke-width="2" stroke-linecap="round" />
		</svg>
		</a>
	</div>
	</div>
	<div class="call-now">
		${mobile_svg}
		<div class="call-now-info">
			<span>Don't waste another moment searching for the perfect rug!</span>
			<small>Call now to speak to one of our Interior Stylists</small>
		</div>
		<a href="tel:+4733378901">
			${phone_svg}
			<span>Call now
			02 8015 5926</span>
		</a>
	</div>
	<div class="fsa-team-img">
		<picture class="header-img">
			<source media="(min-width: 991px)" srcset="https://cdn.shopify.com/s/files/1/2594/4244/files/Free_Style_Page_Banner.png">
			<img src="https://cdn.shopify.com/s/files/1/2594/4244/files/Free_Style_Page_Banner.png">
		</picture>
	</div>
	<div class="how-work">
		<h4 class="header-info">How does it work?</h4>
		<div class="how-work-types">
			${how_work_types
				.map(
					(item) => `	<div class="how-work-type">
								${item.svg}
								<strong>${item.strong}</strong>
								<small>${item.small}</small>
							</div>`
				)
				.join('')}
		</div>
	</div>
	<div class="our-stylist">
		<h4 class="header-info">Our Stylists have been feautured in</h4>
		<div class="our-stylist-wrapper">
			<div class="stylist-features">
				${stylist_features
					.map((item) => `<img src="${item}" class="stylist-feature">`)
					.join('')}
			</div>
		</div>	
	</div>
</div>
`;

const topInt = setInterval(() => {
	const topParent = document.querySelector('.page-header.cf ');
	const head = document.querySelector('head');
	if (topParent && head && !document.querySelector('.fsa-stylist')) {
		head.insertAdjacentHTML('beforeend', style);
		topParent.insertAdjacentHTML('afterend', top_elms);
		clearInterval(topInt);
	}
}, 10);
