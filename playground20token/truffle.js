var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = process.env.MNEMONIC;
var infuraAccessToken = process.env.INFURA_ACCESS_TOKEN;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
  	// テストネット用デプロイ設定
  	ropsten: {
  		provider: function() {
        	return new HDWalletProvider(
        		mnemonic,
          		"https://ropsten.infura.io/" + infuraAccessToken
        	);
      	},
      	network_id: 3,
    	gas: 4000000,
    	gasPrice: 21000000000	// 21 Gwei
  	}
  }
};
