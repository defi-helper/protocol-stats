"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const CoinMarketCapProvider_1 = __importDefault(require("./coins/CoinMarketCapProvider"));
const ConfigManager_1 = __importDefault(require("../../../shared/ConfigManager"));
const CoingeckoProvider_1 = __importDefault(require("./coins/CoingeckoProvider"));
const { OK } = http_status_codes_1.default;
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res
        .status(OK)
        .json({
        coinGecko: yield (new CoingeckoProvider_1.default())
            .get(ConfigManager_1.default.get('COINGECKO_COIN_PAGE_URL')),
        coinMarketCap: yield (new CoinMarketCapProvider_1.default())
            .get(ConfigManager_1.default.get('COINMARKETCAP_COIN_PAGE_URL')),
    });
});
