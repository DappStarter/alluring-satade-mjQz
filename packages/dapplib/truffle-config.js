require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remind history inner arctic bone gate'; 
let testAccounts = [
"0x1173b7dcd7cce91d77e2fa7bedc22d53770584278001530d81766293eeb5671a",
"0xca7098348fe2309f823f26648920d874f2bbaae5623bd20c8ea20875f4048050",
"0xb0d0a752d9fa7c93c2868e4bdd7e9e44c3da35df5964c3300157269fbb0701f4",
"0xd484b2176bdba301369e64095ed065f9b6f84d38613eb7112824d462aa68a02e",
"0xb4b4892a6aa823f9302c217ad75ad0350788f887b2e4cce2e095bc5c9a0daa73",
"0x56724a3be73c985915e316f3dec688316acfe0a81858c75b92e07ad85e88105f",
"0xdba05cdb5aa903f5682d73fd874c3c7337ce0af2f671e8916ddaff8a698e6612",
"0xf184badd95432ac6f5b7fdae30064c9d9f3bd65332b992d36ee97399692d5faa",
"0x15d59d9d2848084c096213ac8b826d1d10caf65cf9c768633c4f63e831d83ef2",
"0x38e1059470cfa5e6d060d0487abd6169bd4c71a57b81307a4a5473d446850341"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

