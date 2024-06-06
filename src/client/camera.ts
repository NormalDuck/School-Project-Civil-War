import { Workspace, TweenService } from "@rbxts/services";

const NOYIELD = false;
export async function moveCamera(
	goal: CFrame,
	duration: number,
	easingStyle: Enum.EasingStyle = Enum.EasingStyle.Linear,
) {
	const tweenInfo = new TweenInfo(duration, easingStyle);
	if (Workspace.CurrentCamera) {
		Workspace.CurrentCamera.CameraType = Enum.CameraType.Scriptable;
		const tween = TweenService.Create(Workspace.CurrentCamera, tweenInfo, { CFrame: goal });
		tween.Play();
		if (!NOYIELD) {
			tween.Completed.Wait();
		}
	} else {
		while (!Workspace.CurrentCamera) {
			task.wait();
		}
		moveCamera(goal, duration, easingStyle);
	}
}

//yields if current camera doesn't exist
export async function lockCamera(pos: CFrame) {
	if (Workspace.CurrentCamera) {
		Workspace.CurrentCamera.CameraType = Enum.CameraType.Scriptable;
		Workspace.CurrentCamera.CFrame = pos;
		return;
	} else {
		while (!Workspace.CurrentCamera) {
			task.wait();
		}
		lockCamera(pos);
	}
}

export async function unlockCamera() {
	if (Workspace.CurrentCamera) {
		Workspace.CurrentCamera.CameraType = Enum.CameraType.Custom;
		return;
	} else {
		while (!Workspace.CurrentCamera) {
			task.wait();
		}
		unlockCamera();
	}
}
