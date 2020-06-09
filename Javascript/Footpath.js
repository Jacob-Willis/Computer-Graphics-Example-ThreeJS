//create the material of the cube (basic material)
var material_cube = new THREE.MeshLambertMaterial();
//set the color of the cube
material_cube.color=  new THREE.Color(1,1,1);

var FootPath_texture = new THREE.TextureLoader().load('img/concrete.png');
material_cube.map= FootPath_texture;

//then set the renderer to wireframe
material_cube.wireframe=false;

//front foot path
//create the mesh of a cube
var treePosX1 = -100;
for(i = 0; i<26; i++){
var geometry_cube = new THREE.BoxGeometry(8, 1, 5);
var cube = new THREE.Mesh(geometry_cube,material_cube);
cube.position.x-=5;

//Positions
cube.position.x = treePosX1;
cube.position.y = 0.4;
cube.position.z = 60.5;
scene.add(cube);
treePosX1+=8;
}

//Back foot path
var treePosX2 = -100;
for(j = 0; j<26; j++){
var geometry_cube = new THREE.BoxGeometry(8, 1, 5);
var cube = new THREE.Mesh(geometry_cube,material_cube);
cube.position.x-=5;

//Positions
cube.position.x = treePosX2;
cube.position.y = 0.4;
cube.position.z = -60.5;
scene.add(cube);
treePosX2+=8;
}

//Left foot path
var treePosZ1 = -59;
for(k = 0; k<18; k++){
var geometry_cube = new THREE.BoxGeometry(5, 1, 7);
var cube = new THREE.Mesh(geometry_cube,material_cube);
cube.position.x-=5;

//Positions
cube.position.x = -105;
cube.position.y = 0.4;
cube.position.z = treePosZ1;
scene.add(cube);
treePosZ1+=7;
}

//Right foot path
var treePosZ2 = -59;
for(m = 0; m<18; m++){
var geometry_cube = new THREE.BoxGeometry(5, 1, 7);
var cube = new THREE.Mesh(geometry_cube,material_cube);
cube.position.x-=5;

//Positions
cube.position.x = 105;
cube.position.y = 0.4;
cube.position.z = treePosZ2;
scene.add(cube);
treePosZ2+=7;
}