// Above-mentioned will work or use this simple form
require.config({
  paths: {
    'crypto-js': 'node_modules/crypto-js/crypto-js', 'gencryption': 'node_modules/gencryption/main'
  }
});


require(["crypto-js"], function (CryptoJS) {
  console.log(CryptoJS.HmacSHA1("Message", "Key"));
});

require(['gencryption'], function (Gencryption) {
  console.log(Gencryption.md5('Message', 'Key'));
});
