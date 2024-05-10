const style = `
<style>
#s-225fbdd1-680c-442d-ad91-bfcf01bea3c9,
#s-225fbdd1-680c-442d-ad91-bfcf01bea3c9 + .shg-box-vertical-align-wrapper,
#s-56dceeca-b58c-4d7a-88c4-4270f6bf464a,
#s-59ded273-fd06-4e7c-9c05-ab0aa79fb6f2{
    display: none!important;
}
#s-f66a8593-6a71-4cd3-849c-382fc3bd04a0{
    background: #F2F7EB!important;
}
#s-d3e61df3-f484-4094-9531-7e95033dccdc{
    max-width: 1520px;
    width: 100%;
    margin-inline: auto;
}
.new-link-elms{
    max-width: 1520px;
    width: 100%;
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.new-link-elm{
    display: grid;
    grid-template-columns: 2fr 3fr;
    align-items: stretch;
    border-radius: 5px;
    overflow: hidden;
}
.new-link-elm div{
    display: grid;
    place-items: center;
    background: linear-gradient(130.82deg, #6EA73A 10.64%, #5A8028 53.57%);
}
.new-link-elm span{
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: white;
}
.new-link-elm img{
    min-height:175px;
    object-fit: cover;
}
#s-f66a8593-6a71-4cd3-849c-382fc3bd04a0 .shg-btn-wrapper a{
    background: #FF0000;
    font-size: 24px;
    font-weight: 500;
    line-height: 28.8px;
    text-align: center;
    border-radius: 0;
    color: white;
}
#s-f66a8593-6a71-4cd3-849c-382fc3bd04a0 .shg-default-text-content p{
    font-size: 24px;
    font-weight: 700;
    line-height: 40px;
    color: #7EC042;
}
#s-f66a8593-6a71-4cd3-849c-382fc3bd04a0 .shogun-heading-component h2{
    font-size: 40px;
    font-weight: 1000;
    line-height: 40px;
    color: white;
}
@media (max-width:1400px){
    .new-link-elm span{
        width: min-content;
    }
}
@media (max-width:1200px){
    .new-link-elm span{
        font-size: 24px;
        line-height: 32px;
    }
    .new-link-elm img{
        min-height:120px;
    }
}
@media (max-width:767px){
    .new-link-elm img{
        min-height:88px;
    }
    .new-link-elms{
        grid-template-columns: repeat(1,1fr)
    }
    .new-link-elm span{
        font-size: 20px;
        line-height: 24px;
        width: max-content;
    }
}
</style>
`;

const new_elm_html = `
<div class="new-link-elms">
    <a href="" class="new-link-elm">
        <img src="https://shop.carpetmart.com/content/assets/images/StoreImages/OurStores_NewCastle.jpg" alt="" />
        <div>
            <span>Need Help?</span>
        </div>
    </a>
    <a href="" class="new-link-elm">
        <img src="https://shop.carpetmart.com/content/assets/images/StoreImages/OurStores_NewCastle.jpg" alt="" />
        <div>
            <span>Clearance Rugs</span>
        </div>
    </a>
    <a href="" class="new-link-elm">
        <img src="https://shop.carpetmart.com/content/assets/images/StoreImages/OurStores_NewCastle.jpg" alt="" />
        <div>
            <span>Shop Deals</span>
        </div>
    </a>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector(
		'#s-f66a8593-6a71-4cd3-849c-382fc3bd04a0'
	);
	const box_content = exist_elm.querySelector('.shg-box-content');
	const head = document.querySelector('head');
	const first_box = [
		...document.querySelectorAll(
			'#slider-s-3c5b648b-4675-427d-a0f1-fd03d77ab1e7,#slider-s-e6a46a22-2e91-4e9a-baab-fa7f1d2a35c7'
		),
	];
	const second_box = [
		...document.querySelectorAll(
			'#s-7b2efbab-1d0d-4677-94be-c3a43d51a057,#s-1773b37f-d8a0-47b6-8224-59cd35a4767d'
		),
	];
	const third_box = [
		...document.querySelectorAll(
			'#s-8c00b443-f71a-4ef3-b17a-af126387b6d5,#s-6df03fb6-bbd9-4b79-b41f-c4fefcf54ec6'
		),
	];
	if (
		exist_elm &&
		second_box &&
		first_box &&
		third_box &&
		head &&
		!document.querySelector('.new-link-elms')
	) {
		head.insertAdjacentHTML('beforeend', style);
		box_content.insertAdjacentHTML('afterend', new_elm_html);

		try {
			first_box.map((item) => {
				const headings = [
					...item.querySelectorAll('.shogun-heading-component h2'),
				];
				headings.map((item) => {
					item.innerHTML = 'Carpet & Tile Mart';
				});
				const sub = [...item.querySelectorAll('.shg-default-text-content p')];
				sub.map((item) => {
					item.innerHTML =
						'<span>Available. Affordable.</span><span>At Your Service.</span>';
				});
				const btns = [...item.querySelectorAll('.shg-btn-wrapper a')];
				btns.map((item) => {
					item.innerHTML = 'Find a Store';
				});
			});
		} catch (error) {}

		try {
			second_box.map((item) => {
				const headings = [
					...item.querySelectorAll('.shogun-heading-component h2'),
				];
				headings.map((item) => {
					item.innerHTML = 'Rugs';
				});
				const sub = [...item.querySelectorAll('.shg-default-text-content p')];
				sub.map((item) => {
					item.innerHTML = 'Up to 50% off MSRP';
				});
			});
		} catch (error) {}

		try {
			third_box.map((item) => {
				const headings = [
					...item.querySelectorAll('.shogun-heading-component h2'),
				];
				headings.map((item) => {
					item.innerHTML = 'Luxury Vinyl';
				});
				const sub = [...item.querySelectorAll('.shg-default-text-content p')];
				sub.map((item) => {
					item.innerHTML = 'The easiest waterproof flooring solution.';
				});
			});
		} catch (error) {}

		clearInterval(interval);
	}
}, 10);
