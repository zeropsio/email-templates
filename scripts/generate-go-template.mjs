import fs from "node:fs";
import path from "node:path";

const inputPath = path.join("react-email", "out", "recipe-deployed.html");
const outputPath = path.join("generated", "recipes", "default.html");

let html = fs.readFileSync(inputPath, "utf8");

const servicesBlock = `{{- range .Services }}
<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin: 0 0 10px; padding: 0; border-radius: 10px; background-color: #ffffff; box-sizing: border-box">
  <tbody>
    <tr>
      <td style="padding: 14px 16px">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
          <tbody>
            <tr>
              <td style="vertical-align: top">
                <p style="font-size: 14px; line-height: 20px; margin: 0; color: #164742; font-weight: 800">
                  {{ .Hostname }}
                </p>
                <p style="font-size: 12px; line-height: 18px; margin: 2px 0 0; color: #789590; font-family: monospace; font-weight: 400">
                  {{ .Type }}
                </p>
              </td>
              <td width="90" align="right" style="vertical-align: middle; text-align: right">
                {{- if .SubdomainUrl }}
                <a href="{{ .SubdomainUrl }}" style="color: #15d7c4; text-decoration-line: none; font-size: 10px; line-height: 15px; font-weight: 900; letter-spacing: 0.8px; text-transform: uppercase; text-decoration: none" target="_blank">Open app</a>
                {{- end }}
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
{{- end }}`;

html = html
  .replaceAll("__RECIPE_NAME__", "{{ .Recipe.Name }}")
  .replaceAll("__USER_FIRST_NAME__", "{{ .User.FirstName }}")
  .replaceAll("__ZEROPS_APP_URL__", "{{ .ZeropsAppUrl }}")
  .replaceAll("__SERVICES_BLOCK__", servicesBlock);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, html);

console.log(`Generated ${outputPath} from ${inputPath}`);