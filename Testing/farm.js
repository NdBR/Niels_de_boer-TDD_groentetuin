const getYieldForPlant = plant => plant.yield;

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

const getTotalYield = (wholeCropsObject) =>
    (wholeCropsObject.crops).map(crop => getYieldForCrop(crop)).reduce((cTotal, i) => i + cTotal);

const getCostsForCrop = (crop) => crop.numPlants * crop.crop.costOfOnePlant

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop
}