const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
} = require("./farm");

// original test
describe("getYieldForPlant", () => {
    test("Get yield for plant with no environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
        };


        expect(getYieldForPlant(corn)).toBe(30);
    });

    // test with extra environment factors
    test("Get yield for plant with mutliple and only relevant environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                ground: {
                    sand: -50,
                    clay: 10,
                    mud: 0
                }
            }
        }
        const environmentFactors = {
            sun: "low",
            wind: "high",
            ground: "clay",
        };


        expect(getYieldForPlant(corn, environmentFactors)).toBe(16.5);
    });
})

// original test
describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };

        expect(getYieldForCrop(input)).toBe(30);
    });

    // test with extra environmentfactors
    test("Get yield for crop, with environment factor sun and rain", () => {
        const corn = {
            name: "corn",
            numPlants: 5,
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                rain: {
                    low: -20,
                    medium: 0,
                    high: -50,
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "high",
            rain: "low",
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(36);
    });
});

// original test
describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });

    // test with environment factors
    test("Calculate total yield with multiple crops and environtFactors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                rain: {
                    low: -20,
                    medium: 0,
                    high: -50,
                },
            },
        };
        const pumpkin = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                ground: {
                    sand: -50,
                    clay: 10,
                    mud: 0
                }
            },
        };
        const environmentFactors = {
            sun: "high",
            rain: "low",
            ground: "clay"
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops }, environmentFactors)).toBe(27.9);
    })
})

describe("getCostsForCrop", () => {
    test("calculate the costs for 1 field of the same plants ", () => {
        const corn = {
            name: "corn",
            costOfOnePlant: 1,
            numPlants: 10,
        };
        const input = {
            crop: corn,
        };
        expect(getCostsForCrop(input)).toBe(10)
    });
});

// original test 
describe("getRevenueForCrop", () => {
    test("calculate the revenue for a crop", () => {
        const apple = {
            name: "Apple",
            salePrice: 2,
            yield: 5,
        };
        const input = {
            crop: apple,
        };
        expect(getRevenueForCrop(input)).toBe(10)
    });

    // test with environment factors
    test("calculate the revenue for a crop with environment factors", () => {
        const apple = {
            name: "Apple",
            salePrice: 2,
            yield: 5,
            factors: {
                sun: {
                    low: -25,
                    medium: 0,
                    high: 25,
                },
                ground: {
                    sand: -25,
                    clay: 20,
                    mud: 0
                }
            }
        };
        const input = {
            crop: apple,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "high",
            rain: "low",
            ground: "clay"
        };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(150)
    });
});

// original test
describe("getProfitForCrop", () => {
    test("calculate the profit for a crop", () => {
        const apple = {
            name: "Apple",
            salePrice: 3,
            costOfOnePlant: 2,
            numPlants: 5,
            yield: 7,

        };
        const input = {
            crop: apple,
        };
        expect(getProfitForCrop(input)).toBe(11)
    });

    // test with environment factors
    test("calculate the profit for a crop with environmentfactors", () => {
        const apple = {
            name: "Apple",
            salePrice: 3,
            costOfOnePlant: 2,
            numPlants: 10,
            yield: 7,
            factors: {
                sun: {
                    low: -25,
                    medium: 0,
                    high: 50,
                },
                ground: {
                    sand: -25,
                    clay: 20,
                    mud: 0
                }
            }
        };
        const input = {
            crop: apple,
            numCrops: 6,
        };
        const environmentFactors = {
            sun: "high",
            rain: "low",
            ground: "sand"
        };
        expect(getProfitForCrop(input, environmentFactors)).toBe(121.75)
    });
});

// original test
describe("getTotalProfit", () => {
    test("Calculate total profit with multiple crops", () => {
        const corn = {
            name: "corn",
            salePrice: 3,
            costOfOnePlant: 2,
            numPlants: 3,
            yield: 4
        };
        const pumpkin = {
            name: "pumpkin",
            salePrice: 4,
            costOfOnePlant: 4,
            numPlants: 5,
            yield: 7
        };
        const crops = [
            { crop: corn },
            { crop: pumpkin },
        ];
        expect(getTotalProfit({ crops })).toBe(14);
    });

    // test with environment factors
    test("Calculate total profit with multiple crops with environmentFactors", () => {
        const corn = {
            name: "corn",
            salePrice: 3,
            costOfOnePlant: 2,
            numPlants: 3,
            yield: 4,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                ground: {
                    sand: -50,
                    clay: 10,
                    mud: 0
                }
            },
        };
        const pumpkin = {
            name: "pumpkin",
            salePrice: 4,
            costOfOnePlant: 4,
            numPlants: 5,
            yield: 7,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                rain: {
                    low: -25,
                    medium: 0,
                    high: -50,
                },
            },
        };
        const environmentFactors = {
            sun: "high",
            rain: "low",
            ground: "clay"
        };
        const crops = [
            { crop: corn, numCrops: 10, },
            { crop: pumpkin, numCrops: 7, },
        ];
        expect(getTotalProfit({ crops }, environmentFactors)).toBe(392.5);
    });
})