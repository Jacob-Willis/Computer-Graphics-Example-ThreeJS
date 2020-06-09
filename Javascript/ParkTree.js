//var slider = document.getElementById("myRange");
var randomPlacement = true;
palmTreeNum = 9;
oakTreeNum = 8;
poplarTreeNum = 8;
var geometry = new THREE.BoxGeometry(10, 10, 10);
var material = new THREE.MeshBasicMaterial({ color: 'rgb(255, 255, 255)', });
var cube = new THREE.Mesh(geometry, material);
cube.position.y = 10;
cube.castShadow = true;
cube.recieveShadow = true;
cube.name = "cube";
scene.add(cube);

var gui = new dat.GUI();

function tree(s) {

  //Palm trees
  // var s;
  // s += controls.b;
  var palmTreeDist = -80;
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("img/tree/");
  mtlLoader.setPath("img/tree/");

  mtlLoader.load("Palm_Tree.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("img/tree/");
    objLoader.setMaterials(materials);

    if (randomPlacement) {
      palmTreeNum = Math.floor((Math.random() * 9 + 3));
    }

    for (i = 0; i < palmTreeNum; i++) {
      objLoader.load("Palm_Tree.obj", function (object) {
        object.scale.x = object.scale.y = object.scale.z = 5;

        if (!randomPlacement) {
          object.position.z = 70;
          object.position.x = palmTreeDist;

          palmTreeDist += 20;
        } else {
          // Random number between 0 and floor width/depth
          xPos = Math.floor(Math.random() * (100 - -100 + 1)) + -100;
          zPos = Math.floor(Math.random() * (75 - -75 + 1)) + -75;
          object.position.z = zPos;
          object.position.x = xPos;
        }

        object.position.y = 0;
        object.children[0].name = "tree";
        object.castShadow = true;
        object.children[0].castShadow = true;
        scene.add(object);

        //return s;
        //var seperate = gui.addFolder('seperater');
        gui.add(object.scale, 'x', 0, 20);
        gui.add(object.scale, 'y', 0, 20);
        gui.add(object.scale, 'z', 0, 20);


      });
      //updateLoops(renderer, scene, camera)

    }

  });
}
var controls = new function () {
  this.b = 1;
}

gui.add(controls, 'b', 0, 20);
var h;
h += controls.b;
tree(h);

//tree(6);
function updateLoops(renderer, scene, camera) {
  renderer.render(scene, camera);
  // meshs.scale.x = meshs.scale.y = meshs.scale.z = g;


  requestAnimationFrame(function () {
    updateLoops(renderer, scene, camera);
  })
}
//updateLoops();
//Oak trees
var oakTreeDist = -70;
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath("img/tree/");
mtlLoader.setPath("img/tree/");

mtlLoader.load("Oak_Tree.mtl", function (materials) {
  materials.preload();
  var objLoader = new THREE.OBJLoader();
  objLoader.setPath("img/tree/");
  objLoader.setMaterials(materials);

  if (randomPlacement) {
    oakTreeNum = Math.floor((Math.random() * 8 + 3));
  }

  for (i = 0; i < oakTreeNum; i++) {
    objLoader.load("Oak_Tree.obj", function (object) {
      object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          var mygeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
          mygeometry.computeBoundingBox();
          child.material.color = new THREE.Color(1, 0, 0);
        }
      });
      object.scale.x = object.scale.y = object.scale.z = 5;


      if (!randomPlacement) {
        object.position.z = oakTreeDist;
        object.position.x = -95;

        oakTreeDist += 20;
      } else {
        // Random number between 0 and floor width/depth
        xPos = Math.floor(Math.random() * (100 - -100 + 1)) + -100;
        zPos = Math.floor(Math.random() * (75 - -75 + 1)) + -75;

        object.position.z = zPos;
        object.position.x = xPos;
      }

      object.children[0].name = "tree";
      object.castShadow = true;
      object.children[0].castShadow = true;
      scene.add(object);
    });
  }
});

// Poplar trees
var poplarTreeDist = -70;
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath("img/tree/");
mtlLoader.setPath("img/tree/");

mtlLoader.load("Poplar_Tree.mtl", function (materials) {
  materials.preload();
  var objLoader = new THREE.OBJLoader();
  objLoader.setPath("img/tree/");
  objLoader.setMaterials(materials);

  if (randomPlacement) {
    poplarTreeNum = Math.floor((Math.random() * 8 + 3));
  }

  for (i = 0; i < poplarTreeNum; i++) {
    objLoader.load("Poplar_Tree.obj", function (object) {
      object.scale.x = object.scale.y = object.scale.z = 5;

      if (!randomPlacement) {
        object.position.z = poplarTreeDist;
        object.position.x = 95;

        poplarTreeDist += 20;
      } else {
        // Random number between 0 and floor width/depth
        xPos = Math.floor(Math.random() * (100 - -100 + 1)) + -100;
        zPos = Math.floor(Math.random() * (75 - -75 + 1)) + -75;

        object.position.z = zPos;
        object.position.x = xPos;
      }

      object.children[0].name = "tree";
      object.castShadow = true;
      object.children[0].castShadow = true;
      scene.add(object);
    });
  }
});

function checkCollision(vector) {

}