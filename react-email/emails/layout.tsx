import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";

// Placeholders are replaced with Go template actions by scripts/generate-layout.mjs.
// In the preview, __BODY__ shows where the rendered email content goes.
export default function LayoutEmail() {
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
          .content blockquote { margin: 0 0 16px; padding: 12px 16px; border-left: 4px solid #00c7b7; background-color: #f2f7f6; }
          .content hr { margin: 24px 0; border: none; border-top: 1px solid #c8d8d5; }

          @media only screen and (max-width: 480px) {
            .container { padding: 32px 12px !important; }
            .card { padding: 24px 20px !important; }
          }
        `}</style>
      </Head>

      <Body style={styles.body}>
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

          <Section style={styles.discordSection}>
            <Text style={styles.discordText}>
              Questions? Join{" "}
              <Link href="https://discord.gg/zeropsio" style={styles.discordLink}>
                Zerops Discord
              </Link>{" "}
              or write to{" "}
              <Link href="mailto:support@zerops.io" style={styles.discordLink}>
                support@zerops.io
              </Link>
              .
            </Text>
          </Section>

          <Section style={styles.socialSection}>
            <Link href="__ZEROPS_APP_URL__" style={styles.socialLink}>
              Dashboard
            </Link>
            <Link href="https://docs.zerops.io" style={styles.socialLink}>
              Docs
            </Link>
            <Link href="https://github.com/zeropsio" style={styles.socialLink}>
              GitHub
            </Link>
            <Link href="https://x.com/zeropsio" style={styles.socialLink}>
              X
            </Link>
            <Link
              href="https://www.linkedin.com/company/zeropsio"
              style={styles.socialLink}
            >
              LinkedIn
            </Link>
          </Section>

          <Hr style={styles.hr} />

          <Text style={styles.footer}>
            Zerops
            <br />
            zerops.io
          </Text>
        </Container>
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

  discordSection: {
    margin: "36px 0 28px",
    textAlign: "center" as const,
  },

  discordText: {
    margin: "0",
    color: "#164742",
    fontSize: "14px",
    lineHeight: "22px",
  },

  discordLink: {
    color: "#00a99a",
    fontWeight: "800",
    textDecoration: "underline",
  },

  socialSection: {
    margin: "0 0 18px",
    textAlign: "center" as const,
  },

  socialLink: {
    margin: "0 10px",
    color: "#164742",
    fontSize: "12px",
    lineHeight: "18px",
    textDecoration: "none",
  },

  hr: {
    margin: "20px 0 18px",
    borderColor: "#c8d8d5",
  },

  footer: {
    margin: "0",
    color: "#789590",
    fontSize: "11px",
    lineHeight: "17px",
    textAlign: "center" as const,
  },
};
