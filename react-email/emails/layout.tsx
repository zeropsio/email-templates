import { Hr, Link, Section, Text } from "@react-email/components";
import { Frame } from "./_shared/frame";

export default function LayoutEmail() {
  return (
    <Frame
      footer={
        <>
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
        </>
      }
    />
  );
}

const styles = {
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
