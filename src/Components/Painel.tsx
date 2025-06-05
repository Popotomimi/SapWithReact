import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import editIcon from "@ui5/webcomponents-icons/dist/edit.js";
import homeIcon from "@ui5/webcomponents-icons/dist/home.js";
import { useNavigate, Outlet } from "react-router-dom";

const Painel = () => {
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    console.log("Clicou no perfil");
    navigate("/profile");
  };

  const handleEditClick = () => {
    navigate("/edit");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div>
      <ShellBar
        logo={
          <img
            src="https://easyts.com/wp-content/uploads/2022/07/sap-768x432-1.webp"
            alt="Company Logo"
          />
        }
        profile={
          <Avatar onClick={handleAvatarClick} style={{ cursor: "pointer" }}>
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQFy2HLU_wk0lA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699041260610?e=1754524800&v=beta&t=0o1qK-Nt1LPlZ6tK9xsr_Xoni5HMyuzAjuvTxI-InAA"
              alt="Avatar"
            />
          </Avatar>
        }
        primaryTitle="Sap UI5">
        <ShellBarItem onClick={handleHome} icon={homeIcon} text="Home" />
        <ShellBarItem
          icon={editIcon}
          text="Editar Perfil"
          onClick={handleEditClick}
        />
      </ShellBar>
      <Outlet />
    </div>
  );
};

export default Painel;
