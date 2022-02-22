import { FC, useState } from "react";

import { Box, TextField } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import "../../../css/topnav.css";

export const TopNav: FC = () => {
  const [sideNavShow, setSideNavShow] = useState<boolean>(false);
  const handleClick = () => setSideNavShow(!sideNavShow)

  const name = useSelector((state: any) => state.auth.data.user.fullName);
  const navigate = useNavigate()

  return (
    <div>
      <div className="topnav-container">
        <p className="topNav-title">Hello, {name}</p>
        <div className="topnav-right-section">
          <TextField size="small" placeholder="search" />
          <ManageAccountsIcon />
          <span onClick={() => {
            localStorage.clear();
            navigate('/')
          }}>
            <LogoutIcon />
          </span>
        </div>
        <div className="top-nav-mobile">
          <SettingsIcon />
          <span onClick={handleClick}> <MenuIcon /> </span>
        </div>
      </div>

      <div className={sideNavShow ? "top-nav-side-nav-mobile-show" : "top-nav-side-nav-mobile"}>
        <Box display='flex' justifyContent='flex-end' my={5} mx={3}>
          <span onClick={handleClick}>
            <HighlightOffIcon style={{ fontSize: '40px', color: '#fff' }} />
          </span>
        </Box>
        <Box mx={3}>
          <Box my={1.5} onClick={handleClick}>
            <Link to='/dashboard/main' style={{ textDecoration: 'none' }}>
              <p className="side-nav-mob">Dashboard</p>
            </Link>
          </Box>
          <Box my={1.5} onClick={handleClick}>
            <Link to='/dashboard/deposit' style={{ textDecoration: 'none' }}>
              <p className="side-nav-mob">Deposit</p>
            </Link>
          </Box>
          <Box my={1.5} onClick={handleClick}>
            <Link to='/dashboard/withdraw' style={{ textDecoration: 'none' }}>
              <p className="side-nav-mob">Withdrawals</p>
            </Link>
          </Box>
          <Box my={1.5} onClick={handleClick}>
            <Link to='/dashboard/earnings' style={{ textDecoration: 'none' }}>
              <p className="side-nav-mob">Earnings</p>
            </Link>
          </Box>
          <Box my={1.5}>
            <p className="side-nav-mob">Support</p>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export { TopNav as default };
