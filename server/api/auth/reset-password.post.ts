// import { defineEventHandler, readBody, createError } from 'h3';
// import connectDB from '@/server/utils/db';
// import User from '@/server/models/User';
// import jwt from 'jsonwebtoken';
// import { transporter } from '@/server/utils/mailer';

// export default defineEventHandler(async (event) => {
//   try {
//     await connectDB();
//     const { email } = await readBody(event);

//     if (!email) {
//       throw createError({ statusCode: 400, statusMessage: 'Email is required' });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       throw createError({ statusCode: 404, statusMessage: 'User not found' });
//     }

//     if (user.role === 'admin') {
//       throw createError({ statusCode: 403, statusMessage: 'Admin password reset not allowed' });
//     }

//     // Generate a password reset token (valid for 15 min)
//     const resetToken = jwt.sign(
//       { userId: user._id },
//       process.env.JWT_SECRET as string,
//       { expiresIn: '15m' }
//     );

//     const resetLink = `http://localhost:3000/trezo-bs/authentication/reset-password?token=${resetToken}`;

//     await transporter.sendMail({
//       from: process.env.SMTP_EMAIL,
//       to: email,
//       subject: 'Reset Your LMS Password',
//       html: `
//         <h3>Hello ${user.firstName},</h3>
//         <p>Click the link below to reset your password:</p>
//         <a href="${resetLink}">${resetLink}</a>
//         <p>This link will expire in 15 minutes.</p>
//       `
//     });

//     return {
//       status: 200,
//       message: 'Password reset link sent to email.'
//     };
//   } catch (error: any) {
//     throw createError({
//       statusCode: error.statusCode || 500,
//       statusMessage: error.statusMessage || 'Something went wrong',
//     });
//   }
// });

import { defineEventHandler, readBody } from 'h3';
import connectDB from '@/server/utils/db';
import User from '@/server/models/User';
import { generateToken } from '@/server/utils/auth';
import { transporter } from '@/server/utils/mailer';
import jwt from 'jsonwebtoken';

export default defineEventHandler(async (ctx) => {
  await connectDB();
  const { email } = await readBody(ctx);

  if (!email) return { status: 400, message: 'Email is required' };

  const user = await User.findOne({ email });
  if (!user) return { status: 404, message: 'User not found' };
  if (user.role === 'admin') return { status: 403, message: 'Admin reset not allowed' };

  // const resetToken = generateToken({ id: user._id }, '15m');
 const resetToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET as string,
      { expiresIn: '600m' }
    );


  const resetLink = `https://lms-git-master-akashrai7s-projects.vercel.app/authentication/forget-password?token=${resetToken}`;

  await transporter.sendMail({
    from: process.env.SMTP_EMAIL,
    to: email,
    subject: 'Reset Your Password',
    html: `
      <p>Hello ${user.firstName},</p>
      <p>Click the link below to reset your password:</p>
      <a href="${resetLink}">${resetLink}</a>
      <p>This link is valid for 15 minutes.</p>
    `
  });

  return { status: 200, message: 'Reset link sent to your email.' };
});
