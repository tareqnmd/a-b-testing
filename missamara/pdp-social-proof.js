const style = `
<style>
	.pdp-message-area{
        display: flex;
		align-items: center;
		justify-content: center;
        gap:4px;
    }
</style>
`;

const pdp_html = `
<span class="pdp-message-area">
	<svg
		stroke="currentColor"
		fill="currentColor"
		stroke-width="0"
		viewBox="0 0 512 512"
		height="1em"
		width="1em"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
		></path>
	</svg>
	<span>
        2 people are viewing this product!
    </span>
</span>
`;

const message_int = setInterval(() => {
	const head = document.querySelector('head');
	const cart_btn = document.querySelector(
		'.input-row.quantity-submit-row.wishlist-productpage-icon.available'
	);

	if (cart_btn && !document.querySelector('.pdp-message-area')) {
		head.insertAdjacentHTML('beforeend', style);
		cart_btn.insertAdjacentHTML('afterend', pdp_html);
		clearInterval(message_int);
	}
}, 10);
