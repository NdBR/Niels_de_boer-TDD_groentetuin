// yield = produce of plant
const getYieldForPlant = (plant, environmentFactors) => {
    if (environmentFactors) {
        const getEnvironment = Object.entries(environmentFactors) //make array of factors
        const YieldPlusfactorArray = [plant.yield]

        getEnvironment.forEach(item => {
            if (plant.factors[item[0]]) { //check if the factor is in plant object
                YieldPlusfactorArray.push(((plant.factors[item[0]][item[1]]) / 100) + 1)
                    //  item[0] refers to name of factor( exp: sun), 
                    // item[1] refers to name of value ( exp: low)
            }
        })
        return YieldPlusfactorArray.reduce((a, b) => a * b) //mutiply all 

    } else return plant.yield
}

//total yield of one kind of crop = number of crops * yield of crop
const getYieldForCrop = (object, environmentFactors) => {
    if (environmentFactors) {
        // calculate yield of one crop
        const getEnvironment = Object.entries(environmentFactors) //make array of factors
        const YieldPlusfactorArray = [object.crop.yield]

        getEnvironment.forEach(item => {
            if (object.crop.factors[item[0]]) { //check if the factor is in crop object
                YieldPlusfactorArray.push(((object.crop.factors[item[0]][item[1]]) / 100) + 1)
                    //  item[0] refers to name of factor( exp: sun), 
                    // item[1] refers to name of value ( exp: low)
            }
        })
        return (YieldPlusfactorArray.reduce((a, b) => a * b)) * object.numCrops // calculate total of crops

    } else return object.crop.yield * object.numCrops
}

// total yield of all crops = all yield of induvidual crop added together
const getTotalYield = (wholeCropsObject, environmentFactors) => {
    if (environmentFactors) {
        return (wholeCropsObject.crops)
            .map(crop => getYieldForCrop(crop, environmentFactors)).reduce((cTotal, i) => i + cTotal);

    } else return (wholeCropsObject.crops)
        .map(crop => getYieldForCrop(crop)).reduce((cTotal, i) => i + cTotal);
}

//  costs = number of plants * cost of 1 plant
const getCostsForCrop = (input) => input.crop.numPlants * input.crop.costOfOnePlant;

// revenue = kilo * salePrice
const getRevenueForCrop = (input, environmentFactors) => {
    if (environmentFactors) {
        return (getYieldForCrop(input, environmentFactors) * input.crop.salePrice)

    } else return input.crop.yield * input.crop.salePrice;
}

// profit = revenue - cost
const getProfitForCrop = (input, environmentFactors) => {
    if (environmentFactors) {
        return (getRevenueForCrop(input, environmentFactors) - getCostsForCrop(input))

    } else return getRevenueForCrop(input) - getCostsForCrop(input)
}

// total profit = profit crop + profit crop
const getTotalProfit = (AllCropsTogether, environmentFactors) => {
    if (environmentFactors) {
        return (AllCropsTogether.crops).map(input => getProfitForCrop(input, environmentFactors)).reduce((cTotal, i) => i + cTotal)

    } else return (AllCropsTogether.crops).map(input => getProfitForCrop(input)).reduce((cTotal, i) => i + cTotal)
}
module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
}