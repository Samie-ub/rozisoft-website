import React, { useRef, useState } from "react";
import { Grid } from "@mui/material";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mailIcon, phoneIcon, whatsappIcon } from "../assets";
function ContactSection() {
  const showToastMessage = () => {
    toast.success("Email Sucessfully Send !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const formRef = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    tel: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_1r7z9rl",
        "template_yna5qez",
        {
          from_name: form.name,
          to_name: "Rozisoft Admin",
          from_email: form.email,
          to_email: "rozisoftservice@gmail.com",
          message: form.message,
          from_tel: form.tel,
        },
        "vL5ecrIL5X6cYL91i"
      )
      .then(
        () => {
          setLoading(false);
          setForm({
            name: "",
            email: "",
            message: "",
            tel: "",
          });
          showToastMessage()
          setTimeout(() => {
            setShowPopup(false);
          }, 2000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setShowPopup(false);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  const contactData = [
    {
      imgSrc: phoneIcon,
      label: "+92-3144085048",
      href:"tel:+923144085048"
    },
    {
      imgSrc: whatsappIcon,
      label: "+92-3464075748",
      href:"https://wa.me/+923464075748"
    },
    {
      imgSrc: whatsappIcon,
      label: "+92-3488128670",
      href:"https://api.whatsapp.com/send?phone=+923488128670",
      href:"https://wa.me/+923488128670"
    },
    {
      imgSrc: mailIcon,
      label: "rozisoftservice@gmail.com",
      href:"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rozisoftservice@gmail.com"
    },
  ];
  return (
    <div className="contact-container" name="contact">
    <div className="overlay">
      <ToastContainer/>
      <Grid
        container
        sx={{
          justifyContent: { xs: "center", md: "space-evenly" },
          gap: { xs: 5, md: 0 },
          pt: { xs: 5, md: 10 },
        }}
        alignItems={"flex-start"}
      >
        <Grid item xs={11} md={5} lg={5}>
          <div className="contact-content">
            <h1>Get a Free Quote from rozisoft</h1>
            <p>
              We are here to give you expert opinions on Digital Marketing.
            </p>
            <p>
              Feel free to contact our digital marketing agents for more information and details 24/7.
            </p>
            <div className="contact-ico">
              {contactData.map((content, index) => {
                return (
                  <div>
                    <img src={content.imgSrc} alt="contact icons" />
                    <a href={content.href} target="_blank" rel="noreferrer">{content.label}</a>
                  </div>
                );
              })}
            </div>
          </div>
        </Grid>
        <Grid item xs={11} md={5} lg={5}>
          <form
            className="contact-form"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="name"
              required
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Contact No"
              required
              name="tel"
              value={form.tel}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="email address"
              required
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              value={form.message}
              required
              onChange={handleChange}
            ></textarea>
            <button
              className="btn"
              type="submit"
              
            >
              submit
            </button>
          </form>
        </Grid>
      </Grid>
    </div>
  </div>
  );
}

export default ContactSection;
