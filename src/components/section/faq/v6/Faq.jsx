import { FiPlus, FiMinus } from "react-icons/fi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SectionTitle from "../../../../common/sectionTitle";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "../../../../common/accordion/Accordion";
import data from "../../../../assets/data/faqDataV3";
import "react-tabs/style/react-tabs.css";
import FAQStyleWrapper from "./Faq.style";

const FAQ = () => {
  return (
    <FAQStyleWrapper className="bithu_faq_sect" id="faq">
      <div className="container">
        <div className="faq_content">
          <Tabs>
            <TabList>
              {data?.map((faq, idx) => (
                <Tab key={idx}>{faq.category}</Tab>
              ))}
            </TabList>

            {data?.map((faq, idx) => (
              <TabPanel key={idx}>
                <h4 style={{ color: faq.color }}>{faq.description1}</h4>
                <h4 style={{ color: faq.color }}>{faq.description2}</h4>
                <h4 style={{ color: faq.color }}>{faq.description3}</h4>
                <h4 style={{ color: faq.color }}>{faq.description4}</h4>
                <h4 style={{ color: faq.color }}>{faq.description5}</h4>
                <h4 style={{ color: faq.color }}>{faq.description6}</h4>
                <h4 style={{ color: faq.color }}>{faq.description7}</h4>
                <h4 style={{ color: faq.color }}>{faq.description8}</h4>
                <h4 style={{ color: faq.color }}>{faq.description9}</h4>
                <h4 style={{ color: faq.color }}>{faq.description10}</h4>
                <h4 style={{ color: faq.color }}>{faq.description11}</h4>
                <h4 style={{ color: faq.color }}>{faq.description12}</h4>
                <h4 style={{ color: faq.color }}>{faq.description13}</h4>
                <Accordion className="faq_questions">
                  {faq.items?.map((item, i) => (
                    <AccordionItem key={i}>
                      <AccordionTitle>
                        <h5>{item.title}</h5>
                        <IconWrapper>
                          <OpenIcon>
                            <FiMinus />
                          </OpenIcon>
                          <CloseIcon>
                            <FiPlus />
                          </CloseIcon>
                        </IconWrapper>
                      </AccordionTitle>
                      <AccordionBody>
                        <p>{item.text}</p>
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </FAQStyleWrapper>
  );
};

export default FAQ;
