const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Counter', () => {
  let counter;

  beforeEach(async () => {
    const Counter = await ethers.getContractFactory('Counter');
    counter = await Counter.deploy('My Counter', 1);
  })

  describe('Deployment', () => {

    it('sets the initial count', async () => {
      expect(count = await counter.count()).to.equal(1)
    })

    it('sets the initial name', async () => {
      expect(name = await counter.name()).to.equal('My Counter')
    })
  })

})
