//!native
//!optimize 2
import { Workspace } from "@rbxts/services";
import { lockCamera, moveCamera } from "./camera";
import CameraShaker, { CameraShakeInstance } from "@rbxts/camera-shaker";
const shaker = new CameraShaker(
	Enum.RenderPriority.Camera.Value,
	(shakeCFrame) => (Workspace.Camera.CFrame = Workspace.Camera.CFrame.mul(shakeCFrame)),
);
shaker.Start();

export default function scene6() {
	task.wait(3);
	const camerafolder = Workspace.scene6.camera;

	lockCamera(camerafolder[1].CFrame);

	task.wait(5);

	moveCamera(camerafolder[2].CFrame, 2).await();

	task.wait(5);

	moveCamera(camerafolder[3].CFrame, 1).await();

	task.wait(5);

	moveCamera(camerafolder[4].CFrame, 2).await();

	task.wait(5);

	moveCamera(camerafolder[5].CFrame, 5).await();

	task.wait(3);

	lockCamera(camerafolder[6].CFrame);
	shaker.Shake(CameraShaker.Presets.Explosion);

	task.wait(5);

	lockCamera(camerafolder[7].CFrame).await();

	task.wait(1);

	for (const children of Workspace.scene6["HH-Fort"].GetChildren() as BasePart[]) {
		children.Anchored = false;
		if (children.Name === "Tower" || children.Name === "Wood-Support") {
			children.Destroy();
		}
	}

	task.wait(0.1);

	for (const children of Workspace.scene6.explosion.GetChildren() as Part[]) {
		const explosion = new Instance("Explosion");
		explosion.Position = children.Position;
		explosion.BlastPressure = 1000;
		explosion.BlastRadius = 100;
		explosion.DestroyJointRadiusPercent = 0;
		explosion.Parent = Workspace;
		explosion.AncestryChanged.Once(() => {
			explosion.Destroy();
		});
	}
}
