import { Debris, Workspace } from "@rbxts/services";
import { lockCamera, moveCamera } from "./camera";
import { move, tweenmodel } from "./tween";
import Maid from "@rbxts/maid";
import CameraShaker from "@rbxts/camera-shaker";
const walking = new Instance("Animation");
walking.AnimationId = "rbxassetid://17614104313";

const salute = new Instance("Animation");
salute.AnimationId = "rbxassetid://17738223977";

const flag = new Instance("Animation");
flag.AnimationId = "rbxassetid://17813654722";
const shaker = new CameraShaker(
	Enum.RenderPriority.Camera.Value,
	(shakeCFrame) => (Workspace.Camera.CFrame = Workspace.Camera.CFrame.mul(shakeCFrame)),
);
shaker.Start();
export default function scene7() {
	const camerafolder = Workspace.scene7.camera;
	const maid = new Maid();
	const animationtracks: AnimationTrack[] = [];
	const flaganimations: AnimationTrack[] = [];

	for (const flagger of [Workspace.scene7.confederate.troops.flag, Workspace.scene7.union.troops.flag]) {
		flaganimations.push(flagger.Humanoid.Animator.LoadAnimation(flag));
	}

	for (const flagger of flaganimations) {
		task.spawn(() => {
			flagger.Play();
			task.wait(0.5);
			flagger.AdjustSpeed(0);
		});
	}

	task.wait(3);

	lockCamera(camerafolder[1].CFrame);

	task.wait(5);

	moveCamera(camerafolder[2].CFrame, 3).await();

	task.wait(5);

	lockCamera(camerafolder[3].CFrame);

	moveCamera(camerafolder[5].CFrame, 10).await();

	lockCamera(camerafolder[5].CFrame);

	task.wait(5);

	moveCamera(camerafolder[6].CFrame, 10).await();

	task.wait(1);

	lockCamera(camerafolder[7].CFrame);

	for (const flagger of flaganimations) {
		flagger.AdjustSpeed(1);
	}

	for (const decendant of [
		...Workspace.scene7.union.troops.GetDescendants(),
		...Workspace.scene7.confederate.troops.GetDescendants(),
	]) {
		if (
			decendant.IsA("Animator") &&
			!decendant.IsDescendantOf(Workspace.scene7.union.troops.flag) &&
			!decendant.IsDescendantOf(Workspace.scene7.confederate.troops.flag)
		) {
			const track = decendant.LoadAnimation(walking);
			track.Play();
			animationtracks.push(track);
		}
	}

	tweenmodel(Workspace.scene7.union.troops, Workspace.scene7.union.troops.GetPivot().add(new Vector3(0, 0, 340)), 40);

	tweenmodel(
		Workspace.scene7.confederate.troops,
		Workspace.scene7.confederate.troops.GetPivot().sub(new Vector3(0, 0, 340)),
		40,
	);

	moveCamera(camerafolder[8].CFrame, 40.5).await();

	task.wait(0.2);

	for (const decendant of animationtracks) {
		decendant.Stop();
	}
	for (const flagger of flaganimations) {
		flagger.AdjustSpeed(0);
	}
	animationtracks.clear();

	task.wait(4);

	lockCamera(camerafolder[9].CFrame);

	task.wait(1);

	move(Workspace.scene7.duck, 5, {
		Position: new Vector3(-238.848, 2, -523.366),
	}).await();

	task.wait(2);

	lockCamera(camerafolder[10].CFrame);

	task.wait(2);

	Debris.AddItem(Workspace.scene7.confederate, 0.5);

	for (const bomb of Workspace.scene7.explode.GetChildren()) {
		task.delay(math.random(), () => {
			bomb.FindFirstChildOfClass("ParticleEmitter")?.Emit(50);
		});
	}

	task.wait(3);

	moveCamera(camerafolder[12].CFrame, 0.2);

	shaker.ShakeSustain(CameraShaker.Presets.Vibration);

	move(Workspace.scene7.god, 10, { CFrame: Workspace.scene7.god.CFrame.add(new Vector3(0, 21, 0)) }).await();
	shaker.StopSustained();

	task.wait(3);

	moveCamera(camerafolder[11].CFrame, 4).await();

	for (const decendant of Workspace.scene7.union.troops.GetDescendants()) {
		if (decendant.IsA("Animator")) {
			const track = decendant.LoadAnimation(salute);
			track.Play();
		}
	}
}
