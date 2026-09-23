
import chalk from "chalk";

console.log(chalk.hex("#9b59b6")(
" _____ _____ _   _  ____   ____ \n" +
"|  __ \\  _  | \\ | |/ __ \\ / __ \\ \n" +
"| |__) || | |  \\| | |  | | |  | | \n" +
"|  ___/ | | | . | |  | | |  | | \n" +
"| |    _| |_| |\\  | |__| | |__| | \n" +
"|_|   |_____|_| \\_|\\____/ \\____/ \n" +
" _          __      ________ _   _ _____  ______ _____ \n" +
"| |        /\\ \\    / /  ____| \\ | |  __ \\|  ____|  __ \\ \n" +
"| |       /  \\ \\  / /| |__  |  \\| | |  | | |__  | |__) | \n" +
"| |      / /\\ \\ \\/ / |  __| | . | |  | |  __| |  _  / \n" +
"| |____ / ____ \\  /  | |____| |\\  | |__| | |____| | \\ \\ \n" +
"|______/_/    \\_\\/   |______|_| \\_|_____/|______|_|  \\_\\"
));
console.log(chalk.hex("#6f00f")("Baileys modified by: pinoolavender\n"));
console.log(chalk.hex("#6f00f")("Follow @pinoolavender For More Updates"));
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
import Socket_1 from "./Socket";
export const makeWASocket = Socket_1.default;
export * from "../WAProto";
export * from "./Utils";
export * from "./Types";
export * from "./Store";
export * from "./Defaults";
export * from "./WABinary";
export * from "./WAM";
export * from "./WAUSync";

