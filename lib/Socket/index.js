import Defaults_1 from "../Defaults";
import registration_1 from "./registration";
// export the last socket layer
const makeWASocket = (config) => ((0, registration_1.makeRegistrationSocket)({
    ...Defaults_1.DEFAULT_CONNECTION_CONFIG,
    ...config
}));
export const default = makeWASocket;
export const makeWASocket = makeWASocket;
