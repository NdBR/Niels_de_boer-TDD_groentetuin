const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
} = require("./farm");

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
            wind: {
                high: -25
            }
        },
    };

    const environmentFactors = {
        sun: "low",
        wind: "high",
    };
    test("Get yield for plant with 1 environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });
});

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