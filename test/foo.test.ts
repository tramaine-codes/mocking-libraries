import { Substitute } from "@fluffy-spoon/substitute";
import sinon from "sinon";
import * as td from "testdouble";
import { afterEach, test } from "vitest";
import { Bar } from "../src/bar";
import { Foo } from "../src/foo";

const bar1 = td.instance(Bar);
const log1 = td.func(console.log);

const bar2 = Substitute.for<Bar>();
const log2 = Substitute.for<typeof console.log>();

const bar3 = sinon.createStubInstance(Bar);
const log3 = sinon.fake(console.log);

afterEach(() => {
  td.reset();
  sinon.reset();
});

test("foo with testdouble", () => {
  const foo = new Foo(bar1, log1);
  td.when(bar1.bar()).thenReturn("1");

  foo.foo();

  td.verify(bar1.baz({ bar: "1" }, log1));
});

test("foo with substitute", () => {
  const foo = new Foo(bar2, log2);
  bar2.bar().returns("1");

  foo.foo();

  bar2.received().baz({ bar: "1" }, log2);
});

test("foo with sinon", () => {
  const foo = new Foo(bar3, log3);
  bar3.bar.returns("1");

  foo.foo();

  sinon.assert.calledWith(bar3.baz, { bar: "1" }, log3);
});
