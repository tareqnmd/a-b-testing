const freeShippingSvg = `
<svg width="65" height="46" viewBox="0 0 65 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-outside-1_3842_381" maskUnits="userSpaceOnUse" x="0" y="0.0234375" width="65" height="46" fill="black">
<rect fill="white" y="0.0234375" width="65" height="46"/>
<path d="M63.0387 28.6672L60.0881 26.524L60.045 17.4591C60.0389 16.0631 59.0139 15.0497 57.6087 15.0497H50.4449C50.5286 14.5555 50.4216 14.0696 50.1373 13.6939C49.826 13.2822 49.3363 13.046 48.7937 13.046H42.3633C41.8539 13.046 41.4404 13.4657 41.4404 13.9834C41.4404 14.5011 41.8539 14.9207 42.3633 14.9207L48.5783 14.9209L42.2008 39.0947H28.1859C28.2043 38.1559 27.9422 37.276 27.4156 36.5787C26.6884 35.617 25.56 35.0872 24.2385 35.0872C21.8637 35.0872 19.5062 36.7988 18.5772 39.0947L14.5203 39.0946L16.3242 32.2595C16.4558 31.7594 16.1642 31.2455 15.6708 31.1114C15.1799 30.9779 14.6729 31.2741 14.5412 31.7743L12.6906 38.7877C12.5454 39.3416 12.6439 39.9008 12.9613 40.3216C13.2726 40.7333 13.7624 40.9695 14.305 40.9695H18.1785C18.1588 41.9084 18.4221 42.7881 18.9488 43.4854C19.6747 44.4473 20.8031 44.9769 22.1246 44.9769C24.4994 44.9769 26.8582 43.2653 27.786 40.9695H48.7555C48.7358 41.9084 48.9991 42.7881 49.5258 43.4854C50.2518 44.4473 51.3801 44.9769 52.7016 44.9769C55.0764 44.9769 57.4352 43.2653 58.363 40.9695H58.6903C60.1939 40.9695 61.684 39.7842 62.0839 38.2709L63.8988 31.3904C64.1843 30.3036 63.8558 29.2601 63.0387 28.6672ZM26.2356 39.7895C25.7618 41.5852 23.8792 43.1022 22.1246 43.1022C21.39 43.1022 20.7822 42.833 20.413 42.3442C20.0156 41.8185 19.9147 41.0836 20.1275 40.2747C20.6013 38.479 22.4839 36.9619 24.2385 36.9619C24.9731 36.9619 25.581 37.2311 25.9513 37.7199C26.3476 38.2457 26.4497 38.9806 26.2356 39.7895ZM56.8126 39.7895C56.3389 41.5852 54.4562 43.1022 52.7016 43.1022C51.967 43.1022 51.3592 42.833 50.99 42.3442C50.5926 41.8185 50.4917 41.0836 50.7046 40.2747C51.1783 38.479 53.0609 36.9619 54.8155 36.9619C55.5501 36.9619 56.158 37.2311 56.5284 37.7199C56.9246 38.2457 57.0267 38.9806 56.8126 39.7895ZM53.7586 39.0947C53.2492 39.0947 52.8357 39.5144 52.8357 40.0321C52.8357 40.5498 53.2492 40.9695 53.7586 40.9695H53.7684C54.2778 40.9695 54.6863 40.5498 54.6863 40.0321C54.6863 39.5144 54.268 39.0947 53.7586 39.0947ZM23.1816 39.0947C22.6722 39.0947 22.2587 39.5144 22.2587 40.0321C22.2587 40.5498 22.6722 40.9695 23.1816 40.9695H23.1914C23.7008 40.9695 24.1093 40.5498 24.1093 40.0321C24.1093 39.5144 23.691 39.0947 23.1816 39.0947ZM60.3009 37.7858C60.1225 38.4583 59.4162 39.0496 58.7629 39.0909C58.7801 38.1535 58.518 37.2751 57.9926 36.5788C57.2654 35.6171 56.1371 35.0873 54.8155 35.0873C52.4408 35.0873 50.0832 36.7989 49.1542 39.0949H44.1117L45.731 32.9546H56.8593C57.3688 32.9546 57.7822 32.5349 57.7822 32.0172C57.7822 31.4996 57.3688 31.0799 56.8593 31.0799H46.2257L49.9601 16.9246H57.6087C57.8769 16.9246 58.1969 17.019 58.1993 17.4683L58.2067 19.0574H54.113C52.6093 19.0574 51.1192 20.2428 50.7193 21.7559L49.9269 24.7615C49.7091 25.5856 49.8482 26.4074 50.3084 27.0161C50.755 27.6066 51.4675 27.9452 52.2623 27.9452H58.8712L61.9658 30.1924C62.2291 30.3833 62.1466 30.7864 62.1159 30.9054L62.0691 31.0799H60.8042C60.2948 31.0799 59.8814 31.4996 59.8814 32.0172C59.8814 32.5349 60.2948 32.9546 60.8042 32.9546H61.5745L60.3009 37.7858ZM9.81381 36.089H7.84014C7.33073 36.089 6.91729 36.5087 6.91729 37.0264C6.91729 37.5441 7.33073 37.9638 7.84014 37.9638H9.81381C10.3232 37.9638 10.7367 37.5441 10.7367 37.0264C10.7367 36.5087 10.3232 36.089 9.81381 36.089ZM10.7994 32.0816H4.88087C4.37146 32.0816 3.95802 32.5013 3.95802 33.019C3.95802 33.5367 4.37146 33.9563 4.88087 33.9563H10.7994C11.3088 33.9563 11.7223 33.5367 11.7223 33.019C11.7223 32.5013 11.3088 32.0816 10.7994 32.0816ZM24.6089 30.9508C32.7324 30.9508 39.34 24.2382 39.34 15.9871C39.34 7.736 32.7324 1.02344 24.6089 1.02344C16.4854 1.02344 9.87656 7.73613 9.87656 15.9871C9.87656 24.2381 16.4854 30.9508 24.6089 30.9508ZM11.7862 28.074H1.92285C1.41344 28.074 1 28.4937 1 29.0114C1 29.5291 1.41344 29.9488 1.92285 29.9488H11.7862C12.2957 29.9488 12.7091 29.5291 12.7091 29.0114C12.7091 28.4937 12.2957 28.074 11.7862 28.074ZM24.6089 2.89818C31.7136 2.89818 37.4943 8.76986 37.4943 15.9871C37.4943 23.2043 31.7148 29.076 24.6089 29.076C17.503 29.076 11.7223 23.2043 11.7223 15.9871C11.7223 8.76986 17.503 2.89818 24.6089 2.89818ZM24.6089 24.0666C24.0995 24.0666 23.6861 24.4863 23.6861 25.004V26.0058C23.6861 26.5235 24.0995 26.9432 24.6089 26.9432C25.1183 26.9432 25.5317 26.5235 25.5317 26.0058V25.004C25.5317 24.4863 25.1183 24.0666 24.6089 24.0666ZM58.2399 26.0703H52.2623C52.1073 26.0703 51.8957 26.0364 51.7726 25.8747C51.6656 25.7322 51.6422 25.5033 51.7099 25.2466L52.5035 22.241C52.6868 21.5437 53.4387 20.932 54.113 20.932H58.2153L58.2399 26.0703ZM20.6628 20.9319C20.899 20.9319 21.1353 20.8404 21.3162 20.6573L23.3218 18.6204C23.7094 18.817 24.1462 18.9282 24.6089 18.9282C26.2048 18.9282 27.5042 17.6087 27.5042 15.9871C27.5042 15.5175 27.3947 15.0736 27.2015 14.6794L32.1652 9.63686C32.5257 9.27079 32.5257 8.67725 32.1652 8.3113C31.8059 7.9451 31.2214 7.94522 30.8609 8.3113L25.896 13.3538C25.5084 13.1572 25.0716 13.0461 24.6089 13.0461C23.0118 13.0461 21.7136 14.3656 21.7136 15.9872C21.7136 16.4568 21.8231 16.9007 22.0163 17.2949L20.0107 19.3319C19.6501 19.698 19.6501 20.2915 20.0107 20.6574C20.1915 20.8404 20.4265 20.9319 20.6628 20.9319ZM24.6089 14.9207C25.1872 14.9207 25.6585 15.3992 25.6585 15.9871C25.6585 16.575 25.1872 17.0534 24.6089 17.0534C24.0294 17.0534 23.5593 16.575 23.5593 15.9871C23.5593 15.3992 24.0294 14.9207 24.6089 14.9207ZM33.4855 16.9245H34.4723C34.9817 16.9245 35.3951 16.5048 35.3951 15.9871C35.3951 15.4694 34.9817 15.0497 34.4723 15.0497H33.4855C32.9761 15.0497 32.5626 15.4694 32.5626 15.9871C32.5626 16.5048 32.9761 16.9245 33.4855 16.9245ZM16.654 15.9871C16.654 15.4694 16.2417 15.0497 15.7311 15.0497H14.7455C14.2349 15.0497 13.8227 15.4694 13.8227 15.9871C13.8227 16.5048 14.2349 16.9245 14.7455 16.9245H15.7311C16.2417 16.9245 16.654 16.5048 16.654 15.9871ZM24.6089 7.90748C25.1183 7.90748 25.5317 7.48778 25.5317 6.97011V5.96825C25.5317 5.45057 25.1183 5.03088 24.6089 5.03088C24.0995 5.03088 23.6861 5.45057 23.6861 5.96825V6.97011C23.6861 7.48791 24.0995 7.90748 24.6089 7.90748Z"/>
</mask>
<path d="M63.0387 28.6672L60.0881 26.524L60.045 17.4591C60.0389 16.0631 59.0139 15.0497 57.6087 15.0497H50.4449C50.5286 14.5555 50.4216 14.0696 50.1373 13.6939C49.826 13.2822 49.3363 13.046 48.7937 13.046H42.3633C41.8539 13.046 41.4404 13.4657 41.4404 13.9834C41.4404 14.5011 41.8539 14.9207 42.3633 14.9207L48.5783 14.9209L42.2008 39.0947H28.1859C28.2043 38.1559 27.9422 37.276 27.4156 36.5787C26.6884 35.617 25.56 35.0872 24.2385 35.0872C21.8637 35.0872 19.5062 36.7988 18.5772 39.0947L14.5203 39.0946L16.3242 32.2595C16.4558 31.7594 16.1642 31.2455 15.6708 31.1114C15.1799 30.9779 14.6729 31.2741 14.5412 31.7743L12.6906 38.7877C12.5454 39.3416 12.6439 39.9008 12.9613 40.3216C13.2726 40.7333 13.7624 40.9695 14.305 40.9695H18.1785C18.1588 41.9084 18.4221 42.7881 18.9488 43.4854C19.6747 44.4473 20.8031 44.9769 22.1246 44.9769C24.4994 44.9769 26.8582 43.2653 27.786 40.9695H48.7555C48.7358 41.9084 48.9991 42.7881 49.5258 43.4854C50.2518 44.4473 51.3801 44.9769 52.7016 44.9769C55.0764 44.9769 57.4352 43.2653 58.363 40.9695H58.6903C60.1939 40.9695 61.684 39.7842 62.0839 38.2709L63.8988 31.3904C64.1843 30.3036 63.8558 29.2601 63.0387 28.6672ZM26.2356 39.7895C25.7618 41.5852 23.8792 43.1022 22.1246 43.1022C21.39 43.1022 20.7822 42.833 20.413 42.3442C20.0156 41.8185 19.9147 41.0836 20.1275 40.2747C20.6013 38.479 22.4839 36.9619 24.2385 36.9619C24.9731 36.9619 25.581 37.2311 25.9513 37.7199C26.3476 38.2457 26.4497 38.9806 26.2356 39.7895ZM56.8126 39.7895C56.3389 41.5852 54.4562 43.1022 52.7016 43.1022C51.967 43.1022 51.3592 42.833 50.99 42.3442C50.5926 41.8185 50.4917 41.0836 50.7046 40.2747C51.1783 38.479 53.0609 36.9619 54.8155 36.9619C55.5501 36.9619 56.158 37.2311 56.5284 37.7199C56.9246 38.2457 57.0267 38.9806 56.8126 39.7895ZM53.7586 39.0947C53.2492 39.0947 52.8357 39.5144 52.8357 40.0321C52.8357 40.5498 53.2492 40.9695 53.7586 40.9695H53.7684C54.2778 40.9695 54.6863 40.5498 54.6863 40.0321C54.6863 39.5144 54.268 39.0947 53.7586 39.0947ZM23.1816 39.0947C22.6722 39.0947 22.2587 39.5144 22.2587 40.0321C22.2587 40.5498 22.6722 40.9695 23.1816 40.9695H23.1914C23.7008 40.9695 24.1093 40.5498 24.1093 40.0321C24.1093 39.5144 23.691 39.0947 23.1816 39.0947ZM60.3009 37.7858C60.1225 38.4583 59.4162 39.0496 58.7629 39.0909C58.7801 38.1535 58.518 37.2751 57.9926 36.5788C57.2654 35.6171 56.1371 35.0873 54.8155 35.0873C52.4408 35.0873 50.0832 36.7989 49.1542 39.0949H44.1117L45.731 32.9546H56.8593C57.3688 32.9546 57.7822 32.5349 57.7822 32.0172C57.7822 31.4996 57.3688 31.0799 56.8593 31.0799H46.2257L49.9601 16.9246H57.6087C57.8769 16.9246 58.1969 17.019 58.1993 17.4683L58.2067 19.0574H54.113C52.6093 19.0574 51.1192 20.2428 50.7193 21.7559L49.9269 24.7615C49.7091 25.5856 49.8482 26.4074 50.3084 27.0161C50.755 27.6066 51.4675 27.9452 52.2623 27.9452H58.8712L61.9658 30.1924C62.2291 30.3833 62.1466 30.7864 62.1159 30.9054L62.0691 31.0799H60.8042C60.2948 31.0799 59.8814 31.4996 59.8814 32.0172C59.8814 32.5349 60.2948 32.9546 60.8042 32.9546H61.5745L60.3009 37.7858ZM9.81381 36.089H7.84014C7.33073 36.089 6.91729 36.5087 6.91729 37.0264C6.91729 37.5441 7.33073 37.9638 7.84014 37.9638H9.81381C10.3232 37.9638 10.7367 37.5441 10.7367 37.0264C10.7367 36.5087 10.3232 36.089 9.81381 36.089ZM10.7994 32.0816H4.88087C4.37146 32.0816 3.95802 32.5013 3.95802 33.019C3.95802 33.5367 4.37146 33.9563 4.88087 33.9563H10.7994C11.3088 33.9563 11.7223 33.5367 11.7223 33.019C11.7223 32.5013 11.3088 32.0816 10.7994 32.0816ZM24.6089 30.9508C32.7324 30.9508 39.34 24.2382 39.34 15.9871C39.34 7.736 32.7324 1.02344 24.6089 1.02344C16.4854 1.02344 9.87656 7.73613 9.87656 15.9871C9.87656 24.2381 16.4854 30.9508 24.6089 30.9508ZM11.7862 28.074H1.92285C1.41344 28.074 1 28.4937 1 29.0114C1 29.5291 1.41344 29.9488 1.92285 29.9488H11.7862C12.2957 29.9488 12.7091 29.5291 12.7091 29.0114C12.7091 28.4937 12.2957 28.074 11.7862 28.074ZM24.6089 2.89818C31.7136 2.89818 37.4943 8.76986 37.4943 15.9871C37.4943 23.2043 31.7148 29.076 24.6089 29.076C17.503 29.076 11.7223 23.2043 11.7223 15.9871C11.7223 8.76986 17.503 2.89818 24.6089 2.89818ZM24.6089 24.0666C24.0995 24.0666 23.6861 24.4863 23.6861 25.004V26.0058C23.6861 26.5235 24.0995 26.9432 24.6089 26.9432C25.1183 26.9432 25.5317 26.5235 25.5317 26.0058V25.004C25.5317 24.4863 25.1183 24.0666 24.6089 24.0666ZM58.2399 26.0703H52.2623C52.1073 26.0703 51.8957 26.0364 51.7726 25.8747C51.6656 25.7322 51.6422 25.5033 51.7099 25.2466L52.5035 22.241C52.6868 21.5437 53.4387 20.932 54.113 20.932H58.2153L58.2399 26.0703ZM20.6628 20.9319C20.899 20.9319 21.1353 20.8404 21.3162 20.6573L23.3218 18.6204C23.7094 18.817 24.1462 18.9282 24.6089 18.9282C26.2048 18.9282 27.5042 17.6087 27.5042 15.9871C27.5042 15.5175 27.3947 15.0736 27.2015 14.6794L32.1652 9.63686C32.5257 9.27079 32.5257 8.67725 32.1652 8.3113C31.8059 7.9451 31.2214 7.94522 30.8609 8.3113L25.896 13.3538C25.5084 13.1572 25.0716 13.0461 24.6089 13.0461C23.0118 13.0461 21.7136 14.3656 21.7136 15.9872C21.7136 16.4568 21.8231 16.9007 22.0163 17.2949L20.0107 19.3319C19.6501 19.698 19.6501 20.2915 20.0107 20.6574C20.1915 20.8404 20.4265 20.9319 20.6628 20.9319ZM24.6089 14.9207C25.1872 14.9207 25.6585 15.3992 25.6585 15.9871C25.6585 16.575 25.1872 17.0534 24.6089 17.0534C24.0294 17.0534 23.5593 16.575 23.5593 15.9871C23.5593 15.3992 24.0294 14.9207 24.6089 14.9207ZM33.4855 16.9245H34.4723C34.9817 16.9245 35.3951 16.5048 35.3951 15.9871C35.3951 15.4694 34.9817 15.0497 34.4723 15.0497H33.4855C32.9761 15.0497 32.5626 15.4694 32.5626 15.9871C32.5626 16.5048 32.9761 16.9245 33.4855 16.9245ZM16.654 15.9871C16.654 15.4694 16.2417 15.0497 15.7311 15.0497H14.7455C14.2349 15.0497 13.8227 15.4694 13.8227 15.9871C13.8227 16.5048 14.2349 16.9245 14.7455 16.9245H15.7311C16.2417 16.9245 16.654 16.5048 16.654 15.9871ZM24.6089 7.90748C25.1183 7.90748 25.5317 7.48778 25.5317 6.97011V5.96825C25.5317 5.45057 25.1183 5.03088 24.6089 5.03088C24.0995 5.03088 23.6861 5.45057 23.6861 5.96825V6.97011C23.6861 7.48791 24.0995 7.90748 24.6089 7.90748Z" fill="#FF2734"/>
<path d="M63.0387 28.6672L60.0881 26.524L60.045 17.4591C60.0389 16.0631 59.0139 15.0497 57.6087 15.0497H50.4449C50.5286 14.5555 50.4216 14.0696 50.1373 13.6939C49.826 13.2822 49.3363 13.046 48.7937 13.046H42.3633C41.8539 13.046 41.4404 13.4657 41.4404 13.9834C41.4404 14.5011 41.8539 14.9207 42.3633 14.9207L48.5783 14.9209L42.2008 39.0947H28.1859C28.2043 38.1559 27.9422 37.276 27.4156 36.5787C26.6884 35.617 25.56 35.0872 24.2385 35.0872C21.8637 35.0872 19.5062 36.7988 18.5772 39.0947L14.5203 39.0946L16.3242 32.2595C16.4558 31.7594 16.1642 31.2455 15.6708 31.1114C15.1799 30.9779 14.6729 31.2741 14.5412 31.7743L12.6906 38.7877C12.5454 39.3416 12.6439 39.9008 12.9613 40.3216C13.2726 40.7333 13.7624 40.9695 14.305 40.9695H18.1785C18.1588 41.9084 18.4221 42.7881 18.9488 43.4854C19.6747 44.4473 20.8031 44.9769 22.1246 44.9769C24.4994 44.9769 26.8582 43.2653 27.786 40.9695H48.7555C48.7358 41.9084 48.9991 42.7881 49.5258 43.4854C50.2518 44.4473 51.3801 44.9769 52.7016 44.9769C55.0764 44.9769 57.4352 43.2653 58.363 40.9695H58.6903C60.1939 40.9695 61.684 39.7842 62.0839 38.2709L63.8988 31.3904C64.1843 30.3036 63.8558 29.2601 63.0387 28.6672ZM26.2356 39.7895C25.7618 41.5852 23.8792 43.1022 22.1246 43.1022C21.39 43.1022 20.7822 42.833 20.413 42.3442C20.0156 41.8185 19.9147 41.0836 20.1275 40.2747C20.6013 38.479 22.4839 36.9619 24.2385 36.9619C24.9731 36.9619 25.581 37.2311 25.9513 37.7199C26.3476 38.2457 26.4497 38.9806 26.2356 39.7895ZM56.8126 39.7895C56.3389 41.5852 54.4562 43.1022 52.7016 43.1022C51.967 43.1022 51.3592 42.833 50.99 42.3442C50.5926 41.8185 50.4917 41.0836 50.7046 40.2747C51.1783 38.479 53.0609 36.9619 54.8155 36.9619C55.5501 36.9619 56.158 37.2311 56.5284 37.7199C56.9246 38.2457 57.0267 38.9806 56.8126 39.7895ZM53.7586 39.0947C53.2492 39.0947 52.8357 39.5144 52.8357 40.0321C52.8357 40.5498 53.2492 40.9695 53.7586 40.9695H53.7684C54.2778 40.9695 54.6863 40.5498 54.6863 40.0321C54.6863 39.5144 54.268 39.0947 53.7586 39.0947ZM23.1816 39.0947C22.6722 39.0947 22.2587 39.5144 22.2587 40.0321C22.2587 40.5498 22.6722 40.9695 23.1816 40.9695H23.1914C23.7008 40.9695 24.1093 40.5498 24.1093 40.0321C24.1093 39.5144 23.691 39.0947 23.1816 39.0947ZM60.3009 37.7858C60.1225 38.4583 59.4162 39.0496 58.7629 39.0909C58.7801 38.1535 58.518 37.2751 57.9926 36.5788C57.2654 35.6171 56.1371 35.0873 54.8155 35.0873C52.4408 35.0873 50.0832 36.7989 49.1542 39.0949H44.1117L45.731 32.9546H56.8593C57.3688 32.9546 57.7822 32.5349 57.7822 32.0172C57.7822 31.4996 57.3688 31.0799 56.8593 31.0799H46.2257L49.9601 16.9246H57.6087C57.8769 16.9246 58.1969 17.019 58.1993 17.4683L58.2067 19.0574H54.113C52.6093 19.0574 51.1192 20.2428 50.7193 21.7559L49.9269 24.7615C49.7091 25.5856 49.8482 26.4074 50.3084 27.0161C50.755 27.6066 51.4675 27.9452 52.2623 27.9452H58.8712L61.9658 30.1924C62.2291 30.3833 62.1466 30.7864 62.1159 30.9054L62.0691 31.0799H60.8042C60.2948 31.0799 59.8814 31.4996 59.8814 32.0172C59.8814 32.5349 60.2948 32.9546 60.8042 32.9546H61.5745L60.3009 37.7858ZM9.81381 36.089H7.84014C7.33073 36.089 6.91729 36.5087 6.91729 37.0264C6.91729 37.5441 7.33073 37.9638 7.84014 37.9638H9.81381C10.3232 37.9638 10.7367 37.5441 10.7367 37.0264C10.7367 36.5087 10.3232 36.089 9.81381 36.089ZM10.7994 32.0816H4.88087C4.37146 32.0816 3.95802 32.5013 3.95802 33.019C3.95802 33.5367 4.37146 33.9563 4.88087 33.9563H10.7994C11.3088 33.9563 11.7223 33.5367 11.7223 33.019C11.7223 32.5013 11.3088 32.0816 10.7994 32.0816ZM24.6089 30.9508C32.7324 30.9508 39.34 24.2382 39.34 15.9871C39.34 7.736 32.7324 1.02344 24.6089 1.02344C16.4854 1.02344 9.87656 7.73613 9.87656 15.9871C9.87656 24.2381 16.4854 30.9508 24.6089 30.9508ZM11.7862 28.074H1.92285C1.41344 28.074 1 28.4937 1 29.0114C1 29.5291 1.41344 29.9488 1.92285 29.9488H11.7862C12.2957 29.9488 12.7091 29.5291 12.7091 29.0114C12.7091 28.4937 12.2957 28.074 11.7862 28.074ZM24.6089 2.89818C31.7136 2.89818 37.4943 8.76986 37.4943 15.9871C37.4943 23.2043 31.7148 29.076 24.6089 29.076C17.503 29.076 11.7223 23.2043 11.7223 15.9871C11.7223 8.76986 17.503 2.89818 24.6089 2.89818ZM24.6089 24.0666C24.0995 24.0666 23.6861 24.4863 23.6861 25.004V26.0058C23.6861 26.5235 24.0995 26.9432 24.6089 26.9432C25.1183 26.9432 25.5317 26.5235 25.5317 26.0058V25.004C25.5317 24.4863 25.1183 24.0666 24.6089 24.0666ZM58.2399 26.0703H52.2623C52.1073 26.0703 51.8957 26.0364 51.7726 25.8747C51.6656 25.7322 51.6422 25.5033 51.7099 25.2466L52.5035 22.241C52.6868 21.5437 53.4387 20.932 54.113 20.932H58.2153L58.2399 26.0703ZM20.6628 20.9319C20.899 20.9319 21.1353 20.8404 21.3162 20.6573L23.3218 18.6204C23.7094 18.817 24.1462 18.9282 24.6089 18.9282C26.2048 18.9282 27.5042 17.6087 27.5042 15.9871C27.5042 15.5175 27.3947 15.0736 27.2015 14.6794L32.1652 9.63686C32.5257 9.27079 32.5257 8.67725 32.1652 8.3113C31.8059 7.9451 31.2214 7.94522 30.8609 8.3113L25.896 13.3538C25.5084 13.1572 25.0716 13.0461 24.6089 13.0461C23.0118 13.0461 21.7136 14.3656 21.7136 15.9872C21.7136 16.4568 21.8231 16.9007 22.0163 17.2949L20.0107 19.3319C19.6501 19.698 19.6501 20.2915 20.0107 20.6574C20.1915 20.8404 20.4265 20.9319 20.6628 20.9319ZM24.6089 14.9207C25.1872 14.9207 25.6585 15.3992 25.6585 15.9871C25.6585 16.575 25.1872 17.0534 24.6089 17.0534C24.0294 17.0534 23.5593 16.575 23.5593 15.9871C23.5593 15.3992 24.0294 14.9207 24.6089 14.9207ZM33.4855 16.9245H34.4723C34.9817 16.9245 35.3951 16.5048 35.3951 15.9871C35.3951 15.4694 34.9817 15.0497 34.4723 15.0497H33.4855C32.9761 15.0497 32.5626 15.4694 32.5626 15.9871C32.5626 16.5048 32.9761 16.9245 33.4855 16.9245ZM16.654 15.9871C16.654 15.4694 16.2417 15.0497 15.7311 15.0497H14.7455C14.2349 15.0497 13.8227 15.4694 13.8227 15.9871C13.8227 16.5048 14.2349 16.9245 14.7455 16.9245H15.7311C16.2417 16.9245 16.654 16.5048 16.654 15.9871ZM24.6089 7.90748C25.1183 7.90748 25.5317 7.48778 25.5317 6.97011V5.96825C25.5317 5.45057 25.1183 5.03088 24.6089 5.03088C24.0995 5.03088 23.6861 5.45057 23.6861 5.96825V6.97011C23.6861 7.48791 24.0995 7.90748 24.6089 7.90748Z" stroke="#FF2734" stroke-width="0.8" mask="url(#path-1-outside-1_3842_381)"/>
</svg>
`;
const relDurability = `
<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.125 32.4179V35.75H42.246C43.1457 35.75 43.875 35.0205 43.875 34.1128V13.0122C43.875 12.108 43.1609 11.375 42.246 11.375H9.754C8.85433 11.375 8.125 12.1045 8.125 13.0122V34.1128C8.125 35.017 8.83912 35.75 9.754 35.75H13V32.4179C11.9948 31.3921 11.375 29.9872 11.375 28.4375C11.375 25.2964 13.9214 22.75 17.0625 22.75C20.2036 22.75 22.75 25.2964 22.75 28.4375C22.75 29.9872 22.1302 31.3921 21.125 32.4179ZM14.625 33.5777V39.975L17.0625 37.5375L19.5 39.975V33.5777C18.7612 33.9286 17.9348 34.125 17.0625 34.125C16.1902 34.125 15.3638 33.9286 14.625 33.5777ZM13 37.375H9.75804C7.95767 37.375 6.5 35.9198 6.5 34.1248V13.0002C6.5 11.1963 7.95867 9.75 9.75804 9.75H42.242C44.0423 9.75 45.5 11.2052 45.5 13.0002V34.1248C45.5 35.9287 44.0413 37.375 42.242 37.375H21.125V43.875L17.0625 39.8125L13 43.875V37.375ZM11.375 17.875V19.5H40.625V17.875H11.375ZM26 22.75V24.375H40.625V22.75H26ZM30.875 27.625V29.25H40.625V27.625H30.875ZM17.0625 32.5C19.3062 32.5 21.125 30.6812 21.125 28.4375C21.125 26.1938 19.3062 24.375 17.0625 24.375C14.8188 24.375 13 26.1938 13 28.4375C13 30.6812 14.8188 32.5 17.0625 32.5Z" fill="#FF2734" stroke="#FF2734" stroke-width="1.4"/>
</svg>
`;
const flexibleReturns = `
<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.375 15.0313L13.52 12.5359C15.3387 10.6257 17.5271 9.10546 19.952 8.0678C22.3768 7.03015 24.9875 6.49673 27.625 6.50002C38.3906 6.50002 47.125 15.2344 47.125 26C47.125 36.7656 38.3906 45.5 27.625 45.5C23.5919 45.4997 19.6581 44.2496 16.3648 41.9215C13.0715 39.5935 10.5807 36.302 9.23508 32.5" stroke="#FF2734" stroke-width="3" stroke-miterlimit="10" stroke-linecap="square"/>
<path d="M4.87497 6.95198V22.3438C4.87497 22.4515 4.91777 22.5549 4.99396 22.631C5.07014 22.7072 5.17348 22.75 5.28122 22.75H20.673C20.7534 22.7501 20.832 22.7263 20.8989 22.6817C20.9658 22.637 21.0179 22.5736 21.0486 22.4993C21.0794 22.425 21.0875 22.3433 21.0718 22.2644C21.0561 22.1856 21.0173 22.1132 20.9604 22.0564L5.56864 6.66456C5.51183 6.60768 5.43941 6.56894 5.36056 6.55323C5.28172 6.53753 5.19998 6.54558 5.12571 6.57635C5.05144 6.60713 4.98797 6.65925 4.94333 6.72611C4.8987 6.79298 4.87491 6.87158 4.87497 6.95198Z" fill="#FF2734"/>
</svg>
`;
const fitGuarantee = `
<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.875 16.25L20.1662 18.5413L24.375 14.3488V37.6513L20.1662 33.4587L17.875 35.75L26 43.875L34.125 35.75L31.8337 33.4587L27.625 37.6513V14.3488L31.8337 18.5413L34.125 16.25L26 8.125L17.875 16.25Z" fill="#FF2734"/>
<path d="M45.5 48.75H6.5C5.63805 48.75 4.8114 48.4076 4.2019 47.7981C3.59241 47.1886 3.25 46.362 3.25 45.5V6.5C3.25 5.63805 3.59241 4.8114 4.2019 4.2019C4.8114 3.59241 5.63805 3.25 6.5 3.25H45.5C46.362 3.25 47.1886 3.59241 47.7981 4.2019C48.4076 4.8114 48.75 5.63805 48.75 6.5V45.5C48.75 46.362 48.4076 47.1886 47.7981 47.7981C47.1886 48.4076 46.362 48.75 45.5 48.75ZM6.5 6.5V45.5H45.5V6.5H6.5Z" fill="#FF2734"/>
</svg>
`;
const cusReview = `
<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.3443 10.1681L26 7.45199L24.6556 10.1681L23.9427 11.6086L22.3588 11.8411L19.357 12.2817L21.5297 14.3993L22.6798 15.5204L22.4187 17.0869L21.922 20.0673L24.5964 18.6612L26 17.9232L27.4036 18.6612L30.078 20.0673L29.5813 17.0869L29.3202 15.5204L30.4703 14.3993L32.6429 12.2817L29.6412 11.8411L28.0573 11.6086L27.3443 10.1681Z" stroke="#FF2734" stroke-width="3" stroke-miterlimit="10"/>
<path d="M42.5108 14.5011L41.1665 11.785L39.8222 14.5011L39.1092 15.9416L37.5253 16.1741L34.4987 16.6183L36.7032 18.7392L37.8402 19.8329L37.5654 21.4089L37.0445 24.3976L39.7356 22.9971L41.1665 22.2525L42.5974 22.9971L45.2885 24.3976L44.7675 21.4089L44.4928 19.8329L45.6298 18.7392L47.8343 16.6183L44.8077 16.1741L43.2238 15.9416L42.5108 14.5011Z" stroke="#FF2734" stroke-width="3" stroke-miterlimit="10"/>
<path d="M12.1778 14.5011L10.8335 11.785L9.48914 14.5011L8.77619 15.9416L7.19231 16.1741L4.16569 16.6183L6.37022 18.7392L7.51332 19.8389L7.25187 21.4221L6.76049 24.3977L9.42988 22.9942L10.8335 22.2562L12.2371 22.9942L14.9065 24.3977L14.4151 21.4221L14.1537 19.8389L15.2968 18.7392L17.5013 16.6183L14.4747 16.1741L12.8908 15.9416L12.1778 14.5011Z" stroke="#FF2734" stroke-width="3" stroke-miterlimit="10"/>
<path d="M15.1668 43.3332H4.3335L6.50016 38.9998L4.3335 34.6665H15.1668V43.3332Z" stroke="#FF2734" stroke-width="3" stroke-miterlimit="10"/>
<path d="M36.8335 43.3332H47.6668L45.5002 38.9998L47.6668 34.6665H36.8335V43.3332Z" stroke="#FF2734" stroke-width="3" stroke-miterlimit="10"/>
<path d="M15.1665 30.3335H36.8332V39.0002H15.1665V30.3335Z" stroke="#FF2734" stroke-width="3" stroke-miterlimit="10"/>
</svg>
`;

