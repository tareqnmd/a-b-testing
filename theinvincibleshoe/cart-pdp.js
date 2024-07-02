const freeShippingSvg = `
<svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.2923 20.1259L37.1199 18.5655L37.0882 11.9659C37.0837 10.9496 36.3291 10.2118 35.2945 10.2118H30.0203C30.0819 9.85201 30.0031 9.49823 29.7938 9.22471C29.5646 8.92498 29.2041 8.75301 28.8046 8.75301H27.3063C26.9313 8.75301 26.6269 9.05856 26.6269 9.43545C26.6269 9.81234 26.9313 10.1179 27.3063 10.1179L28.646 10.118L23.9507 27.7175L16.7791 27.7174C16.7927 27.0339 16.5998 26.3933 16.212 25.8857C15.6766 25.1855 14.8459 24.7998 13.873 24.7998C12.1246 24.7998 10.3889 26.0459 9.7049 27.7174L6.71812 27.7174L8.04617 22.7411C8.14311 22.377 7.92841 22.0029 7.56514 21.9052C7.20368 21.808 6.83044 22.0237 6.73351 22.3878L5.37103 27.4939C5.26414 27.8972 5.33661 28.3043 5.57033 28.6106C5.79952 28.9104 6.16008 29.0823 6.55958 29.0823H9.41138C9.39689 29.7659 9.59075 30.4064 9.97848 30.914C10.513 31.6143 11.3437 31.9999 12.3166 31.9999C14.065 31.9999 15.8017 30.7538 16.4847 29.0823L28.7765 29.0824C28.762 29.766 28.9559 30.4065 29.3436 30.9141C29.8781 31.6144 30.7088 32 31.6817 32C33.4301 32 35.1668 30.7539 35.8498 29.0824H36.0908C37.1978 29.0824 38.2949 28.2194 38.5893 27.1177L39.9255 22.1085C40.1357 21.3172 39.8938 20.5575 39.2923 20.1259ZM15.3433 28.2233C14.9945 29.5306 13.6085 30.635 12.3166 30.635C11.7758 30.635 11.3283 30.439 11.0565 30.0832C10.7639 29.7004 10.6896 29.1654 10.8463 28.5765C11.1951 27.2691 12.5812 26.1647 13.873 26.1647C14.4138 26.1647 14.8613 26.3607 15.134 26.7165C15.4257 27.0993 15.5009 27.6344 15.3433 28.2233ZM34.7084 28.2234C34.3596 29.5306 32.9736 30.6351 31.6817 30.6351C31.1409 30.6351 30.6934 30.4391 30.4216 30.0832C30.129 29.7005 30.0547 29.1655 30.2115 28.5766C30.5602 27.2692 31.9463 26.1648 33.2381 26.1648C33.7789 26.1648 34.2264 26.3608 34.4991 26.7166C34.7908 27.0994 34.866 27.6345 34.7084 28.2234ZM32.4599 27.7175C32.0849 27.7175 31.7805 28.0231 31.7805 28.4C31.7805 28.7769 32.0849 29.0824 32.4599 29.0824H32.4672C32.8422 29.0824 33.143 28.7769 33.143 28.4C33.143 28.0231 32.835 27.7175 32.4599 27.7175ZM13.0948 27.7174C12.7198 27.7174 12.4154 28.023 12.4154 28.3999C12.4154 28.7768 12.7198 29.0823 13.0948 29.0823H13.1021C13.4771 29.0823 13.7779 28.7768 13.7779 28.3999C13.7779 28.023 13.4699 27.7174 13.0948 27.7174ZM37.2766 26.7646C37.1453 27.2542 36.6253 27.6847 36.1442 27.7147C36.1569 27.0323 35.964 26.3928 35.5771 25.8859C35.0418 25.1857 34.211 24.8 33.2381 24.8C31.4897 24.8 29.754 26.0461 29.07 27.7176H25.3576L26.5498 23.2473H34.7428C35.1179 23.2473 35.4222 22.9417 35.4222 22.5648C35.4222 22.1879 35.1179 21.8824 34.7428 21.8824H26.9139L29.6634 11.5768H35.2945C35.492 11.5768 35.7275 11.6455 35.7293 11.9726L35.7348 13.1296H32.7208C31.6138 13.1296 30.5167 13.9925 30.2223 15.0942L29.6389 17.2824C29.4786 17.8824 29.5809 18.4806 29.9198 18.9238C30.2486 19.3537 30.7731 19.6002 31.3583 19.6002H36.224L38.5023 21.2362C38.6962 21.3753 38.6355 21.6687 38.6129 21.7554L38.5784 21.8824H37.6472C37.2721 21.8824 36.9677 22.1879 36.9677 22.5648C36.9677 22.9417 37.2721 23.2473 37.6472 23.2473H38.2142L37.2766 26.7646ZM3.25302 25.5292H2.87861C2.50356 25.5292 2.19917 25.8347 2.19917 26.2116C2.19917 26.5885 2.50356 26.8941 2.87861 26.8941H3.25302C3.62807 26.8941 3.93245 26.5885 3.93245 26.2116C3.93245 25.8347 3.62807 25.5292 3.25302 25.5292ZM3.97865 22.6116H1.77856C1.40351 22.6116 1.09913 22.9171 1.09913 23.294C1.09913 23.6709 1.40351 23.9765 1.77856 23.9765H3.97865C4.3537 23.9765 4.65808 23.6709 4.65808 23.294C4.65808 22.9171 4.3537 22.6116 3.97865 22.6116ZM14.1457 21.7883C20.1265 21.7883 24.9912 16.9013 24.9912 10.8941C24.9912 4.88702 20.1265 0 14.1457 0C8.16486 0 3.29922 4.88711 3.29922 10.8941C3.29922 16.9012 8.16486 21.7883 14.1457 21.7883ZM4.70519 19.6939H0.679431C0.304385 19.6939 0 19.9995 0 20.3764C0 20.7533 0.304385 21.0588 0.679431 21.0588H4.70519C5.08024 21.0588 5.38462 20.7533 5.38462 20.3764C5.38462 19.9995 5.08024 19.6939 4.70519 19.6939ZM14.1457 1.36488C19.3764 1.36488 23.6323 5.6397 23.6323 10.8941C23.6323 16.1486 19.3773 20.4234 14.1457 20.4234C8.91404 20.4234 4.65808 16.1486 4.65808 10.8941C4.65808 5.6397 8.91404 1.36488 14.1457 1.36488ZM14.1457 16.7763C13.7706 16.7763 13.4662 17.0819 13.4662 17.4588V18.1882C13.4662 18.5651 13.7706 18.8706 14.1457 18.8706C14.5207 18.8706 14.8251 18.5651 14.8251 18.1882V17.4588C14.8251 17.0819 14.5207 16.7763 14.1457 16.7763ZM35.7592 18.2352H31.3583C31.2442 18.2352 31.0884 18.2106 30.9978 18.0928C30.919 17.9891 30.9018 17.8224 30.9516 17.6355L31.5359 15.4473C31.6709 14.9397 32.2244 14.4944 32.7208 14.4944H35.7411L35.7592 18.2352ZM11.2404 14.4942C11.4143 14.4942 11.5883 14.4276 11.7214 14.2943L13.1981 12.8113C13.4834 12.9544 13.805 13.0354 14.1457 13.0354C15.3206 13.0354 16.2773 12.0748 16.2773 10.8941C16.2773 10.5523 16.1966 10.2291 16.0544 9.94209L19.7088 6.27092C19.9743 6.0044 19.9743 5.57228 19.7088 5.30585C19.4443 5.03925 19.014 5.03934 18.7486 5.30585L15.0932 8.97703C14.8079 8.8339 14.4863 8.75301 14.1457 8.75301C12.9698 8.75301 12.0141 9.71361 12.0141 10.8942C12.0141 11.2361 12.0947 11.5593 12.2369 11.8463L10.7603 13.3293C10.4949 13.5958 10.4949 14.0279 10.7603 14.2943C10.8935 14.4276 11.0665 14.4942 11.2404 14.4942ZM14.1457 10.1178C14.5714 10.1178 14.9184 10.4661 14.9184 10.8941C14.9184 11.3222 14.5714 11.6705 14.1457 11.6705C13.719 11.6705 13.3729 11.3222 13.3729 10.8941C13.3729 10.4661 13.719 10.1178 14.1457 10.1178ZM20.6809 11.5766H21.4074C21.7825 11.5766 22.0869 11.271 22.0869 10.8941C22.0869 10.5173 21.7825 10.2117 21.4074 10.2117H20.6809C20.3058 10.2117 20.0015 10.5173 20.0015 10.8941C20.0015 11.271 20.3058 11.5766 20.6809 11.5766ZM8.28896 10.8941C8.28896 10.5173 7.98548 10.2117 7.60953 10.2117H6.8839C6.50794 10.2117 6.20446 10.5173 6.20446 10.8941C6.20446 11.271 6.50794 11.5766 6.8839 11.5766H7.60953C7.98548 11.5766 8.28896 11.271 8.28896 10.8941ZM14.1457 5.01186C14.5207 5.01186 14.8251 4.7063 14.8251 4.32941V3.60002C14.8251 3.22313 14.5207 2.91758 14.1457 2.91758C13.7706 2.91758 13.4662 3.22313 13.4662 3.60002V4.32941C13.4662 4.7064 13.7706 5.01186 14.1457 5.01186Z" fill="black"/>
</svg>
`;

