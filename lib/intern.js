class internProfile {
    constructor(internName, internID, internEmail, internSchool) {
        this.internName = internName;
        this.internID = internID;
        this.internEmail = internEmail;
        this.internSchool = internSchool;
    }
    getName() {
        return this.internName;
    }
    getId() {
        return this.internID;
    }
    getEmail() {
        return this.internEmail;
    }
    getGithub() {
        return this.internSchool;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = internProfile;