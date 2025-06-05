import {
  Card,
  CardHeader,
  Text,
  FlexBox,
  Avatar,
} from "@ui5/webcomponents-react";

const Profile = () => {
  return (
    <Card
      header={<CardHeader titleText="User Profile" />}
      style={{ width: "90%", margin: "25px auto" }}>
      <FlexBox
        direction="Column"
        style={{ alignItems: "center", padding: "20px" }}>
        <Avatar size="XL">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQFy2HLU_wk0lA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699041260610?e=1754524800&v=beta&t=0o1qK-Nt1LPlZ6tK9xsr_Xoni5HMyuzAjuvTxI-InAA"
            alt="User Avatar"
          />
        </Avatar>
        <Text
          style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "15px" }}>
          Roberto Silva
        </Text>
        <Text>Email: roberto.silva@example.com</Text>
        <Text>Cargo: Desenvolvedor SAP UI5</Text>
      </FlexBox>
    </Card>
  );
};

export default Profile;
