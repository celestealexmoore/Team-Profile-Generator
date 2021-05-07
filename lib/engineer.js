class engineerProfile {
    constructor(engineerName, engineerID, engineerEmail, engineerGithub) {
        this.engineerName = engineerName;
        this.engineerID = engineerID;
        this.engineerEmail = engineerEmail;
        this.engineerGithub = engineerGithub;
    }
    getName() {
        return this.engineerName;
    }
    getId() {
        return this.engineerID;
    }
    getEmail() {
        return this.engineerEmail;
    }
    getGithub() {
        return this.engineerGithub;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = engineerProfile;