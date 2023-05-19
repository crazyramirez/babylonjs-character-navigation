// Navigation //
var isWPressed = false;
var isSPressed = false;
var isAPressed = false;
var isDPressed = false;
var jumpPressed = false;
var jumpValue = 0;
var frontVector;
var rotationAxis;
var doubleJump;

// Speed Movement
var speedMovement = 0.002;
var joystickSpeedMovement = 0.0055;

// Simulated Gravity
var gravity;    
var gravityMultiplier = 2000;
var jumpMultiplier = 0.28;
var onGround = false;
var onScalable = false;

// Check Velocity Y Position for Falling Action
var previousPosition;
var previousTime;
var velocity;
var falling = false;

// RayCast
const ray = new BABYLON.Ray();
const rayHelper = new BABYLON.RayHelper(ray); 
const ray2 = new BABYLON.Ray();
const rayHelper2 = new BABYLON.RayHelper(ray2); 
const ray3 = new BABYLON.Ray();
const rayHelper3 = new BABYLON.RayHelper(ray3); 
const ray4 = new BABYLON.Ray();
const rayHelper4 = new BABYLON.RayHelper(ray4); 

// Particle System
var particleSystem;

var winFocused = true;


// Update Movement
function updateMovement(deltaTime) {
    
    // Check Player Velocity
    checkPlayerVelocity();

    // Set Initial Gravity
    // gravity = deltaTime / gravityMultiplier;
    if (!winFocused)
    {
        // gravity = 0;
        jumpValue = 0;
        falling = false;
        onGround = false;
        return;
    }

    // Set Gravity & JumpValue
    gravity = deltaTime / gravityMultiplier;
    jumpValue -= deltaTime * gravity;

    // RayCast Pick from Player
    onScalable = false; 
    var pick = scene.pickWithRay(ray);
    if (pick.hit){
       onGround = true;
       if (pick.pickedMesh.meshType && pick.pickedMesh.meshType == "scalable")
       {
            onScalable = true;
       }
    } 
    var pick2 = scene.pickWithRay(ray2);
    if (pick2.hit){
       onGround = true;
       if (pick2.pickedMesh.meshType && pick2.pickedMesh.meshType == "scalable")
       {
            onScalable = true;
       }
    } 
    var pick3 = scene.pickWithRay(ray3);
    if (pick3.hit){
       onGround = true;
       if (pick3.pickedMesh.meshType && pick3.pickedMesh.meshType == "scalable")
       {
            onScalable = true;
       }
    } 
    var pick4 = scene.pickWithRay(ray4);
    if (pick4.hit){
       onGround = true;
       if (pick4.pickedMesh.meshType && pick4.pickedMesh.meshType == "scalable")
       {
            onScalable = true;
       }
    } 

    if (onScalable) {
        jumpValue = deltaTime * gravity * 0.002;
    }
    // console.log("jumpValue:" + deltaTime * jumpMultiplier);

    // Jump Action
    if (jumpPressed && onGround)
    {
        bounceEnabled = true;
        onGround = false;
        jumpValue = deltaTime * jumpMultiplier;
        if (onScalable)
            jumpValue = deltaTime * jumpMultiplier*0.9;
    } 

    // Bounce Player
    if (onGround && falling)
    {
        jumpValue = deltaTime * jumpMultiplier*0.35;
    }

    // Check OnGround
    if (!onGround)
    {
        particleSystem.stop();
        bounceEnabled = false;
    } else {
        falling = false;
    }

    if (jumpValue > deltaTime * jumpMultiplier)
        jumpValue = deltaTime * jumpMultiplier;

    // Update Base FrontVector
    frontVector = player.getDirection(new BABYLON.Vector3(0,jumpValue/20,0));
    
    if (!winFocused)
        frontVector = player.getDirection(new BABYLON.Vector3(0,0,0));

    // Update Particle System Position
    particleSystem.emitter = new BABYLON.Vector3(player.position.x, player.position.y-0.5, player.position.z);
}

// Check Player Velocity Based on Position over time
function checkPlayerVelocity() {
    var currentTime = performance.now();
    var timeCheck = (currentTime - previousTime) / 1000;
    // Calculate velocity
    var currentPosition = player.position.clone();
    var displacement = currentPosition.subtract(previousPosition);
    velocity = displacement.scale(1 / timeCheck);
    // Update previous values
    previousPosition.copyFrom(currentPosition);
    previousTime = currentTime;
}

