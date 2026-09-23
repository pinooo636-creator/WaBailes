var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
export const makeCacheManagerAuthState = export const makeInMemoryStore = void 0;
import make_cache_manager_store_1 from "./make-cache-manager-store";
export const makeCacheManagerAuthState = make_cache_manager_store_1.default;
import make_in_memory_store_1 from "./make-in-memory-store";
export const makeInMemoryStore = make_in_memory_store_1.default;
