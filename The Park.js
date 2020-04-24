let scene, camera, renderer;

function init() {
  var ratio = window.innerWidth / window.innerHeight;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(70, ratio, 0.1, 1000);

  //set the camera position
  camera.position.set(0, 100, 100);
  // and the direction
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  parkGround = new ParkGround(150, 10, 150, 40, 40, 40);
  scene.add(parkGround);

  sun = new Sun(10);
  scene.add(sun);
}

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
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
animate();