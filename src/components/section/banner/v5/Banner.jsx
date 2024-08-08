import { useModal } from "../../../../utils/ModalContext";
import { Slider, SliderItem } from "../../../../common/slider/Slider";
import CoinInfoSlider from "../../coinInfoSlider";
import Counter from "../../../../common/counter";
import Button from "../../../../common/button";
import BannerV1Wrapper from "./Banner.style";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaTelegramPlane, FaTwitter, FaCopy, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

// import heartIcon from "../../../../assets/images/icon/v5-hart-icon.svg";
import heartIcon from "../../../../assets/images/icon/solana_logo5.png";
import thumb1 from "../../../../assets/images/nft/emoji-img1.png";
import thumb2 from "../../../../assets/images/nft/emoji-img2.png";
import thumb3 from "../../../../assets/images/nft/emoji-img3.png";
import thumb4 from "../../../../assets/images/nft/birdy2.png";

import particle1 from "../../../../assets/images/icon/v5-thunder-icon.svg";
import particle2 from "../../../../assets/images/icon/v5-star-icon.svg";
import particle3 from "../../../../assets/images/icon/v5-coin-icon.svg";
import { useState } from "react";

const Banner = () => {
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

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    speed: 500,
    fade: true,
    autoplaySpeed: 500,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <BannerV1Wrapper id="home">
      <div className="container">
        <div className="row banner_row">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="bithu_v5_baner_left">
              <h2>
                BIRDY COMMUNITY <img src={heartIcon} alt="icon" />
              </h2>
              <h3>
                <span className="count">
                  <Counter end={100} duration={100} />
                </span>{" "}
                Top biggest marketplace platform of the future. Turning Fun into Function and owning tokenized luxurious assets.
              </h3>
              <div className="banner_buttons">
                <Button size="sm" variant="mint" onClick={() => mintModalHandle()}>
                  Buy now 💰
                </Button>
                <a href="https://www.dextools.io/app/en/hot-pairs" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline">
                    View Chart 💹
                  </Button>
                </a>
              </div>

              <div className="coin-info">
                <span>TOTAL SUPPLY: 1,000,000,000</span>
                <span>
                  PRESALE{" "}
                  <span className="highlighted">COMING SOON</span>
                </span>
                <span>PUBLIC SALE : COMING SOON</span>
              </div>
              

              <div className="token-address">
                {/* <span>Token Address:</span> */}
                <div className="address-box">
                  <input type="text" value={tokenAddress} readOnly />
                  <CopyToClipboard text={tokenAddress} onCopy={handleCopy}>
                    <button>
                      <FaCopy />
                    </button>
                  </CopyToClipboard>
                </div>
                {copied && <span className="copy-message">Address Copied ✅</span>}
              </div>

              <div className="social-icons">
                <a href="https://t.me/BirdySolanacommunity" target="_blank" rel="noopener noreferrer">
                  <FaTelegramPlane />
                </a>
                <a href="https://x.com/birdysolana" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://www.instagram.com/birdy.community" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.tiktok.com/@birdycommunity" target="_blank" rel="noopener noreferrer">
                  <FaTiktok />
                </a>
                <a href="https://youtube.com/@birdycommunityofficial" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </div>

                {/* <div><img src={heartIcon} alt="icon" />
                </div> */}

            </div>
          </div>


          <div className="col-lg-6 order-0 order-lg-1">
            <div className="bithu_v5_baner_right">
              <Slider {...settings}>
                {slideImages?.map((thumb, idx) => (
                  <SliderItem key={idx}>
                    <div className="banner_nft_thumb">
                      <img src={thumb} alt="thumb" />
                    </div>
                  </SliderItem>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <CoinInfoSlider />

      {/* particles  */}
      {/* <span className="particle_star particle_1">
        <img src={particle1} alt="icon" />
      </span> */}
      <span className="particle_star particle_2">
        <img src={particle2} alt="icon" />
      </span>
      <span className="particle_star particle_3">
        <img src={particle3} alt="icon" />
      </span>
      {/* particles  */}
    </BannerV1Wrapper>
  );
};

export default Banner;
