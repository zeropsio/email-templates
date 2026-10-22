import fs from "node:fs";
import path from "node:path";

const layouts = {
  "layout.html": "default.html",
  "letter.html": "letter.html",
};

// Outlook desktop ignores max-width and padding on tables, so it gets a fixed-width table that other clients never see.
const replacements = {
  __BODY__: "{{ .Body }}",
  __SUBJECT__: "{{ .Subject }}",
  __ZEROPS_APP_URL__: "{{ .ZeropsAppUrl }}",
  __MSO_OPEN__:
    '<!--[if mso]><table role="presentation" width="960" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding:48px 20px 40px"><![endif]-->',
  __MSO_CLOSE__: "<!--[if mso]></td></tr></table><![endif]-->",
};

const optionalPlaceholders = new Set(["__ZEROPS_APP_URL__"]);

for (const [input, output] of Object.entries(layouts)) {
  const inputPath = path.join("react-email", "out", input);
  const outputPath = path.join("layouts", output);

  let html = fs.readFileSync(inputPath, "utf8");

  for (const [placeholder, value] of Object.entries(replacements)) {
    if (!html.includes(placeholder) && !optionalPlaceholders.has(placeholder)) {
      throw new Error(`${inputPath} is missing placeholder ${placeholder}`);
    }
    html = html.replaceAll(placeholder, value);
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html);

  console.log(`Generated ${outputPath} from ${inputPath}`);
}
