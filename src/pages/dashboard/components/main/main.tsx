import { FC } from 'react'

import { Box } from '@mui/material'
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import LockIcon from '@mui/icons-material/Lock';

import { useSelector } from 'react-redux';

import MainTV from './tradeView'
import './styles.css'

export const Main: FC = () => {
  const totalWithdrawals = useSelector((state: any) => state.auth.data.user.totalWithdraw)
  const totalDeposit = useSelector((state: any) => state.auth.data.user.totalDeposit)
  return (
    <div style={{ display: 'flex', height: '85vh', width: '100%', flexDirection: 'column' }}>
      <div className='db-main-container'>
        <div className='db-main-top-box db-main-top-box-1'>
          <Box display='flex' justifyContent='flex-end' alignItems='center'>
            <span>
              <p className='db-main-earnings-text'>Earnings</p>
            </span>
          </Box>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <div>
              <p className='db-main-earnings-balance'>USD {totalWithdrawals}.00</p>
              <span className='db-main-box-low'>
                <PriceCheckIcon style={{ marginTop: '-25px', color: '#fff', fontSize: '30px' }} />
                <p className='db-main-withraw'>Withdrawals</p>
              </span>
            </div>
          </Box>
        </div>
        <div className='db-main-box-2 db-main-top-box'>
          <Box display='flex' justifyContent='flex-end' alignItems='center'>
            <span>
              <p className='db-main-earnings-text'>Active Deposit</p>
            </span>
          </Box>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <div>
              <p className='db-main-earnings-balance'>USD {totalDeposit}.00</p>
              <span className='db-main-box-low'>
                <LockIcon style={{ marginTop: '-25px', color: '#fff', fontSize: '30px' }} />
                <p className='db-main-withraw'>Locked</p>
              </span>
            </div>
          </Box>
        </div>
        <div className='db-main-box-3 db-main-top-box'>
          <Box display='flex' justifyContent='flex-end' alignItems='center'>
            <span>
              <p className='db-main-earnings-text'>Active Deposit</p>
            </span>
          </Box>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <div>
              <p className='db-main-earnings-balance'>USD 0.00</p>
              <span className='db-main-box-low'>
                <LockIcon style={{ marginTop: '-25px', color: '#fff', fontSize: '30px' }} />
                <p className='db-main-withraw'>Locked</p>
              </span>
            </div>
          </Box>
        </div>
      </div>
      <div className='db-main-portfolio-section'>
        <div className='db-main-lower-1'>
          <Box>
            <p className='db-lower-box-1-text'>Your Assets</p>
          </Box>
          <Box display='flex' className='db-low-style-1'>
            <span style={{ flex: 1 }}>
              <p className='db-low-b-text-0 low-text-1'>Assets</p>
            </span>
            <span>
              <p className='db-low-b-text-1 low-text-2'>Price</p>
            </span>
            <span>
              <p className='db-low-b-text-1 low-text-3'>Holding</p>
            </span>
          </Box>
          {
            [0, 0, 0].map(item => {
              return (
                <Box display='flex' className='db-low-style-1'>
                </Box>
              )
            })
          }
        </div>
        <div className='db-main-lower-2'>
          <p>Market watch</p>
          <div className='mainTv'>
            <MainTV />
          </div>
        </div>
      </div>
      <div className='db-main-foot'>
        <div>
          <p>Cambridge inc</p>
          <p>copyright 2022</p>
          <p>In partnership with TradingView</p>
        </div>
      </div>
    </div >
  )
}

export { Main as default }