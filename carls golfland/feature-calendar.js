const img_link = '';
const url = '';

const feature_calendar = `
<li>
  <a href=${url}> <img src=${img_link} alt='calendar icon'> Launch Calendar</a>
</li>
`;

const feature_calendar_mobile = `
<li class="level0 nav-10 category-item last level-top gift-cards ui-menu-item">
  <a href=${url}> <img src=${img_link} alt='calendar icon'> Launch Calendar</a>
</li>
`;

const feature_int = setInterval(() => {
	const header_panel_right_links = document.querySelector(
		'.header-panel-right .header.links'
	);
	const header_panel_right_links_mobile = document.querySelector('ul#ui-id-2');
	if (header_panel_right_links && header_panel_right_links_mobile) {
		header_panel_right_links.insertAdjacentHTML('afterbegin', feature_calendar);
		header_panel_right_links_mobile.insertAdjacentHTML(
			'beforeend',
			feature_calendar_mobile
		);
		clearInterval(feature_int);
	}
}, 10);
