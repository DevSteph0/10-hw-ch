const Intern = require("../lib/Intern");

describe("Intern subclass", () => {
  describe("getName", () => {
    it("returns Stephanie", () => {
      expect(new Intern("Stephanie", "3", "intern@softmicro", "UW Seattle").getName()).toBe("Stephanie");
    });
  });

  describe("getId", () => {
    it("returns 3", () => {
      expect(new Intern("Stephanie", "3", "intern@softmicro", "UW Seattle").getId()).toBe("3");
    });
  });

  describe("getEmail", () => {
    it("returns intern@softmicro", () => {
      expect(new Intern("Stephanie", "3", "intern@softmicro", "UW Seattle").getEmail()).toBe("intern@softmicro");
    });
  });

  describe("getSchool", () => {
    it("returns UW Seattle", () => {
      expect(new Intern("Stephanie", "3", "intern@softmicro", "UW Seattle").getSchool()).toBe("UW Seattle");
    });
  });

  describe("getRole", () => {
    it("returns Intern", () => {
      expect(new Intern("Stephanie", "3", "intern@softmicro", "UW Seattle").getRole()).toBe("Intern");
    });
  });
});