const ChadChef = artifacts.require('ChadChef');

const moar_addr = '';
const dev_addr = '';
const per_block = 0;
const start_block = 0;
const bonus_end_block = 0;

module.exports = function (deployer, network, accounts) {
  deployer.deploy(
    ChadChef,
    moar_addr,
    dev_addr,
    per_block,
    start_block,
    bonus_end_block
  );
};
