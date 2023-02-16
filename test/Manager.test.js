const Manager = require("../lib/Manager");

describe("Manager subclass", () => {
  describe("getName", () => {
    it("returns stephen", () => {
      expect(new Manager("stephen", "1", "manager@softmicro", "47").getName()).toBe("stephen");
    });
  });

  describe("getId", () => {
    it("returns 1", () => {
      expect(new Manager("stephen", "1", "manager@softmicro", "47").getId()).toBe("1");
    });
  });

  describe("getEmail", () => {
    it("returns manager@softmicro", () => {
      expect(new Manager("stephen", "1", "manager@softmicro", "47").getEmail()).toBe("manager@softmicro");
    });
  });

  describe("getRole", () => {
    it("returns Manager", () => {
      expect(new Manager("stephen", "1", "manager@softmicro", "47").getRole()).toBe("Manager");
    });
  });
});
