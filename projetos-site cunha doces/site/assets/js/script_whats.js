var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?55285';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
    "enabled": true,
    "chatButtonSetting": {
        "backgroundColor": "#4dc247",
        "ctaText": "Whats",
        "borderRadius": "25",
        "marginLeft": "0",
        "marginBottom": "75",
        "marginRight": "22",
        "position": "right"
    },
    "brandSetting": {
        "brandName": "CunhaDoces",
        "brandSubTitle": "Será um prazer servi-lo!",
        "brandImg": "assets/images/logo2.png",
        "welcomeText": "Olá como vai!\nGostaria de fazer um pedido?",
        "backgroundColor": "#0a5f54",
        "ctaText": "Pedido",
        "borderRadius": "25",
        "autoShow": false,
        "phoneNumber": "5511968342166"
    }
};
s.onload = function() {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);