var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const pino_1 = __importDefault(require("pino"));
export const default = (0, pino_1.default)({ timestamp: () => `,"time":"${new Date().toJSON()}"` });
