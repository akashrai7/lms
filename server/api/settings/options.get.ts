// server/api/settings/options.get.ts

import { defineEventHandler, getQuery } from 'h3';
import connectDB from '~/server/utils/db';
import Gender from '~/server/models/Gender';
import BloodGroup from '~/server/models/BloodGroup';
import Nationality from '~/server/models/Nationality';
import Category from '~/server/models/Category';
import State from '~/server/models/State';
import District from '~/server/models/District';

export default defineEventHandler(async (event) => {
  await connectDB();
  const { type } = getQuery(event);

  let Model;
  switch (type) {
    case 'gender':
      Model = Gender;
      break;
    case 'bloodGroup':
      Model = BloodGroup;
      break;
    case 'nationality':
      Model = Nationality;
      break;
    case 'category':
      Model = Category;
      break;
    case 'state':
      Model = State;
      break;
    case 'district':
      Model = District;
      break;
    default:
      return { statusCode: 400, message: 'Invalid type' };
  }

  const data = await Model.find().select('_id name').lean();

  return { statusCode: 200, data };
});
