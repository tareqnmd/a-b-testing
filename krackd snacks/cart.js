const style = `
<style>
    .cart__ctas{
        flex-direction: column-reverse;
    }
    .cart__ctas a{
        background: none!important;
        text-decoration: underline;
        height:20px;
        margin-top:0;
    }
    .cart__ctas a::after{
        box-shadow: none;
    }
    .cart-drawer__footer{
        padding: 12px!important;
        border-radius:4px;
        background: #F6F6F6;
        display: flex;
        flex-direction: column;
    }
    .cart-drawer__footer * {
        margin: 0;
    }
    #ap-widget-drawer,#Details-CartDrawer {
        display: none!important;
    }
    .drawer__footer{
        border-top: none!important;
    }
    #CartDrawer .drawer__inner{
        background: #fff!important;
    }
</style>
`;

const interval = setInterval(() => {
	const head = document.querySelector('head');
	if (head) {
		head.insertAdjacentHTML('beforeend', style);
		clearInterval(interval);
	}
}, 10);
