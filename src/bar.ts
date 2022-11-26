export class Bar {
  bar() {
    return 'bar';
  }

  baz({ bar }: { bar: string }, log: typeof console.log) {
    log(bar);
  }
}
