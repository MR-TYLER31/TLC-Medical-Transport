import React, { Component } from "react";
import Title from "../Globals/Title";
import { Accordion, Button, Card } from "react-bootstrap";
import { FaArrowCircleDown } from "react-icons/fa";


export default class Careers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items.edges
    };
  }
  render() {
    return (
      <section className="services py-5">
        <div className="container">
          <Title title="Job Openings" />
          <div className="row">          
            {this.state.items.reverse().map(({ node }) => {
              console.log(node)
              return (
                <div key={node.id} className="col-12 my-2 d-flex mx-auto">
                  <Card className="card-accordion">
                    <Card.Header>
                      {node.title}
                      <Accordion>
                        <Card>
                          <Card.Header>
                            Description
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey={node.description}
                            >
                              <FaArrowCircleDown
                                style={{ fontSize: "25px", color: "#940002" }}
                              />
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={node.description}>
                            <Card.Body>
                              {node.description.description}
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>

                        <Card>
                          <Card.Header>
                            Requirements
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey={node.requirements}
                            >
                              <FaArrowCircleDown
                                style={{ fontSize: "25px", color: "#940002" }}
                              />
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={node.requirements}>
                            <Card.Body>
                              {node.requirements.requirements}
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>

                        <Card>
                          <Card.Header>
                            Apply
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey={node.apply}
                            >
                              <FaArrowCircleDown
                                style={{ fontSize: "25px", color: "#940002" }}
                              />
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={node.apply}>
                            <Card.Body>
                              {node.apply.apply}
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Card.Header>
                  </Card>
                </div>
              ); 
            })}
           
          </div>
        </div>
      </section>
    );
  }
}
