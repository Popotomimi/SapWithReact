import { useState } from "react";
import {
  Card,
  CardHeader,
  Input,
  Button,
  FlexBox,
} from "@ui5/webcomponents-react";

const EditProfile = () => {
  const [name, setName] = useState("Roberto Silva");
  const [email, setEmail] = useState("roberto.silva@example.com");
  const [cargo, setCargo] = useState("Desenvolvedor SAP UI5");

  const handleSave = () => {
    alert(
      `Dados atualizados!\nNome: ${name}\nEmail: ${email}\nCargo: ${cargo}`
    );
  };

  return (
    <Card
      header={<CardHeader titleText="Editar Perfil" />}
      style={{
        width: "90%",
        margin: "50px auto",
        display: "block",
        maxWidth: "270px",
      }}>
      <FlexBox direction="Column" style={{ padding: "20px", gap: "10px" }}>
        <Input
          value={name}
          placeholder="Enter name"
          onInput={(e) => setName(e.target.value)}
        />
        <Input
          value={email}
          placeholder="Enter email"
          onInput={(e) => setEmail(e.target.value)}
        />
        <Input
          value={cargo}
          placeholder="Enter cargo"
          onInput={(e) => setCargo(e.target.value)}
        />
        <Button style={{ maxWidth: "210px" }} onClick={handleSave}>
          Salvar
        </Button>
      </FlexBox>
    </Card>
  );
};

export default EditProfile;
