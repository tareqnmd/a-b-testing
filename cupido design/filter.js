const style = `
<style>
    button.grid-view-btn[data-view="list"]{
        display:none;
    }
    .collection-filter__inner{
        padding: 8px 12px;
        border-radius: 6px;
        background: #F0F0F0;
    }
    .new-filter-elm{
        display: none;
        align-items: center;
        gap: 8px;
    }
    .new-filter-elm span{
        font-size: 16px;
        font-weight: 700;
        color: #1B1B1B;
    }
    .grid-item__content{
        box-shadow: 0px 4px 12px 0px #0000001F;
        border-radius: 4px;
    }
    .grid-item__content .grid-item__meta{
        margin: 12px 6px !important;
    }
    @media only screen and (max-width:767px){
        .new-filter-elm{
            display: flex;
        }
        .collection-filter__inner{
            justify-content: space-between;
        }
        .collection-filter{
            margin: 0 0 12px 0;
        }
    }
</style>
`;

const new_elm_html = `
<div class="new-filter-elm">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="4" x2="16" y2="4" stroke="black" stroke-width="2"/>
    <line y1="12" x2="16" y2="12" stroke="black" stroke-width="2"/>
    <circle cx="6" cy="4" r="3" fill="white" stroke="black" stroke-width="2"/>
    <circle cx="10" cy="12" r="3" fill="white" stroke="black" stroke-width="2"/>
    </svg>
    <span>Filter your search</span>
</div>
`;

const interval = setInterval(() => {
	const exist_elm_count = document.querySelector(
		'.collection-filter__item.collection-filter__item--count'
	);
	const head = document.querySelector('head');
	if (exist_elm_count && head && !document.querySelector('.new-filter-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm_count.insertAdjacentHTML('beforebegin', new_elm_html);
		clearInterval(interval);
	}
}, 10);