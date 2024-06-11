import { CollectionService } from "@rbxts/services";
import { Workspace } from "@rbxts/services";
import { init } from "./tags";
import disablestates from "./humanoidstate";

import scene1 from "./scene1";
import scene2 from "./scene2";
import scene3 from "./scene3";
import scene4 from "./scene4";
import scene5 from "./scene5";
import scene6 from "./scene6";
import scene7 from "./scene7";

const walking = new Instance("Animation");
walking.AnimationId = "rbxassetid://17614104313";

for (const rig of CollectionService.GetTagged("test") as Rig[]) {
	task.defer(() => {
		const animate = rig.Humanoid.Animator.LoadAnimation(walking);
		animate.Looped = true;
		animate.Play();
	});
}

init();
disablestates();
scene7();
