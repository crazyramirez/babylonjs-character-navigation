// On Document Loaded - Start Game //
document.addEventListener("DOMContentLoaded", startGame);

// Global BabylonJS Variables
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true, { stencil: false }, true);
var scene = createScene(engine, canvas);
var camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(-90), BABYLON.Tools.ToRadians(65), 6, BABYLON.Vector3.Zero(), scene);
var dirLight = new BABYLON.DirectionalLight("dirLight", new BABYLON.Vector3(0,0,0), scene);
var shadowGenerator = new BABYLON.ShadowGenerator(1024, dirLight, true);

var hdrTexture;
var hdrRotation = 0;
var ground;
var basicMaterial;

// Player
var player;
var camera;

// Animations
var idleAnim;
var walkAnim;
var runAnim;
var runBackAnim;
var currentAnim;

// Ambient Occlusion
var aoActive = false;

// Create Scene
function createScene(engine, canvas) {
    // Set Canvas & Engine //
    canvas = document.getElementById("renderCanvas");
    engine.clear(new BABYLON.Color3(0, 0, 0), true, true);
    var scene = new BABYLON.Scene(engine);
    return scene;
}

// Start Game
function startGame() {

    // Render Loop
    var toRender = function () {
        scene.render();
    }
    engine.runRenderLoop(toRender);

    // Default Camera
    scene.createDefaultCamera();
    scene.collisionsEnabled  = true;

    // Directional Light
    dirLight.intensity = 2.2;
    dirLight.position = new BABYLON.Vector3(0,10,10);
    dirLight.direction = new BABYLON.Vector3(-4, -4, -5);
    dirLight.shadowMinZ = -100;
    dirLight.shadowMaxZ = 100;

    // Shadow Generator
    shadowGenerator.darkness = 0.3;
    shadowGenerator.bias = 0.001;
    shadowGenerator.usePercentageCloserFiltering = true;
    shadowGenerator.filteringQuality = 1;

    // Ground
    ground = BABYLON.MeshBuilder.CreateCylinder("ground", {diameter: 70, height: 0.2, tessellation: 80}, scene);
    ground.position.y = -0.1;
    var groundMaterial = new BABYLON.PBRMaterial("groundMaterial", scene);
    groundMaterial.albedoTexture = new BABYLON.Texture("./resources/textures/ground.jpg", scene);
    groundMaterial.albedoTexture.uScale = 20;
    groundMaterial.albedoTexture.vScale = 20;
    groundMaterial.bumpTexture = new BABYLON.Texture("./resources/textures/ground_normal.jpg", scene);
    groundMaterial.bumpTexture.uScale = 20;
    groundMaterial.bumpTexture.vScale = 20;
    groundMaterial.bumpTexture.intensity = 2;
    groundMaterial.height = new BABYLON.Texture("./resources/textures/ground_height.jpg", scene);
    groundMaterial.height.uScale = 20;
    groundMaterial.height.vScale = 20;
    groundMaterial.roughness = 0.7;
    groundMaterial.metallic = 0;
    ground.material = groundMaterial;
    ground.checkCollisions = true;
    ground.isPickable = true;
    ground.receiveShadows = true;

    // Basic PBR Material
    basicMaterial = new BABYLON.PBRMaterial("groundMaterial", scene);
    basicMaterial.albedoColor = new BABYLON.Color3(0.5,0.5,0.5);
    basicMaterial.roughness = 0.81;
    basicMaterial.metallic = 0;

    // Import Model
    importModelAsync("character.glb");
    
    // Stats
    var stats = document.getElementById("stats-text");
    scene.registerBeforeRender(()=>{
        stats.innerHTML = "<b>" + Math.round(engine.getFps()) + " FPS <br></b> ";
    });

    if (!isTouch)
    {
        document.getElementById("customBT").style.display = "none";
    }

    // scene.debugLayer.show({embedMode: true}).then(function () {
    // });
}

