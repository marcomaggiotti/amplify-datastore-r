import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum ReservationStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}



type EagerReservation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reservation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly status: ReservationStatus | keyof typeof ReservationStatus;
  readonly date?: string | null;
  readonly requests?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReservation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reservation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly status: ReservationStatus | keyof typeof ReservationStatus;
  readonly date?: string | null;
  readonly requests?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Reservation = LazyLoading extends LazyLoadingDisabled ? EagerReservation : LazyReservation

export declare const Reservation: (new (init: ModelInit<Reservation>) => Reservation) & {
  copyOf(source: Reservation, mutator: (draft: MutableModel<Reservation>) => MutableModel<Reservation> | void): Reservation;
}