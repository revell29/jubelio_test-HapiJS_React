import EleveniaController from "../app/modules/elevenia";

export default [
  {
    path: "/elevenia/getProduct",
    method: "GET",
    handler: EleveniaController.index,
  },
];
