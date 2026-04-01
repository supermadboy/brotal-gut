import { get } from "@vercel/edge-config";

export default async function handler(req, res) {
  try {
    const text = await get("disclaimer");
    res.status(200).json({ text });
  } catch (error) {
    res.status(200).json({ text: undefined });
  }
}

export const config = {
  runtime: "edge",
};
