import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function Faq() {
  return (
    <div className="px-4 lg:px-20 xl:w-2/3 xl:px-0 mx-auto mb-8 md:mb-20 lg:mt-56 mt-[28rem]">
      <div className="text-3xl lg:text-4xl xl:text-5xl text-center mb-6 font-sf_pro_display_bold text-gray-900 font-extrabold">Frequently asked questions</div>
      <hr />
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What's the best thing about Switzerland?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              I don't know, but the flag is a big plus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quas cupiditate laboriosam
              fugiat.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How do you make holy water?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              cupiditate laboriosam fugiat.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Why do you never see elephants hiding in trees?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              cupiditate laboriosam fugiat.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Why can’t you hear a pterodactyl go to the bathroom?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              cupiditate laboriosam fugiat.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Why did the invisible man turn down the job offer?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              cupiditate laboriosam fugiat.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Faq;
