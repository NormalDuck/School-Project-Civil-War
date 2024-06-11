import { Workspace } from "@rbxts/services";
import { lockCamera, moveCamera } from "./camera";
import { cframe } from "@rbxts/bytenet";

const WAIT = 10;
export default function scene3() {
	task.wait(3); // for loading the engine
	const camerafolder = Workspace.Scene3.camera;

	lockCamera(camerafolder[1].CFrame);
	task.wait(WAIT);
	moveCamera(camerafolder[2].CFrame, 0.5).await();
	moveCamera(camerafolder[3].CFrame, 1).await();
	task.wait(WAIT);
	moveCamera(camerafolder[4].CFrame, 0.5).await();
	moveCamera(camerafolder[5].CFrame, 1).await();
	task.wait(WAIT);
	moveCamera(camerafolder[6].CFrame, 0.5).await();
	moveCamera(camerafolder[7].CFrame, 1).await();
	task.wait(WAIT);
	moveCamera(camerafolder[8].CFrame, 0.5).await();
	moveCamera(camerafolder[9].CFrame, 1).await();
	task.wait(WAIT);
	moveCamera(camerafolder[10].CFrame, 0.5).await();
	moveCamera(camerafolder[11].CFrame, 1).await();
	task.wait(WAIT);
	moveCamera(camerafolder[12].CFrame, 0.5).await();
	moveCamera(camerafolder[13].CFrame, 1).await();
	task.wait(WAIT);
	lockCamera(new CFrame(0, 0, 0));
}