// Demo Objects
function demoObjects() {
    
    // Spheres
    var sphere1 = BABYLON.MeshBuilder.CreateSphere("sphere1", {diameter: 0.5}, scene);
    sphere1.position.x = 1.7;
    sphere1.position.y = 1;
    sphere1.position.z = 1;
    var sphere2 = BABYLON.MeshBuilder.CreateSphere("sphere2", {diameter: 0.5}, scene);
    sphere2.position.x = -1.7;
    sphere2.position.y = 1;
    sphere2.position.z = 1;
    var mat1 = new BABYLON.PBRMaterial("Mat1", scene);
    mat1.reflectivityColor = new BABYLON.Color3(1,1,1);
    mat1.microSurface = 0.7;
    sphere1.material = mat1;
    sphere2.material = mat1;
    sphere1.isPickable = false;
    sphere2.isPickable = false;

    var alpha = 0;
    scene.registerBeforeRender(function () {
        scene.getMeshByName("sphere1").position.y = Math.sin(alpha)+1.5;
        scene.getMeshByName("sphere2").position.y = Math.sin(alpha)+1.5;
        alpha += 0.01;
    });

    // Boxes
    const box1 = BABYLON.MeshBuilder.CreateBox("box1", {
        size: 3,
        width: 3,
        height: 1
    }, scene);
    box1.material = basicMaterial;
    box1.position.y = 0.5;
    box1.position.x = 4;
    box1.position.z = 0;
    box1.checkCollisions = true;
    box1.isPickable = true;
    box1.receiveShadows = true;

    const box2 = BABYLON.MeshBuilder.CreateBox("box2", {
        size: 5,
        width: 5,
        height: 0.5
    }, scene);
    box2.material = basicMaterial;
    box2.position.x = -7;
    box2.position.y = 2;
    box2.position.z = -3;
    box2.checkCollisions = true;
    box2.isPickable = true;
    box2.receiveShadows = true;

    const box3 = BABYLON.MeshBuilder.CreateBox("box3", {
        size: 3,
        width: 3,
        height: 1
    }, scene);
    box3.material = basicMaterial;
    box3.position.x = -3;
    box3.position.y = 1;
    box3.position.z = 12;
    box3.checkCollisions = true;
    box3.isPickable = true;
    box3.receiveShadows = true;

    const box4 = BABYLON.MeshBuilder.CreateBox("box4", {
        size: 3,
        width: 3,
        height: 1
    }, scene);
    box4.material = basicMaterial;
    box4.position.y = 0.5;
    box4.position.x = 4;
    box4.checkCollisions = true;
    box4.isPickable = true;
    box4.receiveShadows = true;

    const box5 = BABYLON.MeshBuilder.CreateBox("box5", {
        size: 4,
        width: 4,
        height: 1
    }, scene);
    box5.material = basicMaterial;
    box5.position.x = -5;
    box5.position.y = 1.5;
    box5.position.z = 6;
    box5.checkCollisions = true;
    box5.isPickable = true;
    box5.receiveShadows = true;

    const ramp = BABYLON.MeshBuilder.CreateBox("ramp", {
        size: 3,
        width: 6,
        height: 1
    }, scene);
    ramp.position.x = 5;
    ramp.position.y = 0;
    ramp.position.z = -7;
    ramp.checkCollisions = true;
    ramp.isPickable = true;
    ramp.receiveShadows = true;
    ramp.rotation.x += Math.PI / 5;

    const ramp2 = BABYLON.MeshBuilder.CreateBox("ramp", {
        size: 8,
        width: 6,
        height: 1
    }, scene);
    ramp2.position.x = 0;
    ramp2.position.y = 0;
    ramp2.position.z = -10;
    ramp2.checkCollisions = true;
    ramp2.isPickable = true;
    ramp2.receiveShadows = true;
    ramp2.rotation.x += Math.PI / 5;


    // Stairs
    var stairsArray = [];
    for (let index = 0; index < 10; index++) {
        
        var stairs0 = BABYLON.MeshBuilder.CreateBox("stairs", {size: 1, width: 5, height: 0.4}, scene);
        stairs0.position.y = -0.22 + 0.2*index;
        stairs0.position.z = 0.5*index;
        stairsArray.push(stairs0);
    }

    var mergeStairs = new BABYLON.Mesh.MergeMeshes(stairsArray, true);
    mergeStairs.name = "stairs";
    mergeStairs.checkCollisions = true;
    mergeStairs.isPickable = true;
    mergeStairs.position.x = 4;
    mergeStairs.position.y = 0;
    mergeStairs.position.z = 10;
    mergeStairs.receiveShadows = true;

    var mergeStairs2 = mergeStairs.clone();
    mergeStairs2.name = "stairs";
    mergeStairs2.checkCollisions = true;
    mergeStairs2.isPickable = true;
    mergeStairs2.position.x = -1;
    mergeStairs2.position.y = 0;
    mergeStairs2.position.z = 16;   
    mergeStairs2.receiveShadows = true;

    var groundMaterial = new BABYLON.PBRMaterial("groundMaterial", scene);
    groundMaterial.albedoTexture = new BABYLON.Texture("./resources/textures/ground.jpg", scene);
    groundMaterial.albedoTexture.uScale = 1.5;
    groundMaterial.albedoTexture.vScale = 1.5;
    groundMaterial.roughness = 0.7;
    groundMaterial.metallic = 0;
    ramp.material = groundMaterial;
    ramp2.material = groundMaterial;
    box1.material = groundMaterial;
    box2.material = groundMaterial;
    box3.material = groundMaterial;
    box4.material = groundMaterial;
    box5.material = groundMaterial;
    mergeStairs.material = groundMaterial;
    mergeStairs2.material = groundMaterial;
}


