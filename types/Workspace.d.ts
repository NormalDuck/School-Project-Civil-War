interface Workspace extends Model {
	Camera: Camera;
	Baseplate: Part;
	scene7: Folder & {
		duck: Part;
		god: Part;
		confederate: Folder & {
			troops: Model & {
				["1"]: Model;
				captin: Model & {
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
					Katana: Tool & {
						Handle: Part & {
							Slash: Sound;
							Lunge: Sound;
							Mesh: SpecialMesh;
							Unsheath: Sound;
						};
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
					["Meshes/MustachesAccessory"]: Accessory & {
						Handle: Part & {
							FaceFrontAttachment: Attachment;
							AccessoryWeld: Weld;
							SpecialMesh: SpecialMesh;
							AvatarPartScaleType: StringValue;
						};
						ThumbnailConfiguration: Configuration & {
							ThumbnailCameraValue: CFrameValue;
							ThumbnailCameraTarget: ObjectValue;
						};
					};
					Hat: Accessory & {
						Handle: Part & {
							HairAttachment: Attachment;
							AccessoryWeld: Weld;
							OriginalSize: Vector3Value;
							Mesh: SpecialMesh;
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
					["Right Arm"]: Part & {
						RightGrip: Weld;
						RightGripAttachment: Attachment;
						RightShoulderAttachment: Attachment;
					};
					["Left Arm"]: Part & {
						LeftGripAttachment: Attachment;
						LeftShoulderAttachment: Attachment;
					};
					Pants: Pants;
					Shirt: Shirt;
					["Body Colors"]: BodyColors;
					Hair: Accessory & {
						Handle: Part & {
							HairAttachment: Attachment;
							AccessoryWeld: Weld;
							Mesh: SpecialMesh;
							OriginalSize: Vector3Value;
						};
					};
				};
				["3"]: Model;
				["2"]: Model;
				["5"]: Model;
				["4"]: Model;
				["7"]: Model;
				["6"]: Model;
				["9"]: Model;
				["8"]: Model;
				flag: Model & {
					["Left Leg"]: Part;
					Humanoid: Humanoid & {
						Animator: Animator;
					};
					Animate: LocalScript & {
						toolnone: StringValue & {
							ToolNoneAnim: Animation;
						};
						climb: StringValue & {
							ClimbAnim: Animation;
						};
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
						fall: StringValue & {
							FallAnim: Animation;
						};
						run: StringValue & {
							RunAnim: Animation;
						};
						walk: StringValue & {
							WalkAnim: Animation;
						};
					};
					flag: Tool & {
						Handle: Part & {
							Mesh: CylinderMesh;
							FabricPole: Part & {
								Mesh: CylinderMesh;
							};
						};
					};
					Torso: Part & {
						RightCollarAttachment: Attachment;
						WaistCenterAttachment: Attachment;
						BodyBackAttachment: Attachment;
						Neck: Motor6D;
						LeftCollarAttachment: Attachment;
						["Left Hip"]: Motor6D;
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
					};
					Shirt: Shirt;
					Pants: Pants;
					Sound: Script & {
						LocalSound: LocalScript;
					};
					Backpack: Accessory & {
						bayonet2: Part & {
							Mesh: CylinderMesh;
							WeldConstraint: WeldConstraint;
						};
						bayonet1: Part & {
							Mesh: CylinderMesh;
							WeldConstraint: WeldConstraint;
						};
						Handle: Part & {
							AccessoryWeld: Weld;
							OriginalSize: Vector3Value;
							BodyBackAttachment: Attachment;
						};
						bayonet3: Part & {
							Mesh: SpecialMesh;
							WeldConstraint: WeldConstraint;
						};
						bayonet4: Part & {
							Mesh: SpecialMesh;
							WeldConstraint: WeldConstraint;
						};
					};
					Head: Part & {
						Climbing: Sound;
						HatAttachment: Attachment;
						Swimming: Sound;
						FaceFrontAttachment: Attachment;
						face: Decal;
						Running: Sound;
						Died: Sound;
						Splash: Sound;
						GettingUp: Sound;
						Landing: Sound;
						Jumping: Sound;
						HairAttachment: Attachment;
						FreeFalling: Sound;
						Mesh: SpecialMesh;
						FaceCenterAttachment: Attachment;
					};
					["Union Cap"]: Accessory & {
						Handle: Part & {
							AccessoryWeld: Weld;
							HatAttachment: Attachment;
							Mesh: SpecialMesh;
							OriginalSize: Vector3Value;
						};
					};
					["Infantry Backpack"]: Accessory & {
						bayonet2: Part & {
							Mesh: CylinderMesh;
							WeldConstraint: WeldConstraint;
						};
						bayonet1: Part & {
							Mesh: CylinderMesh;
							WeldConstraint: WeldConstraint;
						};
						Handle: Part & {
							AccessoryWeld: Weld;
							OriginalSize: Vector3Value;
							BodyBackAttachment: Attachment;
						};
						bayonet3: Part & {
							Mesh: SpecialMesh;
							WeldConstraint: WeldConstraint;
						};
						bayonet4: Part & {
							Mesh: SpecialMesh;
							WeldConstraint: WeldConstraint;
						};
					};
					NerdHair: Accessory & {
						Handle: Part & {
							HairAttachment: Attachment;
							AccessoryWeld: Weld;
							Mesh: SpecialMesh;
							OriginalSize: Vector3Value;
						};
					};
					Health: Script;
					["Left Arm"]: Part & {
						LeftShoulderAttachment: Attachment;
					};
					["Right Leg"]: Part;
					["Right Arm"]: Part & {
						RightShoulderAttachment: Attachment;
						RightGrip: Weld;
					};
				};
				["10"]: Model;
			};
		};
		camera: Folder & {
			["1"]: Part;
			["3"]: Part;
			["2"]: Part;
			["5"]: Part;
			["4"]: Part;
			["7"]: Part;
			["6"]: Part;
			["9"]: Part;
			["8"]: Part;
			["11"]: Part;
			["10"]: Part;
			["12"]: Part;
		};
		union: Folder & {
			troops: Model & {
				["1"]: Model;
				captin: Model & {
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
					Katana: Tool & {
						Handle: Part & {
							Slash: Sound;
							Lunge: Sound;
							Mesh: SpecialMesh;
							Unsheath: Sound;
						};
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
					["Meshes/MustachesAccessory"]: Accessory & {
						Handle: Part & {
							FaceFrontAttachment: Attachment;
							AccessoryWeld: Weld;
							SpecialMesh: SpecialMesh;
							AvatarPartScaleType: StringValue;
						};
						ThumbnailConfiguration: Configuration & {
							ThumbnailCameraValue: CFrameValue;
							ThumbnailCameraTarget: ObjectValue;
						};
					};
					Hat: Accessory & {
						Handle: Part & {
							HairAttachment: Attachment;
							AccessoryWeld: Weld;
							OriginalSize: Vector3Value;
							Mesh: SpecialMesh;
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
					["Right Arm"]: Part & {
						RightGrip: Weld;
						RightGripAttachment: Attachment;
						RightShoulderAttachment: Attachment;
					};
					["Left Arm"]: Part & {
						LeftGripAttachment: Attachment;
						LeftShoulderAttachment: Attachment;
					};
					Pants: Pants;
					Shirt: Shirt;
					["Body Colors"]: BodyColors;
					Hair: Accessory & {
						Handle: Part & {
							HairAttachment: Attachment;
							AccessoryWeld: Weld;
							Mesh: SpecialMesh;
							OriginalSize: Vector3Value;
						};
					};
				};
				["3"]: Model;
				["2"]: Model;
				["5"]: Model;
				["4"]: Model;
				["7"]: Model;
				["6"]: Model;
				["9"]: Model;
				["8"]: Model;
				flag: Model & {
					["Left Leg"]: Part;
					Humanoid: Humanoid & {
						Animator: Animator;
					};
					Animate: LocalScript & {
						toolnone: StringValue & {
							ToolNoneAnim: Animation;
						};
						climb: StringValue & {
							ClimbAnim: Animation;
						};
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
						fall: StringValue & {
							FallAnim: Animation;
						};
						run: StringValue & {
							RunAnim: Animation;
						};
						walk: StringValue & {
							WalkAnim: Animation;
						};
					};
					flag: Tool & {
						Handle: Part & {
							Mesh: CylinderMesh;
							FabricPole: Part & {
								Mesh: CylinderMesh;
							};
						};
					};
					Torso: Part & {
						RightCollarAttachment: Attachment;
						WaistCenterAttachment: Attachment;
						BodyBackAttachment: Attachment;
						Neck: Motor6D;
						LeftCollarAttachment: Attachment;
						["Left Hip"]: Motor6D;
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
					};
					Shirt: Shirt;
					Pants: Pants;
					Sound: Script & {
						LocalSound: LocalScript;
					};
					Backpack: Accessory & {
						bayonet2: Part & {
							Mesh: CylinderMesh;
							WeldConstraint: WeldConstraint;
						};
						bayonet1: Part & {
							Mesh: CylinderMesh;
							WeldConstraint: WeldConstraint;
						};
						Handle: Part & {
							AccessoryWeld: Weld;
							OriginalSize: Vector3Value;
							BodyBackAttachment: Attachment;
						};
						bayonet3: Part & {
							Mesh: SpecialMesh;
							WeldConstraint: WeldConstraint;
						};
						bayonet4: Part & {
							Mesh: SpecialMesh;
							WeldConstraint: WeldConstraint;
						};
					};
					Head: Part & {
						Climbing: Sound;
						HatAttachment: Attachment;
						Swimming: Sound;
						FaceFrontAttachment: Attachment;
						face: Decal;
						Running: Sound;
						Died: Sound;
						Splash: Sound;
						GettingUp: Sound;
						Landing: Sound;
						Jumping: Sound;
						HairAttachment: Attachment;
						FreeFalling: Sound;
						Mesh: SpecialMesh;
						FaceCenterAttachment: Attachment;
					};
					["Union Cap"]: Accessory & {
						Handle: Part & {
							AccessoryWeld: Weld;
							HatAttachment: Attachment;
							Mesh: SpecialMesh;
							OriginalSize: Vector3Value;
						};
					};
					["Infantry Backpack"]: Accessory & {
						bayonet2: Part & {
							Mesh: CylinderMesh;
							WeldConstraint: WeldConstraint;
						};
						bayonet1: Part & {
							Mesh: CylinderMesh;
							WeldConstraint: WeldConstraint;
						};
						Handle: Part & {
							AccessoryWeld: Weld;
							OriginalSize: Vector3Value;
							BodyBackAttachment: Attachment;
						};
						bayonet3: Part & {
							Mesh: SpecialMesh;
							WeldConstraint: WeldConstraint;
						};
						bayonet4: Part & {
							Mesh: SpecialMesh;
							WeldConstraint: WeldConstraint;
						};
					};
					NerdHair: Accessory & {
						Handle: Part & {
							HairAttachment: Attachment;
							AccessoryWeld: Weld;
							Mesh: SpecialMesh;
							OriginalSize: Vector3Value;
						};
					};
					Health: Script;
					["Left Arm"]: Part & {
						LeftShoulderAttachment: Attachment;
					};
					["Right Leg"]: Part;
					["Right Arm"]: Part & {
						RightShoulderAttachment: Attachment;
						RightGrip: Weld;
					};
				};
				["10"]: Model;
			};
		};
		explode: Model;
	};

	scene6: Folder & {
		Water: Model & {
			Layer3: MeshPart & {
				TextureBottom: Texture;
				TextureLeft: Texture;
				TextureFront: Texture;
				TextureBack: Texture;
				TextureRight: Texture;
				TextureTop: Texture;
			};
			Layer2: MeshPart;
			Layer4: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
			};
			Layer1: MeshPart;
		};
		camera: Folder & {
			["1"]: Part;
			["3"]: Part;
			["2"]: Part;
			["5"]: Part;
			["4"]: Part;
			["6"]: Part;
			["7"]: Part;
		};
		Island: Model;
		explosion: Folder & {
			["1"]: Part;
			["4"]: Part;
			["3"]: Part;
			["2"]: Part;
		};
		["HH-Fort"]: Model & {
			Stairs: UnionOperation;
			Union: UnionOperation;
			Fortplate: Part;
			Cobble: UnionOperation;
			Gate: UnionOperation;
			Wallish: UnionOperation;
		};
	};

	Scene5: Folder & {
		Lincoln: Model & {
			["Left Leg"]: Part;
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			["Right Leg"]: Part;
			Head: Part & {
				face: Decal;
				Mesh: SpecialMesh;
			};
			Torso: Part & {
				["Left Shoulder"]: Motor6D;
				["Right Shoulder"]: Motor6D;
				Neck: Motor6D;
				["Right Hip"]: Motor6D;
				["Left Hip"]: Motor6D;
			};
			HumanoidRootPart: Part & {
				RootJoint: Motor6D;
			};
			AnimSaves: ObjectValue;
			PatrioticHat: Hat & {
				Handle: Part & {
					Mesh: SpecialMesh;
					TouchInterest: TouchTransmitter;
				};
			};
			BlondeDapperHair: Hat & {
				Handle: Part & {
					Mesh: SpecialMesh;
					TouchInterest: TouchTransmitter;
				};
			};
			["Right Arm"]: Part;
			["Left Arm"]: Part;
			Pants: Pants;
			["Body Colors"]: BodyColors;
			Shirt: Shirt;
			Beard: Hat & {
				Handle: Part & {
					Mesh: SpecialMesh;
					TouchInterest: TouchTransmitter;
				};
			};
		};
		camera: Folder & {
			["1"]: Part;
			["4"]: Part;
			["3"]: Part;
			["2"]: Part;
			["5"]: Part;
			["6"]: Part;
		};
		Highlight: Highlight;
		bullet: Part;
		lighting: Part & {
			Decal: Decal;
			SpotLight: SpotLight;
		};
		killer: Model & {
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
			HyperlaserGun: Tool & {
				Handle: Part & {
					PointLight: PointLight;
					HitFade: Sound;
					Fire: Sound;
					Mesh: SpecialMesh;
					Reload: Sound;
				};
				ToolScript: LocalScript;
				Script: Script;
				MouseIcon: LocalScript;
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
			AnimSaves: ObjectValue;
			["Right Arm"]: Part & {
				RightGrip: Weld;
				RightGripAttachment: Attachment;
				RightShoulderAttachment: Attachment;
			};
			["Left Arm"]: Part & {
				LeftGripAttachment: Attachment;
				LeftShoulderAttachment: Attachment;
			};
			["Body Colors"]: BodyColors;
			["British Judge Barrister Lawyer White Wig HairAccessory"]: Accessory & {
				Handle: Part & {
					OriginalSize: Vector3Value;
					TouchInterest: TouchTransmitter;
					HairAttachment: Attachment;
					AccessoryWeld: Weld;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
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
		};
		movie: Part & {
			Decal: Decal;
		};
		bench: Model;
	};

	Scene4: Folder & {
		stairs: UnionOperation;
		drummers: Model;
		camera: Folder & {
			["1"]: Part;
			["4"]: Part;
			["3"]: Part;
			["2"]: Part;
		};
		flag: Part & {
			Decal: Decal;
		};
		base: Model;
		white: Model;
	};

	Scene3: Folder & {
		lincoln: Model & {
			light: Part & {
				Attachment: Attachment & {
					SpotLight: SpotLight;
				};
			};
		};
		president: Model & {
			light: Part & {
				Attachment: Attachment & {
					SpotLight: SpotLight;
				};
			};
		};
		house: Model & {
			light: Part & {
				Attachment: Attachment & {
					SpotLight: SpotLight;
				};
			};
		};
		camera: Folder & {
			["1"]: Part;
			["3"]: Part;
			["2"]: Part;
			["5"]: Part;
			["4"]: Part;
			["7"]: Part;
			["6"]: Part;
			["9"]: Part;
			["8"]: Part;
			["13"]: Part;
			["12"]: Part;
			["11"]: Part;
			["10"]: Part;
		};
		illinois: Model & {
			light: Part & {
				Attachment: Attachment & {
					SpotLight: SpotLight;
				};
			};
		};
		base: Model;
		congress: Model & {
			light: Part & {
				Attachment: Attachment & {
					SpotLight: SpotLight;
				};
			};
		};
		republic: Model & {
			light: Part & {
				Attachment: Attachment & {
					SpotLight: SpotLight;
				};
			};
		};
		secession: Model & {
			light: Part & {
				Attachment: Attachment & {
					SpotLight: SpotLight;
				};
			};
		};
	};

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
