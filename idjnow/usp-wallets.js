const style = `
<style>
    .new-elm{
        margin: 30px 0;
        width: 100%;
    }
    .new-elm *{
        margin: 0;
        padding: 0;
    }
    .digital-wallets{
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 10px;
        margin-bottom: 30px;
    }
    .digital-wallets span{
        font-size: 15px;
        font-weight: 600;
    }
    .wallet-imgs{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
    .wallet-imgs img{
        width: 50px;
    }
    .wallet-imgs span{
        width: 1px;
        background: #dfdfdf;
        height: 34px;
    }
    .idj-usp{
        border: 1px solid #dfdfdf;
        border-radius: 6px;
        position: relative;
        padding: 10px;
    }
    .idj-usp h3{
        position: absolute;
        background: white;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        padding: 0 10px;
        color: #aa1c03;
    }
    .idj-usps{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 10px;
        gap: 6px;
    }
    .idj-single-usp{
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0 6px;
        align-items: center;
    }
    .idj-single-usp img{
        grid-row: span 2;
        width: 60px;
    }
    .idj-single-usp h6{
        font-size: 14px;
        line-height: 14px;
    }
    .idj-single-usp strong{
        font-size: 10px;
        line-height: 10px;
    }
    @media only screen and (max-width:480px){
        .idj-single-usp img{
            width: 30px;
        }
        .idj-single-usp h6{
            font-size: 10px;
            line-height: 10px;
        }
        .idj-single-usp strong{
            font-size: 8px;
            line-height: 8px;
        }
    }
</style>
`;

const new_elm_html = (apple) => `
<div class="new-elm">
    <div class="digital-wallets">
        <span>Digital Wallets Accepted: </span>
        <div class="wallet-imgs">
            <img src="https://www.idjnow.com/static/version1686749612/frontend/Ecomitize/idjnow/en_US/PayPal_Braintree/images/venmo_logo_blue.png" alt="" />
            <span></span>
            <img src="https://images.idjnow.com/media/amasty/webp/wysiwyg/affirm_png.webp" alt="" />
            <span></span>
            <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/pp-acceptance-medium.png" alt="" />
            ${
							apple
								? `
                                <span></span>
                                <img
									src="https://www.idjnow.com/static/version1686749612/frontend/Ecomitize/idjnow/en_US/PayPal_Braintree/images/applepaymark.png"
									alt=""
								/>`
								: ''
						}
        </div>
    </div>
    <div class="idj-usp">
        <h3>Only at I DJ NOW</h3>
        <div class="idj-usps">
            <div class="idj-single-usp">
                <img src="https://idjnow.s3.us-east-2.amazonaws.com/idj-shipping.png" slt="">
                <h6>Free Shipping</h6>
                <strong>Most products <u>ship same-day</u></strong>
            </div>
            <div class="idj-single-usp">
                <img src="https://idjnow.s3.us-east-2.amazonaws.com/idj-price-lock.png" slt="">
                <h6>30-Day Price Protection</h6>
                <strong>Find a lower price, you're covered.</strong>
            </div>
            <div class="idj-single-usp">
                <img src="https://idjnow.s3.us-east-2.amazonaws.com/idj-reviews.png" slt="">
                <h6>2700+ Reviews</h6>
                <strong>90%+5-star reviews</strong>
            </div>
            <div class="idj-single-usp">
                <img src="https://idjnow.s3.us-east-2.amazonaws.com/idj-returns.png" slt="">
                <h6>30-Day Returns</h6>
                <strong>Don't Like it? Return it.</strong>
            </div>
        </div>
    </div>
</div>
`;

function isSafari() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

const interval = setInterval(() => {
	const exist_elm = document.querySelector('.amtheme-add-form-bottom');
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('beforeend', new_elm_html(isSafari()));
		clearInterval(interval);
	}
}, 10);
