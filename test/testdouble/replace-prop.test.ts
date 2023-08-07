import * as td from "testdouble";
import { expect, test } from "vitest";

td.config({
  ignoreWarnings: true,
});

interface Foo {
  bar: readonly string[];
  baz?: readonly number[];
}

test("replace baz", () => {
  const foo = td.object<Foo>();
  td.replace(foo, "baz", [1, 2, 3]);

  expect(foo.baz).toEqual([1, 2, 3]);
});
