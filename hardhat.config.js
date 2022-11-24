
require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-waffle")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
// require("hardhat-contract-sizer")
require("dotenv").config()

const GORL_RPC_URL = process.env.GORL_RPC_URL
const GORL_PRIVATE_KEY = process.env.GORL_PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const LOCAL_RPC_URL = process.env.LOCAL_RPC_URL
const COINMARKETCAP_KEY = process.env.COINMARETCAP_API_KEY

module.exports = {

    defaultNetwork: "hardhat",

    networks: {
        gorl: {
            url: GORL_RPC_URL,
            accounts: [GORL_PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
        local: { url: LOCAL_RPC_URL, chainId: 31337 },
    },

    namedAccounts: {
        deployer: {
            default: 0,
        },
        user: {
            default: 1,
        },
    },
    // solidity: "0.8.17",
    solidity: {
        compilers: [{ version: "0.8.17" }, { version: "0.6.6" }],
    },
    etherscan: {
        apiKey: {
            goerli: ETHERSCAN_API_KEY,
        },
    },

    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_KEY,
    },
}
