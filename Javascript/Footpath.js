//create the material of the cube (basic material)
var material_cube = new THREE.MeshLambertMaterial();
//set the color of the cube
material_cube.color=  new THREE.Color(1,1,1);

var FootPath_texture = new THREE.TextureLoader().load('img/foot.png');
material_cube.map= FootPath_texture;

//then set the renderer to wireframe
material_cube.wireframe=false;

//front foot path
//create the mesh of a cube
var geometry_cube = new THREE.BoxGeometry(168, 1, 4);
var cube = new THREE.Mesh(geometry_cube,material_cube);
cube.position.x-=5;

//Positions
cube.position.x = 0;
cube.position.y = 1;
cube.position.z = 60;
scene.add(cube);

//Back foot path
var geometry_cube = new THREE.BoxGeometry(168, 1, 4);
var cube = new THREE.Mesh(geometry_cube,material_cube);
cube.position.x-=5;

//Positions
cube.position.x = 0;
cube.position.y = 1;
cube.position.z = -60;
scene.add(cube);

//Left foot path
var geometry_cube = new THREE.BoxGeometry(4, 1, 125);
var cube = new THREE.Mesh(geometry_cube,material_cube);
cube.position.x-=5;

//Positions
cube.position.x = -85;
cube.position.y = 1;
cube.position.z = 0;
scene.add(cube);

//Right foot path
//Left foot path
var geometry_cube = new THREE.BoxGeometry(4, 1, 125);
var cube = new THREE.Mesh(geometry_cube,material_cube);
cube.position.x-=5;

//Positions
cube.position.x = 85;
cube.position.y = 1;
cube.position.z = 0;
scene.add(cube);

//Orbit contorls
controls = new THREE.OrbitControls( camera, renderer.domElement );
