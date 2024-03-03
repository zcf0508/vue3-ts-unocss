import type { Except } from 'type-fest';

interface Foo {
  unicorn: string
  rainbow: boolean
}

type FooWithoutRainbow = Except<Foo, 'rainbow'>;
// => {unicorn: string}
