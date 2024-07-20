import Counter from "../../../../common/counter";
import SectionTitle from "../../../../common/sectionTitle";
import data from "../../../../assets/data/about/dataV2";

import AboutStyleWrapper from "./About.style";


import { useModal } from "../../../../utils/ModalContext";
// import { Slider, SliderItem } from "../../../../common/slider/Slider";
// import CoinInfoSlider from "../../coinInfoSlider";
import Button from "../../../../common/button";
// import BannerV1Wrapper from "./Banner.style";

// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { FaTelegramPlane, FaTwitter, FaCopy } from "react-icons/fa";

// import heartIcon from "../../../../assets/images/icon/v5-hart-icon.svg";
// import thumb1 from "../../../../assets/images/nft/emoji-img1.png";
// import thumb2 from "../../../../assets/images/nft/emoji-img2.png";
// import thumb3 from "../../../../assets/images/nft/emoji-img3.png";
import thumb4 from "../../../../assets/images/nft/birdy2.png";

// import particle1 from "../../../../assets/images/icon/v5-thunder-icon.svg";
// import particle2 from "../../../../assets/images/icon/v5-star-icon.svg";
// import particle3 from "../../../../assets/images/icon/v5-coin-icon.svg";
import CoinInfoSlider from "../../coinInfoSlider";
import { useState } from "react";


const About = () => {
  const { aboutDescription1, aboutDescription2 } = data;
  const { mintModalHandle } = useModal();
    // const slideImages = [thumb1, thumb2, thumb3];
    const slideImages = [thumb4];
    const tokenAddress = "GRAo1qUiw6QAkzEJ8rH6TFA4a3CmoN1yU3SijmiuYW1T";
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2500); // Reset copied message after 1.5 seconds
    };
  
  return (
    <AboutStyleWrapper>
      <div className="container">
        <div className="row about_row">
          <div className="col-lg-6">
            <div className="v5_about_us_left_sect">
              <SectionTitle
                title="ABOUT BIRDY"
                subtitle="THE STORY "
                className="section_title"
              />
              <div className="v5_about_us_left_text">
                <p>{aboutDescription1}</p>
                <p>{aboutDescription2}</p>
              </div>
            
              

            </div>
          </div>

          <div className="col-lg-6">
            <div className="about_right_item">
              <div className="counter_item">
                <h3>
                  <Counter
                    end={360000000}
                    decimal="."
                    decimals={360000000 % 1 !== 0 ? "2" : "0"}
                    suffix={""}
                  />
                </h3>
                <h6>Presale Allocation (36%)</h6>
              </div>
              <div className="counter_item">
                <h3>
                  <Counter
                    end={60000000}
                    decimal="."
                    decimals={60000000 % 1 !== 0 ? "2" : "0"}
                    suffix={""}
                  />
                </h3>
                <h6>Regular Lock (6%)</h6>
              </div>
              <div className="counter_item">
                <h3>
                  <Counter
                    end={50000000}
                    decimal="."
                    decimals={50000000 % 1 !== 0 ? "2" : "0"}
                    suffix={"+"}
                  />
                </h3>
                <h6>Team Lock (5%)</h6>
              </div>
              <div className="counter_item">
                <h3>
                  <Counter
                    end={100000000}
                    decimal="."
                    decimals={100000000 % 1 !== 0 ? "2" : "0"}
                    suffix={"K"}
                  />
                </h3>
                <h6>Charity Lock (10%)</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </AboutStyleWrapper>
  );
};

export default About;
