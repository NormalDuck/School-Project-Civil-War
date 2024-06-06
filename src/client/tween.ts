//custom tweening to support yielding and less annoying rotations

import { TweenService } from "@rbxts/services";
const NOYIELD = false;
//creates and plays the tween.
export async function move<T extends Instance>(
	obj: T,
	time: number,
	props: Partial<ExtractMembers<T, Tweenable>>,
	easingstyle = Enum.EasingStyle.Linear,
) {
	const tween = TweenService.Create(obj, new TweenInfo(time, easingstyle), props);
	tween.Play();
	if (!NOYIELD) {
		tween.Completed.Wait();
	}
	return obj;
}
//performs a rotation with cframe
export async function rotate(obj: BasePart, x: number, y: number, z: number, time = 0.5) {
	const tween = TweenService.Create(obj, new TweenInfo(time, Enum.EasingStyle.Linear), {
		CFrame: obj.CFrame.mul(CFrame.Angles(math.rad(x), math.rad(y), math.rad(z))),
	});
	tween.Play();
	if (!NOYIELD) {
		tween.Completed.Wait();
	}
	return obj;
}
