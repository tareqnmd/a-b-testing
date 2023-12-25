/* CUSTOM CODE */
const style = `
<style>
	.motion-banner{
    	background:url('https://i.ibb.co/28MPfFD/motionbg.png');
        display:flex;
        justify-content:center;
        padding: 80px 30px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .motion-area {
        max-width: 1220px;
        width:100%;
    }
    .motion-banner-info{
        display:flex;
        flex-direction: column;
        gap:10px;
        width:50%;
    }
    .motion-banner * {
        margin: 0;
        padding: 0;
    }
    .motion-banner ul {
        list-style: none;
        display:flex;
        flex-direction: column;
        gap:10px;
    }
    .motion-banner .banner-rev {
        display:flex;
        align-items:center;
        gap:6px;
    }
    .motion-banner .banner-rev strong,.motion-banner .banner-rev small {
        color: #1F2937;
        font-size: 14px;
        font-style: normal;
    }
    .motion-banner h2 {
        color: #1F2937;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 48px;
    }
    .motion-banner li {
        color: #1F2937;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        display:flex;
        align-items:center;
        gap:4px;
    }
    .motion-banner li svg {
        flex-shrink:0;
    }
    .quick-call{
        display: flex;
        padding: 20px 28px;
        justify-content: center;
        align-items: center;
        border:0;
        border-radius: 12px;
        border-bottom: 8px solid #CF4300;
        background: #F85203;
        color: #F9F9F9;
        text-align: center;
        font-size: 20px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
    }
    .btn-w-banner{
        width:100%;
        max-width:320px;
        margin-top:16px;
    }
    
    @media only screen and (max-width:991px){
        .motion-banner-info{
            width:100%;
        }
    }
    @media only screen and (max-width:640px){
        .motion-banner{
            padding: 40px 10px;
        }
        .motion-banner li {
            font-size: 12px;
            line-height: 20px;
        }
        .motion-banner h2 {
            font-size: 30px;
            line-height: 40px;
        }
        .quick-call{
            font-size: 14px;
        }
        .quick-call{
            padding: 12px 20px;
        }
    }
</style>
`;
const new_banner = `
<div class="motion-banner">
    <div class="motion-area">
        <div class="motion-banner-info">
            <div class="banner-rev">
                <svg width="102" height="16" viewBox="0 0 102 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_63_104)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.34548 8C3.34548 7.49192 3.43166 7.0048 3.58548 6.54792L0.893118 4.53476C0.36839 5.57796 0.0727539 6.75343 0.0727539 8C0.0727539 9.24552 0.368027 10.4203 0.892027 11.4628L3.58294 9.44569C3.43057 8.99094 3.34548 8.5056 3.34548 8Z" fill="#FBBC05"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0727 3.37778C9.19998 3.37778 10.2182 3.76889 11.0182 4.40889L13.3454 2.13334C11.9272 0.924447 10.1091 0.17778 8.0727 0.17778C4.91125 0.17778 2.19416 1.94809 0.893066 4.53476L3.58543 6.54791C4.20579 4.704 5.97416 3.37778 8.0727 3.37778Z" fill="#EB4335"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0727 12.6222C5.97416 12.6222 4.20579 11.296 3.58543 9.45209L0.893066 11.4649C2.19416 14.0519 4.91125 15.8222 8.0727 15.8222C10.024 15.8222 11.8869 15.1438 13.2851 13.8727L10.7294 11.9381C10.0083 12.3829 9.10034 12.6222 8.0727 12.6222Z" fill="#34A853"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7091 8.00001C15.7091 7.53779 15.6364 7.04001 15.5273 6.57779H8.07275V9.60001H12.3637C12.1491 10.6304 11.5651 11.4226 10.7295 11.9381L13.2851 13.8727C14.7538 12.538 15.7091 10.5497 15.7091 8.00001Z" fill="#4285F4"/>
                    </g>
                    <path d="M31 1L32.5716 5.83688H37.6574L33.5429 8.82624L35.1145 13.6631L31 10.6738L26.8855 13.6631L28.4571 8.82624L24.3426 5.83688H29.4284L31 1Z" fill="#F59E0B"/>
                    <path d="M47 1L48.5716 5.83688H53.6574L49.5429 8.82624L51.1145 13.6631L47 10.6738L42.8855 13.6631L44.4571 8.82624L40.3426 5.83688H45.4284L47 1Z" fill="#F59E0B"/>
                    <path d="M63 1L64.5716 5.83688H69.6574L65.5429 8.82624L67.1145 13.6631L63 10.6738L58.8855 13.6631L60.4571 8.82624L56.3426 5.83688H61.4284L63 1Z" fill="#F59E0B"/>
                    <path d="M79 1L80.5716 5.83688H85.6574L81.5429 8.82624L83.1145 13.6631L79 10.6738L74.8855 13.6631L76.4571 8.82624L72.3426 5.83688H77.4284L79 1Z" fill="#F59E0B"/>
                    <path d="M95 1L96.5716 5.83688H101.657L97.5429 8.82624L99.1145 13.6631L95 10.6738L90.8855 13.6631L92.4571 8.82624L88.3426 5.83688H93.4284L95 1Z" fill="#F59E0B"/>
                    <defs>
                    <clipPath id="clip0_63_104">
                    <rect width="16" height="16" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>   
                <strong>4.8/5</strong>  
                <small>based on 67 Happy Clients</small>   
            </div>
            <h2>Get Back In Motion with Physical Therapy in Fort Myers, FL</h2>
            <ul>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 11L12 14L22 4" stroke="#1F2937" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#1F2937" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Specialized tools for leak detection and pool maintenance</span>
                </li>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 11L12 14L22 4" stroke="#1F2937" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#1F2937" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Durable and Reliable Products</span>
                </li>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 11L12 14L22 4" stroke="#1F2937" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#1F2937" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Expert advice and support</span>
                </li>
            </ul>
            <button class="quick-call btn-w-banner">Get a quick callback</button>
        </div>
    </div>
</div>
`;


const interval = setInterval(() => {
	const main = document.querySelector('#main');
	const head = document.querySelector('head');
	if (main && head && !document.querySelector('.motion-banner')) {
		head.insertAdjacentHTML('beforeend', style);
		main.insertAdjacentHTML('beforebegin', new_banner);
		clearInterval(interval);
	}
}, 10);