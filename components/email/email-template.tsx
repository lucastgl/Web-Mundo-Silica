import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
  Hr,
  Section,
  Heading,
} from "@react-email/components";

interface EmailTemplateProps {
  nombre: string;
  email: string;
  telefono?: string;
  asunto: string;
  mensaje: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nombre,
  email,
  telefono,
  asunto,
  mensaje,
}) => {
  return (
    <Html>
      <Head />
      <Preview>Nueva consulta de {nombre} desde Mundo Silica</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nueva Consulta - Mundo Silica</Heading>
          
          <Section style={section}>
            <Text style={text}>
              <strong>Nombre:</strong> {nombre}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            {telefono && (
              <Text style={text}>
                <strong>Teléfono:</strong> {telefono}
              </Text>
            )}
            <Text style={text}>
              <strong>Asunto:</strong> {asunto}
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>Mensaje:</Text>
            <Text style={messageText}>{mensaje}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Este email fue enviado desde el formulario de contacto de Mundo Silica
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const h1 = {
  color: "#01959e",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.25",
  margin: "16px 0",
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "left" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};

const label = {
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 10px 0",
};

const messageText = {
  fontSize: "14px",
  lineHeight: "1.4",
  color: "#374151",
  padding: "12px",
  backgroundColor: "#f9fafb",
  borderRadius: "4px",
  border: "1px solid #e5e7eb",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  textAlign: "center" as const,
};