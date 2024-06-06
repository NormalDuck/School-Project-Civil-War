import Maid from "@rbxts/maid";
import { CollectionService, RunService } from "@rbxts/services";

export const beltSpeed = 50;

export function init() {
	const maid = new Maid();
	maid.GiveTask(
		RunService.Heartbeat.Connect(() => {
			for (const belt of CollectionService.GetTagged("belt") as Part[]) {
				belt.AssemblyLinearVelocity = belt.CFrame.LookVector.mul(beltSpeed);
			}
		}),
	);
}
