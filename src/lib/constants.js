const CKNFT_ADDRESS_LOCALHOST = "";
const CKNFT_ADDRESS_RINKEBY = "";
const CKNFT_ADDRESS_MAINNET = "";
const CKNFT_ADDRESS_GOERLI = "";

const deploymentOptions = ["localhost", "goerli", "mainnet", "rinkeby"];
const DEPLOY_TO = deploymentOptions[1]; // change this for localhost vs testnet vs mainnet

export let CKNFT_ADDRESS;
export let CORRECT_CHAIN_ID;
export let OPENSEA_URL;
export let ETHERSCAN_URL;
if (DEPLOY_TO === deploymentOptions[0]) {
  // localhost
  CKNFT_ADDRESS = CKNFT_ADDRESS_LOCALHOST;
  CORRECT_CHAIN_ID = "0x539"; // 1337
  OPENSEA_URL = "#";
  ETHERSCAN_URL = "#";
} else if (DEPLOY_TO === deploymentOptions[1]) {
   // rinkeby
CKNFT_ADDRESS = CKNFT_ADDRESS_RINKEBY;
CORRECT_CHAIN_ID = "0x4"; // 4
OPENSEA_URL = "https://testnets.opensea.io";
ETHERSCAN_URL = "https://rinkeby.etherscan.io";
}