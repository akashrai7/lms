import { defineEventHandler, readBody, getQuery, getRouterParam } from 'h3';
import connectDB from '@/server/utils/db';
import Institute from '@/server/models/Institute';
import { verifyToken } from '@/server/utils/auth';

export default defineEventHandler(async (event) => {
  await connectDB();
  await verifyToken(event);

  const institutes = await Institute.find()
    .sort({ createdAt: -1 })
    .populate('typeOfInstitute')
    .populate('affiliationBoard')
    .populate('state')
    .populate('district')
    .populate('trainingMode')
    .populate('trainingLanguage');

  return {
    status: true,
    data: institutes,
  };
});
