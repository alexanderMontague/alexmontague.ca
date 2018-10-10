import React, { Component } from "react";

class Contact extends Component {
  state = {
    formData: {
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: ""
    }
  };

  updateForm = e => {
    e.preventDefault();

    switch (e.target.name) {
      case "contactName":
        this.setState({ contactName: e.target.value });
        break;
      case "contactEmail":
        this.setState({ contactEmail: e.target.value });
        break;
      case "contactsubject":
        this.setState({ contactSubject: e.target.value });
        break;
      default:
        this.setState({ contactMessage: e.target.value });
        break;
    }
  };

  sendEmail = e => {
    e.preventDefault();
  };

  render() {
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form onSubmit={this.sendEmail}>
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={this.updateForm}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={this.updateForm}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={this.updateForm}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                    onChange={this.updateForm}
                  />
                </div>

                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check" />
              Your message was sent, thank you!
              <br />
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Alex Montague</h4>
              <p className="address">
                <br />
                Toronto/Guelph/Oakville
                <br />
                me@alexmontague.ca
                <br />
                Currently the form is WIP, email me directly!
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
