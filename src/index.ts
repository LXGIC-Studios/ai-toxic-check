import OpenAI from "openai";
import * as fs from "fs";
import * as path from "path";

const openai = new OpenAI();

export async function generate(input: string): Promise<string> {
  const files = fs.readdirSync(input, { recursive: true }) as string[];
  const codeFiles = files.filter((f: string) => /\.(ts|tsx|js|jsx|py|rb|go|md|txt|yaml|yml)$/.test(f)).slice(0, 30);
  const contents = codeFiles.map((f: string) => {
    try { return `--- ${f} ---\n` + fs.readFileSync(path.join(input, f), "utf-8").slice(0, 2000); } catch { return ""; }
  }).join("\n\n");
  const userContent = `Review this code for exclusionary language:\n\n${contents}`;
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: `You are an inclusive language reviewer. Analyze code for exclusionary, problematic, or outdated terminology (master/slave, whitelist/blacklist, dummy, sanity check, etc). For each finding, suggest an inclusive alternative. Be practical, not preachy. Format as a clear report with file, line context, issue, and suggestion.` },
      { role: "user", content: userContent }
    ],
    temperature: 0.7,
  });
  return response.choices[0].message.content || "";
}
