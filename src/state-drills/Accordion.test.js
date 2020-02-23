import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Accordion from "./Accordion";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Accordion", () => {
  let sections;

  let accordionWrapper;

  beforeEach(() => {
    sections = [
      {
        title: "valentine",
        content: "HOLA"
      },

      {
        title: "heart",
        content: "red"
      },

      {
        title: "arrow",
        content: "target"
      }
    ];

    accordionWrapper = shallow(<Accordion sections={sections} />);
  });

  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders sections we pass in", () => {
    let items = accordionWrapper.find("li");
    let buttons = accordionWrapper.find("button");
    expect(items).toHaveLength(3);
    expect(buttons).toHaveLength(3);
  });

  it("renders section content when clicking accordion item button", () => {
    //expect no p tags before clicking
    let ptags = accordionWrapper.find("p");
    expect(ptags).toHaveLength(0);

    //click first item
    accordionWrapper
      .find("button")
      .at(0)
      .simulate("click");
    //look for tag again post-click
    ptags = accordionWrapper.find("p");

    ////other option: loop through all buttons, click each one,
    //expect that button to work

    //expect content to be what we passed in
    expect(ptags.text()).toBe(sections[0].content);
  });

  it("only one section open at a time", () => {
    //click first item
    accordionWrapper
      .find("button")
      .at(0)
      .simulate("click");
    //look for tag post click
    let ptags = accordionWrapper.find("p");
    //expect it to have one p
    expect(ptags).toHaveLength(1);

    //other option: loop through all items and expect content of [1,2] to not be open-
    // "if (i = 0) . . . "
  });

  ////////////////// homework here! ////////////////////////
  ///1. changed:
  //it('if no content provided, renders title with no content' to:
  it("if no content provided, renders fine after clicking content-less button", () => {
    sections = sections.map(item => ({ title: item.title }));
    accordionWrapper = shallow(<Accordion sections={sections} />);

    //look for buttons
    let btags = accordionWrapper.find("button");
    expect(btags).toHaveLength(3);

    //click item
    accordionWrapper
      .find("button")
      .at(0)
      .simulate("click");

    let ptags = accordionWrapper.find("p");
    expect(ptags.text()).toBe("");
    //why did .toBe(null) not work- bc <p> tags inherently contain strings?
  });

  it("if no title provided, renders empty button", () => {
    sections = [{ content: "a" }, { content: "b" }];
    accordionWrapper = shallow(<Accordion sections={sections} />);

    accordionWrapper.find("button").forEach(button => {
      expect(button.text()).toBe("");
    });
  });
});
