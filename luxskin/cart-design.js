const style = `
<style>
.SidebarLayout_container__fGitD .style_container__2w1Ui .flex-1 .text-xs.font-semibold{
    color: #9440EC;
    font-size: 10px;
    font-weight: 400;
    line-height: 10px;
    margin-bottom: 6px;
}

.SidebarLayout_container__fGitD .style_container__2w1Ui .flex-1 .text-sm{
    color: #0D0C22;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
}

.SidebarLayout_container__fGitD .style_container__2w1Ui .flex-1 .mt-1{
    display: none;
}

.SidebarLayout_container__fGitD .style_container__2w1Ui .cursor-pointer.underline.underline-offset-2{
    font-size: 16px;
    font-weight: 300;
    line-height: 16px;
    text-align: left;
    color: #A5A5A5;
}

.new-price-elm{
    color: #0D0C22;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    margin-bottom: 10px;
}

.price-elm{
    align-self: center;
}

.slow-price{
    color: #0D0C22;
    font-size: 16px;
    font-weight: 300;
    line-height: 16px;
}

#sidebar-footer .mx-auto.mt-4{
    max-width: 100%!important;
}

#sidebar-footer .mx-auto.mt-4 button{
    border-radius: 8px!important;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
}

#sidebar-footer .py-4{
    padding: 30px!important;
}

#sidebar-footer .text-base .mt-2.text-right.text-primary{
    color: #009E6E;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
}

#sidebar-footer .text-base div span:first-child{
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    color: #0D0C22; 
}

#sidebar-footer .text-base span:last-child{
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    color: #0D0C22;
}

.new-like-elm{
    padding: 20px;
    background: #FAF4FF;
}
.new-like-elm h4{
    margin-bottom: 16px;
}
</style>
`;

const new_elm_html = (price) => `
<div class="new-price-elm">
    ${price}
</div>
`;

const new_like_html = `
<h4>you may also like</h4>
`;

const interval = setInterval(() => {
	try {
		const exist_elms = document.querySelectorAll(
			'.SidebarLayout_container__fGitD .style_container__2w1Ui'
		);
		const sideProducts = document.querySelector(
			'.Sidebar_sidebar__leoJc .ozscroll .flex'
		);
		const sidebarFooter = document.querySelector('#sidebar-footer');
		const head = document.querySelector('head');
		if (
			exist_elms.length > 0 &&
			sideProducts &&
			sidebarFooter &&
			head &&
			!document.querySelector('.new-price-elm')
		) {
			console.log('exist_elms', exist_elms);
			head.insertAdjacentHTML('beforeend', style);
			exist_elms.forEach((item) => {
				const removeItem = item.querySelector(
					'.cursor-pointer.underline.underline-offset-2'
				);
				const info = item.querySelector('.flex-1');
				const price = item.querySelector('.mt-3.text-xs span.font-bold');
				price.classList.add('slow-price');
				const newDiv = document.createElement('div');
				newDiv.classList.add('price-elm');
				newDiv.insertAdjacentHTML('beforeend', new_elm_html(price.innerText));
				newDiv.insertAdjacentElement('beforeend', removeItem);
				info.insertAdjacentElement('afterend', newDiv);
			});

			const liveDiv = document.createElement('div');
			liveDiv.classList.add('new-like-elm');
			liveDiv.insertAdjacentElement('afterbegin', sideProducts);
			liveDiv.insertAdjacentHTML('afterbegin', new_like_html);
			sidebarFooter.insertAdjacentElement('beforebegin', liveDiv);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
