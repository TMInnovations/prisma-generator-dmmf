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
Object.defineProperty(exports, "__esModule", { value: true });
exports.onGenerate = onGenerate;
const node_fs_1 = require("node:fs");
const prettier_1 = require("prettier");
function onGenerate(options) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const dmmf = JSON.stringify(options.dmmf);
        // Write the generated types to a file
        const outputDir = (_b = (_a = options.generator.output) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "./prisma/generated/dmmf";
        const fullLocaltion = `${outputDir}/dmmf.json`;
        // Make sure the output directory exists, if not create it
        (0, node_fs_1.mkdirSync)(outputDir, { recursive: true });
        // Format the generated code
        const formattedCode = yield (0, prettier_1.format)(dmmf, {
            parser: "json",
        });
        // Write the formatted code to a file
        (0, node_fs_1.writeFileSync)(fullLocaltion, formattedCode);
    });
}
