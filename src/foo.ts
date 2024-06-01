import type { Bar } from "./bar";

export class Foo {
	constructor(
		private readonly bar: Bar,
		private readonly log: typeof console.log,
	) {}

	foo = () => {
		const bar = this.bar.bar();

		this.bar.baz({ bar }, this.log);
	};
}
