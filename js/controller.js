// Navigation //
var isWPressed = false;
var isSPressed = false;
var isAPressed = false;
var isDPressed = false;
var jumpPressed = false;
var jumpValue = 0;
var frontVector;
var rotationAxis;

// Speed Movement
var speedMovement = 0.002;
var joystickSpeedMovement = 0.005;

// Simulated Gravity
var gravity = 0.006;
let onGround = false;


// RayCast
const ray = new BABYLON.Ray();
const rayHelper = new BABYLON.RayHelper(ray); 

// Ramps
var ramps = [];

// Particle System
var particleSystem



// Player Movement //
function setPlayerMovement() {
  
    onGround = false;

    // Create Ray Helper
    rayHelper.attachToMesh(player, new BABYLON.Vector3(0, -0.98, 0), new BABYLON.Vector3(0, -0.47, 0), 0.2);
    rayHelper.show(scene, new BABYLON.Color3(1, 0, 0));

    // Find Ramps on the Scene
    scene.meshes.forEach((mesh)=>{
        if (mesh.name == "ramp")
        {
            ramps.push(mesh);
        }
    });

    // Create Smoke Particles
    createSmokeParticles(player);


    // Mobile Device
    // Return and Set Joystick Controller
    if (isTouch) {
        setJoystickController();
        return;
    }

    // Update Movement Keyboard Controller
    scene.registerBeforeRender(()=>{
       
        var dt = engine.getDeltaTime();
        var pick = scene.pickWithRay(ray);
        if (pick.pickedMesh){
           onGround = pick.hit;
	    }

        gravity = dt / 2000;

        ramps.forEach((ramp)=>{
            if (player.intersectsMesh(ramp))
            {
                console.log("Enter Ramp");
                jumpValue = dt * 0.02;
                gravity = 0.08;
                if (jumpPressed)
                {
                    jumpValue = dt * 0.2;
                    gravity = dt / 2000;
                }
            } 
        })

        jumpValue -= gravity * dt;
        if (jumpPressed && onGround)
        {
            onGround = false;
            jumpValue = dt * 0.25;
        }

        if (jumpValue > dt * 0.25)
            jumpValue = dt * 0.25;
        
        // Update Base FrontVector
        frontVector = player.getDirection(new BABYLON.Vector3(0,jumpValue/30,0));

        // Update Particle System Position
        particleSystem.emitter = new BABYLON.Vector3(player.position.x, 0, player.position.z);

        // Run Forward
        if (isWPressed) {
            if (onGround)
            {
                // jumpValue -= gravity * dt;
                scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(currentAnim, runAnim,  1.2));
                particleSystem.start();
            }
            currentAnim = runAnim;
            frontVector = player.getDirection(new BABYLON.Vector3(0,jumpValue,1)).scale(speedMovement*dt*3);
        }
        // Run Backward
        if (isSPressed) {
            if (onGround)
            {
                // jumpValue -= gravity * dt;
                scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(currentAnim, runBackAnim, 1.5));
                particleSystem.start();
            }
            currentAnim = runBackAnim;
            frontVector = player.getDirection(new BABYLON.Vector3(0,jumpValue,-1)).scale(speedMovement*dt*3);
        }
        // Rotate Left
        if (isAPressed) {
            rotationAxis = new BABYLON.Vector3(0, -1, 0);
        }
        // Rotate Right
        if (isDPressed) {
            rotationAxis = new BABYLON.Vector3(0, 1, 0);
        }
        
        // Rotate actions
        if (isAPressed || isDPressed)
        {
            player.rotate(rotationAxis, speedMovement*dt, BABYLON.Space.LOCAL);
            player.frontVector = new BABYLON.Vector3(Math.sin(player.rotation.z), jumpValue, Math.cos(player.rotation.z))

            // Check if Player is currently moving
            if (isSPressed == false && isWPressed == false && onGround) {
                currentAnim = walkAnim;
                scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(currentAnim, walkAnim, 0.9));
            }
        }

        // Check Idle Animation
        if (! isWPressed && ! isSPressed && ! isAPressed && ! isDPressed) {
            currentAnim = idleAnim;
            scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(currentAnim, idleAnim, 1.0));
        }

        if (!onGround)
        {
            walkAnim.speedRatio = 0.4;
            walkAnim.play(false);
            currentAnim = walkAnim;
            particleSystem.stop();
        }

        if (!isWPressed && !isSPressed)
        {
            particleSystem.stop()
        }

        player.moveWithCollisions(frontVector);
    });
}

