import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/CallBegan");
export const apiCallSuccees = createAction("api/CallSuccees");
export const apiCallFaild = createAction("api/CallFaild");