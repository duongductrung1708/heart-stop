import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import headerpic from './assets/shutterstock_1189197769.jpg';
import cachhoisinhtimphoi from './assets/cachhoisinhtimphoi.jpg';
import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.png';
import pic3 from './assets/pic3.webp';
import pic4 from './assets/pic4.webp';
import pic5 from './assets/pic5.webp';
import pic6 from './assets/pic6.webp';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
  body {
    margin: 0;
    background-color: #f9fafb;
    color: #111827;
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
  }
`;

const ModernArticle = styled.article`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const ArticleHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 2rem;
`;

const ArticleTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const HeroImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin: 1.5rem 0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const ImageCaption = styled.figcaption`
  text-align: center;
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 0.5rem;
  font-style: italic;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SubSection = styled.div`
  margin-bottom: 2.5rem;
`;

const SubTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1.25rem;
  font-size: 1.05rem;
  color: #374151;
`;

const AlertBox = styled.div`
  padding: 1.25rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  font-size: 1rem;
  line-height: 1.6;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  &.warning {
    background-color: #fffbeb;
    border-left: 4px solid #f59e0b;
    color: #92400e;
  }

  &.success {
    background-color: #ecfdf5;
    border-left: 4px solid #10b981;
    color: #065f46;
  }
`;

const StepCard = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const StepTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StepNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #3b82f6;
  color: white;
  border-radius: 50%;
  font-size: 0.85rem;
  font-weight: 600;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 1.25rem;
  margin: 1rem 0;
`;

const ListItem = styled.li`
  position: relative;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  font-size: 1.05rem;
  color: #374151;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 8px;
    height: 8px;
    background-color: #3b82f6;
    border-radius: 50%;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  margin: 1.5rem 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const ResourceLink = styled.a`
  display: inline-block;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.2s ease;

  &:hover {
    color: #2563eb;
    text-decoration: underline;
  }
`;

const FAQList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const FAQItem = styled.li`
  margin-bottom: 0.75rem;
