const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Counter', () => {

  it('stores the count', () => {
    const Counter = ethers.getContractFactory('Counter');
    const count = Counter.deploy('My Counter', 1);

    expect(count).to.equal(1)
    // Fetch the count
    // Check the count to make sure it's what we expect
  })
})
