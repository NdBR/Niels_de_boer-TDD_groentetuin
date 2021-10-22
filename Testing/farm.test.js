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
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

// test wit extra environment factors
describe("getYieldForPlant", () => {
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

        test
            ("Get yield for plant with mutliple and only relevant environment factors", () => {
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
});
// test with extra environmentfactors
describe("getYieldForCrop", () => {
    test("Get yield for crop, with environment factor sun and rain", () => {
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
});

// test with environment factors
describe("getTotalYield", () => {

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
            costOfOnePlant: 1
        };
        const input = {
            crop: corn,
            numPlants: 10,
        };
        expect(getCostsForCrop(input)).toBe(10)
    });
});

describe("getRevenueForCrop", () => {
    test("calculate the revenue for a crop", () => {
        const apple = {
            name: "Apple",
            salePrice: 2
        };
        const input = {
            crop: apple,
            numKilo: 5,
        };
        expect(getRevenueForCrop(input)).toBe(10)
    });
});

describe("getProfitForCrop", () => {
    test("calculate the profit for a crop", () => {
        const apple = {
            name: "Apple",
            salePrice: 3,
            costOfOnePlant: 2
        };
        const input = {
            crop: apple,
            numKilo: 7,
            numPlants: 5,
        };
        expect(getProfitForCrop(input)).toBe(11)
    });
});

describe("getTotalProfit", () => {
    test("Calculate total profit with multiple crops", () => {
        const corn = {
            name: "corn",
            salePrice: 3,
            costOfOnePlant: 2
        };
        const pumpkin = {
            name: "pumpkin",
            salePrice: 4,
            costOfOnePlant: 4
        };
        const crops = [
            { crop: corn, numPlants: 3, numKilo: 4 },
            { crop: pumpkin, numPlants: 5, numKilo: 7 },
        ];
        expect(getTotalProfit({ crops })).toBe(14);
    });
})

// describe("something", () => {
//     test("what to test", () => {
//     expect(functie()).toBe()

//     })
// })