let scene, camera, renderer;
let cloudParticles = [];
let cloudCount = 25;
let rainCount = 4000;
let rainColour = 0xaaaaaa;
var rainSize = 5.0;
let snowCount = 1000;
let snowColour = 0xF0F8FF;
var snowSize = 10.0;
var showRain = true;
let fogColour = 0x11111f;
let fogDensity = 0.002;
let lightningColour = 0x062d89;
let lightningIntensity = 30;
let lightningDecay = 1.7;
var isSnow = false;
var snow = 0.1;
var sunDiameter = 200;
var moonDiameter = 150;
var t = 0;
var groundX = 250;
var groundZ = 170;
var sunSize = 1;
var moonSize = 0.7;

parameters = {
  b: true,
  c: false,
  Sun: 200,
  Moon: 150,
  sunS: 1,
  moonS: 0.7,
}

var diameter = gui.addFolder('Sun and Moon diameter');
 var h = diameter.add(parameters, 'Sun', 200, 300);
 h.onChange(function(jar){
  sunDiameter = jar;
})

var h = diameter.add(parameters, 'Moon', 150, 250);
 h.onChange(function(jar){
  moonDiameter = jar;
})
diameter.open();

var scale = gui.addFolder('Sun and Moon Scale');
 var h = scale.add(parameters, 'sunS', 1, 5);
 h.onChange(function(jar){
  sunSize = jar;
})

 var h = scale.add(parameters, 'moonS', 0.7, 5);
 h.onChange(function(jar){
  moonSize = jar;
})
scale.open();

function init() {

  var ratio = window.innerWidth / window.innerHeight;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(70, ratio, 0.1, 1000);

  //set the camera position
  camera.position.set(0, 130, 150);
  // and the direction
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.shadowMapEnabled = true;
  renderer.shadowMapSoft = true;

  //Adds ambient light to the scene
  var ambientLight = new THREE.AmbientLight(new THREE.Color(1, 1, 1), 0.3);
  scene.add(ambientLight);

  parkGround = new ParkGround(groundX, 0, groundZ, 40, 40, 40);

  scene.add(parkGround);

  sun = new Sun(12);
  scene.add(sun);

  var visibility = gui.addFolder('Object Visibility');

  //change sun visability
  var model = visibility.add(parameters, 'b').name('Sun visible');
  model.onChange(function (jar) {
    sun.visible = jar;
  })

  moon = new Moon(8);
  scene.add(moon);

  //change moon visibility
  var model = visibility.add(parameters, 'b').name('Moon visible');
  model.onChange(function (jar) {
    moon.visible = jar;
  })

  // create a foglike atmosphere to the scene!
  scene.fog = new THREE.FogExp2(fogColour, fogDensity);
  renderer.setClearColor(scene.fog.color);

  // adds clouds to scene
  cloud = new Clouds(cloudCount);

  //adds lightning to clouds
  lightning = new Lightning(lightningColour, lightningIntensity, lightningDecay);

  //Adds rain, change visibility
  rain = new Rain(rainCount, rainColour, rainSize);
  rainObj.name = "rain";
// Toggle for if rain/snow is visible
  var model = visibility.add(parameters, 'b').name('Rain visible');
  model.onChange(function (jar) {
    showRain = jar;
    rainObj.visible = showRain;
  })

  ////Change weather to snow or rain
  var model = visibility.add(parameters, 'c').name('Snow');
  model.onChange(function (jar) {
    if (jar == true) {
      scene.remove(rainObj);
      rain = new Rain(snowCount, snowColour, snowSize);
      rainObj.name = "snow";
    }
    if (jar == false) {
      scene.remove(rainObj);
      rain = new Rain(rainCount, rainColour, rainSize);
      rainObj.name = "rain";
    }
    rainObj.visible = showRain;
  })

  visibility.open();

  //Compiles the shaders that we are using in the simulation
  compileShaders();
}

