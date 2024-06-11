//custom tweening to support yielding and less annoying rotations

import Maid from "@rbxts/maid";
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
//tweens the model
export async function tweenmodel(obj: Model, goal: CFrame, time: number, easingstyle = Enum.EasingStyle.Linear) {
	const maid = new Maid();
	const CFrameValue = new Instance("CFrameValue");
	CFrameValue.Value = obj.GetPivot();
	const tween = TweenService.Create(CFrameValue, new TweenInfo(time, easingstyle), { Value: goal });
	tween.Play();
	maid.GiveTask(CFrameValue);
	maid.GiveTask(
		CFrameValue.Changed.Connect((cframe) => {
			obj.PivotTo(cframe);
		}),
	);
	tween.Completed.Wait();
	maid.Destroy();
}
