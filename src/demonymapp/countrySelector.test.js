import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import countrySelector from "./countrySelector";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CountrySelector from "./countrySelector";

describe("countrySelector", () => {
  let changeHandler = jest.fn();
  let countries = [
    {
      country: "PW",
      offname: "The Republic of Palau",
      name: "Palau",
      startdate: "1994-10-01",
      citizennames: "Palauan"
    },
    {
      country: "AT",
      offname: "FakeCountryOfficial",
      name: "FakeCountryRelaxed",
      startdate: "1994-09-01",
      citizennames: "Fakers"
    },
    {
      country: "OK",
      offname: "OklahomaOfficial",
      name: "Oklahoma",
      startdate: "2004-12-12",
      citizennames: "Oklahomans"
    }
  ];

  let countrySelectorWrapper = shallow(
    <CountrySelector changeHandler={changeHandler} countries={countries} />
  );

  it("calls changeHandler() when select is changed", () => {
    let select = countrySelectorWrapper.find("#country");

    select.simulate("change", { target: { value: "Oklahoma" } });

    expect(changeHandler).toHaveBeenCalledWith(countries[2]);
  });
});
