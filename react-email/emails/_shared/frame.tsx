import type { ReactNode } from "react";
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Row,
  Section,
} from "@react-email/components";

// Placeholders are replaced with Go template actions and Outlook conditional comments by scripts/generate-layout.mjs.
// In the preview, __BODY__ shows where the rendered email content goes.
export function Frame({ footer }: { footer?: ReactNode }) {
  return (
    <Html>
      <Head>
        <title>__SUBJECT__</title>
        <style>{`
          .content p { margin: 0 0 16px; }
          .content h1, .content h2, .content h3 { margin: 32px 0 12px; color: #164742; line-height: 1.3; }
          .content h1 { font-size: 24px; }
          .content h2 { font-size: 20px; }
          .content h3 { font-size: 17px; }
          .content ul, .content ol { margin: 0 0 16px; padding-left: 22px; }
          .content li { margin: 0 0 8px; }
          .content a { color: #00a99a; font-weight: 700; }
          .content code { padding: 1px 4px; border-radius: 3px; background-color: #e7efed; font-family: monospace; font-size: 13px; }
          .content pre { margin: 0 0 16px; padding: 12px 16px; border-radius: 6px; background-color: #e7efed; font-size: 13px; white-space: pre-wrap; }
          .content blockquote { margin: 0 0 16px; padding: 12px 16px; border-left: 4px solid #00c7b7; background-color: #f2f7f6; }
          .content hr { margin: 24px 0; border: none; border-top: 1px solid #c8d8d5; }

          @media only screen and (max-width: 480px) {
            .container { padding: 32px 12px !important; }
            .card { padding: 24px 20px !important; }
          }
        `}</style>
      </Head>

      <Body style={styles.body}>
        __MSO_OPEN__
        <Container className="container" style={styles.container}>
          <Section style={styles.logoSection}>
            <Link href="https://zerops.io" style={styles.logoLink}>
              <Img
                src="https://storage-prg1.zerops.io/4gfos-storage/zerops_logo2_80f8b9099d.png"
                height="24"
                alt="Zerops"
                style={styles.logo}
              />
            </Link>
          </Section>

          {/* Padding sits on the cell, because Outlook ignores padding on a table. */}
          <Section style={styles.card}>
            <Row>
              <Column className="card" style={styles.cardCell}>
                <div className="content" style={styles.content}>
                  __BODY__
                </div>
              </Column>
            </Row>
          </Section>

          {footer}
        </Container>
        __MSO_CLOSE__
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    margin: "0",
    backgroundColor: "#eeeeee",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },

  container: {
    width: "100%",
    maxWidth: "960px",
    margin: "0 auto",
    padding: "48px 20px 40px",
    boxSizing: "border-box" as const,
  },

  logoSection: {
    margin: "0 0 32px",
    textAlign: "center" as const,
  },

  logoLink: {
    display: "inline-block",
    textDecoration: "none",
  },

  logo: {
    display: "block",
    margin: "0 auto",
  },

  card: {
    borderRadius: "10px",
    backgroundColor: "#ffffff",
  },

  cardCell: {
    padding: "36px 36px 20px",
  },

  content: {
    color: "#164742",
    fontSize: "15px",
    lineHeight: "24px",
  },
};
