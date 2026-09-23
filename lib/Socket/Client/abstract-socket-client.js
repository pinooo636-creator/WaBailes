export const AbstractSocketClient = void 0;
import events_1 from "events";
class AbstractSocketClient extends events_1.EventEmitter {
    constructor(url, config) {
        super();
        this.url = url;
        this.config = config;
        this.setMaxListeners(0);
    }
}
export const AbstractSocketClient = AbstractSocketClient;