// Keyboard Actions KeyDown//
document.addEventListener("keydown", function (event) {
    if (event.key == 'w' || event.key == 'W' || event.key == "ArrowUp") {
        isWPressed = true;
    }
    if (event.key == 's' || event.key == 'S' || event.key == "ArrowDown") {
        isSPressed = true;
    }
    if (event.key == 'a' || event.key == 'A' || event.key == "ArrowLeft") {
        isAPressed = true;
    }
    if (event.key == 'd' || event.key == 'D' || event.key == "ArrowRight") {
        isDPressed = true;
    }
    if (event.code == 'Space') {
        jumpPressed = true;
    }
});

// Keyboard Actions KeyUp//
document.addEventListener("keyup", function (event) {
    if (event.key == 'w' || event.key == 'W' || event.key == "ArrowUp") {
        isWPressed = false;
    }
    if (event.key == 's' || event.key == 'S' || event.key == "ArrowDown") {
        isSPressed = false;
    }
    if (event.key == 'a' || event.key == 'A' || event.key == "ArrowLeft") {
        isAPressed = false;
    }
    if (event.key == 'd' || event.key == 'D' || event.key == "ArrowRight") {
        isDPressed = false;
    }
    if (event.code == 'Space') {
        jumpPressed = false;
    }
});


// Virtual Joystick Actions //
function setJoystickController() {

    // Default Joysticks
    var leftJoystick = new BABYLON.VirtualJoystick(true);
    var rightJoystick = new BABYLON.VirtualJoystick(false);
    leftJoystick.setJoystickColor("#b3dbbf40");
    rightJoystick.setJoystickColor("#b3dbbf40");
    BABYLON.VirtualJoystick.Canvas.style.zIndex = "4";

    // Update Movement Joystick Controller
    scene.registerBeforeRender(()=>{

        var dt = engine.getDeltaTime();
        var pick = scene.pickWithRay(ray);
        if (pick.pickedMesh){
           onGround = pick.hit;
	    }
        gravity = dt / 2000;
     
        ramps.forEach((ramp)=>{
            if (player.intersectsMesh(ramp))
            {
                console.log("Enter Ramp");
                jumpValue = dt * 0.02;
                gravity = 0.08;
                if (jumpPressed)
                {
                    jumpValue = dt * 0.2;
                    gravity = dt / 2000;
                }
            } 
        })
        

        jumpValue -= gravity * dt;
        if (jumpPressed && onGround)
        {
            onGround = false;
            jumpValue = dt * 0.25;
            console.log("JumpValue: " + jumpValue);
        }

        if (jumpValue > dt * 0.25)
            jumpValue = dt * 0.25;

        // Update Base FrontVector
        frontVector = player.getDirection(new BABYLON.Vector3(0,jumpValue/30,0));

        // Update Particle System Position
        particleSystem.emitter = new BABYLON.Vector3(player.position.x, 0, player.position.z);

        // Move Forward or Backward
        if (leftJoystick.pressed && leftJoystick.deltaPosition.y != 0) {

            if (leftJoystick.deltaPosition.y > 0)
                frontVector = player.getDirection(new BABYLON.Vector3(0,jumpValue/2,1)).scale(leftJoystick.deltaPosition.y*joystickSpeedMovement*dt);
            else
                frontVector = player.getDirection(new BABYLON.Vector3(0,jumpValue/2,-1)).scale(-leftJoystick.deltaPosition.y*joystickSpeedMovement*dt);

            if (leftJoystick.deltaPosition.y > 0)
            {
                if (onGround)
                {
                    jumpValue -= gravity * dt;
                    scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(currentAnim, runAnim, 1.5));
                    particleSystem.start();
                }
                currentAnim = runAnim;
            } else if (leftJoystick.deltaPosition.y < 0) {
                scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(currentAnim, runAnim, 1.2));
                if (onGround)
                {
                    jumpValue -= gravity * dt;
                    scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(currentAnim, runBackAnim, 1.5));
                    particleSystem.start();
                }

                currentAnim = runBackAnim;
            }
            
        } else {
            leftJoystick.deltaPosition.y = 0;
            particleSystem.stop();
        }

        // Rotate Left or Right
        if (rightJoystick.pressed) {

            var rotationAxis = new BABYLON.Vector3(0, 1, 0)
            player.rotate(rotationAxis, rightJoystick.deltaPosition.x*speedMovement*dt, BABYLON.Space.LOCAL);
            player.frontVector = new BABYLON.Vector3(Math.sin(player.rotation.z), jumpValue, Math.cos(player.rotation.z))

            // Check if Player is currently moving
            if (!leftJoystick.pressed && rightJoystick.deltaPosition.x != 0)
            {
                currentAnim = walkAnim;
                scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(currentAnim, walkAnim, 1.0));
            }
        } else {
            rightJoystick.deltaPosition.x = 0;
        }

        // Check Idle Animation
        if (!leftJoystick.pressed && !rightJoystick.pressed) {
            currentAnim = idleAnim;
            scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(currentAnim, idleAnim, 1.0));
        }

        if (!onGround)
        {
            walkAnim.speedRatio = 0.4;
            walkAnim.play(false);
            currentAnim = walkAnim;
            particleSystem.stop();
        }

        player.moveWithCollisions(frontVector);
    });
}

