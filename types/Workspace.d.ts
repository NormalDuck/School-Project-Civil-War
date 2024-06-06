interface Workspace extends Model {
	Camera: Camera;
	Baseplate: Part;
	Scene2: Folder & {
		factory: Model;
		camera: Folder & {
			["1"]: Part;
			["4"]: Part;
			["3"]: Part;
			["2"]: Part;
		};
		Portal: Model;
		["worker group"]: Model & {
			workers: Folder & {
				minus: Model;
				plus: Model;
			};
		};
		lighting: Part & {
			Weld: Weld;
			PointLight: PointLight;
		};
	};
	README: Script;
	Scene1: Folder & {
		camera: Folder & {
			["1"]: Part;
			["3"]: Part;
			["2"]: Part;
			["5"]: Part;
			["4"]: Part;
			["7"]: Part;
			["6"]: Part;
		};
		path: Folder & {
			["1"]: Part;
			["8"]: Part;
			["3"]: Part;
			["2"]: Part;
			["5"]: Part;
			["4"]: Part;
			["7"]: Part;
			["6"]: Part;
		};
		cottonfield: Model & {
			cottons: Folder;
			Fence: Model & {
				Folder: Folder & {
					Folder: Folder;
				};
				Corn: Model & {
					Part: Part;
				};
			};
		};
		Farm: Model;
		owner: Model & {
			["Left Leg"]: Part & {
				LeftFootAttachment: Attachment;
			};
			Humanoid: Humanoid & {
				Animator: Animator;
				HumanoidDescription: HumanoidDescription;
			};
			["Right Leg"]: Part & {
				RightFootAttachment: Attachment;
			};
			Head: Part & {
				HatAttachment: Attachment;
				FaceFrontAttachment: Attachment;
				HairAttachment: Attachment;
				face: Decal;
				Mesh: SpecialMesh;
				FaceCenterAttachment: Attachment;
			};
			Torso: Part & {
				RightCollarAttachment: Attachment;
				WaistCenterAttachment: Attachment;
				BodyBackAttachment: Attachment;
				Neck: Motor6D;
				LeftCollarAttachment: Attachment;
				["Left Hip"]: Motor6D;
				roblox: Decal;
				["Right Hip"]: Motor6D;
				["Left Shoulder"]: Motor6D;
				["Right Shoulder"]: Motor6D;
				BodyFrontAttachment: Attachment;
				WaistBackAttachment: Attachment;
				WaistFrontAttachment: Attachment;
				NeckAttachment: Attachment;
			};
			HumanoidRootPart: Part & {
				RootJoint: Motor6D;
				RootAttachment: Attachment;
			};
			["Baldi's Ruler"]: Tool & {
				Handle: Part & {
					Decal: Decal;
				};
			};
			["Body Colors"]: BodyColors;
			FarmerPitchFork: Accessory & {
				Handle: Part & {
					BodyBackAttachment: Attachment;
					AccessoryWeld: Weld;
					OriginalSize: Vector3Value;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
				};
			};
			["Right Arm"]: Part & {
				RightGrip: Weld;
				RightGripAttachment: Attachment;
				RightShoulderAttachment: Attachment;
			};
			["Left Arm"]: Part & {
				LeftGripAttachment: Attachment;
				LeftShoulderAttachment: Attachment;
			};
			WideBrimStrawhat: Accessory & {
				Handle: Part & {
					AccessoryWeld: Weld;
					HatAttachment: Attachment;
					Mesh: SpecialMesh;
					OriginalSize: Vector3Value;
				};
			};
			Animate: LocalScript & {
				idle: StringValue & {
					Animation2: Animation & {
						Weight: NumberValue;
					};
					Animation1: Animation & {
						Weight: NumberValue;
					};
				};
				jump: StringValue & {
					JumpAnim: Animation;
				};
				sit: StringValue & {
					SitAnim: Animation;
				};
				run: StringValue & {
					RunAnim: Animation;
				};
				toolnone: StringValue & {
					ToolNoneAnim: Animation;
				};
				ScaleDampeningPercent: NumberValue;
				PlayEmote: BindableFunction;
				fall: StringValue & {
					FallAnim: Animation;
				};
				climb: StringValue & {
					ClimbAnim: Animation;
				};
				walk: StringValue & {
					WalkAnim: Animation;
				};
			};
			Beard: Accessory & {
				Handle: Part & {
					FaceFrontAttachment: Attachment;
					AccessoryWeld: Weld;
					Mesh: SpecialMesh;
					OriginalSize: Vector3Value;
				};
			};
		};
		statue: Model & {
			["Left Leg"]: Part & {
				LeftFootAttachment: Attachment;
			};
			Humanoid: Humanoid & {
				Animator: Animator;
				HumanoidDescription: HumanoidDescription;
			};
			["Right Leg"]: Part & {
				RightFootAttachment: Attachment;
			};
			Head: Part & {
				Decal: Decal;
				HatAttachment: Attachment;
				FaceFrontAttachment: Attachment;
				HairAttachment: Attachment;
				Mesh: SpecialMesh;
				FaceCenterAttachment: Attachment;
			};
			Torso: Part & {
				RightCollarAttachment: Attachment;
				WaistCenterAttachment: Attachment;
				BodyBackAttachment: Attachment;
				Neck: Motor6D;
				LeftCollarAttachment: Attachment;
				["Left Hip"]: Motor6D;
				roblox: Decal;
				["Right Hip"]: Motor6D;
				["Left Shoulder"]: Motor6D;
				["Right Shoulder"]: Motor6D;
				BodyFrontAttachment: Attachment;
				WaistBackAttachment: Attachment;
				WaistFrontAttachment: Attachment;
				NeckAttachment: Attachment;
			};
			HumanoidRootPart: Part & {
				Decal: Decal;
				RootJoint: Motor6D;
				SpotLight: SpotLight;
				RootAttachment: Attachment;
			};
			FarmerPitchFork: Accessory & {
				Handle: Part & {
					AccessoryWeld: Weld;
					BodyBackAttachment: Attachment;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
				};
			};
			["Right Arm"]: Part & {
				quote: Part & {
					SurfaceGui: SurfaceGui & {
						TextLabel: TextLabel;
					};
				};
				RightShoulderAttachment: Attachment;
				RightGripAttachment: Attachment;
				WeldConstraint: WeldConstraint;
			};
			["Left Arm"]: Part & {
				quote: Part & {
					SurfaceGui: SurfaceGui & {
						TextLabel: TextLabel;
					};
				};
				LeftGripAttachment: Attachment;
				WeldConstraint: WeldConstraint;
				LeftShoulderAttachment: Attachment;
			};
			["Body Colors"]: BodyColors;
			Animate: LocalScript & {
				idle: StringValue & {
					Animation2: Animation & {
						Weight: NumberValue;
					};
					Animation1: Animation & {
						Weight: NumberValue;
					};
				};
				jump: StringValue & {
					JumpAnim: Animation;
				};
				sit: StringValue & {
					SitAnim: Animation;
				};
				run: StringValue & {
					RunAnim: Animation;
				};
				toolnone: StringValue & {
					ToolNoneAnim: Animation;
				};
				ScaleDampeningPercent: NumberValue;
				PlayEmote: BindableFunction;
				fall: StringValue & {
					FallAnim: Animation;
				};
				climb: StringValue & {
					ClimbAnim: Animation;
				};
				walk: StringValue & {
					WalkAnim: Animation;
				};
			};
		};
		slaves: Model;
		Bed: Model & {
			Pillow: UnionOperation;
		};
	};
}
