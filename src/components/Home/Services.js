import React, { Component } from 'react'
import Title from '../Globals/Title'

export default class Services extends Component {
    constructor(props) {
        super(props)
        this.state = {
          items: props.items.edges
        };
    }
    render() {
        return (
          <section className="services py-5">
            <div className="container">
              <Title title="Transportation Services"/>
              <div className="row">
                {this.state.items.reverse().map(({ node }) => {
                  return (
                    <div
                      key={node.id}
                      className="col-12 col-md-6 my-2 d-flex mx-auto"
                    >
                      <div className="flex-grow-1 px-3">
                        <div className="d-flex justify-content-center">
                          <p className="mb-0">{node.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
    }
}
