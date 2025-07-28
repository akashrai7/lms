// import { H3Event, setCookie } from 'h3';
// import connectDB from '@/server/utils/db';
// import User from '@/server/models/User';

// export default defineEventHandler(async (event: H3Event) => {
//   // Token हटाने के लिए खाली value और expired date set करें
//   await connectDB();
  
//   const authUser = event.context.auth;
//   if (!authUser) {
//     return { status: 401, message: 'Unauthorized' };
//   }
//   const user = await User.findById(authUser.id);
//   if (!user) {
//     return { status: 404, message: 'User not found' };
//   }

//   setCookie(event, 'token', '', {
//     httpOnly: true,
//     secure: true,
//     path: '/',
//     expires: new Date(0),
//     maxAge: 0,
//     sameSite: 'strict',
//   });

//   // Only for student, reset deviceId
//   if (user.role != '') {
//     user.deviceId = null;
//     await user.save();
//   }

//   return {
//     success: true,
//     message: 'Logged out successfully',
//   };
// });
// server/api/auth/logout.post.ts
import { defineEventHandler, setCookie } from 'h3';

export default defineEventHandler(async (event) => {
  // Same attributes (path/samesite/secure) रखें ताकि ब्राउज़र सही तरह से overwrite/clear कर सके
  const common = {
    path: '/',
    sameSite: 'strict' as const,
    secure: process.env.NODE_ENV === 'production',
  };

  // Token (HTTP-only) cookie clear
  setCookie(event, 'token', '', {
    ...common,
    httpOnly: true,
    maxAge: 0,
  });

  // Role (non HTTP-only) cookie clear
  setCookie(event, 'role', '', {
    ...common,
    httpOnly: false,
    maxAge: 0,
  });

  // (Optional) अगर refreshToken भी रखते हैं तो उसे भी यहां clear करें
  // setCookie(event, 'refreshToken', '', { ...common, httpOnly: true, maxAge: 0 });

  return {
    status: 200,
    message: 'Logged out successfully',
  };
});
