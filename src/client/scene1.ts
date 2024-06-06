import { createMotion, tween } from "@rbxts/ripple";
import { PathfindingService, RunService, TweenService, Workspace } from "@rbxts/services";
import { lockCamera, moveCamera } from "./camera";
import { cframe } from "@rbxts/bytenet";
import { move, rotate } from "./tween";
import Maid from "@rbxts/maid";

const walking = new Instance("Animation");
walking.AnimationId = "rbxassetid://17614104313";
const walkingtrack = Workspace.Scene1.owner.Humanoid.Animator.LoadAnimation(walking);

const climb = new Instance("Animation");
climb.AnimationId = "rbxassetid://17738228699";
const climbingtrack = Workspace.Scene1.owner.Humanoid.Animator.LoadAnimation(climb);

const whip = new Instance("Animation");
whip.AnimationId = "rbxassetid://17738368353";
const whippingtrack = Workspace.Scene1.owner.Humanoid.Animator.LoadAnimation(whip);

export default function scene1() {
	const maid = new Maid();
	const cameraFolder = Workspace.Scene1.camera;
	const pathFolder = Workspace.Scene1.path;
	const farmer = Workspace.Scene1.owner.HumanoidRootPart;
	Workspace.WaitForChild("Scene1");
	lockCamera(Workspace.Scene1.camera[1].CFrame);

	rotate(farmer, 0, 180, 0).await();
	walkingtrack.Play();

	move(farmer, 10, { CFrame: pathFolder[1].CFrame }).await();

	rotate(farmer, 0, -90, 0).await();

	move(farmer, 10, { CFrame: pathFolder[2].CFrame }).await();

	lockCamera(cameraFolder[2].CFrame);

	rotate(farmer, 0, 90, 0).await();

	walkingtrack.Stop();
	climbingtrack.Play();

	move(farmer, 8, { CFrame: pathFolder[3].CFrame }).await();

	climbingtrack.Stop();

	lockCamera(cameraFolder[3].CFrame);
	walkingtrack.Play();

	rotate(farmer, 0, -90, 0).await();

	task.delay(8, () => {
		lockCamera(cameraFolder[4].CFrame);
	});

	move(farmer, 15, { CFrame: pathFolder[4].CFrame }).await();

	rotate(farmer, 0, 90, 0).await();

	move(farmer, 7, { CFrame: pathFolder[5].CFrame }).await();

	rotate(farmer, 0, -90, 0).await();

	move(farmer, 3, { CFrame: pathFolder[6].CFrame }).await();

	move(farmer, 1, { CFrame: pathFolder[7].CFrame }).await();

	lockCamera(cameraFolder[5].CFrame).await();

	whippingtrack.Play();
	whippingtrack.Looped = true;

	move(farmer, 20, { CFrame: pathFolder[8].CFrame });

	moveCamera(cameraFolder[6].CFrame, 20).await();

	whippingtrack.Stop();
	walkingtrack.Stop();

	lockCamera(cameraFolder[7].CFrame);

	maid.GiveTask(
		RunService.Heartbeat.Connect(() => {
			for (const cotton of Workspace.Scene1.cottonfield.cottons.GetChildren() as UnionOperation[]) {
				for (const touching of cotton.GetTouchingParts()) {
					if (touching.Parent?.Name === "slav") {
						cotton.Destroy();
					}
				}
			}
		}),
	);

	for (const slave of Workspace.Scene1.slaves.GetChildren() as Rig[]) {
		slave.Humanoid.Animator.LoadAnimation(walking);
		move(slave.HumanoidRootPart, 10, { CFrame: slave.HumanoidRootPart.CFrame.mul(new CFrame(0, 0, -120)) }).andThen(
			() => {
				maid.DoCleaning();
			},
		);
	}
}
