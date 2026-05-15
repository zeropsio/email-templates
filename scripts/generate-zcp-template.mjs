import fs from "node:fs";
import path from "node:path";

const inputPath = path.join("react-email", "out", "zcp-example.html");
const outputPath = path.join("recipes", "zeropsio", "zcp.html");

let html = fs.readFileSync(inputPath, "utf8");

html = html
  .replaceAll("__USER_FIRST_NAME__", "{{ .User.FirstName }}")
  .replaceAll("__ZEROPS_APP_URL__", "{{ .ZeropsAppUrl }}")
  .replaceAll("__ZCP_DOCS_URL__", "https://docs.zerops.io/features/coding-agents");

html = `<!-- Zerops Control Plane setup is ready -->\n${html}`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, html);

console.log(`Generated ${outputPath} from ${inputPath}`);