const ChadChef = artifacts.require('ChadChef');
const BigNumber = require('bignumber.js');
const {
  abi: erc20_abi,
} = require('@openzeppelin/contracts/build/contracts/ERC20');

BigNumber.set({EXPONENTIAL_AT: [-70, 200]});

contract('ChadChef', (accounts) => {
  const [main_account, someone_else] = accounts;

  it('something about chad chef', async () => {
    const instance = await ChadChef.deployed();
  });
});
