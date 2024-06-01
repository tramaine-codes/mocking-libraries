export class Bar {
	bar = () => "bar";

	baz = ({ bar }: { bar: string }, log: typeof console.log) => log(bar);
}
