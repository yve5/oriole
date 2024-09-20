import ThemeButton from './features/themeButton';
import Hello from './Hello';

export function greet(name) {
  console.log(`Hello, ${name}!`);
}

export function sayHello2(name) {
  console.log('Hello World!');
}

export const sayHello = () => console.log('Hello World!');

export { ThemeButton, Hello };
