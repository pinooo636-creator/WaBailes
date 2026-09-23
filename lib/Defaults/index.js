var __importDefault = this && this.__importDefault || function (a) {
    return a && a.__esModule ? a : { "default": a }
};


exports.DEFAULT_CACHE_TTLS =
    exports.INITIAL_PREKEY_COUNT =
    exports.MIN_PREKEY_COUNT =
    exports.MEDIA_KEYS =
    exports.MEDIA_HKDF_KEY_MAPPING =
    exports.MEDIA_PATH_MAP =
    exports.DEFAULT_CONNECTION_CONFIG =
    exports.PROCESSABLE_HISTORY_TYPES =
    exports.WA_CERT_DETAILS =
    exports.URL_REGEX =
    exports.NOISE_WA_HEADER =
    exports.KEY_BUNDLE_TYPE =
    exports.DICT_VERSION =
    exports.NOISE_MODE =
    exports.WA_DEFAULT_EPHEMERAL =
    exports.PHONE_CONNECTION_CB =
    exports.DEF_TAG_PREFIX =
    exports.DEF_CALLBACK_PREFIX =
    exports.DEFAULT_ORIGIN =
    exports.UNAUTHORIZED_CODES =
    void 0;

import crypto_1 from "crypto";
import { proto } from "../../WAProto";
import libsignal_1 from "../Signal/libsignal";
import Utils_1 from "../Utils";
import logger_1 from "../Utils/logger";
import baileys_version_json_1 from "./baileys-version.json" assert { type: "json" };
import phonenumber_mcc_json_1 from "./phonenumber-mcc.json" assert { type: "json" };

export const UNAUTHORIZED_CODES = [401, 403, 419];
export const version = [2, 3000, 1027934701];
export const PHONENUMBER_MCC = phonenumber_mcc_json_1.default;
export const DEFAULT_ORIGIN = "https://web.whatsapp.com";
export const MOBILE_ENDPOINT = 'g.whatsapp.net';
export const MOBILE_PORT = 443;
export const DEF_CALLBACK_PREFIX = "CB:";
export const DEF_TAG_PREFIX = "TAG:";
export const PHONE_CONNECTION_CB = "CB:Pong";
export const WA_DEFAULT_EPHEMERAL = 604800;
const WA_VERSION = '2.25.23.24';
const WA_VERSION_HASH = (0, crypto_1.createHash)('md5').update(WA_VERSION).digest('hex');
export const MOBILE_TOKEN = Buffer.from('0a1mLfGUIBVrMKF1RdvLI5lkRBvof6vn0fD2QRSM' + WA_VERSION_HASH);
export const MOBILE_REGISTRATION_ENDPOINT = 'https://v.whatsapp.net/v2';
export const MOBILE_USERAGENT = `WhatsApp/${WA_VERSION} iOS/17.5.1 Device/Apple-iPhone_13`;
export const REGISTRATION_PUBLIC_KEY = Buffer.from([
    5, 142, 140, 15, 116, 195, 235, 197, 215, 166, 134, 92, 108, 60, 132, 56, 86, 176, 97, 33, 204, 232, 234, 119, 77,
    34, 251, 111, 18, 37, 18, 48, 45,
]);
export const NOISE_MODE = "Noise_XX_25519_AESGCM_SHA256\x00\x00\x00\x00";
export const DICT_VERSION = 2;
export const KEY_BUNDLE_TYPE = Buffer.from([5]);
export const NOISE_WA_HEADER = Buffer.from([87, 65, 6, exports.DICT_VERSION]);
export const PROTOCOL_VERSION = [5, 2];
export const MOBILE_NOISE_HEADER = Buffer.concat([Buffer.from('WA'), Buffer.from(exports.PROTOCOL_VERSION)]);

export const URL_REGEX = /https:\/\/(?![^:@\/\s]+:[^:@\/\s]+@)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?/g;
export const WA_CERT_DETAILS = { SERIAL: 0 };

export const PROCESSABLE_HISTORY_TYPES = [
    "INITIAL_BOOTSTRAP",
    "PUSH_NAME",
    "RECENT",
    "FULL",
    "ON_DEMAND"
];

export const DEFAULT_CONNECTION_CONFIG = {
    version: baileys_version_json_1.version,
    browser: Utils_1.Browsers("Chrome"),
    waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
    connectTimeoutMs: 2E4,
    keepAliveIntervalMs: 3E4,
    logger: logger_1.default.child({ class: "baileys" }),
    printQRInTerminal: !1,
    emitOwnEvents: !0,
    defaultQueryTimeoutMs: 6E4,
    customUploadHosts: [],
    retryRequestDelayMs: 250,
    maxMsgRetryCount: 5,
    fireInitQueries: !0,
    auth: void 0,
    markOnlineOnConnect: !0,
    syncFullHistory: !1,
    patchMessageBeforeSending: a => a,
    shouldSyncHistoryMessage: () => !0,
    shouldIgnoreJid: () => !1,
    linkPreviewImageThumbnailWidth: 192,
    transactionOpts: { maxCommitRetries: 10, delayBetweenTriesMs: 3E3 },
    generateHighQualityLinkPreview: !1,
    options: {},
    appStateMacVerification: { patch: !1, snapshot: !1 },
    countryCode: "US",
    getMessage: async () => { },
    cachedGroupMetadata: async () => { },
    makeSignalRepository: libsignal_1.makeLibSignalRepository
};

export const MEDIA_PATH_MAP = {
    image: "/mms/image",
    video: "/mms/video",
    document: "/mms/document",
    audio: "/mms/audio",
    sticker: "/mms/image",
    "thumbnail-link": "/mms/image",
    "product-catalog-image": "/product/image",
    "md-app-state": "",
    "md-msg-hist": "/mms/md-app-state"
};

export const MEDIA_HKDF_KEY_MAPPING = {
    audio: "Audio",
    document: "Document",
    gif: "Video",
    image: "Image",
    ppic: "",
    product: "Image",
    ptt: "Audio",
    sticker: "Image",
    video: "Video",
    "thumbnail-document": "Document Thumbnail",
    "thumbnail-image": "Image Thumbnail",
    "thumbnail-video": "Video Thumbnail",
    "thumbnail-link": "Link Thumbnail",
    "md-msg-hist": "History",
    "md-app-state": "App State",
    "product-catalog-image": "",
    "payment-bg-image": "Payment Background",
    ptv: "Video"
};

export const MEDIA_KEYS = Object.keys(exports.MEDIA_PATH_MAP);
export const MIN_PREKEY_COUNT = 5;
export const INITIAL_PREKEY_COUNT = 30;

export const DEFAULT_CACHE_TTLS = {
    SIGNAL_STORE: 300,
    MSG_RETRY: 3600,
    CALL_OFFER: 300,
    USER_DEVICES: 300
};
