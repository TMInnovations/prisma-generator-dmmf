import type { GeneratorManifest } from "@prisma/generator-helper";

export function onManifest(): GeneratorManifest {
  return {
    defaultOutput: "./prisma/generated/dmmf",
    prettyName: "DMMF Generator",
  };
}
