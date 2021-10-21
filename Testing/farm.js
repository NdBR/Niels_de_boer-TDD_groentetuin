const getYieldForPlant = plant => plant.yield;

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

const getTotalYield = (wholeCropsObject) =>
    (wholeCropsObject.crops).map(crop => getYieldForCrop(crop)).reduce((cTotal, i) => i + cTotal);

const getCostsForCrop = (input) => input.numPlants * input.crop.costOfOnePlant;

const getRevenueForCrop = (input) => input.numKilo * input.crop.salePrice;


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop
}