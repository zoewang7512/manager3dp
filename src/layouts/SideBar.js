import React, { useState } from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { BsTools } from "react-icons/bs";
import { TiPrinter } from "react-icons/ti";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SideBar = ({ closeBar }) => {
  const toggle = () => closeBar(false);
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogOut() {
    setError("");
    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="sidebar">
      <Offcanvas
        isOpen
        direction="end"
        style={{
          backgroundColor: "#ff6d28",
          color: "#fff"
        }}
      >
        <OffcanvasHeader toggle={toggle}>
          <strong>3D列印機設備管理面板</strong>
        </OffcanvasHeader>
        <OffcanvasBody>
          <ul>
            <Link to="/">
              <li>
                <TiPrinter className="sidebar-icons" />
                3D列印機設備管理面板
              </li>
            </Link>
            <Link to="/pm">
              <li>
                <AiOutlineCalendar className="sidebar-icons" />
                生產管理頁面
              </li>
            </Link>
            <Link to="/fm">
              <li>
                <TbDeviceDesktopAnalytics className="sidebar-icons" />
                設備管理頁面
              </li>
            </Link>
            <Link to="/mm">
              <li>
                <BsTools className="sidebar-icons" />
                維修管理頁面
              </li>
            </Link>
            <li>
              {error && alert({ error })}
              <MdLogout
                className="sidebar-icons"
                onClick={handleLogOut}
                id="logoutText"
              />
              登出
            </li>
          </ul>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};
export default SideBar;
