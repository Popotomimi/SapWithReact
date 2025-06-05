import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";

import activateIcon from "@ui5/webcomponents-icons/dist/activate.js";

import { useNavigate } from "react-router-dom";

const Painel = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("./");
  };

  return (
    <div>
      <ShellBar
        logo={
          <img
            src="https://logospng.org/wp-content/uploads/sap.png"
            alt="Company Logo"
          />
        }
        profile={
          <Avatar>
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQFy2HLU_wk0lA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699041260610?e=1754524800&v=beta&t=0o1qK-Nt1LPlZ6tK9xsr_Xoni5HMyuzAjuvTxI-InAA"
              alt="User Avatar"
            />
          </Avatar>
        }
        primaryTitle="Sap UI5"
        onClick={handleLogoClick}>
        <ShellBarItem icon={activateIcon} text="Activate" tooltip="activate" />
      </ShellBar>
    </div>
  );
};

export default Painel;
