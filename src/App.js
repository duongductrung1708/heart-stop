import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import HomePage from './pages/HomePage';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
  body {
    margin: 0;
    background-color: #fff;
    color: #111827;
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header
        title="CẤP CỨU NGỪNG TIM – 4 PHÚT VÀNG QUYẾT ĐỊNH SỰ SỐNG"
        author="Nguyễn Thị Hằng"
        date="Tháng Năm 13, 2025"
        heroImage={require('./assets/shutterstock_1189197769.jpg')}
        imageCaption="Ngừng tim có thể xảy ra bất ngờ. Mỗi giây phút đều quý giá."
      />
      <HomePage />
    </>
  );
}

export default App;