const truckSvg = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_414_150)">
<mask id="path-1-outside-1_414_150" maskUnits="userSpaceOnUse" x="-1" y="4" width="34" height="24" fill="black">
<rect fill="white" x="-1" y="4" width="34" height="24"/>
<path d="M31.5117 18.8365L30.013 17.7638L29.9911 13.2265C29.988 12.5278 29.4674 12.0206 28.7536 12.0206H25.1149C25.1574 11.7732 25.103 11.53 24.9586 11.3419C24.8005 11.1359 24.5518 11.0176 24.2761 11.0176H21.0099C20.7512 11.0176 20.5412 11.2277 20.5412 11.4868C20.5412 11.7459 20.7512 11.956 21.0099 11.956L24.1668 11.9561L20.9274 24.0558H13.8087C13.8181 23.5859 13.6849 23.1455 13.4174 22.7965C13.0481 22.3151 12.4749 22.0499 11.8037 22.0499C10.5975 22.0499 9.39996 22.9066 8.92809 24.0558L6.86747 24.0557L7.78371 20.6345C7.85059 20.3842 7.70247 20.127 7.45184 20.0599C7.20247 19.9931 6.94497 20.1413 6.87809 20.3917L5.9381 23.9021C5.86435 24.1793 5.91435 24.4592 6.0756 24.6699C6.23372 24.8759 6.48247 24.9942 6.7581 24.9942H8.72559C8.71559 25.4641 8.84934 25.9044 9.11684 26.2534C9.48558 26.7349 10.0587 27 10.7299 27C11.9362 27 13.1343 26.1433 13.6056 24.9942H24.2568C24.2468 25.4641 24.3805 25.9044 24.648 26.2534C25.0168 26.7349 25.5899 27 26.2611 27C27.4674 27 28.6655 26.1433 29.1367 24.9942H29.303C30.0667 24.9942 30.8236 24.4009 31.0267 23.6434L31.9486 20.1996C32.0936 19.6556 31.9267 19.1333 31.5117 18.8365ZM12.8181 24.4036C12.5774 25.3023 11.6212 26.0616 10.7299 26.0616C10.3568 26.0616 10.0481 25.9269 9.86058 25.6822C9.65871 25.4191 9.60746 25.0513 9.71558 24.6464C9.9562 23.7476 10.9125 22.9883 11.8037 22.9883C12.1768 22.9883 12.4856 23.123 12.6737 23.3677C12.8749 23.6308 12.9268 23.9987 12.8181 24.4036ZM28.3493 24.4036C28.1086 25.3023 27.1524 26.0616 26.2611 26.0616C25.888 26.0616 25.5793 25.9269 25.3918 25.6822C25.1899 25.4191 25.1386 25.0513 25.2468 24.6464C25.4874 23.7476 26.4436 22.9883 27.3349 22.9883C27.708 22.9883 28.0168 23.123 28.2049 23.3677C28.4061 23.6308 28.458 23.9987 28.3493 24.4036ZM26.798 24.0558C26.5393 24.0558 26.3293 24.2659 26.3293 24.525C26.3293 24.7841 26.5393 24.9942 26.798 24.9942H26.803C27.0618 24.9942 27.2693 24.7841 27.2693 24.525C27.2693 24.2659 27.0568 24.0558 26.798 24.0558ZM11.2668 24.0558C11.0081 24.0558 10.7981 24.2659 10.7981 24.525C10.7981 24.7841 11.0081 24.9942 11.2668 24.9942H11.2718C11.5306 24.9942 11.7381 24.7841 11.7381 24.525C11.7381 24.2659 11.5256 24.0558 11.2668 24.0558ZM30.1211 23.4006C30.0305 23.7373 29.6717 24.0332 29.3399 24.0539C29.3486 23.5847 29.2155 23.145 28.9486 22.7965C28.5792 22.3151 28.0061 22.05 27.3349 22.05C26.1286 22.05 24.9311 22.9067 24.4593 24.0559H21.898L22.7205 20.9825H28.373C28.6318 20.9825 28.8417 20.7724 28.8417 20.5133C28.8417 20.2542 28.6318 20.0441 28.373 20.0441H22.9718L24.8686 12.959H28.7536C28.8899 12.959 29.0524 13.0062 29.0536 13.2311L29.0574 14.0265H26.978C26.2143 14.0265 25.4574 14.6198 25.2543 15.3772L24.8518 16.8816C24.7411 17.2941 24.8118 17.7054 25.0455 18.0101C25.2724 18.3056 25.6343 18.4751 26.038 18.4751H29.3949L30.9667 19.5999C31.1005 19.6955 31.0586 19.8972 31.043 19.9568L31.0192 20.0441H30.3767C30.118 20.0441 29.908 20.2542 29.908 20.5133C29.908 20.7724 30.118 20.9825 30.3767 20.9825H30.768L30.1211 23.4006ZM4.47686 22.5514H3.47436C3.21561 22.5514 3.00561 22.7614 3.00561 23.0205C3.00561 23.2796 3.21561 23.4897 3.47436 23.4897H4.47686C4.7356 23.4897 4.9456 23.2796 4.9456 23.0205C4.9456 22.7614 4.7356 22.5514 4.47686 22.5514ZM4.97748 20.5455H1.97124C1.71249 20.5455 1.50249 20.7556 1.50249 21.0147C1.50249 21.2738 1.71249 21.4839 1.97124 21.4839H4.97748C5.23623 21.4839 5.44623 21.2738 5.44623 21.0147C5.44623 20.7556 5.23623 20.5455 4.97748 20.5455ZM11.9918 19.9795C16.1181 19.9795 19.4743 16.6197 19.4743 12.4897C19.4743 8.35983 16.1181 5 11.9918 5C7.86559 5 4.50873 8.3599 4.50873 12.4897C4.50873 16.6196 7.86559 19.9795 11.9918 19.9795ZM5.47873 18.5396H0.468748C0.209999 18.5396 0 18.7497 0 19.0088C0 19.2679 0.209999 19.478 0.468748 19.478H5.47873C5.73748 19.478 5.94748 19.2679 5.94748 19.0088C5.94748 18.7497 5.73748 18.5396 5.47873 18.5396ZM11.9918 5.93836C15.6006 5.93836 18.5368 8.87731 18.5368 12.4897C18.5368 16.1022 15.6012 19.0411 11.9918 19.0411C8.38246 19.0411 5.44623 16.1022 5.44623 12.4897C5.44623 8.87731 8.38246 5.93836 11.9918 5.93836ZM11.9918 16.5338C11.7331 16.5338 11.5231 16.7438 11.5231 17.003V17.5044C11.5231 17.7635 11.7331 17.9736 11.9918 17.9736C12.2506 17.9736 12.4606 17.7635 12.4606 17.5044V17.003C12.4606 16.7438 12.2506 16.5338 11.9918 16.5338ZM29.0742 17.5367H26.038C25.9593 17.5367 25.8518 17.5197 25.7893 17.4388C25.7349 17.3675 25.723 17.2529 25.7574 17.1244L26.1605 15.62C26.2536 15.271 26.6355 14.9648 26.978 14.9648H29.0618L29.0742 17.5367ZM9.98745 14.9648C10.1075 14.9648 10.2275 14.919 10.3193 14.8273L11.3381 13.8078C11.535 13.9062 11.7568 13.9618 11.9918 13.9618C12.8024 13.9618 13.4624 13.3014 13.4624 12.4897C13.4624 12.2547 13.4068 12.0325 13.3087 11.8352L15.8299 9.31127C16.0131 9.12804 16.0131 8.83095 15.8299 8.64779C15.6474 8.46449 15.3506 8.46455 15.1674 8.64779L12.6456 11.1717C12.4487 11.0733 12.2268 11.0177 11.9918 11.0177C11.1806 11.0177 10.5212 11.6781 10.5212 12.4898C10.5212 12.7248 10.5768 12.947 10.6749 13.1443L9.65621 14.1639C9.47308 14.3471 9.47308 14.6442 9.65621 14.8274C9.74808 14.919 9.86745 14.9648 9.98745 14.9648ZM11.9918 11.956C12.2856 11.956 12.5249 12.1955 12.5249 12.4897C12.5249 12.784 12.2856 13.0235 11.9918 13.0235C11.6974 13.0235 11.4587 12.784 11.4587 12.4897C11.4587 12.1955 11.6974 11.956 11.9918 11.956ZM16.5006 12.9589H17.0018C17.2606 12.9589 17.4706 12.7489 17.4706 12.4897C17.4706 12.2306 17.2606 12.0206 17.0018 12.0206H16.5006C16.2418 12.0206 16.0318 12.2306 16.0318 12.4897C16.0318 12.7489 16.2418 12.9589 16.5006 12.9589ZM7.95121 12.4897C7.95121 12.2306 7.74184 12.0206 7.48247 12.0206H6.98184C6.72247 12.0206 6.51309 12.2306 6.51309 12.4897C6.51309 12.7489 6.72247 12.9589 6.98184 12.9589H7.48247C7.74184 12.9589 7.95121 12.7489 7.95121 12.4897ZM11.9918 8.44566C12.2506 8.44566 12.4606 8.23559 12.4606 7.97648V7.47502C12.4606 7.21591 12.2506 7.00584 11.9918 7.00584C11.7331 7.00584 11.5231 7.21591 11.5231 7.47502V7.97648C11.5231 8.23566 11.7331 8.44566 11.9918 8.44566Z"/>
</mask>
<path d="M31.5117 18.8365L30.013 17.7638L29.9911 13.2265C29.988 12.5278 29.4674 12.0206 28.7536 12.0206H25.1149C25.1574 11.7732 25.103 11.53 24.9586 11.3419C24.8005 11.1359 24.5518 11.0176 24.2761 11.0176H21.0099C20.7512 11.0176 20.5412 11.2277 20.5412 11.4868C20.5412 11.7459 20.7512 11.956 21.0099 11.956L24.1668 11.9561L20.9274 24.0558H13.8087C13.8181 23.5859 13.6849 23.1455 13.4174 22.7965C13.0481 22.3151 12.4749 22.0499 11.8037 22.0499C10.5975 22.0499 9.39996 22.9066 8.92809 24.0558L6.86747 24.0557L7.78371 20.6345C7.85059 20.3842 7.70247 20.127 7.45184 20.0599C7.20247 19.9931 6.94497 20.1413 6.87809 20.3917L5.9381 23.9021C5.86435 24.1793 5.91435 24.4592 6.0756 24.6699C6.23372 24.8759 6.48247 24.9942 6.7581 24.9942H8.72559C8.71559 25.4641 8.84934 25.9044 9.11684 26.2534C9.48558 26.7349 10.0587 27 10.7299 27C11.9362 27 13.1343 26.1433 13.6056 24.9942H24.2568C24.2468 25.4641 24.3805 25.9044 24.648 26.2534C25.0168 26.7349 25.5899 27 26.2611 27C27.4674 27 28.6655 26.1433 29.1367 24.9942H29.303C30.0667 24.9942 30.8236 24.4009 31.0267 23.6434L31.9486 20.1996C32.0936 19.6556 31.9267 19.1333 31.5117 18.8365ZM12.8181 24.4036C12.5774 25.3023 11.6212 26.0616 10.7299 26.0616C10.3568 26.0616 10.0481 25.9269 9.86058 25.6822C9.65871 25.4191 9.60746 25.0513 9.71558 24.6464C9.9562 23.7476 10.9125 22.9883 11.8037 22.9883C12.1768 22.9883 12.4856 23.123 12.6737 23.3677C12.8749 23.6308 12.9268 23.9987 12.8181 24.4036ZM28.3493 24.4036C28.1086 25.3023 27.1524 26.0616 26.2611 26.0616C25.888 26.0616 25.5793 25.9269 25.3918 25.6822C25.1899 25.4191 25.1386 25.0513 25.2468 24.6464C25.4874 23.7476 26.4436 22.9883 27.3349 22.9883C27.708 22.9883 28.0168 23.123 28.2049 23.3677C28.4061 23.6308 28.458 23.9987 28.3493 24.4036ZM26.798 24.0558C26.5393 24.0558 26.3293 24.2659 26.3293 24.525C26.3293 24.7841 26.5393 24.9942 26.798 24.9942H26.803C27.0618 24.9942 27.2693 24.7841 27.2693 24.525C27.2693 24.2659 27.0568 24.0558 26.798 24.0558ZM11.2668 24.0558C11.0081 24.0558 10.7981 24.2659 10.7981 24.525C10.7981 24.7841 11.0081 24.9942 11.2668 24.9942H11.2718C11.5306 24.9942 11.7381 24.7841 11.7381 24.525C11.7381 24.2659 11.5256 24.0558 11.2668 24.0558ZM30.1211 23.4006C30.0305 23.7373 29.6717 24.0332 29.3399 24.0539C29.3486 23.5847 29.2155 23.145 28.9486 22.7965C28.5792 22.3151 28.0061 22.05 27.3349 22.05C26.1286 22.05 24.9311 22.9067 24.4593 24.0559H21.898L22.7205 20.9825H28.373C28.6318 20.9825 28.8417 20.7724 28.8417 20.5133C28.8417 20.2542 28.6318 20.0441 28.373 20.0441H22.9718L24.8686 12.959H28.7536C28.8899 12.959 29.0524 13.0062 29.0536 13.2311L29.0574 14.0265H26.978C26.2143 14.0265 25.4574 14.6198 25.2543 15.3772L24.8518 16.8816C24.7411 17.2941 24.8118 17.7054 25.0455 18.0101C25.2724 18.3056 25.6343 18.4751 26.038 18.4751H29.3949L30.9667 19.5999C31.1005 19.6955 31.0586 19.8972 31.043 19.9568L31.0192 20.0441H30.3767C30.118 20.0441 29.908 20.2542 29.908 20.5133C29.908 20.7724 30.118 20.9825 30.3767 20.9825H30.768L30.1211 23.4006ZM4.47686 22.5514H3.47436C3.21561 22.5514 3.00561 22.7614 3.00561 23.0205C3.00561 23.2796 3.21561 23.4897 3.47436 23.4897H4.47686C4.7356 23.4897 4.9456 23.2796 4.9456 23.0205C4.9456 22.7614 4.7356 22.5514 4.47686 22.5514ZM4.97748 20.5455H1.97124C1.71249 20.5455 1.50249 20.7556 1.50249 21.0147C1.50249 21.2738 1.71249 21.4839 1.97124 21.4839H4.97748C5.23623 21.4839 5.44623 21.2738 5.44623 21.0147C5.44623 20.7556 5.23623 20.5455 4.97748 20.5455ZM11.9918 19.9795C16.1181 19.9795 19.4743 16.6197 19.4743 12.4897C19.4743 8.35983 16.1181 5 11.9918 5C7.86559 5 4.50873 8.3599 4.50873 12.4897C4.50873 16.6196 7.86559 19.9795 11.9918 19.9795ZM5.47873 18.5396H0.468748C0.209999 18.5396 0 18.7497 0 19.0088C0 19.2679 0.209999 19.478 0.468748 19.478H5.47873C5.73748 19.478 5.94748 19.2679 5.94748 19.0088C5.94748 18.7497 5.73748 18.5396 5.47873 18.5396ZM11.9918 5.93836C15.6006 5.93836 18.5368 8.87731 18.5368 12.4897C18.5368 16.1022 15.6012 19.0411 11.9918 19.0411C8.38246 19.0411 5.44623 16.1022 5.44623 12.4897C5.44623 8.87731 8.38246 5.93836 11.9918 5.93836ZM11.9918 16.5338C11.7331 16.5338 11.5231 16.7438 11.5231 17.003V17.5044C11.5231 17.7635 11.7331 17.9736 11.9918 17.9736C12.2506 17.9736 12.4606 17.7635 12.4606 17.5044V17.003C12.4606 16.7438 12.2506 16.5338 11.9918 16.5338ZM29.0742 17.5367H26.038C25.9593 17.5367 25.8518 17.5197 25.7893 17.4388C25.7349 17.3675 25.723 17.2529 25.7574 17.1244L26.1605 15.62C26.2536 15.271 26.6355 14.9648 26.978 14.9648H29.0618L29.0742 17.5367ZM9.98745 14.9648C10.1075 14.9648 10.2275 14.919 10.3193 14.8273L11.3381 13.8078C11.535 13.9062 11.7568 13.9618 11.9918 13.9618C12.8024 13.9618 13.4624 13.3014 13.4624 12.4897C13.4624 12.2547 13.4068 12.0325 13.3087 11.8352L15.8299 9.31127C16.0131 9.12804 16.0131 8.83095 15.8299 8.64779C15.6474 8.46449 15.3506 8.46455 15.1674 8.64779L12.6456 11.1717C12.4487 11.0733 12.2268 11.0177 11.9918 11.0177C11.1806 11.0177 10.5212 11.6781 10.5212 12.4898C10.5212 12.7248 10.5768 12.947 10.6749 13.1443L9.65621 14.1639C9.47308 14.3471 9.47308 14.6442 9.65621 14.8274C9.74808 14.919 9.86745 14.9648 9.98745 14.9648ZM11.9918 11.956C12.2856 11.956 12.5249 12.1955 12.5249 12.4897C12.5249 12.784 12.2856 13.0235 11.9918 13.0235C11.6974 13.0235 11.4587 12.784 11.4587 12.4897C11.4587 12.1955 11.6974 11.956 11.9918 11.956ZM16.5006 12.9589H17.0018C17.2606 12.9589 17.4706 12.7489 17.4706 12.4897C17.4706 12.2306 17.2606 12.0206 17.0018 12.0206H16.5006C16.2418 12.0206 16.0318 12.2306 16.0318 12.4897C16.0318 12.7489 16.2418 12.9589 16.5006 12.9589ZM7.95121 12.4897C7.95121 12.2306 7.74184 12.0206 7.48247 12.0206H6.98184C6.72247 12.0206 6.51309 12.2306 6.51309 12.4897C6.51309 12.7489 6.72247 12.9589 6.98184 12.9589H7.48247C7.74184 12.9589 7.95121 12.7489 7.95121 12.4897ZM11.9918 8.44566C12.2506 8.44566 12.4606 8.23559 12.4606 7.97648V7.47502C12.4606 7.21591 12.2506 7.00584 11.9918 7.00584C11.7331 7.00584 11.5231 7.21591 11.5231 7.47502V7.97648C11.5231 8.23566 11.7331 8.44566 11.9918 8.44566Z" fill="#0D0C22"/>
<path d="M31.5117 18.8365L30.013 17.7638L29.9911 13.2265C29.988 12.5278 29.4674 12.0206 28.7536 12.0206H25.1149C25.1574 11.7732 25.103 11.53 24.9586 11.3419C24.8005 11.1359 24.5518 11.0176 24.2761 11.0176H21.0099C20.7512 11.0176 20.5412 11.2277 20.5412 11.4868C20.5412 11.7459 20.7512 11.956 21.0099 11.956L24.1668 11.9561L20.9274 24.0558H13.8087C13.8181 23.5859 13.6849 23.1455 13.4174 22.7965C13.0481 22.3151 12.4749 22.0499 11.8037 22.0499C10.5975 22.0499 9.39996 22.9066 8.92809 24.0558L6.86747 24.0557L7.78371 20.6345C7.85059 20.3842 7.70247 20.127 7.45184 20.0599C7.20247 19.9931 6.94497 20.1413 6.87809 20.3917L5.9381 23.9021C5.86435 24.1793 5.91435 24.4592 6.0756 24.6699C6.23372 24.8759 6.48247 24.9942 6.7581 24.9942H8.72559C8.71559 25.4641 8.84934 25.9044 9.11684 26.2534C9.48558 26.7349 10.0587 27 10.7299 27C11.9362 27 13.1343 26.1433 13.6056 24.9942H24.2568C24.2468 25.4641 24.3805 25.9044 24.648 26.2534C25.0168 26.7349 25.5899 27 26.2611 27C27.4674 27 28.6655 26.1433 29.1367 24.9942H29.303C30.0667 24.9942 30.8236 24.4009 31.0267 23.6434L31.9486 20.1996C32.0936 19.6556 31.9267 19.1333 31.5117 18.8365ZM12.8181 24.4036C12.5774 25.3023 11.6212 26.0616 10.7299 26.0616C10.3568 26.0616 10.0481 25.9269 9.86058 25.6822C9.65871 25.4191 9.60746 25.0513 9.71558 24.6464C9.9562 23.7476 10.9125 22.9883 11.8037 22.9883C12.1768 22.9883 12.4856 23.123 12.6737 23.3677C12.8749 23.6308 12.9268 23.9987 12.8181 24.4036ZM28.3493 24.4036C28.1086 25.3023 27.1524 26.0616 26.2611 26.0616C25.888 26.0616 25.5793 25.9269 25.3918 25.6822C25.1899 25.4191 25.1386 25.0513 25.2468 24.6464C25.4874 23.7476 26.4436 22.9883 27.3349 22.9883C27.708 22.9883 28.0168 23.123 28.2049 23.3677C28.4061 23.6308 28.458 23.9987 28.3493 24.4036ZM26.798 24.0558C26.5393 24.0558 26.3293 24.2659 26.3293 24.525C26.3293 24.7841 26.5393 24.9942 26.798 24.9942H26.803C27.0618 24.9942 27.2693 24.7841 27.2693 24.525C27.2693 24.2659 27.0568 24.0558 26.798 24.0558ZM11.2668 24.0558C11.0081 24.0558 10.7981 24.2659 10.7981 24.525C10.7981 24.7841 11.0081 24.9942 11.2668 24.9942H11.2718C11.5306 24.9942 11.7381 24.7841 11.7381 24.525C11.7381 24.2659 11.5256 24.0558 11.2668 24.0558ZM30.1211 23.4006C30.0305 23.7373 29.6717 24.0332 29.3399 24.0539C29.3486 23.5847 29.2155 23.145 28.9486 22.7965C28.5792 22.3151 28.0061 22.05 27.3349 22.05C26.1286 22.05 24.9311 22.9067 24.4593 24.0559H21.898L22.7205 20.9825H28.373C28.6318 20.9825 28.8417 20.7724 28.8417 20.5133C28.8417 20.2542 28.6318 20.0441 28.373 20.0441H22.9718L24.8686 12.959H28.7536C28.8899 12.959 29.0524 13.0062 29.0536 13.2311L29.0574 14.0265H26.978C26.2143 14.0265 25.4574 14.6198 25.2543 15.3772L24.8518 16.8816C24.7411 17.2941 24.8118 17.7054 25.0455 18.0101C25.2724 18.3056 25.6343 18.4751 26.038 18.4751H29.3949L30.9667 19.5999C31.1005 19.6955 31.0586 19.8972 31.043 19.9568L31.0192 20.0441H30.3767C30.118 20.0441 29.908 20.2542 29.908 20.5133C29.908 20.7724 30.118 20.9825 30.3767 20.9825H30.768L30.1211 23.4006ZM4.47686 22.5514H3.47436C3.21561 22.5514 3.00561 22.7614 3.00561 23.0205C3.00561 23.2796 3.21561 23.4897 3.47436 23.4897H4.47686C4.7356 23.4897 4.9456 23.2796 4.9456 23.0205C4.9456 22.7614 4.7356 22.5514 4.47686 22.5514ZM4.97748 20.5455H1.97124C1.71249 20.5455 1.50249 20.7556 1.50249 21.0147C1.50249 21.2738 1.71249 21.4839 1.97124 21.4839H4.97748C5.23623 21.4839 5.44623 21.2738 5.44623 21.0147C5.44623 20.7556 5.23623 20.5455 4.97748 20.5455ZM11.9918 19.9795C16.1181 19.9795 19.4743 16.6197 19.4743 12.4897C19.4743 8.35983 16.1181 5 11.9918 5C7.86559 5 4.50873 8.3599 4.50873 12.4897C4.50873 16.6196 7.86559 19.9795 11.9918 19.9795ZM5.47873 18.5396H0.468748C0.209999 18.5396 0 18.7497 0 19.0088C0 19.2679 0.209999 19.478 0.468748 19.478H5.47873C5.73748 19.478 5.94748 19.2679 5.94748 19.0088C5.94748 18.7497 5.73748 18.5396 5.47873 18.5396ZM11.9918 5.93836C15.6006 5.93836 18.5368 8.87731 18.5368 12.4897C18.5368 16.1022 15.6012 19.0411 11.9918 19.0411C8.38246 19.0411 5.44623 16.1022 5.44623 12.4897C5.44623 8.87731 8.38246 5.93836 11.9918 5.93836ZM11.9918 16.5338C11.7331 16.5338 11.5231 16.7438 11.5231 17.003V17.5044C11.5231 17.7635 11.7331 17.9736 11.9918 17.9736C12.2506 17.9736 12.4606 17.7635 12.4606 17.5044V17.003C12.4606 16.7438 12.2506 16.5338 11.9918 16.5338ZM29.0742 17.5367H26.038C25.9593 17.5367 25.8518 17.5197 25.7893 17.4388C25.7349 17.3675 25.723 17.2529 25.7574 17.1244L26.1605 15.62C26.2536 15.271 26.6355 14.9648 26.978 14.9648H29.0618L29.0742 17.5367ZM9.98745 14.9648C10.1075 14.9648 10.2275 14.919 10.3193 14.8273L11.3381 13.8078C11.535 13.9062 11.7568 13.9618 11.9918 13.9618C12.8024 13.9618 13.4624 13.3014 13.4624 12.4897C13.4624 12.2547 13.4068 12.0325 13.3087 11.8352L15.8299 9.31127C16.0131 9.12804 16.0131 8.83095 15.8299 8.64779C15.6474 8.46449 15.3506 8.46455 15.1674 8.64779L12.6456 11.1717C12.4487 11.0733 12.2268 11.0177 11.9918 11.0177C11.1806 11.0177 10.5212 11.6781 10.5212 12.4898C10.5212 12.7248 10.5768 12.947 10.6749 13.1443L9.65621 14.1639C9.47308 14.3471 9.47308 14.6442 9.65621 14.8274C9.74808 14.919 9.86745 14.9648 9.98745 14.9648ZM11.9918 11.956C12.2856 11.956 12.5249 12.1955 12.5249 12.4897C12.5249 12.784 12.2856 13.0235 11.9918 13.0235C11.6974 13.0235 11.4587 12.784 11.4587 12.4897C11.4587 12.1955 11.6974 11.956 11.9918 11.956ZM16.5006 12.9589H17.0018C17.2606 12.9589 17.4706 12.7489 17.4706 12.4897C17.4706 12.2306 17.2606 12.0206 17.0018 12.0206H16.5006C16.2418 12.0206 16.0318 12.2306 16.0318 12.4897C16.0318 12.7489 16.2418 12.9589 16.5006 12.9589ZM7.95121 12.4897C7.95121 12.2306 7.74184 12.0206 7.48247 12.0206H6.98184C6.72247 12.0206 6.51309 12.2306 6.51309 12.4897C6.51309 12.7489 6.72247 12.9589 6.98184 12.9589H7.48247C7.74184 12.9589 7.95121 12.7489 7.95121 12.4897ZM11.9918 8.44566C12.2506 8.44566 12.4606 8.23559 12.4606 7.97648V7.47502C12.4606 7.21591 12.2506 7.00584 11.9918 7.00584C11.7331 7.00584 11.5231 7.21591 11.5231 7.47502V7.97648C11.5231 8.23566 11.7331 8.44566 11.9918 8.44566Z" stroke="#0D0C22" stroke-width="0.4" mask="url(#path-1-outside-1_414_150)"/>
</g>
<defs>
<clipPath id="clip0_414_150">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
`;
const checkSvg = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0001 29.3333C23.3639 29.3333 29.3334 23.3638 29.3334 16C29.3334 8.63619 23.3639 2.66666 16.0001 2.66666C8.63628 2.66666 2.66675 8.63619 2.66675 16C2.66675 23.3638 8.63628 29.3333 16.0001 29.3333Z" stroke="black" stroke-width="2"/>
<path d="M22.0007 12.0007L14.0007 20.0007L10.0007 16.3643" stroke="black" stroke-width="2"/>
</svg>
`;
const revSvg = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0001 6.66669L16.6534 7.98669L18.1067 8.20002L17.0534 9.22669L17.2934 10.6667L16.0001 9.98669L14.7067 10.6667L14.9467 9.22669L13.8934 8.20002L15.3467 7.98669L16.0001 6.66669ZM25.3334 9.33335L25.9867 10.6534L27.4401 10.8667L26.3867 11.88L26.6401 13.3334L25.3334 12.6534L24.0267 13.3334L24.2801 11.88L23.2267 10.8667L24.6801 10.6534L25.3334 9.33335ZM6.66675 9.33335L7.32008 10.6534L8.77341 10.8667L7.72008 11.88L7.96008 13.3334L6.66675 12.6534L5.37341 13.3334L5.61341 11.88L4.56008 10.8667L6.01341 10.6534L6.66675 9.33335ZM9.33341 26.6667H2.66675L4.00008 24L2.66675 21.3334H9.33341V26.6667ZM22.6667 26.6667H29.3334L28.0001 24L29.3334 21.3334H22.6667V26.6667ZM9.33341 18.6667H22.6667V24H9.33341V18.6667Z" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
</svg>
`;

const style = `
<style>
.product-info__add-button button{
    padding: 16px;
    border-radius: 8px;
    background: #3C9342;
}
.qty-input.qty-input--combined{
    border: 1px solid #E9E9E9;
    border-radius: 8px;
}
.qty-input.qty-input--combined button{
    background: #F5F5F5!important;
    border-radius: 0!important;
    height: 100%!important;
}
.qty-input.qty-input--combined button:first-child{
    border-right: 1px solid #E9E9E9!important;
}
.qty-input.qty-input--combined button:last-child{
    border-left: 1px solid #E9E9E9!important;
}
.price__default {
    display: flex;
    align-items: baseline;
    font-size: 16px;
    gap:4px;
}
.price__default span{
    font-size: 16px;
    font-weight: 500;
    color: #1D1D1D;
}
.price__default strong{
    font-size: 16px;
    font-weight: 700;
    color: #1D1D1D;
}
.price__default s{
    font-size: 16px;
    font-weight: 400;
    color: #9A9A9A;
}
.price__default .product-label.product-label--sale{
    color: #000000;
    font-size: 14px;
}
.new-usp{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 20px;
    gap: 12px;
}
.new-usp .single-usp{
    display: grid;
    background: #F6F6F6;
    padding: 8px;
    border-radius: 8px;
    place-items: center;
}
.new-usp .single-usp svg{
    margin-bottom: 4px;
}
.new-usp .single-usp strong{
    font-size: 11px;
    font-weight: 700;
    
     color: #FF6B00 ! important;
}
.new-usp .single-usp span{
    font-size: 9px;
    font-weight: 400;
     color: #FF6B00 ! important;
}
@media (max-width:767px){
    .new-usp{
        grid-template-columns: 1fr;
    }
}
.price.price--on-sale .price__default strong {
    color: #1d1d1d;
}
.product-info__price .price--on-sale .price__current{
    color: #FF6B00 ! important;
    font-size: 24px;
}
.card--sticky-atc .card__info p {
    margin-bottom: .1em;
    font-size: 12px;
}
.card--sticky-atc .price__current {
    white-space: break-spaces;
    font-size: 12px;
}
.price__default s {
    font-size: 12px;
    font-weight: 400;
    color: #9A9A9A;
}
.price__default span {
    font-size: 16px;
    font-weight: 500;
    color: #FF6B00;
    padding:5px; 
}
.new-usp .single-usp strong {
    font-size: 11px;
    font-weight: 700;
    color: #4b4846 ! important;
}
.new-usp .single-usp span {
    font-size: 9px;
    font-weight: 400;
    color: #5d5956 ! important;
}
.product-info__add-to-cart.flex{
    flex-wrap: wrap;
}
.product-info__add-to-cart.flex quantity-input{
    flex: 1;
    max-width: 120px;
}
.product-info__add-to-cart.flex .product-info__add-button{
    margin-left: 0;
    margin-top: 10px;
}
#shopify-section-sections--20989124510027__icons_with_text_3xjEpL{
display: none!important;
}
</style>
`;

const nowElm = `<span>Nu</span>`;

const uspElm = `
<div class="new-usp">
    <div class="single-usp">
        ${truckSvg}
        <strong>Gratis fragt</strong>
        <span>Ordrer over 499 DKK</span>
    </div>
    <div class="single-usp">
        ${checkSvg}
        <strong>Hurtig afsendelse</strong>
        <span>1-3 hverdage</span>
    </div>
    <div class="single-usp">
        ${revSvg}
        <strong>185.000+ kunder</strong>
        <span>4.4 stjerner</span>
    </div>
</div>
`;

const interval = setInterval(() => {
	try {
		const priceDefault = document.querySelector('.price__default');
		const priceCart = document.querySelector('.product-info__add-to-cart.flex');
		const saveElm = document.querySelector(
			'.block.product-info__block.product-info__block--sm'
		);
		const quantityInput = document.querySelector(
			'.product-info__add-to-cart.flex quantity-input'
		);
		const productInventory = document.querySelector(
			'product-inventory.product-inventory'
		);
		const inventoryText = productInventory.querySelector(
			'.product-inventory__text span:last-child p'
		);
		const head = document.querySelector('head');
		if (
			priceDefault &&
			quantityInput &&
			productInventory &&
			priceCart &&
			inventoryText &&
			head &&
			!document.querySelector('.new-usp')
		) {
			head.insertAdjacentHTML('beforeend', style);
			if (inventoryText.innerText === 'Only a few left') {
				inventoryText.innerText = 'Selling Fast. Only Few Items Left!';
			}
			quantityInput.insertAdjacentElement('afterend', productInventory);
			priceDefault.insertAdjacentHTML('afterbegin', nowElm);
			priceDefault.insertAdjacentElement('beforeend', saveElm);
			priceCart.insertAdjacentHTML('afterend', uspElm);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