// Jump From BT
function jumpFromBT() {
    console.log("Jump BT");
    if (onGround)
        jumpPressed = true;
    setTimeout(() => {
        jumpPressed = false;
    }, 200);
}


// Animation Blending //
var blendingSpeed = 0.03;
function* animationBlending (fromAnim, toAnim, speed) {
    toAnim.start(false, speed, toAnim.from, toAnim.to, false);
    let currentWeight = 1;
    let newWeight = 0;
    while (newWeight < 1) {
        newWeight += blendingSpeed;
        currentWeight -= blendingSpeed;
        toAnim.setWeightForAllAnimatables(newWeight);
        fromAnim.setWeightForAllAnimatables(currentWeight);
        yield;
    }
}


// Smoke Particles
function createSmokeParticles() { 
    particleSystem = new BABYLON.ParticleSystem("particles", 500, scene);
    particleSystem.particleTexture = new BABYLON.Texture("./resources/images/smoke.png", scene);
    particleSystem.emitter = new BABYLON.Vector3(player.position.x, 0, player.position.z);
    particleSystem.minEmitBox = new BABYLON.Vector3(-0.1, -0.1, -0.1); // Starting all from
    particleSystem.maxEmitBox = new BABYLON.Vector3(0.1, 0.1, 0.1); // To...
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0);
    particleSystem.gravity = new BABYLON.Vector3(0,-3,0);
    particleSystem.minSize = 0.15;
    particleSystem.maxSize = 0.25
    particleSystem.minLifeTime = 0.2;
    particleSystem.maxLifeTime = 1;
    particleSystem.emitRate = 200;
    particleSystem.addSizeGradient(0, 0.1, 0.3); //size range at start of particle lifetime
    particleSystem.addSizeGradient(1.0, 1, 2); //size range at end of particle lifetime
    particleSystem.addColorGradient(0, new BABYLON.Color4(0.9, 0.7, 0.5, 0.2)); //color at start of particle lifetime
    particleSystem.addColorGradient(1, new BABYLON.Color4(1, 1, 1, 0)); //color at end of particle lifetime
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
}

