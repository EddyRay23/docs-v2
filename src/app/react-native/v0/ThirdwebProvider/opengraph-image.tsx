import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "ThirdwebProvider: thirdweb React Native SDK",
		icon: "react",
	});
}
