import { FC } from "react";
import { Outlet } from "react-router-dom";

import { DBLayout } from "../../layout/DBlayout/dbLayout";

export const Dashboard: FC = () => {
  return (
    <DBLayout>
      <Outlet />
    </DBLayout>
  );
};

export { Dashboard as default };
