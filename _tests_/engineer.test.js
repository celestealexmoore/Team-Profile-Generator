const engineerProfile = require('../lib/engineer');

describe("Engineer constructor", () => {
    describe("Initialization", () => {

        it("Should be an object instance of the Engineer Class", () => {
            expect(typeof new engineerProfile()).toBe("object");
        })

        it("Should have engineerName, engineerId, engineerEmail, and engineerGithub properties", () => {
            const engineerName = "Celeste Moore";
            const engineerId = 12345;
            const engineerEmail = "celestealexmoore@gmail.com";
            const engineerGithub = "celestealexmoore";
            const newEngineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);

            expect(newEngineer.engineerName).toEqual(engineerName);
            expect(newEngineer.engineerId).toEqual(engineerId);
            expect(newEngineer.engineerEmail).toEqual(engineerEmail);
            expect(newEngineer.engineerGithub).toEqual(engineerGithub);
        })
    })

    describe("getRole function", () => {
        it("Should retrieve the engineer's role (Engineer)", () => {
            const engineerName = "Celeste Moore";
            const engineerId = 12345;
            const engineerEmail = "celestealexmoore@gmail.com";
            const engineerGithub = "celestealexmoore"
            const newEngineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);

            expect(newEngineer.getRole()).toBe("Engineer");
        })
    })

    describe("getGithub function", () => {
        it("Should retrieve the engineer's github profile name", () => {
            const engineerName = "Celeste Moore";
            const engineerId = 12345;
            const engineerEmail = "celestealexmoore@gmail.com";
            const engineerGithub = "celestealexmoore";
            const newEngineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);

            expect(newEngineer.getGithub()).toBe(engineerGithub);
        })
    })
})
