import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { SideEffect, Symptoms } from "@/types/type";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { symptoms, sideEffect } = (await req.json()) as {
    symptoms: Symptoms;
    sideEffect: SideEffect;
  };

  const symptomsContent =
    typeof symptoms === "string" ? symptoms : JSON.stringify(symptoms);
  const sideEffectContent =
    typeof sideEffect === "string" ? sideEffect : JSON.stringify(sideEffect);

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "assistant",
          content: `
					・You are an expert in medicine. 入力情報を元に、薬剤師向けの訪問・居宅療養管理指導報告書を生成してください。
					・Please write about the patient's symptoms in great detail.
					・Please write about the patient's side effect in great detail.
					・Please write like as a pharmacist.
					・Please output each item with more than 600 characters.
					・管理者に対しての特記事項も記載してください。 ex) 今後の服薬指導のポイント。息苦しさがある場合は、呼吸器科受診を勧める。

					・出力はJSON形式で書いてください。

							# 出力形式
							{
								"notices": "管理者に対しての特記事項",
								"points": "処方医及び医療関係者に対して提供した訪問結果に関する情報の要点",
							}
						`,
        },
        { role: "user", content: symptomsContent + sideEffectContent },
      ],
      temperature: 0.2,
      // max_tokens: 3500,
    });
    const chatResponse = completion.choices[0].message?.content;

    return NextResponse.json({ message: chatResponse });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong!" });
  }
}
