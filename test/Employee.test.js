const Employee = require('../lib/Employee');

describe("Employee subclass", () => {
    describe("getName", () => {
      it("returns getname", () => {
        expect(new Employee("getname", "getid", "getemail", "getrole").getName()).toBe("getname");
      });
    });
  
    describe("getId", () => {
      it("returns getid", () => {
        expect(new Employee("getname", "getid", "getemail", "getrole").getId()).toBe("getid");
      });
    });
  
    describe("getEmail", () => {
      it("returns getemail", () => {
        expect(new Employee("getname", "getid", "getemail", "getrole").getEmail()).toBe("getemail");
      });
    });
  
    describe("getRole", () => {
      it("returns Employee", () => {
        expect(new Employee("getname", "getid", "getemail", "getrole").getRole()).toBe("Employee");
      });
    });
  });
  

