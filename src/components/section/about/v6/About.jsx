import Button from "../../../../common/button";
import AboutStyleWrapper from "./About.style";

import thumb1 from "../../../../assets/images/nft/story-img1.png";
import thumb2 from "../../../../assets/images/nft/story-img2.png";
import thumb3 from "../../../../assets/images/nft/story-img3.png";
import thumb4 from "../../../../assets/images/nft/story-img4.png";

const About = () => {
  return (
    <AboutStyleWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about_left_content">
              <h2 className="about_title">
                THE STORY <br /> YOU SHOULD KNOW
              </h2>
              <p>
              Birdy Meme Coin is not just about fun; it's about creating real-world value. 
              Our upcoming features will transform Birdy Coin into a utility coin that combines
               the appeal of luxury with the practical benefits of blockchain technology. 
               Stay tuned for more updates as we turn your Birdy Coinsinto powerful tools 
               for investment and enjoyment.

              </p>
              <p>
              Join the Evolution: Be part of the Birdy Coin revolution and experience the future of 
              cryptocurrency with features that are designed to deliver both fun and function.
               Keep an eye on our website for the latest updates and opportunities to get involved.
              </p>
              <p>
                Feel free to reach out to us through our socials for further inquiries and feedback.
              </p>

              <Button size="lg" variant="mint">
                Read Tokenomics
              </Button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about_right_content">
              <div className="nft_thumb">
                <img src={thumb1} alt="thumb" />
              </div>
              <div className="nft_thumb">
                <img src={thumb2} alt="thumb" />
              </div>
              <div className="nft_thumb">
                <img src={thumb3} alt="thumb" />
              </div>
              <div className="nft_thumb">
                <img src={thumb4} alt="thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutStyleWrapper>
  );
};

export default About;
