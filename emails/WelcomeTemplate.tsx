import React, { CSSProperties } from "react";
import {
  Html,
  Container,
  Preview,
  Body,
  Text,
  Link,
  Tailwind,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome to My Nextjs website!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container style={body}>
            <Text className="font-sans text-3xl text-blue-700">
              Hello {name}
            </Text>
            <Link
              className="font-sans text-slate-900"
              href="https://www.apple.com"
            >
              Apple
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
const body: CSSProperties = {
  background: "#fff",
  fontSize: "1rem",
};

export default WelcomeTemplate;
