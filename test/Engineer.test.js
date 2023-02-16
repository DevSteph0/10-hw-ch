const Engineer = require("../lib/Engineer");

describe("Engineer subclass", () => {
  describe("getName", () => {
    it("returns Steven", () => {
      expect(new Engineer("Steven", "2", "engineer@softmicro", "DevSteph0").getName()).toBe("Steven");
    });
  });

  describe("getId", () => {
    it("returns 2", () => {
      expect(new Engineer("Steven", "2", "engineer@softmicro", "DevSteph0").getId()).toBe("2");
    });
  });

  describe("getEmail", () => {
    it("returns engineer@softmicro", () => {
      expect(new Engineer("Steven", "2", "engineer@softmicro", "DevSteph0").getEmail()).toBe("engineer@softmicro");
    });
  });

  describe("getGithub", () => {
    it("returns DevSteph0", () => {
      expect(new Engineer("Steven", "2", "engineer@softmicro", "DevSteph0").getGithub()).toBe("DevSteph0");
    });
  });

  describe("getRole", () => {
    it("returns Engineer", () => {
      expect(new Engineer("Steven", "2", "engineer@softmicro", "DevSteph0").getRole()).toBe("Engineer");
    });
  });
});