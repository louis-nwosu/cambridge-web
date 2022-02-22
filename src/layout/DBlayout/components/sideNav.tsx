import { FC, Fragment } from "react";

import { Link } from 'react-router-dom'

import { Box } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SupportIcon from '@mui/icons-material/Support';

import "../../../css/dbsidenav.css";

export const SideNav: FC = () => {
  return (
    <Fragment>
      <div className="db-sidenav-container">
        <Link to='/' className="sideNav-link-item">
          <Box mb={8}>
            <p>Cambridge</p>
          </Box>
        </Link>
        <Link to='/dashboard/main' className="sideNav-link-item">
          <Box my={1} display='flex' alignItems='center' style={{ cursor: 'pointer' }}>
            <DashboardIcon />
            <Box mx={0.8}>
              <p>Dashboard</p>
            </Box>
          </Box>
        </Link>
        <Link to='/dashboard/deposit' className="sideNav-link-item">
          <Box my={1} display='flex' alignItems='center' style={{ cursor: 'pointer' }}>
            <AddBoxIcon />
            <Box mx={0.8}>
              <p>Deposit</p>
            </Box>
          </Box>
        </Link>
        <Link to='/dashboard/withdraw' className="sideNav-link-item">
          <Box my={1} display='flex' alignItems='center' style={{ cursor: 'pointer' }}>
            <AddBoxIcon />
            <Box mx={0.8}>
              <p>Withdrawals</p>
            </Box>
          </Box>
        </Link>
        <Link to='/dashboard/earnings' className="sideNav-link-item">
          <Box my={1} display='flex' alignItems='center' style={{ cursor: 'pointer' }}>
            <AddBoxIcon />
            <Box mx={0.8}>
              <p>Earnings</p>
            </Box>
          </Box>
        </Link>
        <Box my={1} display='flex' alignItems='center' style={{ cursor: 'pointer' }}>
          <SupportIcon />
          <Box mx={0.8}>
            <p>Support</p>
          </Box>
        </Box>
      </div>
    </Fragment>
  );
};

export { SideNav as default };
