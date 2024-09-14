"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onManifest = onManifest;
function onManifest() {
    return {
        defaultOutput: "./prisma/generated/dmmf",
        prettyName: "DMMF Generator",
    };
}
