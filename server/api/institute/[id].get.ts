
import { defineEventHandler, readBody, getQuery, getRouterParam } from 'h3';
import connectDB from '@/server/utils/db';
import Institute from '@/server/models/Institute';
import { verifyToken } from '@/server/utils/auth';

export default defineEventHandler(async (event) => {
  await connectDB();
  await verifyToken(event);

  const id = getRouterParam(event, 'id');

  const institute = await Institute.findById(id)
    .populate('typeOfInstitute')
    .populate('affiliationBoard')
    .populate('state')
    .populate('district')
    .populate('trainingMode')
    .populate('trainingLanguage');

  return {
    status: true,
    data: institute,
  };
});
