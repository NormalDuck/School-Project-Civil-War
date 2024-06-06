/* eslint-disable roblox-ts/lua-truthiness */
import { Lighting, RunService, Workspace } from "@rbxts/services";
import { lockCamera } from "./camera";
import Maid from "@rbxts/maid";
import { rotate } from "./tween";
import { cframe } from "@rbxts/bytenet";

export function scene2() {
	const maid = new Maid();
	const camerafolder = Workspace.Scene2.camera;
	lockCamera(camerafolder[1].CFrame);

	Workspace.Scene2.lighting.PointLight.Enabled = false;

	task.wait(3);

	Workspace.Scene2.lighting.PointLight.Enabled = true;

	lockCamera(camerafolder[3].CFrame);

	task.wait(5);

	lockCamera(camerafolder[2].CFrame);

	const ice = new Instance("Part");
	ice.Size = new Vector3(0.5, 0.5, 0.5);
	ice.Color = Color3.fromRGB(159, 243, 233);
	ice.Material = Enum.Material.Glacier;
	ice.Name = "ice";

	for (const worker of Workspace.Scene2["worker group"].workers.plus.GetChildren() as Rig[]) {
		maid.GiveTask(
			task.spawn(() => {
				while (task.wait(2)) {
					rotate(worker.HumanoidRootPart, 0, 180, 0);
					task.wait(2);
					rotate(worker.HumanoidRootPart, 0, 180, 0);
					const clone = ice.Clone();
					clone.CFrame = worker.HumanoidRootPart.CFrame.mul(new CFrame(0, 0, 5));
					clone.Parent = Workspace;
				}
			}),
		);
	}
	task.wait(1);
	for (const worker of Workspace.Scene2["worker group"].workers.minus.GetChildren() as Rig[]) {
		maid.GiveTask(
			task.spawn(() => {
				while (task.wait(2)) {
					rotate(worker.HumanoidRootPart, 0, 180, 0);
					task.wait(2);
					rotate(worker.HumanoidRootPart, 0, 180, 0);
					const clone = ice.Clone();
					clone.CFrame = worker.HumanoidRootPart.CFrame.mul(new CFrame(0, 0, 5));
					clone.Parent = Workspace;
				}
			}),
		);
	}

	maid.GiveTask(
		Workspace.Scene2.Portal.PrimaryPart?.Touched.Connect((part) => {
			if (part.Name === "ice") {
				print(part);
				part.Destroy();
			}
		}) as RBXScriptConnection,
	);

	lockCamera(camerafolder[4].CFrame);

	task.wait(5);

	lockCamera(camerafolder[3].CFrame);

	task.wait(10);
}
