const style = `
<style>
.new-points-elm{
    padding: 20px;
    gap: 10px;
    border-radius: 8px;
    background: linear-gradient(90deg, #F9EADC 0%, #F5EDE1 100%);
    display: grid;
    place-items: flex-start;
}
.new-points-elm *{
    margin: 0;
    padding: 0;
    letter-spacing: 0px;
}
.new-points-elm h6{
    color: #0D0C22;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    text-transform: capitalize;
}
.new-points-elm h6 span{
    font-weight: 700;
}
.new-points-elm strong{
    color: #0D0C22;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
}
</style>
`;

const new_elm_html = `
<h6><span>What it is:</span> Something Great!</h6>
<strong>Why it’s special:</strong>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector('.key-point');
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-points-elm')) {
		head.insertAdjacentHTML('beforeend', style);
        const new_points = document.createElement('div');
		exist_elm.insertAdjacentElement('afterend', new_points);
        new_points.insertAdjacentHTML('afterbegin',new_elm_html);
		new_points.insertAdjacentElement('beforeend', exist_elm);
        new_points.classList.add('new-points-elm');
		clearInterval(interval); 
	}
}, 10);
