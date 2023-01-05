import { TestService } from "../../../src/services/test.service";

describe("TestService", function () {
    it("serviceMethod1 returns 0", function () {
        const testSvc = new TestService();
        expect(testSvc.serviceMethod1()).toBe(1);
    });
});