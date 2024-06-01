import * as td from "testdouble";
import { afterEach, describe, test } from "vitest";
import { Bar } from "../../src/bar.js";
import { Foo } from "../../src/foo.js";

const bar = td.instance(Bar);
const log = td.func(console.log);

afterEach(() => {
	td.reset();
});

describe("testdouble", () => {
	test("verify log is called", () => {
		const foo = new Foo(bar, log);
		td.when(bar.bar()).thenReturn("1");

		foo.foo();

		td.verify(bar.baz({ bar: "1" }, log));
	});
});
