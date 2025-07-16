import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASS, // Gmail App Password
  },
});

export async function sendCredentialsEmail(to: string, name: string, registrationId: string, password: string) {
  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to,
    subject: 'Registration Successful - LMS Portal',
    html: `
      <h3>Hello ${name},</h3>
      <p>You are successfully registered.</p>
      <p><strong>Registration ID:</strong> ${registrationId}</p>
      <p><strong>Password:</strong> ${password}</p>
      <p>Thank you!</p>
    `
  };

  await transporter.sendMail(mailOptions);
}