// Player Movement //
function setPlayerMovement() {

    setInterval(() => {
        $(window).focus(function() {
            // console.log('Focus');
            winFocused = true;
        });
    
        $(window).blur(function() {
            // console.log('Blur');
            winFocused = false;
        }); 
    }, 500);
  
    // Create Ray Helper
    rayHelper.attachToMesh(player, new BABYLON.Vector3(-1, -0.98, 0.7), new BABYLON.Vector3(0, -0.2, 0.2), 0.35);
    // rayHelper.show(scene, new BABYLON.Color3(1, 0, 0));
    rayHelper2.attachToMesh(player, new BABYLON.Vector3(-1, -0.98, -0.7), new BABYLON.Vector3(0, -0.2, -0.2), 0.35);
    // rayHelper2.show(scene, new BABYLON.Color3(1, 0, 0));
    rayHelper3.attachToMesh(player, new BABYLON.Vector3(1, -0.98, 0.7), new BABYLON.Vector3(0, -0.2, 0.2), 0.35);
    // rayHelper3.show(scene, new BABYLON.Color3(0, 1, 0));
    rayHelper4.attachToMesh(player, new BABYLON.Vector3(1, -0.98, -0.7), new BABYLON.Vector3(0, -0.2, -0.2), 0.35);
    // rayHelper4.show(scene, new BABYLON.Color3(0, 1, 0));

    // Position & Time for Velocity 
    previousPosition = player.position.clone();
    previousTime = performance.now();

    // Create Smoke Particles
    createSmokeParticles(player);

    // Check if Keyboard or Joystick Controller
    if (isTouch) {
        setJoystickController();
    } else {
        setKeyboardController();
    }
}

var keyboardIncrementalSpeed = 0;
// Keyboard Controller
function setKeyboardController() {
    // Update Movement Keyboard Controller
    scene.registerBeforeRender(()=>{
        if (!winFocused)
        return;
        // Engine DeltaTime
        var deltaTime = engine.getDeltaTime();

        updateMovement(deltaTime);

        // Run Forward
        if (isWPressed) {

            if (keyboardIncrementalSpeed < 1)
            {
                keyboardIncrementalSpeed += deltaTime / 500;
            }
            if (onGround)
            {
                scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(currentAnim, runAnim, 1.2, 0.03));
                if (velocity.z != 0 && velocity.y > 0)
                    particleSystem.start();
                else
                    particleSystem.stop();
            }
            currentAnim = runAnim;
            frontVector = player.getDirection(new BABYLON.Vector3(0,jumpValue,1)).scale(speedMovement*deltaTime*3 * keyboardIncrementalSpeed);
        }

        // Run Backward
        if (isSPressed) {

            if (keyboardIncrementalSpeed < 1)
            {
                keyboardIncrementalSpeed += deltaTime / 500;
            }
            if (onGround)
            {
                scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(currentAnim, runBackAnim, 1.5, 0.03));
                if (velocity.z != 0 && velocity.y > 0)
                    particleSystem.start();
                else
                    particleSystem.stop();
            }
            
            currentAnim = runBackAnim;
            frontVector = player.getDirection(new BABYLON.Vector3(0,jumpValue,-1)).scale(speedMovement*deltaTime*3 * keyboardIncrementalSpeed);
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
            player.rotate(rotationAxis, speedMovement*deltaTime*1.2, BABYLON.Space.LOCAL);
            player.frontVector = new BABYLON.Vector3(Math.sin(player.rotation.z), jumpValue, Math.cos(player.rotation.z))

            // Check if Player is currently moving
            if (isSPressed == false && isWPressed == false && onGround) {
                currentAnim = walkAnim;
                scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(currentAnim, walkAnim, 0.9, 0.03));
            }
        }

        // Check Idle Animation
        if (! isWPressed && ! isSPressed && ! isAPressed && ! isDPressed) {
            currentAnim = idleAnim;
            scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(currentAnim, idleAnim, 1.0, 0.03));
        }

        if (!isWPressed && !isSPressed)
        {
            particleSystem.stop();
            keyboardIncrementalSpeed = 0;
        }

        if (!jumpPressed && !onGround && Math.round(velocity.y) == 0 && !falling)
        {
            falling = true;
            // console.log("Falling");
        }

        player.moveWithCollisions(frontVector);
    });
}

// Keyboard Actions KeyDown//
document.addEventListener("keydown", function (event) {
    if (event.key == 'w' || event.key == 'W' || event.key == "ArrowUp") {
        isWPressed = true;
    }
    else if (event.key == 's' || event.key == 'S' || event.key == "ArrowDown") {
        isSPressed = true;
    }
    else if (event.key == 'a' || event.key == 'A' || event.key == "ArrowLeft") {
        isAPressed = true;
    }
    else if (event.key == 'd' || event.key == 'D' || event.key == "ArrowRight") {
        isDPressed = true;
    }
    else if (event.code == 'Space') {
        jumpPressed = true;
    }
});

// Keyboard Actions KeyUp//
document.addEventListener("keyup", function (event) {
    if (event.key == 'w' || event.key == 'W' || event.key == "ArrowUp") {
        isWPressed = false;
    }
    else if (event.key == 's' || event.key == 'S' || event.key == "ArrowDown") {
        isSPressed = false;
    }
    else if (event.key == 'a' || event.key == 'A' || event.key == "ArrowLeft") {
        isAPressed = false;
    }
    else if (event.key == 'd' || event.key == 'D' || event.key == "ArrowRight") {
        isDPressed = false;
    }
    else if (event.code == 'Space') {
        jumpPressed = false;
    }
});