function updateLoop() {
  t = Date.now() * 0.005;

  animateSun();
  animateMoon();

  cloudParticles.forEach(p => {
    p.rotation.z -= 0.002;
  });
  // animate the rain to fall:
  var geometry = rainObj.geometry;
  var attributes = geometry.attributes;
  for (var i = 1; i < attributes.position.array.length; i += 3) {
    if (rainObj.name == "rain") {
      if (attributes.position.array[i] < 0) {
        attributes.position.array[i] = 200;
      } else {
        attributes.position.array[i] += -2;
      }
    }
    else if (rainObj.name == "snow") {
      attributes.position.array[i - 1] += (Math.random() - 1) * 0.5;
      attributes.position.array[i] += (Math.random() - 0.75) * 1;
      attributes.position.array[i + 1] += (Math.random()) * 0.5;

      if (attributes.position.array[i - 1] < -280) {
        attributes.position.array[i - 1] = 280;
      }

      if (attributes.position.array[i] < 0) {
        attributes.position.array[i]= 200;
      }

      if (attributes.position.array[i + 1] < -280) {
        attributes.position.array[i + 1] = 280;
      }

      if (attributes.position.array[i + 1] > 280) {
        attributes.position.array[i + 1] = -280;
      }
    }
  }

  attributes.position.needsUpdate = true;


  if (Math.random() > 0.93 || flash.power > 100) {
    if (flash.power < 100)
      flash.position.set(
        Math.random() * 400,
        300 + Math.random() * 200,
        100
      );
    flash.power = 50 + Math.random() * 500;
  }

  requestAnimationFrame(updateLoop);

  renderer.render(scene, camera);
}

function animateSun() {
  // Animation speed multiplier
  var speedMultiplyer = 0.07;
  var diameter = sunDiameter;

  sun.scale.x = sun.scale.y = sun.scale.z = sunSize;
  sun.rotation.z += 0.01;
  sun.position.x = diameter * Math.cos(t * speedMultiplyer) + 0;
  sun.position.y = diameter * Math.sin(t * speedMultiplyer) + 0;
}

function animateMoon() {
  // Animation speed multiplier
  var speedMultiplyer = 0.1;
  var radius = moonDiameter;

  moon.scale.x = moon.scale.y = moon.scale.z = moonSize;
  moon.rotation.z += 0.01;
  moon.position.x = radius * Math.cos(t * speedMultiplyer) + 0;
  moon.position.y = radius * Math.sin(t * speedMultiplyer) + 0;
}

//this function is called when the window is resized
var onWindowResize = function () {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};

var raycaster = new THREE.Raycaster();
var selectedObj = false;
mesh = null;

function onDocumentMouseDown(event) {
  var mouse = new THREE.Vector2;
  mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
  mouse.y = - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children, true);

  if (intersects.length > 0) {
    if (!selectedObj) {
      for (var i of intersects) {
        mesh = i.object;

        if (mesh.name == "tree") {
          console.log("Selected Tree!");
          selectedObj = true;
          break;
        }
        if (mesh.name == "cube") {
          console.log("Selected Cube!");
          mesh.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj = true;
          break;
        }
      }
    }

    if ((intersects[0].object.name == "Ground") && (selectedObj)) {
      //mesh.material.color = new THREE.Color(0.9, 0.9, 0.9);
      var pos = intersects[0].point;
      console.log("Placed!");
      if (mesh.name == "tree") {
        mesh.parent.position.x = pos.x;
        mesh.parent.position.z = pos.z;
      } else if (mesh.name == "cube") {
        mesh.position.x = pos.x;
        mesh.position.z = pos.z;
        mesh.material.color = new THREE.Color(0.9, 0.9, 0.9);
      }
      mesh = null;
      selectedObj = false;
    }
  }
}

window.addEventListener('resize', onWindowResize, false);
document.addEventListener('mousedown', onDocumentMouseDown, false);

init();
updateLoop();

//Orbit contorls
controls = new THREE.OrbitControls(camera, renderer.domElement);