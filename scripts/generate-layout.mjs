import fs from "node:fs";
import path from "node:path";

const inputPath = path.join("react-email", "out", "layout.html");
const outputPath = path.join("layouts", "default.html");

let html = fs.readFileSync(inputPath, "utf8");

const replacements = {
  __BODY__: "{{ .Body }}",
  __SUBJECT__: "{{ .Subject }}",
  __ZEROPS_APP_URL__: "{{ .ZeropsAppUrl }}",
};

for (const [placeholder, action] of Object.entries(replacements)) {
  if (!html.includes(placeholder)) {
    throw new Error(`${inputPath} is missing placeholder ${placeholder}`);
  }
  html = html.replaceAll(placeholder, action);
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, html);

console.log(`Generated ${outputPath} from ${inputPath}`);
