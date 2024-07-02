import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Row,
    Text,
  } from "@react-email/components";
  
  interface VerificationEmailProps {
    username: string;
    otp:string;
  }
  
  export default function VerificationEmail({username,otp}:VerificationEmailProps) {
    return(
        <Html>
      <Head />
      <title>Verification Code </title>
      <Body >
        <Container >
          <Heading >Welcome Back {username}</Heading>
          <Row>
            <Text>
            Your Otp:{otp}
            </Text>
          </Row>
          <Row>
          <Text >
            Thank you  for regestering. please use verification code to complete the registration process.
          </Text>
          </Row>
        </Container>
      </Body>
    </Html>
    );
  }