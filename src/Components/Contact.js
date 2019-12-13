import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  state = {
    formData: {
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: "",
      formFeedbackMsg: ""
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
      case "contactSubject":
        this.setState({ contactSubject: e.target.value });
        break;
      default:
        this.setState({ contactMessage: e.target.value });
        break;
    }
  };

  sendEmail = e => {
    e.preventDefault();

    const {
      contactName,
      contactEmail,
      contactSubject,
      contactMessage
    } = this.state;

    if (!contactName || !contactEmail || !contactMessage) {
      this.setState({
        formFeedbackMsg: "Required field missing!"
      });
      return;
    }

    axios
      .post("https://api.alexmontague.ca/email", {
        toEmail: "me@alexmontague.ca",
        fromEmail: contactEmail,
        sender: contactName,
        subject: contactSubject,
        message: contactMessage
      })
      .then(({ data }) => {
        // if error
        if (data.error) {
          this.setState({ formFeedbackMsg: data.message });
          return;
        }

        this.setState({
          formFeedbackMsg: "Email Sent Successfully. Thanks!",
          contactName: "",
          contactEmail: "",
          contactSubject: "",
          contactMessage: ""
        });
      });
  };

  render() {
    const message = this.props.data.contactmessage;
    const { formFeedbackMsg } = this.state;
    const disableForm = true;

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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingLeft: "15%"
              }}
            >
              <div style={{ color: "#ffffff" }}>{formFeedbackMsg}</div>
            </div>
            <form onSubmit={this.sendEmail} disabled={true}>
              <div style={{ textAlign: "center", color: "#ff0000" }}>
                Form is currently offline, email me instead!
              </div>
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    disabled={disableForm}
                    type="text"
                    size="35"
                    id="contactName"
                    name="contactName"
                    value={this.state.contactName}
                    onChange={this.updateForm}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    disabled={disableForm}
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    value={this.state.contactEmail}
                    onChange={this.updateForm}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    disabled={disableForm}
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    value={this.state.contactSubject}
                    onChange={this.updateForm}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    disabled={disableForm}
                    style={{ resize: "none" }}
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                    value={this.state.contactMessage}
                    onChange={this.updateForm}
                  />
                </div>

                <div>
                  <button
                    className="submit"
                    type="submit"
                    disabled={disableForm}
                  >
                    Submit
                  </button>
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
                <a href={`mailto:me@alexmontague.ca`}>me@alexmontague.ca</a>
                <br />
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
