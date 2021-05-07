const engineerProfile = require('../lib/engineerProfile');

describe("Engineer constructor", () => {
    describe("Initialization", () => {

        it("Should be an object instance of the Engineer Class", () => {
            expect(typeof new engineerProfile()).toBe("object");
        })

        it("Should have engineerName, engineerId, engineerEmail, and engineerGithub properties", () => {
            const engineerName = "Celeste";
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
            const empName = "Cesar";
            const empId = 1;
            const empEmail = "tester@test.com";
            const github = "CesarOCampos";
            const newEngineer = new Engineer(empName, empId, empEmail, github);

            expect(newEngineer.getRole()).toBe("Engineer");
        })
    })

    describe("getGitHub function", () => {
        it("Should retrieve the engineer's github profile name", () => {
            const engineerName = "Celeste";
            const engineerId = 12345;
            const engineerEmail = "celestealexmoore@gmail.com";
            const github = "celestealexmoore";
            const newEngineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);

            expect(newEngineer.getGitHub()).toBe(github);
        })
    })
})
