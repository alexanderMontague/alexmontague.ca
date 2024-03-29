import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  state = {
    formData: {
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: "",
      formFeedbackMsg: "",
    },
    isFormOnline: false,
  };

  async componentDidMount() {
    try {
      const formResponse = (await axios("https://api.alexmontague.ca/resume"))
        .data;

      if (formResponse) {
        this.setState({ isFormOnline: true });
      }
    } catch (error) {
      this.setState({ isFormOnline: false });
    }
  }

  updateForm = e => {
    e.preventDefault();

    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };

  sendEmail = e => {
    e.preventDefault();

    const { contactName, contactEmail, contactSubject, contactMessage } =
      this.state.formData;

    if (!contactName || !contactEmail || !contactMessage) {
      this.setState({
        formFeedbackMsg: "Required field missing!",
      });
      return;
    }

    axios
      .post("https://api.alexmontague.ca/email", {
        fromEmail: contactEmail,
        sender: contactName,
        subject: contactSubject,
        message: contactMessage,
      })
      .then(({ data }) => {
        // if error
        if (data.error) {
          this.setState({ formFeedbackMsg: data.message });
          return;
        }

        this.setState({
          formFeedbackMsg: "Email Sent Successfully. Thanks!",
          formData: {
            contactName: "",
            contactEmail: "",
            contactSubject: "",
            contactMessage: "",
          },
        });
      });
  };

  render() {
    const message = this.props.data.contactmessage;
    const { formFeedbackMsg, isFormOnline } = this.state;

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
                paddingLeft: "15%",
              }}
            >
              <div style={{ color: "#ffffff" }}>{formFeedbackMsg}</div>
            </div>
            <form onSubmit={this.sendEmail}>
              {!isFormOnline && (
                <div style={{ textAlign: "center", color: "#ff0000" }}>
                  Form is currently offline, email me instead!
                  me@alexmontague.ca
                </div>
              )}
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    disabled={!isFormOnline}
                    type="text"
                    size="35"
                    id="contactName"
                    name="contactName"
                    value={this.state.formData.contactName}
                    onChange={this.updateForm}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    disabled={!isFormOnline}
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    value={this.state.formData.contactEmail}
                    onChange={this.updateForm}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    disabled={!isFormOnline}
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    value={this.state.formData.contactSubject}
                    onChange={this.updateForm}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    disabled={!isFormOnline}
                    style={{ resize: "none" }}
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                    value={this.state.formData.contactMessage}
                    onChange={this.updateForm}
                  />
                </div>

                <div>
                  <button
                    className="submit"
                    type="submit"
                    disabled={!isFormOnline}
                  >
                    Submit
                  </button>
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
