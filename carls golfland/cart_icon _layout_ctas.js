const style = `
<style>
    .minicart-wrapper .action.showcart .counter.qty{
        left: -4px;
        top: -4px;
        background: green;
        color: white;
        border-radius: 100%;
        font-size: 12px;
        height: 20px;
        width: 20px;
        display: grid;
        place-content: center;
    }
    .block.block-minicart.ui-dialog-content.ui-widget-content{
        position: fixed;
        top: 0;
        right: 0;
        left: calc(100% - 400px);
        width: 400px!important;
        min-width: 400px;
        bottom: 0;
        border: 0;
        background: #fafafa
    }
    .block.block-minicart.ui-dialog-content.ui-widget-content .minicart-items-wrapper{
        background: #ffffff;
    }
    .minicart-wrapper .block-minicart .block-content .subtotal{
        background:none;
        font-weight: 700;
    }
    .action.primary.viewcart{
        background: none!important;
        color: #333!important;
        text-decoration: underline;
        text-transform: capitalize!important;
        font-size: 16px!important;
        font-weight: 500!important;
        margin-bottom: 0!important;
    }
    .new-cart-promo{
        background: #d8fad1;
        color: #78a46b!important;
        font-size: 12px;
        margin: 10px;
        border: 1px dashed!important;
        border-radius: 4px;
        text-transform: none!important;
    }
    #top-cart-btn-checkout{
        border-radius: 6px;
        width: 75%;
        margin: auto;
    }
    .min-cart-usps{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        border-top: 1px solid;
        border-bottom: 1px solid;
        margin: 10px 0;
    }
    .min-cart-usp{
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: center;
        padding: 6px;
    }
    .min-cart-usp img{
        width: 30px;
    }
    .min-cart-usp span{
        font-size: 10px;
        font-weight: bold;
    }
    .min-cart-usps .min-cart-usp:first-child{
        border-right: 1px solid;
    }
    .paypal.paypal-cart.checkout.paypal-logo.braintree-paypal-logo.braintree-paypal-mini-cart-container{
        width: 75%;
        margin: auto;
    }
</style>
`;

const cart_usp_html = `
  <div class="min-cart-usps">
    <div class="min-cart-usp">
      <img src="https://carlsgolfland.s3.us-east-2.amazonaws.com/cgl-cart-price-lock.png">
      <span>Best Price + Guarantee</span>
    </div>
    <div class="min-cart-usp">
      <img src="https://carlsgolfland.s3.us-east-2.amazonaws.com/cgl-cart-price-lock.png">
      <span>Most Orders Ship Same-Day</span>
    </div>
  </div>
`;

setInterval(() => {
	const cart_promo = document.querySelector('.minicart-promo');
	if (cart_promo && !document.querySelector('.new-cart-promo')) {
		cart_promo.classList.add('new-cart-promo');
		cart_promo.innerText = 'See Promotions +  Discounted Price in Checkout >';
	}
}, 10);

const view_cart_change = setInterval(() => {
	const cart_checkout = document.querySelector('#top-cart-btn-checkout');
	const cart_view = document.querySelector('.action.primary.viewcart');
	if (cart_checkout && cart_view && !document.querySelector('.min-cart-usps')) {
		cart_checkout.insertAdjacentHTML('afterend', cart_usp_html);
		cart_checkout.insertAdjacentElement('afterend', cart_view);
		clearInterval(view_cart_change);
	}
}, 10);
