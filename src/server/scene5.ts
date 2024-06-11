import { Workspace } from "@rbxts/services";
import { lockCamera, moveCamera } from "./camera";
import { move, rotate } from "./tween";

const shoot = new Instance("Animation");
shoot.AnimationId = "rbxassetid://17813668178";
export default function scene5() {
	task.wait(3);
	const camerafolder = Workspace.Scene5.camera;
	lockCamera(camerafolder[1].CFrame);
	for (const decal of [
		38571340, 17682425179, 14793850447, 14312963913, 13254384129, 8221187760, 7106759679, 10457030007, 14565810982,
		13224066121, 6879874348, 15883006157, 7119782305, 52557690,
	]) {
		Workspace.Scene5.movie.Decal.Texture = `rbxassetid://${decal}`;
		task.wait(1);
	}
	task.wait(2);
	lockCamera(camerafolder[2].CFrame);
	task.wait(2);
	moveCamera(camerafolder[3].CFrame, 0.5);
	task.wait(2);
	moveCamera(camerafolder[4].CFrame, 1);
	task.wait(0.5);
	const shoottrack = Workspace.Scene5.killer.Humanoid.Animator.LoadAnimation(shoot);
	shoottrack.Play();
	shoottrack.Ended.Wait();
	Workspace.Scene5.bullet.PivotTo(
		new CFrame(Workspace.Scene5.killer["Right Arm"].Position.add(new Vector3(0, 0, 1))),
	);
	moveCamera(camerafolder[5].CFrame, 0.5).await();
	moveCamera(camerafolder[6].CFrame, 15);
	rotate(Workspace.Scene5.Lincoln.HumanoidRootPart, 0, 180, 0, 15 * 3);
	move(Workspace.Scene5.bullet, 15, { Position: Workspace.Scene5.Lincoln.Head.Position }).await();
	Workspace.Scene5.Highlight.Enabled = true;
	task.wait(0.1);
	Workspace.Scene5.Highlight.Enabled = false;
	Workspace.Scene5.bullet.Destroy();
	for (const children of Workspace.Scene5.Lincoln.GetChildren()) {
		if (children.IsA("BasePart")) {
			move(children, 2, { Transparency: 1 });
		}
	}
	task.wait(2);
	Workspace.Scene5.Lincoln.Destroy();
}
