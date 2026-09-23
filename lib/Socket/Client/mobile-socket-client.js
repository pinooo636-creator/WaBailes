export const MobileSocketClient = void 0;
import net_1 from "net";
import abstract_socket_client_1 from "./abstract-socket-client";
class MobileSocketClient extends abstract_socket_client_1.AbstractSocketClient {
    constructor() {
        super(...arguments);
        this.socket = null;
    }
    get isOpen() {
        var _a;
        return ((_a = this.socket) === null || _a === void 0 ? void 0 : _a.readyState) === 'open';
    }
    get isClosed() {
        var _a;
        return this.socket === null || ((_a = this.socket) === null || _a === void 0 ? void 0 : _a.readyState) === 'closed';
    }
    get isClosing() {
        var _a;
        return this.socket === null || ((_a = this.socket) === null || _a === void 0 ? void 0 : _a.readyState) === 'closed';
    }
    get isConnecting() {
        var _a;
        return ((_a = this.socket) === null || _a === void 0 ? void 0 : _a.readyState) === 'opening';
    }
    async connect() {
        var _a;
        if (this.socket) {
            return;
        }
        if (this.config.agent) {
            throw new Error('There are not support for proxy agent for mobile connection');
        }
        else {
            this.socket = (0, net_1.connect)({
                host: this.url.hostname,
                port: Number(this.url.port) || 443
            });
        }
        this.socket.setMaxListeners(0);
        const events = ['close', 'connect', 'data', 'drain', 'end', 'error', 'lookup', 'ready', 'timeout'];
        for (const event of events) {
            (_a = this.socket) === null || _a === void 0 ? void 0 : _a.on(event, (...args) => this.emit(event, ...args));
        }
        this.socket.on('data', (...args) => this.emit('message', ...args));
        this.socket.on('ready', (...args) => this.emit('open', ...args));
    }
    async close() {
        if (!this.socket) {
            return;
        }
        return new Promise(resolve => {
            this.socket.end(resolve);
            this.socket = null;
        });
    }
    send(str, cb) {
        if (this.socket === null) {
            return false;
        }
        return this.socket.write(str, undefined, cb);
    }
}
export const MobileSocketClient = MobileSocketClient;
