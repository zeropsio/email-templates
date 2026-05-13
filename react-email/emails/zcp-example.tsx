import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export default function ZcpExampleEmail() {
  return (
    <Html>
      <Head />
      <Preview>Zerops Control Plane setup is ready</Preview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Text style={styles.logo}>Zerops</Text>
          </Section>

          <Heading style={styles.h1}>
            Continue with <span style={styles.highlight}>Zerops Control Plane</span>
          </Heading>

          <Text style={styles.text}>
            Hey __USER_FIRST_NAME__, your workspace is ready. Open the guide to
            finish the setup and connect your development environment.
          </Text>

          <Button href="__ZCP_DOCS_URL__" style={styles.button}>
            Open ZCP guide
          </Button>

          <Text style={styles.footer}>
            Need the dashboard? Open Zerops here: __ZEROPS_APP_URL__
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
      "Geologica, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  container: {
    maxWidth: "520px",
    margin: "0 auto",
    padding: "56px 28px 44px",
  },
  header: {
    margin: "0 0 72px",
  },
  logo: {
    margin: "0",
    color: "#164742",
    fontSize: "18px",
    fontWeight: "800",
  },
  h1: {
    margin: "0 0 32px",
    color: "#164742",
    fontSize: "32px",
    lineHeight: "44px",
    fontWeight: "600",
  },
  highlight: {
    color: "#15d7c4",
    fontWeight: "800",
  },
  text: {
    margin: "0 0 28px",
    color: "#315f58",
    fontSize: "15px",
    lineHeight: "24px",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "13px 0",
    borderRadius: "6px",
    backgroundColor: "#15d7c4",
    color: "#ffffff",
    fontSize: "11px",
    lineHeight: "16px",
    fontWeight: "900",
    letterSpacing: "0.8px",
    textTransform: "uppercase" as const,
    textAlign: "center" as const,
    textDecoration: "none",
  },
  footer: {
    margin: "40px 0 0",
    color: "#789590",
    fontSize: "12px",
    lineHeight: "18px",
  },
};