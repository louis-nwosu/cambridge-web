import { FC } from 'react'

import { Box } from '@mui/material'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';

import { useSelector } from 'react-redux';

import './deposit.css'

export const DepositPage: FC = () => {
  const deposit = useSelector((state: any) => state.auth.data.user.totalDeposit);
  return (
    <div>
      <Box display='flex' justifyContent='flex-end' mr={3}>
        <p style={{ fontSize: '25px', color: '#555' }}>Deposits</p>
      </Box>
      <div className='db-deposit-plans-section'>
        <div>
          <Box display='flex' alignItems='center'>
            <MonetizationOnIcon style={{ color: 'green' }} />
            <Box ml={2}>
              <p>Active Deposits</p>
            </Box>
          </Box>
          <Box mt={-3}>
            <p className='db-deposit-figure'>${deposit}</p>
            <Box mt={-3}>
              <p className='db-deposit-smal-txt'>locked deposit</p>
            </Box>
          </Box>
        </div>
        <div className='db-deposit-marg'>
          <Box display='flex' alignItems='center'>
            <MoneyOffIcon style={{ color: 'green' }} />
            <Box ml={2}>
              <p>Inactive Deposits</p>
            </Box>
          </Box>
          <Box mt={-3}>
            <p className='db-deposit-figure'>$0</p>
            <Box mt={-3}>
              <p className='db-deposit-smal-txt'>locked deposit</p>
            </Box>
          </Box>
        </div>
      </div>
      <div className='db-deposit-history'>
        <div>
          <p className='db-no-deposit'>You don't have any active deposit history.</p>
        </div>
      </div>
    </div>
  )
}

export { DepositPage as default }