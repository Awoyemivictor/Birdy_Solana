// import React from "react";
import { useModal } from "../../utils/ModalContext";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import Layout from "../../common/layout";
import Header from "../../components/section/header/v2";
import Banner from "../../components/section/banner/v5";
import About from "../../components/section/about/v5";
import RoadMap from "../../components/section/roadMap/v5";
import FAQ from "../../components/section/faq/v5";
import Team from "../../components/section/team/v5";
import Mint from "../../components/section/mint/v1";
import MintNowModal from "../../common/modal/mintNowModal";
import WalletModal from "../../common/modal/walletModal/WalletModal";
import StyleWrapper from "./StyleWrapper";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "../../common/button";

const HomeV5 = () => {
  const { visibility, walletModalvisibility } = useModal();

  const handleRoadmapClick = (e) => {
    e.preventDefault();
    window.open("https://heyzine.com/flip-book/2919a1bbd6.html", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Layout>
        <GlobalStyles />
        {visibility && <MintNowModal />}
        {walletModalvisibility && <WalletModal />}
        <Header />

        <StyleWrapper>
          <Tabs>
            <TabList>
              <Tab>
                <span>01.</span> Home
              </Tab>
              <Tab>
                <span>02.</span> About
              </Tab>
              <Tab onClick={handleRoadmapClick}>
                <span>03.</span> Roadmap
              </Tab>
              <Tab>
                <span>04.</span> Team
              </Tab>
              <Tab>
                <span>05.</span> FAQ
              </Tab>
              <Tab>
                <span>06.</span> BUY BIRDY
              </Tab>
            </TabList>

            <TabPanel>
              <Banner />
            </TabPanel>
            <TabPanel>
              <About />
            </TabPanel>
            <TabPanel>

            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '50px' }}>
              <a href="/path-to-your-roadmap.pdf" download>
                <button style={{ padding: "10px 20px", fontSize: "16px" }}>
                  Download Roadmap PDF
                </button>
              </a>
              <a href="/path-to-your-roadmap.pdf" download>
                <button style={{ padding: "10px 20px", fontSize: "16px" }}>
                  Download Roadmap PDF
                </button>
              </a>
            </div> */}
            <RoadMap />
            </TabPanel>
            <TabPanel>
              <Team />
            </TabPanel>
            <TabPanel>
              <FAQ />
            </TabPanel>
            <TabPanel>
              <Mint />
            </TabPanel>
          </Tabs>
        </StyleWrapper>
      </Layout>
    </>
  );
};

export default HomeV5;
