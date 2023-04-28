import { ArrayBasic } from "../../src/array/array-basic";

describe("sayHello", function () {
  it("get default length", function () {
    expect(new ArrayBasic().getLength()).toEqual(10);
  })
}); 