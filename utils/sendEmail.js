// utils/sendEmail.js
import nodemailer from "nodemailer";

const sendEmail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "chdu712@gmail.com",
      pass: "jpgefimcfmtzhhwc",
    },
  });

  await transporter.sendMail({
    from: '"Prasanna Bike Service" <chdu712@gmail.com>',
    to,
    subject,
    html,
  });
  
};


export default sendEmail;
