import { Metadata } from "next";

export const metadata: Metadata = {
  // title: "hm kohomada", template eke thiyena value ekath ekka ekathu wela meka pennananwa title eke
  title: {
    absolute: "me thama aththama title eka", // absolute title eka danne mehema ethakota ara default, template override karala meka thama pennanne
  },
};

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000);
  });
  return <h1>Blog</h1>;
}
