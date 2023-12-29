const style = `
<style>
   .promo.promo-badge-left {
        max-width: 160px;
   }
   .productView-img-container .promo{
        margin:12px 16px;
   }
   .productView-options .form{
        display:flex;
        flex-wrap:wrap;
   }
   .productView-options .availability{
        width:100%;
        margin-bottom:16px;
   }
   .form-field.form-field--increments.productView-price--wrapper{
        margin: 0;
        width: 30%;
   }
   .productView-options .ols--product-checkout{
        display:none;
   }
   .productView-options .form-action{
        margin:0;
        width:70%;
   }
   .form-field.form-field--increments.productView-price--wrapper .form-label.form-label--alternate{
        display:none;
   }
   .form-field.form-field--increments.productView-price--wrapper .form-increment{
        display:flex;
   }
   .form-field.form-field--increments.productView-price--wrapper .form-increment button{
        width:40px;
        height:48px;
        border-radius:0;
        border: 1px solid #E9E9E9;
        background: #FFF;
    }
   .form-field.form-field--increments.productView-price--wrapper .form-increment input{
        width:50px;
        height:48px;
        margin:0;
        border-radius:0;
        border: 1px solid #E9E9E9;
        border-left:0;
        border-right:0;
        background: #FFF;
   }
   .productView-options .form-action input{
        width:100%!important;
        margin:0!important;
        margin-left:10px!important;
        height: 48px;
        border-radius: 4px;
        background: #0C0A3A;
   }
</style>
`;
const right_promo_html = `<img class="promo promo-badge-left" src="https://i.ibb.co/v3QS9hh/am-flag-seen.png">`;

const pdp_usp_int = setInterval(() => {
	const promo_right = document.querySelector('.promo.promo-badge-right');
	const head = document.querySelector('head');
	if (promo_right && style) {
		head.insertAdjacentHTML('beforeend', style);
		promo_right.insertAdjacentHTML('afterend', right_promo_html);
		clearInterval(pdp_usp_int);
	}
}, 10);
