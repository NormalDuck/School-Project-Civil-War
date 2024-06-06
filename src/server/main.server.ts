import {  CollectionService } from "@rbxts/services";

const walking = new Instance("Animation");
walking.AnimationId = "rbxassetid://17614104313";
// const walkingtrack = Workspace.Scene1.owner.Humanoid.Animator.LoadAnimation(walking);

for (const rig of CollectionService.GetTagged("test") as Rig[]) {
	const animate = rig.Humanoid.Animator.LoadAnimation(walking);
	animate.Looped = true;
	animate.Play();
}
