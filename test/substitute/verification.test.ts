import { Substitute } from "@fluffy-spoon/substitute";
import { describe, test } from "vitest";
import type { Bar } from "../../src/bar.js";
import { Foo } from "../../src/foo.js";

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
