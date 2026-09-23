export const jidNormalizedUser = export const isJidNewsLetter = export const isJidStatusBroadcast = export const isJidGroup = export const isJidBroadcast = export const isLidUser = export const isJidUser = export const areJidsSameUser = export const jidDecode = export const jidEncode = export const STORIES_JID = export const PSA_WID = export const SERVER_JID = export const OFFICIAL_BIZ_JID = export const S_WHATSAPP_NET = void 0;
export const S_WHATSAPP_NET = '@s.whatsapp.net';
export const OFFICIAL_BIZ_JID = '16505361212@c.us';
export const SERVER_JID = 'server@c.us';
export const PSA_WID = '0@c.us';
export const STORIES_JID = 'status@broadcast';
const jidEncode = (user, server, device, agent) => {
    return `${user || ''}${!!agent ? `_${agent}` : ''}${!!device ? `:${device}` : ''}@${server}`;
};
export const jidEncode = jidEncode;
const jidDecode = (jid) => {
    const sepIdx = typeof jid === 'string' ? jid.indexOf('@') : -1;
    if (sepIdx < 0) {
        return undefined;
    }
    const server = jid.slice(sepIdx + 1);
    const userCombined = jid.slice(0, sepIdx);
    const [userAgent, device] = userCombined.split(':');
    const user = userAgent.split('_')[0];
    return {
        server,
        user,
        domainType: server === 'lid' ? 1 : 0,
        device: device ? +device : undefined
    };
};
export const jidDecode = jidDecode;
/** is the jid a user */
const areJidsSameUser = (jid1, jid2) => {
    var _a, _b;
    return (((_a = (0, exports.jidDecode)(jid1)) === null || _a === void 0 ? void 0 : _a.user) === ((_b = (0, exports.jidDecode)(jid2)) === null || _b === void 0 ? void 0 : _b.user));
};
export const areJidsSameUser = areJidsSameUser;
/** is the jid a user */
const isJidUser = (jid) => (jid === null || jid === void 0 ? void 0 : jid.endsWith('@s.whatsapp.net'));
export const isJidUser = isJidUser;
/** is the jid a group */
const isLidUser = (jid) => (jid === null || jid === void 0 ? void 0 : jid.endsWith('@lid'));
export const isLidUser = isLidUser;
/** is the jid a broadcast */
const isJidBroadcast = (jid) => (jid === null || jid === void 0 ? void 0 : jid.endsWith('@broadcast'));
export const isJidBroadcast = isJidBroadcast;
/** is the jid a group */
const isJidGroup = (jid) => (jid === null || jid === void 0 ? void 0 : jid.endsWith('@g.us'));
export const isJidGroup = isJidGroup;
/** is the jid the status broadcast */
const isJidStatusBroadcast = (jid) => jid === 'status@broadcast';
export const isJidStatusBroadcast = isJidStatusBroadcast;
/** is the jid the newsletter */
const isJidNewsLetter = (jid) => (jid === null || jid === void 0 ? void 0 : jid.endsWith('newsletter'));
export const isJidNewsLetter = isJidNewsLetter;
const jidNormalizedUser = (jid) => {
    const result = (0, exports.jidDecode)(jid);
    if (!result) {
        return '';
    }
    const { user, server } = result;
    return (0, exports.jidEncode)(user, server === 'c.us' ? 's.whatsapp.net' : server);
};
export const jidNormalizedUser = jidNormalizedUser;
