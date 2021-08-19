import { React, useState } from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Col, Container, Row, Card } from "react-bootstrap";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./projects_cards.scss";
import Terms from "./markdown_parser";
import Markdown_parser from "./markdown_parser";

function Create_img(logo,card_title,md) {
  const [selected, select] = useState(true);
  const icon_style = { fontSize: "50", color: "inherit", padding: "0 0" };
  if (selected) {
    return (
      <Col xs={12} lg={{ span: 4, order: "last" }} className="main_col">
        <Card className="main_card">
          <Card.Body>
            <Card.Img
              variant="top"
              src={logo}
            />

            <Card.ImgOverlay>
              <Row>
                <Col className="icon_col">
                  <IconButton
                    onClick={() => select(false)}
                    className="card_button"
                    float="right"
                    edge="end"
                  >
                    {" "}
                    <ArrowDropDownIcon style={icon_style} />
                  </IconButton>
                </Col>
              </Row>
            </Card.ImgOverlay>
            <Card.Title>{card_title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  } else {
    return (
      <>
        <Col xs={2} lg={{ order: "first", span: 1 }} className="main_col">
        <IconButton
                      onClick={() => select(true)}
                      className="card_button flipped"
                      float="right"
                      edge="end"
                    >
                      {" "}
                      <ArrowDropDownIcon style={icon_style} />
                    </IconButton>
        </Col>
        <Col xs={10} lg={{ order: "first", span: 11 }} className="main_col">
          {/* <div className="markdown"> */}
            <Markdown_parser className="markdown" path={md} />
          {/* </div> */}
        </Col>
      </>
    );
  }
}

export default function Project_cards(logo,card_title,md) {
  return (
    // <Col xs={12} lg={4} className="main_col">
    <>
    {Create_img(logo,card_title,md)}
    </>
    // </Col>
  );
}
