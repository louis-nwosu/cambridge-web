import { FC } from "react";

import { SideNav } from "./components";
import { TopNav } from "../../pages/dashboard/components";

import "../../css/dblayout.css";

export const DBLayout: FC = ({ children }) => {
  return (
    <div className="db-layout-container">
      <div className="db-layout-sidenav">
        <SideNav />
      </div>
      <div className="db-layout-children">
        <div className="db-layout-topNav">
          <TopNav />
        </div>
        <div style={{ marginTop: '60px' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export { DBLayout as default };
