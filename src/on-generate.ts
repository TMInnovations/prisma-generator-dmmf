import type { GeneratorOptions } from "@prisma/generator-helper";
import { mkdirSync, writeFileSync } from "node:fs";
import { format } from "prettier";

export async function onGenerate(options: GeneratorOptions) {
  const dmmf = JSON.stringify(options.dmmf);

  // Write the generated types to a file
  const outputDir =
    options.generator.output?.value ?? "./prisma/generated/dmmf";
  const fullLocaltion = `${outputDir}/dmmf.json`;

  // Make sure the output directory exists, if not create it
  mkdirSync(outputDir, { recursive: true });

  // Format the generated code
  const formattedCode = await format(dmmf, {
    parser: "json",
  });

  // Write the formatted code to a file
  writeFileSync(fullLocaltion, formattedCode);
}
