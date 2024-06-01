import sinon from "sinon";
import { afterEach, describe, test } from "vitest";
import { Bar } from "../../src/bar.js";
import { Foo } from "../../src/foo.js";

const bar = sinon.createStubInstance(Bar);
const log = sinon.fake(console.log);

afterEach(() => {
	sinon.reset();
});

describe("sinon", () => {
	test("verify log is called", () => {
		const foo = new Foo(bar, log);
		bar.bar.returns("1");

		foo.foo();

		sinon.assert.calledWith(bar.baz, { bar: "1" }, log);
	});
});
