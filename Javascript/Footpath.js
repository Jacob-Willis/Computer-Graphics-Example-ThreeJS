//create the material of the cube (basic material)
var material_cube = new THREE.MeshLambertMaterial();
//set the color of the cube
material_cube.color = new THREE.Color(1, 1, 1);

var FootPath_texture = new THREE.TextureLoader().load('img/concrete.png');
material_cube.map = FootPath_texture;

//then set the renderer to wireframe
material_cube.wireframe = false;

//front foot path
//create the mesh of a cube
var treePosX1 = -80;
for (i = 0; i < 21; i++) {
  var geometry_cube = new THREE.BoxGeometry(8, 1, 4);
  var cube = new THREE.Mesh(geometry_cube, material_cube);
  cube.position.x -= 5;

  //Positions
  cube.position.x = treePosX1;
  cube.position.y = 0.4;
  cube.position.z = 60.5;
  cube.name = "Front Foot Path";
  scene.add(cube);
  treePosX1 += 8;
}

//Back foot path
var treePosX2 = -83;
for (j = 0; j < 23; j++) {
  var geometry_cube = new THREE.BoxGeometry(7.56, 1, 4);
  var cube = new THREE.Mesh(geometry_cube, material_cube);
  cube.position.x -= 5;

  //Positions
  cube.position.x = treePosX2;
  cube.position.y = 0.4;
  cube.position.z = -60.5;
  cube.name = "Back Foot Path";
  scene.add(cube);
  treePosX2 += 7.56;
}

//Left foot path
var treePosZ1 = -58;
for (k = 0; k < 17; k++) {
  var geometry_cube = new THREE.BoxGeometry(4, 1, 7.3);
  var cube = new THREE.Mesh(geometry_cube, material_cube);
  cube.position.x -= 5;

  //Positions
  cube.position.x = -85;
  cube.position.y = 0.4;
  cube.position.z = treePosZ1;
  cube.name = "Left Foot Path";
  scene.add(cube);
  treePosZ1 += 7.3;
}

//Right foot path
var treePosZ2 = -58;
for (m = 0; m < 17; m++) {
  var geometry_cube = new THREE.BoxGeometry(4, 1, 7.3);
  var cube = new THREE.Mesh(geometry_cube, material_cube);
  cube.position.x -= 5;

  //Positions
  cube.position.x = 85;
  cube.position.y = 0.4;
  cube.position.z = treePosZ2;
  scene.add(cube);
  cube.name = "Right Foot Path";
  treePosZ2 += 7.3;
}
//Orbit contorls
controls = new THREE.OrbitControls(camera, renderer.domElement);
