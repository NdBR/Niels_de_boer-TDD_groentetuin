const getYieldForPlant = plant => plant.yield;

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

const getTotalYield = (crops) => {
    const arrayCrops = crops.crops
    const totalYield = arrayCrops
        .map(obj => getYieldForCrop(obj))
        .reduce((currentTotal, item) => item + currentTotal)
    return totalYield
}


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield
}