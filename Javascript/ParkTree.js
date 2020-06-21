//var slider = document.getElementById("myRange");
var randomPlacement = false;
palmTreeNum = 12;
firTreeNum = 12;
oakTreeNum = 8;
poplarTreeNum = 8;
groundXLength = 250 / 2;
groundZLength = 170 / 2;
 //var mtlLoader = new THREE.MTLLoader();

var geometry = new THREE.BoxGeometry(10, 10, 10);
var material = new THREE.MeshBasicMaterial({ color: 'rgb(255, 255, 255)', });

var cube = new THREE.Mesh(geometry, material);
cube.position.y = 10;
cube.castShadow = true;
cube.recieveShadow = true;
cube.name = "cube";
scene.add(cube);


var Size = gui.addFolder('Add and delete trees');

var deleteObj = { delete: function () { } };
var deleteTree = Size.add(deleteObj, 'delete').name('Delete selected tree');

deleteTree.onChange(function () {
  if (mesh != null && mesh.name == "tree") {

    var objToRemove = scene.getObjectById(mesh.id);
    scene.remove(objToRemove.parent);

    selectedObj = false;
    mesh = null;
  } else {
    console.log("No tree selected");
    alert("No tree selected");
  }
})

var addPalmTreeObj = { addPalmTree: function () { } };
var addPalmTree = Size.add(addPalmTreeObj, 'addPalmTree').name('Add Palm Tree');
addPalmTree.onChange(function () {
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("img/tree/");
  mtlLoader.setPath("img/tree/");
  mtlLoader.setTexturePath("img/tree/");
  mtlLoader.setPath("img/tree/");
  mtlLoader.load("Palm_Tree.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("img/tree/");
    objLoader.setMaterials(materials);

    objLoader.load("Palm_Tree.obj", function (object) {
      object.scale.x = object.scale.y = object.scale.z = 5;

      // Random number between 0 and floor width/depth
      xPos = Math.floor(Math.random() * (groundXLength - -groundXLength + 1)) + -groundXLength;
      zPos = Math.floor(Math.random() * (groundZLength - -groundZLength + 1)) + -groundZLength;
      console.log(moonDiameter);

      object.position.z = zPos;
      object.position.x = xPos;
      object.position.y = 0;

      object.children[0].name = "tree";
      object.castShadow = true;
      object.children[0].castShadow = true;
      scene.add(object);
    });
  });
})

var addOakTreeObj = { addOakTree: function () { } };
var addOakTree = Size.add(addOakTreeObj, 'addOakTree').name('Add Oak Tree');
addOakTree.onChange(function () {
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("img/tree/");
  mtlLoader.setPath("img/tree/");

  mtlLoader.load("Oak_Tree.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("img/tree/");
    objLoader.setMaterials(materials);

    objLoader.load("Oak_Tree.obj", function (object) {
      object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          var mygeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
          mygeometry.computeBoundingBox();
          child.material.color = new THREE.Color(1, 0, 0);
        }
      });
      object.scale.x = object.scale.y = object.scale.z = 5;

      // Random number between 0 and floor width/depth
      xPos = Math.floor(Math.random() * (groundXLength - -groundXLength + 1)) + -groundXLength;
      zPos = Math.floor(Math.random() * (groundZLength - -groundZLength + 1)) + -groundZLength;

      object.position.z = zPos;
      object.position.x = xPos;

      object.children[0].name = "tree";
      object.castShadow = true;
      object.children[0].castShadow = true;
      scene.add(object);
    });
  });
})

var addPoplarTreeObj = { addPoplarTree: function () { } };
var addPoplarTree = Size.add(addPoplarTreeObj, 'addPoplarTree').name('Add Poplar Tree');
addPoplarTree.onChange(function () {
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("img/tree/");
  mtlLoader.setPath("img/tree/");
  mtlLoader.load("Poplar_Tree.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("img/tree/");
    objLoader.setMaterials(materials);

    objLoader.load("Poplar_Tree.obj", function (object) {
      object.scale.x = object.scale.y = object.scale.z = 5;


      // Random number between 0 and floor width/depth
      xPos = Math.floor(Math.random() * (groundXLength - -groundXLength + 1)) + -groundXLength;
      zPos = Math.floor(Math.random() * (groundZLength - -groundZLength + 1)) + -groundZLength;

      object.position.z = zPos;
      object.position.x = xPos;

      object.children[0].name = "tree";
      object.castShadow = true;
      object.children[0].castShadow = true;
      scene.add(object);
    });
  });
})

