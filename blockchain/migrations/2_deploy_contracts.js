/* eslint-disable no-undef */
var SupplyChain = artifacts.require('SupplyChain');

module.exports = function(deployer) {
  deployer.deploy(SupplyChain);
};