export default [
  {
    path: "/public/{files*}",
    method: "GET",
    handler: {
      directory: {
        path: "public/",
      },
    },
  },
];
