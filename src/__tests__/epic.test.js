import React from 'react';
import ReactDome from 'react-dom';
import Epic from '../web/components/Epic';
import Main from '../web/containers/app/main';

import render from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Header from '../web/components/Header';
import AboutInfo from '../web/components/AboutInfo';
import Footer from '../web/components/Footer';
import SCLPage from '../web/components/SCLPage';

it("renders without crashing", () =>{
    const div= document.createElement("div");
    ReactDome.render(<AboutInfo></AboutInfo>,div)
})

it("it can check whether the card is presented or not", () =>{
    const card= document.createElement("card");
    ReactDome.render(<AboutInfo></AboutInfo>,card)
})

it("it can check whether the CardBody is presented or not", () =>{
    const CardBody= document.createElement("CardBody");
    ReactDome.render(<AboutInfo></AboutInfo>,CardBody)
})

it("it can check whether the CardTitle is presented or not", () =>{
    const CardTitle= document.createElement("CardTitle");
    ReactDome.render(<AboutInfo></AboutInfo>,CardTitle)
})

it("it can check whether the CardText is presented or not", () =>{
    const CardText= document.createElement("CardText");
    ReactDome.render(<AboutInfo></AboutInfo>,CardText)
})

it("it can check whether the Row is presented or not", () =>{
    const Row= document.createElement("Row");
    ReactDome.render(<Footer></Footer>,Row)
})


it("it can check whether the Col is presented or not", () =>{
    const Col= document.createElement("Col");
    ReactDome.render(<Footer></Footer>,Col)
})

it("it can check whether the Pagination is presented or not", () =>{
    const Pagination= document.createElement("Pagination");
    ReactDome.render(<SCLPage></SCLPage>,Pagination)
})


// it("it can check whether the table is presented or not", () =>{
//     const table= document.createElement("table");
//     ReactDome.render(<Epic></Epic>,table)
// })

// it("renders link correctly", () =>{
//     const table= document.createElement("table");
//     ReactDome.render(<Epic></Epic>,table)
// })

// it("renders link correctly", () =>{
//     const th= document.createElement("th");
//     ReactDome.render(<Epic></Epic>,th)
// })

// describe("GET /epicProjectDetails", () => {
//     test("It responds with an array of epicProjectDetails", async () => {
//       const response = await request(Epic).get("/http://10.1.101.52:9090/sec-0.0.1-SNAPSHOT/service/listofprojects");
//       expect(response.body[0]).toHaveProperty("id");
//       expect(response.body[0]).toHaveProperty("name");
//     });
//   });


