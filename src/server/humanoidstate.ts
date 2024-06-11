import { Workspace } from "@rbxts/services";

const disable = [
	Enum.HumanoidStateType.Climbing,
	Enum.HumanoidStateType.FallingDown,
	Enum.HumanoidStateType.Freefall,
	Enum.HumanoidStateType.Flying,
	Enum.HumanoidStateType.Jumping,
	Enum.HumanoidStateType.Swimming,
];

export default function disablestates() {
	for (const humanoid of Workspace.GetDescendants().filter((v) => v.IsA("Humanoid"))) {
		const Humanoid = humanoid as Humanoid;
		for (const state of disable) {
			Humanoid.SetStateEnabled(state, false);
		}
	}

	Workspace.DescendantAdded.Connect((children) => {
		if (children.IsA("Humanoid")) {
			const Humanoid = children as Humanoid;
			for (const state of disable) {
				Humanoid.SetStateEnabled(state, false);
			}
		}
	});
}
