require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth pulse purpose gesture local force gentle'; 
let testAccounts = [
"0xd606c6feaa7723ad06e6a255e493d4517df3351ad7177367689b854d85818124",
"0xdeece0d5d3b526e854850218c0b61a5bce3d172c6fc059d376dee4e298a23e5a",
"0x49994024dad599e0653299b7884dcb899617766b532d05fc28a99306f0f16985",
"0xe0ae36120919fe9011eb0b6b51ee40e2cb96c8aee3cf15237a5f79d323682850",
"0xdf7c94082fabd6087690d05ba381451ce49b049bfb1be22b9fdde3211012bf13",
"0xcad89cc8c9ed9a3ed61c014ab38eb1e31f5e759e7ce04e63453ffd0ecd7f3170",
"0x1c3173a92928937451150cbbdcfcdffcec9337c9dd57c340f05daa70e999ac99",
"0x85f0346651d08b0e6daf4ac407228d5cf93e7828a54c8d6e787f86169b4c436a",
"0x3ff02e0efbf29b40c3e8ba9fc4b50df4071150f0a9575370332c45f7272614b3",
"0xa7d2f19bb577321edaff26fd4d070eda6f4f06c95ec3d59496e4c3e3fe0627a8"
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

