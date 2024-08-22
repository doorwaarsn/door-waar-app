export enum Actions {
  SELECT,
  LOAD,
  LOAD_ERROR,
  LOAD_SUCCESS,
  LOAD_SINGLE,
  LOAD_SINGLE_ERROR,
  LOAD_SINGLE_SUCCESS,
  SAVE,
  SAVE_ERROR,
  SAVE_SUCCESS,
  LOAD_FUNCTS,
  LOAD_FUNCTS_ERROR,
  LOAD_FUNCTS_SUCCESS,
  DELETE,
  DELETE_ERROR,
  DELETE_SUCCESS,
  ARCHIVE,
  ARCHIVE_ERROR,
  ARCHIVE_SUCCESS,
  RESET,
}

export enum Gender {
  MALE,
  FEMMAL,
}

export enum Role {
  GREAT = "GREAT",
  ADMIN = "ADMIN",
  EMPLOYED = "EMPLOYED",
  HR_ADMIN = "HR_ADMIN",
  MANAGER = "MANAGER",
  CEO_AND_FOUNDER = "CEO_AND_FOUNDER",
}
export enum Status {
  idle,
  loading,
  saving,
  saved,
  success,
  loaded,
  failed,
}

export enum UserType {
  ADVISOR,
  PROVIDER,
  PARTNER,
  EXTERN,
  IN,
}