const usps = [
	{
		svg: freeShippingSvg,
		strong: 'Free shipping',
		span: 'Free shipping on order',
	},
	{
		svg: relDurability,
		strong: 'Reliable Durability',
		span: 'Your payment is secure',
	},
	{
		svg: flexibleReturns,
		strong: 'Flexible Returns',
		span: 'Blankets, Towels, Canvases',
	},
	{
		svg: fitGuarantee,
		strong: 'Fitment Guarantee',
		span: 'Blankets, Towels, Canvases',
	},
	{
		svg: cusReview,
		strong: '4000+ customer review',
		span: 'For Quality & Customer Service',
	},
];

const style = `
<style>
.new-usp-elm{
    display: grid;
    gap: 16px;
    margin: 20px 0;
}
.new-usp-elm h2{
    font-size: 36px;
    font-weight: 600;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;
}
.usp-elm-area{
    background: #1F2128;
    border-radius: 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
}
.usp-elm-area .usp-elm{
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    place-content: center;
    gap:2px 6px;
}
.usp-elm-area .usp-elm svg{
    grid-row: span 2;
}
</style>
`;

const new_elm_html = `
<div class="new-usp-elm">
    <h2>Why 10,000+ customers Love our products</h2>
    <div class="usp-elm-area">
        ${usps.map(item=>
            `
            <div class="usp-elm">
                ${item.svg}
                <strong>${item.strong}</strong>
                <small>${item.span}</small>
            </div>
            `
        ).join('')}
    </div>
</div>
`;

const interval = setInterval(() => {
	try {
		const exist_elm = document.querySelector(
			'#shopify-block-c_year_make_model_search_ymm_searchbox_P7yrRF'
		);
		const head = document.querySelector('head');
		if (exist_elm && head && !document.querySelector('.new-usp-elm')) {
			head.insertAdjacentHTML('beforeend', style);
			exist_elm.insertAdjacentHTML('afterbegin', new_elm_html);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
