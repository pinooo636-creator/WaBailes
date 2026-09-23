export const getHistoryMsg = export const downloadAndProcessHistorySyncNotification = export const processHistoryMessage = export const downloadHistory = void 0;
import util_1 from "util";
import zlib_1 from "zlib";
import WAProto_1 from "../../WAProto";
import Types_1 from "../Types";
import WABinary_1 from "../WABinary";
import generics_1 from "./generics";
import messages_1 from "./messages";
import messages_media_1 from "./messages-media";
const inflatePromise = (0, util_1.promisify)(zlib_1.inflate);
const downloadHistory = async (msg, options) => {
    const stream = await (0, messages_media_1.downloadContentFromMessage)(msg, 'md-msg-hist', { options });
    const bufferArray = [];
    for await (const chunk of stream) {
        bufferArray.push(chunk);
    }
    let buffer = Buffer.concat(bufferArray);
    // decompress buffer
    buffer = await inflatePromise(buffer);
    const syncData = WAProto_1.proto.HistorySync.decode(buffer);
    return syncData;
};
export const downloadHistory = downloadHistory;
const processHistoryMessage = (item) => {
    var _a, _b, _c;
    const messages = [];
    const contacts = [];
    const chats = [];
    switch (item.syncType) {
        case WAProto_1.proto.HistorySync.HistorySyncType.INITIAL_BOOTSTRAP:
        case WAProto_1.proto.HistorySync.HistorySyncType.RECENT:
        case WAProto_1.proto.HistorySync.HistorySyncType.FULL:
            for (const chat of item.conversations) {
                contacts.push({ 
                    id: chat.id,
                    name: chat.name || undefined,
                    lid: chat.lidJid || undefined,
                    jid: (0, WABinary_1.isJidUser)(chat.id) ? chat.id : undefined
                });
                const msgs = chat.messages || [];
                delete chat.messages;
                delete chat.archived;
                delete chat.muteEndTime;
                delete chat.pinned;
                for (const item of msgs) {
                    const message = item.message;
                    messages.push(message);
                    if (!((_a = chat.messages) === null || _a === void 0 ? void 0 : _a.length)) {
                        // keep only the most recent message in the chat array
                        chat.messages = [{ message }];
                    }
                    if (!message.key.fromMe && !chat.lastMessageRecvTimestamp) {
                        chat.lastMessageRecvTimestamp = (0, generics_1.toNumber)(message.messageTimestamp);
                    }
                    if ((message.messageStubType === Types_1.WAMessageStubType.BIZ_PRIVACY_MODE_TO_BSP
                        || message.messageStubType === Types_1.WAMessageStubType.BIZ_PRIVACY_MODE_TO_FB)
                        && ((_b = message.messageStubParameters) === null || _b === void 0 ? void 0 : _b[0])) {
                        contacts.push({
                            id: message.key.participant || message.key.remoteJid,
                            verifiedName: (_c = message.messageStubParameters) === null || _c === void 0 ? void 0 : _c[0],
                        });
                    }
                }
                if ((0, WABinary_1.isJidUser)(chat.id) && chat.readOnly && chat.archived) {
                    delete chat.readOnly;
                }
                chats.push({ ...chat });
            }
            break;
        case WAProto_1.proto.HistorySync.HistorySyncType.PUSH_NAME:
            for (const c of item.pushnames) {
                contacts.push({ id: c.id, notify: c.pushname });
            }
            break;
    }
    return {
        chats,
        contacts,
        messages,
    };
};
export const processHistoryMessage = processHistoryMessage;
const downloadAndProcessHistorySyncNotification = async (msg, options) => {
    const historyMsg = await (0, exports.downloadHistory)(msg, options);
    return (0, exports.processHistoryMessage)(historyMsg);
};
export const downloadAndProcessHistorySyncNotification = downloadAndProcessHistorySyncNotification;
const getHistoryMsg = (message) => {
    var _a;
    const normalizedContent = !!message ? (0, messages_1.normalizeMessageContent)(message) : undefined;
    const anyHistoryMsg = (_a = normalizedContent === null || normalizedContent === void 0 ? void 0 : normalizedContent.protocolMessage) === null || _a === void 0 ? void 0 : _a.historySyncNotification;
    return anyHistoryMsg;
};
export const getHistoryMsg = getHistoryMsg;
