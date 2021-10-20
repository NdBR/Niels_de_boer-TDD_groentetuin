const getYieldForPlant = plant => plant.yield;

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

const getTotalYield = (wholeCropsObject) =>
    (wholeCropsObject.crops).map(crop => getYieldForCrop(crop)).reduce((cTotal, i) => i + cTotal)

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield
}