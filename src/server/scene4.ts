import { Workspace } from "@rbxts/services";
import { lockCamera, moveCamera } from "./camera";
import { move } from "./tween";

const salute = new Instance("Animation");
salute.AnimationId = "rbxassetid://17738223977";

const kneeling = new Instance("Animation");
kneeling.AnimationId = "rbxassetid://17738220140";

const clapping = new Instance("Animation");
clapping.AnimationId = "rbxassetid://17613937034";
export default function scene4() {
	task.wait(3);
	const camerafolder = Workspace.Scene4.camera;

	lockCamera(camerafolder[1].CFrame);

	task.wait(5);

	moveCamera(camerafolder[2].CFrame, 12).await();

	task.wait(2);

	moveCamera(camerafolder[3].CFrame, 1.5).await();

	task.wait(5);

	lockCamera(camerafolder[4].CFrame);

	task.wait(5);

	for (const official of Workspace.Scene4.white.GetChildren() as Rig[]) {
		official.Humanoid.Animator.LoadAnimation(salute).Play();
	}

	task.wait(4);

	for (const official of Workspace.Scene4.white.GetChildren() as Rig[]) {
		official.Humanoid.Animator.LoadAnimation(kneeling).Play();
	}

	task.wait(4);
	for (const official of Workspace.Scene4.white.GetChildren() as Rig[]) {
		official.Humanoid.Animator.LoadAnimation(clapping).Play();
	}
}
