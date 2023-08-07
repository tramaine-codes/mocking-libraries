import { Substitute } from "@fluffy-spoon/substitute";
import { describe, test } from "vitest";
import { Bar } from "../../src/bar";
import { Foo } from "../../src/foo";

const bar = Substitute.for<Bar>();
const log = Substitute.for<typeof console.log>();

describe("substitute", () => {
  test("verify log is called", () => {
    const foo = new Foo(bar, log);
    bar.bar().returns("1");

    foo.foo();

    bar.received().baz({ bar: "1" }, log);
  });
});
