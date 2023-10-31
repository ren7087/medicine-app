import Image from "next/image";
import React from "react";

type Props = {
  result?: {
    notices?: string | undefined;
    points?: string | undefined;
  };
  contentLines: string[];
};

const AIResult = ({ result, contentLines }: Props) => {
  return (
    <div className="bg-white shadow-lg rounded-md md:p-10 p-5 mt-3">
      <p className="font-bold text-lg flex gap-1">
        <Image src={"/medi.webp"} alt="icon" width={22} height={18} />
        AIからの返答
      </p>

      <div className="p-3">
        <p className="font-bold">管理者に対しての特記事項</p>
        <p className="p-3 bg-slate-300 rounded-lg text-black">
          {result?.notices}
        </p>
      </div>

      <div className="p-3">
        <p className="font-bold">
          処方医及び医療関係者に対して提供した訪問結果に関する情報の要点
        </p>
        <p className="p-3 bg-slate-300 rounded-lg text-black">
          {contentLines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index !== contentLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default AIResult;
