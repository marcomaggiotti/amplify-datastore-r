// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ReservationStatus = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE"
};

const { Reservation } = initSchema(schema);

export {
  Reservation,
  ReservationStatus
};