`;

const FAQLink = styled.a`
  display: block;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 8px;
  color: #111827;
  text-decoration: none;
  transition: all 0.2s ease;
  font-weight: 500;
  border: 1px solid #e5e7eb;

  &:hover {
    background-color: #f3f4f6;
    transform: translateX(4px);
    border-color: #d1d5db;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ModernArticle>
        <ArticleHeader>
          <ArticleTitle>CẤP CỨU NGỪNG TIM – 4 PHÚT VÀNG QUYẾT ĐỊNH SỰ SỐNG</ArticleTitle>
          <ArticleMeta>
            <span>Nguyễn Thị Hằng</span>
            <span>Tháng Năm 13, 2025</span>
          </ArticleMeta>
          <figure>
            <HeroImage src={headerpic} alt="Cấp cứu khẩn cấp" />
            <ImageCaption>Ngừng tim có thể xảy ra bất ngờ. Mỗi giây phút đều quý giá.</ImageCaption>
          </figure>
        </ArticleHeader>

        <Section>
          <SectionTitle>I. TẠI SAO PHẢI HỌC CẤP CỨU KHI NGỪNG TIM, NGỪNG THỞ?</SectionTitle>
          
          <SubSection>
            <SubTitle>1. Ngừng tim, ngừng thở là gì?</SubTitle>
            <Paragraph>
              Ngừng tim là tình trạng tim đột ngột ngừng co bóp và không còn bơm máu đi nuôi cơ thể.
              Ngừng thở là khi nạn nhân không còn hô hấp tự nhiên, dẫn đến thiếu oxy nghiêm trọng.
            </Paragraph>
            <AlertBox className="warning">
              ⚠️ <div>Nếu không được cấp cứu kịp thời trong 4 phút đầu, não bắt đầu tổn thương không hồi phục. Sau 6–10 phút, nguy cơ tử vong rất cao.</div>
            </AlertBox>
          </SubSection>

          <SubSection>
            <SubTitle>2. Nguyên nhân thường gặp của ngừng tim, ngừng thở:</SubTitle>
            <List>
              <ListItem>Nhồi máu cơ tim, đột quỵ</ListItem>
              <ListItem>Tai nạn điện giật, đuối nước</ListItem>
              <ListItem>Chấn thương ngực nghiêm trọng</ListItem>
              <ListItem>Dị vật đường thở (ở trẻ nhỏ)</ListItem>
              <ListItem>Ngừng tim đột ngột không rõ nguyên nhân (SCA)</ListItem>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>II. HƯỚNG DẪN CÁCH SƠ CỨU KHI BỊ NGỪNG TIM – NGỪNG THỞ</SectionTitle>
          
          <SubSection>
            <SubTitle>1. Nhận biết nạn nhân ngừng tim – ngừng thở</SubTitle>
            <figure>
              <HeroImage src={cachhoisinhtimphoi} alt="Nhận biết dấu hiệu ngừng tim" />
              <ImageCaption>Các dấu hiệu nhận biết ngừng tim ngừng thở</ImageCaption>
            </figure>
            <Paragraph>Hãy kiểm tra ngay nếu bạn thấy ai đó:</Paragraph>
            <List>
              <ListItem>Bất tỉnh, không phản ứng khi gọi hoặc lay nhẹ</ListItem>
              <ListItem>Không thở hoặc thở ngắt quãng bất thường (thở ngáp cá)</ListItem>
              <ListItem>Không có dấu hiệu tuần hoàn (mạch cảnh không bắt được)</ListItem>
            </List>
            <AlertBox className="warning">
              ⏱️ <div>Hành động càng nhanh càng tốt – thời gian vàng là 4 phút đầu tiên!</div>
            </AlertBox>
          </SubSection>

          <SubSection>
            <SubTitle>2. Gọi cấp cứu 115 hoặc nhờ người gọi ngay</SubTitle>
            <Paragraph>
              Nếu có người khác: Phân công rõ ràng – người gọi cấp cứu, người bắt đầu ép tim.
              Nếu bạn đang ở một mình: Gọi 115 trước rồi mới quay lại làm ép tim.
            </Paragraph>
          </SubSection>

          <SubSection>
            <SubTitle>3. Kỹ thuật cấp cứu ngừng tuần hoàn cơ bản</SubTitle>
            
            <StepCard>
              <StepTitle>
                <StepNumber>1</StepNumber>
                ÉP TIM NGOÀI LỒNG NGỰC (CPR)
              </StepTitle>
              <figure>
                <HeroImage src={pic1} alt="Kỹ thuật ép tim" />
                <ImageCaption>Hình ảnh minh họa kỹ thuật ép tim ngoài lồng ngực</ImageCaption>
              </figure>
              <List>
                <ListItem>Đặt gót bàn tay ở giữa ngực nạn nhân, ngay dưới đường nối hai núm vú.</ListItem>
                <ListItem>Chồng tay còn lại lên trên, đan chặt các ngón tay.</ListItem>
                <figure>
                  <HeroImage src={pic2} alt="Kỹ thuật ép tim" />
                </figure>
                <ListItem>Dùng sức thân người để ấn mạnh xuống với tốc độ 100–120 lần/phút, độ sâu khoảng 5–6 cm.</ListItem>
                <ListItem>Sau mỗi lần ép, đảm bảo ngực nảy lên hoàn toàn.</ListItem>
              </List>
            </StepCard>

            <StepCard>
              <StepTitle>
                <StepNumber>2</StepNumber>
                MỞ ĐƯỜNG THỞ
              </StepTitle>
              <Paragraph>
                Với những trường hợp bệnh nhân bị tắc nghẽn đường thở do dịch tiết, tụt lưỡi, mắc dị vật,… bước đầu tiên cần thực hiện là khai thông đường thở cho bệnh nhân.
              </Paragraph>
              <SubTitle>Với trẻ nhỏ:</SubTitle>
              <List>
                <ListItem>Đặt trẻ lên đùi, một tay giữ trẻ</ListItem>
                <ListItem>Dùng lòng bàn tay để vỗ mạnh vào lưng bé</ListItem>
                <ListItem>Nhanh chóng gọi cấp cứu</ListItem>
                <ListItem>Nếu thấy có dịch chảy ra từ miệng của bé, cần tiến hành hút dịch để đường thở thông thoáng</ListItem>
              </List>

              <SubTitle>Với người lớn:</SubTitle>
              <List>
                <ListItem>Xác định dấu hiệu sống</ListItem>
                <ListItem>Lấy dị vật bằng tay: Một tay mở miệng, đồng thời dùng ngón tay trỏ của tay còn lại để lấy dị vật từ khoang miệng</ListItem>
                <ListItem>Ngửa đầu/nâng cằm: Đứng về một bên của bệnh nhân, dùng một tay để nâng cằm và một tay đặt lên trán</ListItem>
                <ListItem>Đứng về phía đầu của bệnh nhân và thực hiện ấn giữ hàm, kéo cằm về phía đầu của người bệnh</ListItem>
              </List>
            </StepCard>

            <StepCard>
              <StepTitle>
                <StepNumber>3</StepNumber>
                HÔ HẤP NHÂN TẠO (THỔI NGẠT)
              </StepTitle>
              <figure>
                <HeroImage src={pic3} alt="Kỹ thuật thổi ngạt" />
                <ImageCaption>Hình ảnh minh họa kỹ thuật thổi ngạt</ImageCaption>
              </figure>
              <List>
                <ListItem>Bịt mũi nạn nhân, áp miệng bạn vào miệng nạn nhân và thổi nhẹ nhàng trong khoảng 1 giây</ListItem>
                <ListItem>Quan sát: lồng ngực phồng lên là dấu hiệu thổi ngạt hiệu quả</ListItem>
                <figure>
                  <HeroImage src={pic4} alt="Kỹ thuật thổi ngạt" />
                </figure>
                <ListItem>Thực hiện 2 lần thổi ngạt, sau đó ép tim 30 lần</ListItem>
                <ListItem>Lặp lại chu kỳ: 30 ép – 2 thổi</ListItem>
                <ListItem>Sau 5 chu kỳ (~2 phút), kiểm tra xem nạn nhân có tự thở, có mạch không</ListItem>
              </List>
              <AlertBox className="warning">
                ❗ <div>Nếu chưa có dấu hiệu hồi phục → TIẾP TỤC ép tim và thổi ngạt, hoặc đến khi nhân viên y tế đến.</div>
              </AlertBox>
            </StepCard>
          </SubSection>
        </Section>

        <Section>
          <SubTitle>4. Sử dụng máy sốc tim tự động (AED) nếu có</SubTitle>
          <figure>
            <HeroImage src={pic5} alt="Máy sốc tim tự động AED" />
            <ImageCaption>Hình ảnh minh họa máy sốc tim tự động AED</ImageCaption>
          </figure>
          <List>
            <ListItem>Bật máy AED, làm theo hướng dẫn bằng giọng nói</ListItem>
            <ListItem>Gắn hai miếng dán vào ngực theo hình hướng dẫn</ListItem>
            <ListItem>Khi máy phân tích nhịp tim → KHÔNG CHẠM VÀO NẠN NHÂN</ListItem>
            <ListItem>Nếu máy yêu cầu sốc điện, nhấn nút sốc, sau đó tiếp tục ép tim ngay lập tức</ListItem>
          </List>
          <AlertBox className="success">
            📍 <div>Máy AED thường được đặt tại nơi công cộng: sân bay, nhà ga, trường học, trung tâm thể thao…</div>
          </AlertBox>
        </Section>

        <Section>
          <SectionTitle>III. Video và tài liệu học</SectionTitle>
          <SubSection>
            <SubTitle>Bộ video hướng dẫn ngắn</SubTitle>
            <VideoContainer>
              <VideoFrame 
                src="https://www.youtube.com/embed/Im2njVVmxEI" 
                title="Hướng dẫn CPR" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </VideoContainer>
            <ImageCaption>Video hướng dẫn kỹ thuật CPR cơ bản</ImageCaption>
            <Paragraph>
              <ResourceLink href="https://www.canva.com/design/DAGnV3x2ftA/QaSf0tG3cdnip6C-W5nMeQ/edit?utm_content=DAGnV3x2ftA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Video truyền thông: Nhóm 3 – Giáo dục sức khỏe
              </ResourceLink>
            </Paragraph>
            <figure>
              <HeroImage src={pic6} alt="Poster truyền thông" />
              <ImageCaption>Poster truyền thông về kỹ thuật CPR</ImageCaption>
            </figure>
          </SubSection>

          <SubSection>
            <SubTitle>Câu hỏi thường gặp (FAQ)</SubTitle>
            <FAQList>
              <FAQItem>
                <FAQLink href="https://tamanhhospital.vn/cap-cuu-ngung-tim-ngung-tho/" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Cách phòng ngừa ngưng tim ngưng thở
                </FAQLink>
              </FAQItem>
              <FAQItem>
                <FAQLink href="https://tamanhhospital.vn/hoi-suc-tim-phoi-cpr/" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Hồi sức tim phổi là gì?
                </FAQLink>
              </FAQItem>
              <FAQItem>
                <FAQLink href="https://tamanhhospital.vn/hoi-suc-tim-phoi-cpr/" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Nguyên tắc DRSCAB trong cấp cứu hồi sinh tim phổi
                </FAQLink>
              </FAQItem>
              <FAQItem>
                <FAQLink href="https://tamanhhospital.vn/hoi-suc-tim-phoi-cpr/" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Lợi ích của cấp cứu ngừng tuần hoàn
                </FAQLink>
              </FAQItem>
              <FAQItem>
                <FAQLink href="https://tamanhhospital.vn/hoi-suc-tim-phoi-cpr/" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Một số lưu ý khi thực hiện hồi sức tim phổi
                </FAQLink>
              </FAQItem>
              <FAQItem>
                <FAQLink href="https://capcuukhingungtim.wordpress.com/" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Sơ cứu ngừng tim – Hành động ngay, cứu sống người!
                </FAQLink>
              </FAQItem>
            </FAQList>
          </SubSection>
        </Section>
      </ModernArticle>
    </>
  );
}

export default App;