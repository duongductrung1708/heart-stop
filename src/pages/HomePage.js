import React from "react";
import Footer from "../components/Footer";
import {
  ModernArticle,
  Section,
  SectionTitle,
  SubSection,
  SubTitle,
  Paragraph,
  AlertBox,
  StepCard,
  StepTitle,
  StepNumber,
  List,
  ListItem,
  VideoContainer,
  VideoFrame,
  ResourceLink,
  FAQList,
  FAQItem,
  FAQLink,
} from "../styles/StyledComponents";

import cachhoisinhtimphoi from "../assets/cachhoisinhtimphoi.jpg";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.webp";
import pic4 from "../assets/pic4.webp";
import pic5 from "../assets/pic5.webp";
import pic6 from "../assets/pic6.webp";

const HomePage = () => {
  return (
    <ModernArticle>
      <Section id="overview">
        <SectionTitle>
          I. TẠI SAO PHẢI HỌC CẤP CỨU KHI NGỪNG TIM, NGỪNG THỞ?
        </SectionTitle>

        <SubSection>
          <SubTitle>1. Ngừng tim, ngừng thở là gì?</SubTitle>
          <Paragraph>
            Ngừng tim là tình trạng tim đột ngột ngừng co bóp và không còn bơm
            máu đi nuôi cơ thể. Ngừng thở là khi nạn nhân không còn hô hấp tự
            nhiên, dẫn đến thiếu oxy nghiêm trọng.
          </Paragraph>
          <AlertBox className="warning">
            ⚠️{" "}
            <div>
              Nếu không được cấp cứu kịp thời trong 4 phút đầu, não bắt đầu tổn
              thương không hồi phục. Sau 6–10 phút, nguy cơ tử vong rất cao.
            </div>
          </AlertBox>
        </SubSection>

        <SubSection>
          <SubTitle>
            2. Nguyên nhân thường gặp của ngừng tim, ngừng thở:
          </SubTitle>
          <List>
            <ListItem>Nhồi máu cơ tim, đột quỵ</ListItem>
            <ListItem>Tai nạn điện giật, đuối nước</ListItem>
            <ListItem>Chấn thương ngực nghiêm trọng</ListItem>
            <ListItem>Dị vật đường thở (ở trẻ nhỏ)</ListItem>
            <ListItem>Ngừng tim đột ngột không rõ nguyên nhân (SCA)</ListItem>
          </List>
        </SubSection>
      </Section>

      <Section id="causes">
        <SectionTitle>
          II. HƯỚNG DẪN CÁCH SƠ CỨU KHI BỊ NGỪNG TIM – NGỪNG THỞ
        </SectionTitle>

        <SubSection>
          <SubTitle>1. Nhận biết nạn nhân ngừng tim – ngừng thở</SubTitle>
          <img
            src={cachhoisinhtimphoi}
            alt="Nhận biết dấu hiệu ngừng tim"
            style={{ width: "100%", borderRadius: "8px", margin: "1.5rem 0" }}
          />
          <Paragraph>Hãy kiểm tra ngay nếu bạn thấy ai đó:</Paragraph>
          <List>
            <ListItem>Bất tỉnh, không phản ứng khi gọi hoặc lay nhẹ</ListItem>
            <ListItem>
              Không thở hoặc thở ngắt quãng bất thường (thở ngáp cá)
            </ListItem>
            <ListItem>
              Không có dấu hiệu tuần hoàn (mạch cảnh không bắt được)
            </ListItem>
          </List>
          <AlertBox className="warning">
            ⏱️{" "}
            <div>
              Hành động càng nhanh càng tốt – thời gian vàng là 4 phút đầu tiên!
            </div>
          </AlertBox>
        </SubSection>

        <SubSection>
          <SubTitle>2. Gọi cấp cứu 115 hoặc nhờ người gọi ngay</SubTitle>
          <Paragraph>
            Nếu có người khác: Phân công rõ ràng – người gọi cấp cứu, người bắt
            đầu ép tim. Nếu bạn đang ở một mình: Gọi 115 trước rồi mới quay lại
            làm ép tim.
          </Paragraph>
        </SubSection>

        <SubSection>
          <SubTitle>3. Kỹ thuật cấp cứu ngừng tuần hoàn cơ bản</SubTitle>

          <StepCard>
            <StepTitle>
              <StepNumber>1</StepNumber>
              ÉP TIM NGOÀI LỒNG NGỰC (CPR)
            </StepTitle>
            <img
              src={pic1}
              alt="Kỹ thuật ép tim"
              style={{ width: "100%", borderRadius: "8px", margin: "1.5rem 0" }}
            />
            <List>
              <ListItem>
                Đặt gót bàn tay ở giữa ngực nạn nhân, ngay dưới đường nối hai
                núm vú.
              </ListItem>
              <ListItem>
                Chồng tay còn lại lên trên, đan chặt các ngón tay.
              </ListItem>
              <img
                src={pic2}
                alt="Kỹ thuật ép tim"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  margin: "1.5rem 0",
                }}
              />
              <ListItem>
                Dùng sức thân người để ấn mạnh xuống với tốc độ 100–120
                lần/phút, độ sâu khoảng 5–6 cm.
              </ListItem>
              <ListItem>
                Sau mỗi lần ép, đảm bảo ngực nảy lên hoàn toàn.
              </ListItem>
            </List>
          </StepCard>

          <StepCard>
            <StepTitle>
              <StepNumber>2</StepNumber>
              MỞ ĐƯỜNG THỞ
            </StepTitle>
            <Paragraph>
              Với những trường hợp bệnh nhân bị tắc nghẽn đường thở do dịch
              tiết, tụt lưỡi, mắc dị vật,… bước đầu tiên cần thực hiện là khai
              thông đường thở cho bệnh nhân.
            </Paragraph>
            <SubTitle>Với trẻ nhỏ:</SubTitle>
            <List>
              <ListItem>Đặt trẻ lên đùi, một tay giữ trẻ</ListItem>
              <ListItem>Dùng lòng bàn tay để vỗ mạnh vào lưng bé</ListItem>
              <ListItem>Nhanh chóng gọi cấp cứu</ListItem>
              <ListItem>
                Nếu thấy có dịch chảy ra từ miệng của bé, cần tiến hành hút dịch
                để đường thở thông thoáng
              </ListItem>
            </List>

            <SubTitle>Với người lớn:</SubTitle>
            <List>
              <ListItem>Xác định dấu hiệu sống</ListItem>
              <ListItem>
                Lấy dị vật bằng tay: Một tay mở miệng, đồng thời dùng ngón tay
                trỏ của tay còn lại để lấy dị vật từ khoang miệng
              </ListItem>
              <ListItem>
                Ngửa đầu/nâng cằm: Đứng về một bên của bệnh nhân, dùng một tay
                để nâng cằm và một tay đặt lên trán
              </ListItem>
              <ListItem>
                Đứng về phía đầu của bệnh nhân và thực hiện ấn giữ hàm, kéo cằm
                về phía đầu của người bệnh
              </ListItem>
            </List>
          </StepCard>

          <StepCard>
            <StepTitle>
              <StepNumber>3</StepNumber>
              HÔ HẤP NHÂN TẠO (THỔI NGẠT)
            </StepTitle>
            <img
              src={pic3}
              alt="Kỹ thuật thổi ngạt"
              style={{ width: "100%", borderRadius: "8px", margin: "1.5rem 0" }}
            />
            <List>
              <ListItem>
                Bịt mũi nạn nhân, áp miệng bạn vào miệng nạn nhân và thổi nhẹ
                nhàng trong khoảng 1 giây
              </ListItem>
              <ListItem>
                Quan sát: lồng ngực phồng lên là dấu hiệu thổi ngạt hiệu quả
              </ListItem>
              <img
                src={pic4}
                alt="Kỹ thuật thổi ngạt"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  margin: "1.5rem 0",
                }}
              />
              <ListItem>
                Thực hiện 2 lần thổi ngạt, sau đó ép tim 30 lần
              </ListItem>
              <ListItem>Lặp lại chu kỳ: 30 ép – 2 thổi</ListItem>
              <ListItem>
                Sau 5 chu kỳ (~2 phút), kiểm tra xem nạn nhân có tự thở, có mạch
                không
              </ListItem>
            </List>
            <AlertBox className="warning">
              ❗{" "}
              <div>
                Nếu chưa có dấu hiệu hồi phục → TIẾP TỤC ép tim và thổi ngạt,
                hoặc đến khi nhân viên y tế đến.
              </div>
            </AlertBox>
          </StepCard>
        </SubSection>
      </Section>

      <Section>
        <SubTitle>4. Sử dụng máy sốc tim tự động (AED) nếu có</SubTitle>
        <img
          src={pic5}
          alt="Máy sốc tim tự động AED"
          style={{ width: "100%", borderRadius: "8px", margin: "1.5rem 0" }}
        />
        <List>
          <ListItem>Bật máy AED, làm theo hướng dẫn bằng giọng nói</ListItem>
          <ListItem>Gắn hai miếng dán vào ngực theo hình hướng dẫn</ListItem>
          <ListItem>
            Khi máy phân tích nhịp tim → KHÔNG CHẠM VÀO NẠN NHÂN
          </ListItem>
          <ListItem>
            Nếu máy yêu cầu sốc điện, nhấn nút sốc, sau đó tiếp tục ép tim ngay
            lập tức
          </ListItem>
        </List>
        <AlertBox className="success">
          📍{" "}
          <div>
            Máy AED thường được đặt tại nơi công cộng: sân bay, nhà ga, trường
            học, trung tâm thể thao…
          </div>
        </AlertBox>
      </Section>

      <Section id="steps">
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
          <Paragraph>
            <ResourceLink
              href="https://www.canva.com/design/DAGnV3x2ftA/QaSf0tG3cdnip6C-W5nMeQ/edit?utm_content=DAGnV3x2ftA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
            >
              Video truyền thông: Nhóm 3 – Giáo dục sức khỏe
            </ResourceLink>
          </Paragraph>
          <SubTitle>Poster truyền thông</SubTitle>
          <img
            src={pic6}
            alt="Poster truyền thông"
            style={{ width: "100%", borderRadius: "8px", margin: "1.5rem 0" }}
          />
        </SubSection>

        <SubSection id="faq">
          <SubTitle>Câu hỏi thường gặp (FAQ)</SubTitle>
          <FAQList>
            <FAQItem>
              <FAQLink
                href="https://tamanhhospital.vn/cap-cuu-ngung-tim-ngung-tho/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cách phòng ngừa ngưng tim ngưng thở
              </FAQLink>
            </FAQItem>
            <FAQItem>
              <FAQLink
                href="https://tamanhhospital.vn/hoi-suc-tim-phoi-cpr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hồi sức tim phổi là gì?
              </FAQLink>
            </FAQItem>
            <FAQItem>
              <FAQLink
                href="https://tamanhhospital.vn/hoi-suc-tim-phoi-cpr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nguyên tắc DRSCAB trong cấp cứu hồi sinh tim phổi
              </FAQLink>
            </FAQItem>
            <FAQItem>
              <FAQLink
                href="https://tamanhhospital.vn/hoi-suc-tim-phoi-cpr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lợi ích của cấp cứu ngừng tuần hoàn
              </FAQLink>
            </FAQItem>
            <FAQItem>
              <FAQLink
                href="https://tamanhhospital.vn/hoi-suc-tim-phoi-cpr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Một số lưu ý khi thực hiện hồi sức tim phổi
              </FAQLink>
            </FAQItem>
            <FAQItem>
              <FAQLink
                href="https://mgminhtan.dautieng.edu.vn/y-te-hoc-duong/tai-lieu-tap-huan-so-cap-cuu-cap-cuu-ban-dau-cac-tai-nan-thuong-tich-va-benh-ly-cua-tre-309.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sơ cấp cứu, cấp cứu ban đầu các tai nạn thương tích và bệnh lý của trẻ
              </FAQLink>
            </FAQItem>
          </FAQList>
        </SubSection>
      </Section>
      <Footer />
    </ModernArticle>
  );
};

export default HomePage;
