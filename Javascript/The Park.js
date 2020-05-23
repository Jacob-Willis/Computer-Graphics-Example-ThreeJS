let scene, camera, renderer;
let cloudParticles = [];
let cloudCount = 25;
let rainCount = 15000;
let rainColour = 0xaaaaaa;
let rainSize = 0.1;
let fogColour = 0x11111f;
let fogDensity = 0.002;
let lightningColour = 0x062d89;
let lightningIntensity = 30;
let lightningDecay = 1.7;
var t = 0;

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

  parkGround = new ParkGround(200, 10, 150, 40, 40, 40);
  scene.add(parkGround);

  sun = new Sun(10);
  scene.add(sun);

  moon = new Moon(4);
  scene.add(moon);

  var boxgeometry = new THREE.CubeGeometry(10, 10, 10);
  var boxmaterial = new THREE.MeshLambertMaterial({
    color: 0x0aeedf
  });
  var cube = new THREE.Mesh(boxgeometry, boxmaterial);
  cube.castShadow = true;
  cube.position.x = 0;
  cube.position.y = 10;
  cube.position.z = 0;

  scene.add(cube);

  // create a foglike atmosphere to the scene!
  scene.fog = new THREE.FogExp2(fogColour, fogDensity);
  renderer.setClearColor(scene.fog.color);

  // adds clouds to scene
  cloud = new Clouds(cloudCount);

  //adds lightning to clouds
  lightning = new Lightning(lightningColour, lightningIntensity, lightningDecay);

  //Adds rain
  rain = new Rain(rainCount, rainColour, rainSize);
}

function updateLoop() {
  t += 0.01;

  animateSun();
  animateMoon();

  cloudParticles.forEach(p => {
    p.rotation.z -= 0.002;
  });
  rainGeo.vertices.forEach(p => {
    p.velocity -= 0.1 + Math.random() * 0.1;
    p.y += p.velocity;
    if (p.y < -200) {
      p.y = 200;
      p.velocity = 0;
    }
  });
  rainGeo.verticesNeedUpdate = true;
  rain.rotation.y += 0.002;
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
  var speedMultiplyer = 0.7;
  var diameter = 200;

  sun.rotation.z += 0.01;
  sun.position.x = diameter * Math.cos(t * speedMultiplyer) + 0;
  sun.position.y = diameter * Math.sin(t * speedMultiplyer) + 0;
}

function animateMoon() {
  // Animation speed multiplier
  var speedMultiplyer = 1.0;
  var radius = 150;

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

window.addEventListener('resize', onWindowResize, false);

init();
updateLoop();