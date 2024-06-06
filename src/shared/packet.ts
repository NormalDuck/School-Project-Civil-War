import { defineNamespace, definePacket, int8, struct } from "@rbxts/bytenet";
import { Workspace } from "@rbxts/services";

export const packet = defineNamespace("comm", () => {
	return {
		scene: definePacket({ value: struct({ scene: int8 }), reliabilityType: "reliable" }),
	};
});
