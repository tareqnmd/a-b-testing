window.addEventListener('scroll', function () {
	const btn_area = document.querySelector('.add-to-cart-custom-btn');
	const btn_wrapper = document.querySelector('.add-to-cart-wrapper');
	const topOffset = btn_area.getBoundingClientRect().bottom;
	if (topOffset <= 0) {
		btn_wrapper.classList.add('new-float-btn');
	} else {
		btn_wrapper.classList.remove('new-float-btn');
	}
});

{/* <style>
    .new-float-btn{
        position: fixed;
        background: white;
        z-index: 99;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 10px;
    }
	.product-iwt_wrapper .image-wrapper{
		position: static!important;
      	z-index: unset!important;
    }
	.product-iwt_wrapper .info-wrapper, .triple-inner_wrapper .row-wrapper{
		position: static!important;
    }
</style> */}