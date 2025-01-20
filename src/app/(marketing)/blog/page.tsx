import { Metadata } from "next";

export const metadata: Metadata = {
  // title: "hm kohomada", template eke thiyena value ekath ekka ekathu wela meka pennananwa title eke
  title: {
    absolute: "me thama aththama title eka", // absolute title eka danne mehema ethakota ara default, template override karala meka thama pennanne
  },
};

export default function Blog() {
  return <h1>Blog</h1>;
}
