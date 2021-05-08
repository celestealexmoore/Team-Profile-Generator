const internProfile = require('../lib/internProfile');

describe("Intern constructor", () => {
    describe("Initialization", () => {

        it("Should be an object instance of the Intern Class", () => {
            expect(typeof new internProfile()).toBe("object");
        })

        it("Should have internName, internId, internEmail, and internSchool properties", () => {
            const internName = "Beyonce Knowles Carter";
            const internId = 34567;
            const internEmail = "yonce@bodyody.com";
            const internSchool = "Beychella University";
            const newIntern = new Intern(internName, internId, internEmail, internSchool);

            expect(newIntern.internName).toEqual(internName);
            expect(newIntern.internId).toEqual(internId);
            expect(newIntern.internEmail).toEqual(internEmail);
            expect(newIntern.internSchool).toEqual(internSchool);
        })
    })

    describe("getRole function", () => {
        it("Should retrieve the intern's role (intern)", () => {
            const internName = "Beyonce Knowles Carter";
            const internId = 34567;
            const internEmail = "yonce@bodyody.com";
            const internSchool = "Beychella University";
            const newIntern = new Intern(internName, internId, internEmail, internSchool);

            expect(newIntern.getRole()).toBe("Intern");
        })
    })

    describe("getSchool function", () => {
        it("Should retrieve the intern's school name", () => {
            const internName = "Beyonce Knowles Carter";
            const internId = 34567;
            const internEmail = "yonce@bodyody.com";
            const internSchool = "Beychella University";
            const newIntern = new Intern(internName, internId, internEmail, internSchool);

            expect(newIntern.getSchool()).toBe(school);
        })
    })
})