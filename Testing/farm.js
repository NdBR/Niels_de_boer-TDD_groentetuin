const getYieldForPlant = plant => plant.yield;

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

const getTotalYield = (crops) => 1;

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield
}