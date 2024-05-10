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
	if (exist_elm && exist_elm && head && !document.querySelector('.new-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		box_content.insertAdjacentHTML('afterend', new_elm_html);
		clearInterval(interval);
	}
}, 10);
