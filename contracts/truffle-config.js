module.exports = {
  networks: {
    forked: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '1',
      skipDryRun: true,
      gasPrice: 130000000000, // 130 gwei
    },
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    useColors: true,
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.6.12',
      settings: {
        optimizer: {
          enabled: true,
          runs: 1000,
        },
      },
    },
  },
};