// Joystick Controller
function setJoystickController() {

    // Default Joysticks
    var leftJoystick = new BABYLON.VirtualJoystick(true);
    var rightJoystick = new BABYLON.VirtualJoystick(false);
    leftJoystick.setJoystickColor("#b3dbbf10");
    rightJoystick.setJoystickColor("#b3dbbf10");
    BABYLON.VirtualJoystick.Canvas.style.zIndex = "4";
   
    // Update Movement Joystick Controller
    scene.registerBeforeRender(()=>{
        if (!winFocused)
        return;
        // Engine DeltaTime
        var deltaTime = engine.getDeltaTime();

        // Update Player Movement
        updateMovement(deltaTime);

        // Move Forward or Backward
        if (leftJoystick.pressed && leftJoystick.deltaPosition.y != 0) {

            if (leftJoystick.deltaPosition.y > 0)
                frontVector = player.getDirection(new BABYLON.Vector3(0,jumpValue/2,1)).scale(leftJoystick.deltaPosition.y*joystickSpeedMovement*deltaTime);
            else
                frontVector = player.getDirection(new BABYLON.Vector3(0,jumpValue/2,-1)).scale(-leftJoystick.deltaPosition.y*joystickSpeedMovement*deltaTime);

            if (leftJoystick.deltaPosition.y > 0)
            {
                if (onGround)
                {
                    jumpValue -= gravity * deltaTime;
                    scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(currentAnim, runAnim, 1.5, 0.03));
                    if (velocity.z != 0 && velocity.y > 0)
                        particleSystem.start();
                    else
                        particleSystem.stop();
                }
                currentAnim = runAnim;
            } else if (leftJoystick.deltaPosition.y < 0) {
                scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(currentAnim, runAnim, 1.2, 0.03));
                if (onGround)
                {
                    jumpValue -= gravity * deltaTime;
                    scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(currentAnim, runBackAnim, 1.5, 0.03));
                    if (velocity.z != 0 && velocity.y > 0)
                        particleSystem.start();
                    else
                        particleSystem.stop();
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
            player.rotate(rotationAxis, rightJoystick.deltaPosition.x*speedMovement*deltaTime*1.2, BABYLON.Space.LOCAL);
            player.frontVector = new BABYLON.Vector3(Math.sin(player.rotation.z), jumpValue, Math.cos(player.rotation.z))

            // Check if Player is currently moving
            if (!leftJoystick.pressed && rightJoystick.deltaPosition.x != 0)
            {
                currentAnim = walkAnim;
                scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(currentAnim, walkAnim, 1.0, 0.03));
            }
        } 

        // Check Idle Animation
        if (!leftJoystick.pressed && !rightJoystick.pressed) {
            currentAnim = idleAnim;
            scene.onBeforeRenderObservable.runCoroutineAsync(animationBlending(currentAnim, idleAnim, 1.0, 0.03));
        }

        if (!jumpPressed && !onGround)
        {
            particleSystem.stop();
        } 

        if (!jumpPressed && !onGround && Math.round(velocity.y) == 0 && !falling)
        {
            falling = true;
        }

        player.moveWithCollisions(frontVector);
    });
}

// Jump From BT
function jumpFromBT() {
    // console.log("Jump BT");
    if (onGround)
        jumpPressed = true;
    setTimeout(() => {
        jumpPressed = false;
    }, 100);
}

// Animation Blending //
function* animationBlending (fromAnim, toAnim, speed, blendingSpeed) {
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
    particleSystem = new BABYLON.ParticleSystem("particles", 100, scene);
    particleSystem.particleTexture = new BABYLON.Texture("./resources/images/smoke.png", scene);
    particleSystem.emitter = new BABYLON.Vector3(player.position.x, 0, player.position.z);
    particleSystem.minEmitBox = new BABYLON.Vector3(-0.2, -0.1, -0.2); // Starting all from
    particleSystem.maxEmitBox = new BABYLON.Vector3(0.1, 0.1, 0.1); // To...
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0);
    particleSystem.gravity = new BABYLON.Vector3(0,-3,0);
    particleSystem.minSize = 0.15;
    particleSystem.maxSize = 0.35;
    particleSystem.minLifeTime = 0.2;
    particleSystem.maxLifeTime = 0.6;
    particleSystem.emitRate = 200;
    particleSystem.addSizeGradient(0, 0.1, 0.3); //size range at start of particle lifetime
    particleSystem.addSizeGradient(1.0, 1, 2); //size range at end of particle lifetime
    particleSystem.addColorGradient(0, new BABYLON.Color4(0.52, 0.3, 0.2, 0.2)); //color at start of particle lifetime
    particleSystem.addColorGradient(1, new BABYLON.Color4(1, 0.9, 0.9, 0)); //color at end of particle lifetime
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
}