var addFirTreeObj = { addFirTree: function () { } };
var addFirTree = Size.add(addFirTreeObj, 'addFirTree').name('Add Fir Tree');
addFirTree.onChange(function () {
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("img/tree/");
  mtlLoader.setPath("img/tree/");
  mtlLoader.load("Fir_Tree.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("img/tree/");
    objLoader.setMaterials(materials);

    objLoader.load("Fir_Tree.obj", function (object) {
      object.scale.x = object.scale.y = object.scale.z = 5;

      // Random number between 0 and floor width/depth
      xPos = Math.floor(Math.random() * (groundXLength - -groundXLength + 1)) + -groundXLength;
      zPos = Math.floor(Math.random() * (groundZLength - -groundZLength + 1)) + -groundZLength;

      object.position.z = zPos;
      object.position.x = xPos;

      object.children[0].name = "tree";
      object.castShadow = true;
      object.children[0].castShadow = true;
      scene.add(object);
    });
  });
})

//palm tree
function palmTree() {
  var mtlLoader = new THREE.MTLLoader();
  var palmTreeDist = -110;
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("img/tree/");
  mtlLoader.setPath("img/tree/");

  mtlLoader.load("Palm_Tree.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("img/tree/");
    objLoader.setMaterials(materials);

    if (randomPlacement) {
      palmTreeNum = Math.floor((Math.random() * palmTreeNum + 3));
    } else {
      palmTreeNum = 12;
    }

    for (i = 0; i < palmTreeNum; i++) {
      objLoader.load("Palm_Tree.obj", function (object) {
        object.scale.x = object.scale.y = object.scale.z = 5;

        if (!randomPlacement) {
          object.position.z = 80;
          object.position.x = palmTreeDist;

          palmTreeDist += 20;
        } else {
          // Random number between 0 and floor width/depth
          xPos = Math.floor(Math.random() * (groundXLength - -groundXLength + 1)) + -groundXLength;
          zPos = Math.floor(Math.random() * (groundZLength - -groundZLength + 1)) + -groundZLength;
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
        // gui.add(object.scale, 'x', 0, 20);
        // gui.add(object.scale, 'y', 0, 20);
        // gui.add(object.scale, 'z', 0, 20);
      });
    }
  });
}

//FirTree
function firTree() {
  var firTreeDist = -110;
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath("img/tree/");
  mtlLoader.setPath("img/tree/");

  mtlLoader.load("Fir_Tree.mtl", function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setPath("img/tree/");
    objLoader.setMaterials(materials);

    if (randomPlacement) {
      firTreeNum = Math.floor((Math.random() * firTreeNum + 3));
    } else {
      firTreeNum = 12;
    }

    for (i = 0; i < firTreeNum; i++) {
      objLoader.load("Fir_Tree.obj", function (object) {
        object.scale.x = object.scale.y = object.scale.z = 5;

        if (!randomPlacement) {
          object.position.z = -80;
          object.position.x = firTreeDist;

          firTreeDist += 20;
        } else {
          // Random number between 0 and floor width/depth
          xPos = Math.floor(Math.random() * (groundXLength - -groundXLength + 1)) + -groundXLength;
          zPos = Math.floor(Math.random() * (groundZLength - -groundZLength + 1)) + -groundZLength;

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
}

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
function oakTree() {
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
      oakTreeNum = Math.floor((Math.random() * oakTreeNum + 3));
    } else {
      oakTreeNum = 8;
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
          object.position.x = -120;

          oakTreeDist += 20;
        } else {
          // Random number between 0 and floor width/depth
          xPos = Math.floor(Math.random() * (groundXLength - -groundXLength + 1)) + -groundXLength;
          zPos = Math.floor(Math.random() * (groundZLength - -groundZLength + 1)) + -groundZLength;

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
}

function poplarTree() {
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
    } else {
      poplarTreeNum = 8;
    }

    for (i = 0; i < poplarTreeNum; i++) {
      objLoader.load("Poplar_Tree.obj", function (object) {
        object.scale.x = object.scale.y = object.scale.z = 5;

        if (!randomPlacement) {
          object.position.z = poplarTreeDist;
          object.position.x = 120;

          poplarTreeDist += 20;
        } else {
          // Random number between 0 and floor width/depth
          xPos = Math.floor(Math.random() * (groundXLength - -groundXLength + 1)) + -groundXLength;
          zPos = Math.floor(Math.random() * (groundZLength - -groundZLength + 1)) + -groundZLength;

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
}

function reloadTrees() {
  var ground = scene.getObjectByName("Ground");
  groundXLength = (250 / 2) * ground.scale.x;
  groundZLength = (170 / 2) * ground.scale.z;

  palmTree();
  firTree();
  oakTree();
  poplarTree();
}

reloadTrees();


var rand = gui.add(parameters, 'c').name('Randomise Trees');
rand.onChange(function (jar) {
  randomPlacement = jar;
  console.log(randomPlacement);
})

var reload = { reloadBtn: function () { } };
var reloadBtn = gui.add(reload, 'reloadBtn').name('Reload Trees');
reloadBtn.onChange(function () {
  for (let i = scene.children.length - 1; i >= 0; i--) {
    if ((scene.children[i].children.length > 0) && (scene.children[i].children[0].name == "tree")) {
      scene.remove(scene.children[i]);
    }
  }
  reloadTrees();
});