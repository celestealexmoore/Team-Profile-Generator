const Manager = require('../lib/manager');

describe("Manager constructor", () => {
    describe("Initialization", () => {

        it("Should be an object instance of the Engineer Class", () => {
            expect(typeof new manager()).toBe("object");
        })

        it("Should have managerName, managerId, managerEmail, and managerOfficeNum properties", () => {
            const managerName = "Ida Shalilian";
            const managerId = 67890;
            const managerEmail = "idaboss@gmail.com";
            const managerOfficeNum = "67890";
            const newManager = new Manager(managerName, managerId, managerEmail, managerOfficeNum);

            expect(newManager.managerName).toEqual(managerName);
            expect(newManager.managerId).toEqual(managerId);
            expect(newManager.managerEmail).toEqual(managerEmail);
            expect(newManager.managerOfficeNum).toEqual(managerOfficeNum);
        })
    })

    describe("getRole function", () => {
        it("Should retrieve the manager's role (Manager)", () => {
            const managerName = "Ida Shalilian";
            const managerId = 67890;
            const managerEmail = "idaboss@gmail.com";
            const managerOfficeNum = "110005";
            const newManager = new Manager(managerName, managerId, managerEmail, managerOfficeNum);

            expect(newManager.getRole()).toBe("Manager");
        })
    })

    describe("getOfficeNum function", () => {
        it("Should retrieve the Manager's office number", () => {
            const managerName = "Ida Shalilian";
            const managerId = 567890;
            const managerEmail = "idaboss@gmail.com";
            const managerOfficeNum = "110005";
            const newManager = new Manager(managerName, managerId, managerEmail, managerOfficeNum);

            expect(newManager.getOfficeNum()).toBe(managerOfficeNum);
        })
    })
})