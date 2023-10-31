export type Symptoms = {
	血圧: "" | "問題なし" | "安定" | "改善";
	血糖値: "" | "問題なし" | "安定" | "改善";
	骨密度: "" | "問題なし" | "安定" | "改善";
	眼圧: "" | "問題なし" | "安定" | "改善";
	乾燥肌: "" | "問題なし" | "安定" | "改善";
	ふらつき: "" | "問題なし" | "安定" | "改善";
	眠気: "" | "問題なし" | "安定" | "改善";
	動悸: "" | "問題なし" | "安定" | "改善";
	食欲: "" | "問題なし" | "安定" | "改善";
	倦怠感: "" | "問題なし" | "安定" | "改善";
	自覚症状: "" | "問題なし" | "安定" | "改善";
};

export type SideEffect = {
	吐き気: "" | "注意" | "確認" | "発現";
	吐く: "" | "注意" | "確認" | "発現";
	めまい: "" | "注意" | "確認" | "発現";
	立ちくらみ: "" | "注意" | "確認" | "発現";
	脈が遅い: "" | "注意" | "確認" | "発現";
	うとうとする: "" | "注意" | "確認" | "発現";
	脱力感: "" | "注意" | "確認" | "発現";
	筋力低下: "" | "注意" | "確認" | "発現";
	顔が赤くなる: "" | "注意" | "確認" | "発現";
	息苦しい: "" | "注意" | "確認" | "発現";
	口が乾く: "" | "注意" | "確認" | "発現";
};

export type Medicine = {
	薬剤名: string;
	効能: string;
	副作用: string;
};

export type MedicineJSON = {
	title: string;
	efficacy?: string;
	sideEffect: string;
};
