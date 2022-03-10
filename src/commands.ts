import { Command } from "./command";
import { Hello } from "./commands/hello";
import { Random } from "./commands/random_number";

export const Commands: Command[] = [
    Hello,
    Random,
];