const exchangeSvg = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0001 12.6666H24.5834V1.66663L38.3334 15.4166L24.5834 29.1666V20H14.5001V9.91663L1.66675 23.6666L14.5001 38.3333V27.3333H19.0834" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const style = `
<style>
	.cart-pdps{
		display: grid;
    	grid-template-columns: 1fr auto 1fr;
		align-items: stretch;
		gap: 20px;
		padding: 12px;
	}
	.cart-pdps .cart-pdp{
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.cart-pdps .cart-pdp svg{
		flex-shrink: 0;
		max-width: 30px;
	}
	.cart-pdps .cart-pdp span{
		font-size: 10px;
		line-height: 14px;
		font-weight: 400;
		text-transform: uppercase;
	}
	.cart-pdps .divider{
		width: 1px;
		background-color: #000;
	}
</style>
`;

const new_elm_html = `
<div class="cart-pdps">
	<div class="cart-pdp">
		${freeShippingSvg}
		<span>Free Shipping on orders of $100 or more</span>
	</div>
	<div class="divider"></div>
	<div class="cart-pdp">
		${exchangeSvg}
		<span>Hassle Free Exchange's On All Orders</span>
	</div>
</div>
`;

const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelector('.rebuy-cart__flyout-actions');
		const head = document.querySelector('head');
		if (exist_elm && head && !document.querySelector('.new-elm')) {
			head.insertAdjacentHTML('beforeend', style);
			exist_elm.insertAdjacentHTML('afterend', new_elm_html);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
