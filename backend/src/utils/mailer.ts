// utils/mailer.ts
import nodemailer from "nodemailer";

export const sendEmail = async (to: string, subject: string, text: string) => {
  try {
    // Transporter setup
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // ya tumhara provider
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // tumhari gmail ya smtp user
        pass: process.env.EMAIL_PASS, // app password ya smtp pass
      },
    });

    // Mail options
    const mailOptions = {
      from: `"My App" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    };

    // Send mail
    await transporter.sendMail(mailOptions);
    console.log(`📧 Email sent to ${to}`);
  } catch (err) {
    console.error("❌ Email sending failed:", err);
    throw new Error("Email not sent");
  }
};
