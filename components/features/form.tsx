"use client";
import axios from "axios";
import Image from "next/image";
import React from "react";
import Checkbox from "@/components/ui/checkbox";
import MultiSelectDropdown from "@/components/ui/dropdown";
import Loading from "@/components/ui/loading";
import RadioButton from "@/components/ui/radio";
import Textarea from "@/components/ui/textarea";
import { MedicineJSON, SideEffect, Symptoms } from "@/types/type";
const AIResult = React.lazy(() => import("@/components/features/aiResult"));

const Form = React.memo(() => {
  const [symptoms, setSymptoms] = React.useState<Symptoms>({
    血圧: "",
    血糖値: "",
    骨密度: "",
    眼圧: "",
    乾燥肌: "",
    ふらつき: "",
    眠気: "",
    動悸: "",
    食欲: "",
    倦怠感: "",
    自覚症状: "",
  });
  const [sideEffect, setSideEffect] = React.useState<SideEffect>({
    吐き気: "",
    吐く: "",
    めまい: "",
    立ちくらみ: "",
    脈が遅い: "",
    うとうとする: "",
    脱力感: "",
    筋力低下: "",
    顔が赤くなる: "",
    息苦しい: "",
    口が乾く: "",
  });

  const [isLoading, setIsLoading] = React.useState(false);
  const [result, setResult] = React.useState<{
    notices?: string;
    points?: string;
  }>();
  const contentLines = result?.points?.split(/\n\t\t|\n/) || [];

  const handleInputChange = React.useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      questionType: string
    ) => {
      const { name, value, type } = e.target as HTMLInputElement;
      if (questionType === "symptoms") {
        setSymptoms((prev) => ({
          ...prev,
          [name]: value,
        }));
      } else {
        setSideEffect((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    },
    []
  );

  const callAI = async () => {
    setIsLoading(true);
    await axios({
      url: "/api/praise",
      method: "POST",
      data: { symptoms: symptoms, sideEffect: sideEffect },
      timeout: 50000, // タイムアウトを50秒（50000ミリ秒）に設定
    })
      .then((result) => {
        console.log(result.data.message);
        setResult(JSON.parse(result.data.message));
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        alert("エラーが発生しました。");
        setIsLoading(false);
      });
  };

  const symptomsOptions = [
    { value: "問題なし", label: "問題なし" },
    { value: "安定", label: "安定" },
    { value: "改善", label: "改善" },
  ];
  const sideEffectOptions = [
    { value: "注意", label: "注意" },
    { value: "確認", label: "確認" },
    { value: "発現", label: "発現" },
  ];

  return (
    <div className="md:m-10 m-3">
      <form>
        <div className="bg-white shadow-lg rounded-md md:p-10 p-5">
          <div className="md:flex md:space-x-4">
            <div className="md:w-1/2 text-center">
              <p className="font-bold text-lg flex gap-1 justify-center">
                <Image src={"/medi.webp"} alt="icon" width={22} height={18} />
                症状
              </p>
              <div className="p-3">
                <RadioButton
                  name="血圧"
                  options={symptomsOptions}
                  selectedValue={symptoms["血圧"]}
                  onChange={(e) => handleInputChange(e, "symptoms")}
                />
                <RadioButton
                  name="血糖値"
                  options={symptomsOptions}
                  selectedValue={symptoms["血糖値"]}
                  onChange={(e) => handleInputChange(e, "symptoms")}
                />
                <RadioButton
                  name="骨密度"
                  options={symptomsOptions}
                  selectedValue={symptoms["骨密度"]}
                  onChange={(e) => handleInputChange(e, "symptoms")}
                />
                <RadioButton
                  name="眼圧"
                  options={symptomsOptions}
                  selectedValue={symptoms["眼圧"]}
                  onChange={(e) => handleInputChange(e, "symptoms")}
                />
                <RadioButton
                  name="乾燥肌"
                  options={symptomsOptions}
                  selectedValue={symptoms["乾燥肌"]}
                  onChange={(e) => handleInputChange(e, "symptoms")}
                />
                <RadioButton
                  name="ふらつき"
                  options={symptomsOptions}
                  selectedValue={symptoms["ふらつき"]}
                  onChange={(e) => handleInputChange(e, "symptoms")}
                />
                <RadioButton
                  name="眠気"
                  options={symptomsOptions}
                  selectedValue={symptoms["眠気"]}
                  onChange={(e) => handleInputChange(e, "symptoms")}
                />
                <RadioButton
                  name="動悸"
                  options={symptomsOptions}
                  selectedValue={symptoms["動悸"]}
                  onChange={(e) => handleInputChange(e, "symptoms")}
                />
                <RadioButton
                  name="食欲"
                  options={symptomsOptions}
                  selectedValue={symptoms["食欲"]}
                  onChange={(e) => handleInputChange(e, "symptoms")}
                />
                <RadioButton
                  name="倦怠感"
                  options={symptomsOptions}
                  selectedValue={symptoms["倦怠感"]}
                  onChange={(e) => handleInputChange(e, "symptoms")}
                />
                <RadioButton
                  name="自覚症状"
                  options={symptomsOptions}
                  selectedValue={symptoms["自覚症状"]}
                  onChange={(e) => handleInputChange(e, "symptoms")}
                />
              </div>
            </div>
            <div className="md:w-1/2 text-center">
              <p className="font-bold text-lg flex gap-1 justify-center">
                <Image src={"/medi.webp"} alt="icon" width={22} height={18} />
                薬副作用
              </p>
              <div className="p-3">
                <RadioButton
                  name="吐き気"
                  options={sideEffectOptions}
                  selectedValue={sideEffect["吐き気"]}
                  onChange={(e) => handleInputChange(e, "sideEffect")}
                />
                <RadioButton
                  name="吐く"
                  options={sideEffectOptions}
                  selectedValue={sideEffect["吐く"]}
                  onChange={(e) => handleInputChange(e, "sideEffect")}
                />
                <RadioButton
                  name="めまい"
                  options={sideEffectOptions}
                  selectedValue={sideEffect["めまい"]}
                  onChange={(e) => handleInputChange(e, "sideEffect")}
                />
                <RadioButton
                  name="立ちくらみ"
                  options={sideEffectOptions}
                  selectedValue={sideEffect["立ちくらみ"]}
                  onChange={(e) => handleInputChange(e, "sideEffect")}
                />
                <RadioButton
                  name="脈が遅い"
                  options={sideEffectOptions}
                  selectedValue={sideEffect["脈が遅い"]}
                  onChange={(e) => handleInputChange(e, "sideEffect")}
                />
                <RadioButton
                  name="うとうとする"
                  options={sideEffectOptions}
                  selectedValue={sideEffect["うとうとする"]}
                  onChange={(e) => handleInputChange(e, "sideEffect")}
                />
                <RadioButton
                  name="脱力感"
                  options={sideEffectOptions}
                  selectedValue={sideEffect["脱力感"]}
                  onChange={(e) => handleInputChange(e, "sideEffect")}
                />
                <RadioButton
                  name="筋力低下"
                  options={sideEffectOptions}
                  selectedValue={sideEffect["筋力低下"]}
                  onChange={(e) => handleInputChange(e, "sideEffect")}
                />
                <RadioButton
                  name="顔が赤くなる"
                  options={sideEffectOptions}
                  selectedValue={sideEffect["顔が赤くなる"]}
                  onChange={(e) => handleInputChange(e, "sideEffect")}
                />
                <RadioButton
                  name="息苦しい"
                  options={sideEffectOptions}
                  selectedValue={sideEffect["息苦しい"]}
                  onChange={(e) => handleInputChange(e, "sideEffect")}
                />
                <RadioButton
                  name="口が乾く"
                  options={sideEffectOptions}
                  selectedValue={sideEffect["口が乾く"]}
                  onChange={(e) => handleInputChange(e, "sideEffect")}
                />
              </div>
            </div>
          </div>
          <div>
            {isLoading ? (
              <Loading />
            ) : (
              <div className="flex justify-center">
                <button
                  onClick={callAI}
                  className="w-40 h-10 text-white rounded-lg shadow-lg bg-blue-500 hover:opacity-70"
                >
                  submit
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
      <AIResult result={result} contentLines={contentLines} />
    </div>
  );
});

Form.displayName = "Form";
export default Form;
