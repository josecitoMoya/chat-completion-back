import OpenAI from "openai";

import { GPT_API_KEY, GPT_ORGANIZATION } from "../enviroment/index.js";

const openai = new OpenAI({
  apiKey: GPT_API_KEY,
  organization: GPT_ORGANIZATION,
});

export const gpt = async (messages) => {
  try {
    const completion = await openai.chat.completions.create({
      messages,
      model: "gpt-3.5-turbo",
    });
    return completion.choices[0].message;
  } catch (error) {
    console.error(error);
  }
};
