/* eslint-disable roblox-ts/lua-truthiness */
import { CollectionService, Lighting, RunService, Workspace } from "@rbxts/services";
import { lockCamera, moveCamera } from "./camera";
import Maid from "@rbxts/maid";
import { rotate } from "./tween";
import { cframe } from "@rbxts/bytenet";

export default function scene2() {
	const maid = new Maid();
	const camerafolder = Workspace.Scene2.camera;
	lockCamera(camerafolder[1].CFrame);
	task.wait(5);

	Workspace.Scene2.lighting.PointLight.Enabled = false;

	task.wait(3);

	Workspace.Scene2.lighting.PointLight.Enabled = true;

	task.wait(3);

	moveCamera(camerafolder[3].CFrame, 3, Enum.EasingStyle.Quad).await();

	task.wait(3);

	lockCamera(camerafolder[2].CFrame);

	task.wait(2);
	const ice = new Instance("Part");
	ice.Size = new Vector3(0.1, 0.1, 0.1);
	ice.Color = Color3.fromRGB(159, 243, 233);
	ice.Material = Enum.Material.Glacier;
	ice.Name = "ice";

	task.spawn(() => {
		for (const i of $range(1, 13)) {
			for (const worker of Workspace.Scene2["worker group"].workers.plus.GetChildren() as Rig[]) {
				task.spawn(() => {
					const clone = ice.Clone();
					rotate(worker.HumanoidRootPart, 0, 180, 0).await();
					task.wait(2);
					rotate(worker.HumanoidRootPart, 0, 180, 0).await();
					clone.Position = worker.HumanoidRootPart.Position.add(new Vector3(4, 0, 0));
					clone.Parent = Workspace;
				});
			}

			for (const worker of Workspace.Scene2["worker group"].workers.minus.GetChildren() as Rig[]) {
				task.spawn(() => {
					const clone = ice.Clone();
					rotate(worker.HumanoidRootPart, 0, 180, 0).await();
					task.wait(1);
					rotate(worker.HumanoidRootPart, 0, 180, 0).await();
					clone.Position = worker.HumanoidRootPart.Position.add(new Vector3(-4, 0, 0));
					clone.Parent = Workspace;
				});
			}
			task.delay(1.5, () => {
				for (const icebar of CollectionService.GetTagged("ice") as Part[]) {
					icebar.Size = icebar.Size.sub(new Vector3(0.08, 0.08, 0.08));
				}
			});
			task.wait(4);
		}
	});

	maid.GiveTask(
		Workspace.Scene2.Portal.PrimaryPart?.Touched.Connect((part) => {
			if (part.Name === "ice") {
				part.Destroy();
			}
		}) as RBXScriptConnection,
	);

	lockCamera(camerafolder[4].CFrame);

	task.wait(5);

	lockCamera(camerafolder[3].CFrame);

	task.wait(5);

	lockCamera(camerafolder[4].CFrame);

	task.wait(3);

	lockCamera(camerafolder[2].CFrame);
}
