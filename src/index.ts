import { Base } from './import';

export const Greeter = (name: string): string => Base.run(`Hello ${name}`);
