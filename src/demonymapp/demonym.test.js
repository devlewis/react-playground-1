import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Demonym from "./demonym";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("demonym", () => {
  let name;
  let country;

  let demonymWrapper;

  beforeEach(() => {
    name = "Laura";
    country = "England";

    demonymWrapper = shallow(<Demonym name={name} country={country} />);
  });

  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Demonym />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders name and country we pass in", () => {
    let div = demonymWrapper.find("div");
    expect(div.text()).toBe("A Laura comes from England");
  });

  it("renders a broken sentence when no props are provided", () => {
    demonymWrapper = shallow(<Demonym />);
    console.log(demonymWrapper.text());

    expect(demonymWrapper.text()).toBe("A  comes from ");
  });
});
