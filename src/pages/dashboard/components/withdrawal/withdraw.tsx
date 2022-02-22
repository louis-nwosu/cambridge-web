import { FC } from 'react'

import { Box } from '@mui/material'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';

import { useSelector } from 'react-redux';

import './styles.css'

export const Withdraw: FC = () => {
  const deposit = useSelector((state: any) => state.auth.data.user.totalDeposit);
  return (
    <div>
      <Box display='flex' justifyContent='flex-end' mr={3}>
        <p style={{ fontSize: '25px', color: '#555' }}>Funds Withdrawal</p>
      </Box>
      <div className='db-withdraw-plans-section'>
        <div>
          <Box display='flex' alignItems='center'>
            <MonetizationOnIcon style={{ color: 'green' }} />
            <Box ml={2}>
              <p>Total Balance</p>
            </Box>
          </Box>
          <Box mt={-3}>
            <p className='db-withdraw-figure'>${deposit}</p>
            <Box mt={-3}>
              <p className='db-withdraw-smal-txt'>Gains/Trades</p>
            </Box>
          </Box>
        </div>
        <div className='db-withdraw-marg'>
          <Box display='flex' alignItems='center'>
            <MoneyOffIcon style={{ color: 'green' }} />
            <Box ml={2}>
              <p>Reinvestments</p>
            </Box>
          </Box>
          <Box mt={-3}>
            <p className='db-withdraw-figure'>$0</p>
            <Box mt={-3}>
              <p className='db-withdraw-smal-txt'>locked withdraw</p>
            </Box>
          </Box>
        </div>
      </div>
      <div className='db-withdraw-history'>
        <div>
          <p className='db-no-withdraw'>You do not have any funds to withdraw. </p>
          <p className='db-no-withdraw'>Contact your IA. </p>
        </div>
      </div>
    </div>
  )
}

export { Withdraw as default }