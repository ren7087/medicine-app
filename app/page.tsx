import React from "react";
import Form from "../components/features/form";
import Header from "@/components/ui/header";
import { MedicineJSON } from "@/types/type";

export default async function Home() {
	return (
		<div>
			<header>
				<Header />
			</header>
			<main>
				<Form />
			</main>
		</div>
	);
}
