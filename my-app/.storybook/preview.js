import "../styles/globals.css"

import * as NextImage from "next/image";

import { setupWorker, rest } from "msw";

if (typeof global.process === "undefined") {
  const worker = setupWorker(
    rest.get("https://sixbits-project.herokuapp.com/api/posts", (req, res, ctx) => {
      return res(ctx.json({  "user_id": 1,
      "title": "Wild Garlic",
      "description": "The smell of spring!",
      "location": "Torquay",
      "free": false,
      "price": 100.30,
      "date": "23/2/2022"}));
    })
  )
  worker.start();
}

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
    />
  ),
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}