import { Command } from "./command";
import { Hello } from "./commands/hello";
import { Random } from "./commands/random_number";
import { ShowButton } from "./commands/button";

export const Commands: Command[] = [
    Hello,
    Random,
    ShowButton
];