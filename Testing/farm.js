// yield = produce of plant
const getYieldForPlant = plant => plant.yield;

//total yield of one kind of crop = number of crops * yield of crop
const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

const getTotalYield = (wholeCropsObject) =>
    (wholeCropsObject.crops).map(crop => getYieldForCrop(crop)).reduce((cTotal, i) => i + cTotal);

//  costs = number of plants * cost of 1 plant
const getCostsForCrop = (input) => input.numPlants * input.crop.costOfOnePlant;

// revenue = kilo * salePrice
const getRevenueForCrop = (input) => input.numKilo * input.crop.salePrice;

// profit = revenue - cost
const getProfitForCrop = (input) => getRevenueForCrop(input) - getCostsForCrop(input)

// total profit = profit crop + profit crop
const getTotalProfit = (AllCropsTogether) =>
    (AllCropsTogether.crops).map(input => getProfitForCrop(input)).reduce((cTotal, i) => i + cTotal)


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
}