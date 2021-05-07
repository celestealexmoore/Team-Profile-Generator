class managerProfile {
    constructor(managerName, managerEmail, managerOfficeNum, managerID) {
        this.managerName = managerName;
        this.managerID = managerID;
        this.managerOfficeNum = managerOfficeNum;
        this.managerEmail = managerEmail;
    }
    getName() {
        return this.managerName;
    }
    getId() {
        return this.managerID;
    }
    getEmail() {
        return this.managerOfficeNum;
    }
    getGithub() {
        return this.managerEmail;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = managerProfile;