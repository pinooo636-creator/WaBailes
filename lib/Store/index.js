var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
export const makeCacheManagerAuthState = export const makeInMemoryStore = void 0;
const make_cache_manager_store_1 = __importDefault(require("./make-cache-manager-store"));
export const makeCacheManagerAuthState = make_cache_manager_store_1.default;
const make_in_memory_store_1 = __importDefault(require("./make-in-memory-store"));
export const makeInMemoryStore = make_in_memory_store_1.default;