// Follow Camera //
function createFollowCamera(target) {
    scene.activeCamera.dispose();
    camera = new BABYLON.FollowCamera("playerFollowCamera", target.position, scene, target);
    camera.radius = 8; // how far from the object to follow
    camera.heightOffset = 5; // how high above the object to place the camera
    camera.rotationOffset = 180; // the viewing angle
    camera.cameraAcceleration = 0.01; // how fast to move
    camera.maxCameraSpeed = 1; // speed limit
    scene.backgroundColor = new BABYLON.Color3(0, 0, 0);
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
    scene.autoClear = false; // Color buffer
    scene.autoClearDepthAndStencil = false; // Depth and stencil, obviously
    camera.lockedTarget = target;
    scene.activeCamera = camera; 
    // camera.attachControl(canvas);
    return camera;
}

// Load Models Async Function //
function importModelAsync(model) {
    Promise.all([

        BABYLON.SceneLoader.ImportMeshAsync(null, "./resources/models/" , model, scene).then(function (result) {

            // Get Player meshes
            result.meshes.forEach((mesh)=>{
                mesh.isPickable = false;
            });

            // Main Player Collision Box
            player = BABYLON.MeshBuilder.CreateBox("player", { width: 0.5, height: 1, size:0.5}, scene);
            player.visibility = 0;
            player.ellipsoid = new BABYLON.Vector3(0.5, 0.5, 0.5);
            player.position.y += 0.5;
            player.isPickable = false;
            player.checkCollisions = true;
            player.addChild(result.meshes[0]);

            result.meshes.forEach((mesh)=>{
                mesh.receiveShadows = true;
            });

            scene.getMaterialByName("Metal").roughness = 0.6;

            // Player Animations
            idleAnim = scene.getAnimationGroupByName("Idle");
            walkAnim = scene.getAnimationGroupByName("Walk");
            runAnim = scene.getAnimationGroupByName("Run");
            runBackAnim = scene.getAnimationGroupByName("RunBack");
            
            // Set Weight For All Animatables Init
            idleAnim.setWeightForAllAnimatables(1.0);
            walkAnim.setWeightForAllAnimatables(0);
            runAnim.setWeightForAllAnimatables(0);
        }),

        ]).then(() => {
            console.log("ALL Loaded");
            
            // Create Demo Objects
            demoObjects();

            createFollowCamera(player);

            setLighting();    
            setReflections();
            setShadows();
            setPostProcessing();

            setTimeout(() => {
                hideLoadingView();              
            }, 1000);

            // Set Player Controller -- controller.js
            setPlayerMovement();
        });
}


// Environment Lighting
function setLighting() {
    hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("./resources/env/environment_19.env", scene);
    hdrTexture.rotationY = BABYLON.Tools.ToRadians(hdrRotation);
    hdrSkybox = BABYLON.MeshBuilder.CreateBox("skybox", {size: 1024}, scene);
    var hdrSkyboxMaterial = new BABYLON.PBRMaterial("skybox", scene);
    hdrSkyboxMaterial.backFaceCulling = false;
    hdrSkyboxMaterial.reflectionTexture = hdrTexture.clone();
    hdrSkyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    hdrSkyboxMaterial.microSurface = 0.5;
    hdrSkyboxMaterial.disableLighting = true;
    hdrSkybox.material = hdrSkyboxMaterial;
    hdrSkybox.infiniteDistance = true;
}

// Set Shadows
function setShadows() {
    scene.meshes.forEach(function(mesh) {
        if (mesh.name != "skybox" 
        && mesh.name != "ground")
        {
            shadowGenerator.addShadowCaster(mesh);
        }
    });
}

// Set Reflections
function setReflections() {
    scene.materials.forEach(function (material) {
        if (material.name != "skybox") {
            material.reflectionTexture = hdrTexture;
            material.reflectionTexture.level = 0.6;
            material.environmentIntensity = 0.7;
            material.disableLighting = false;
        }
    });
}

function setPostProcessing() {
    //return;
    var pipeline = new BABYLON.DefaultRenderingPipeline(
        "defaultPipeline", // The name of the pipeline
        false, // Do you want the pipeline to use HDR texture?
        scene, // The scene instance
        [scene.activeCamera] // The list of cameras to be attached to
    );
    pipeline.samples = 4;
    pipeline.bloomEnabled = false;
}

// Hide Loading View
function hideLoadingView() {
    document.getElementById("loadingDiv").style.display = "none";
}

// Resize Window
window.addEventListener("resize", function () {
    engine.resize();
});