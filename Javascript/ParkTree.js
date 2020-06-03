//var slider = document.getElementById("myRange");
var geometry = new THREE.BoxGeometry( 10, 10, 10 );
var material = new THREE.MeshBasicMaterial( {color: 'rgb(255, 255, 255)',} );
var cube = new THREE.Mesh( geometry, material );
cube.position.y = 10;
cube.castShadow = true;
cube.recieveShadow = true;
scene.add( cube );

var geometry = new THREE.BoxGeometry( 10, 10, 10 );
var material = new THREE.MeshBasicMaterial( {color: 'rgb(255, 255, 255)',} );
var cube = new THREE.Mesh( geometry, material );
cube.position.y = 20;
cube.position.x = 10;
cube.castShadow = true;
cube.recieveShadow = true;
scene.add( cube );

var gui = new dat.GUI();

function tree(s){
  
  //Palm trees
  // var s;
  // s += controls.b;
var palmTreeDist = -80;
var mtlLoader = new THREE.MTLLoader();
 mtlLoader.setTexturePath( "img/tree/" );
 mtlLoader.setPath( "img/tree/" );

 mtlLoader.load("Palm_Tree.mtl", function(materials)
 {
   materials.preload();
   var objLoader = new THREE.OBJLoader();
   objLoader.setPath( "img/tree/" );
   objLoader.setMaterials(materials);
   for(i = 0; i < 9; i++){
   objLoader.load("Palm_Tree.obj", function(meshs)
   {
    meshs.scale.x = meshs.scale.y = meshs.scale.z = 5;
    meshs.position.z = 70; 
    meshs.position.x = palmTreeDist;
    meshs.position.y = 0; 
    scene.add(meshs);
    palmTreeDist += 20;
    
    //return s;
    //var seperate = gui.addFolder('seperater');
    gui.add(meshs.scale, 'x', 0, 20);
    gui.add(meshs.scale, 'y', 0, 20);
    gui.add(meshs.scale, 'z', 0, 20);
    

    });
    //updateLoops(renderer, scene, camera)
    
}

});
}
var controls = new function() {
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
 

  requestAnimationFrame(function(){
    updateLoops(renderer, scene, camera);
  })
}
//updateLoops();
//Oak trees
var oakTreeDist = -70;
var mtlLoader = new THREE.MTLLoader();
 mtlLoader.setTexturePath( "img/tree/" );
 mtlLoader.setPath( "img/tree/" );

 mtlLoader.load("Oak_Tree.mtl", function(materials)
 {
   materials.preload();
   var objLoader = new THREE.OBJLoader();
   objLoader.setPath( "img/tree/" );
   objLoader.setMaterials(materials);

   for(i = 0; i < 8; i++){
   objLoader.load("Oak_Tree.obj", function(mesh)
   {
    mesh.traverse(function ( child )
    {
        if ( child instanceof THREE.Mesh )
        {
            var mygeometry = new THREE.Geometry().fromBufferGeometry( child.geometry );
            mygeometry.computeBoundingBox();
            child.material.color= new THREE.Color(1,0,0);
        }
      });
    mesh.scale.x = mesh.scale.y = mesh.scale.z = 5;
    mesh.position.z = oakTreeDist; 
    mesh.position.x = -95; 
    scene.add(mesh);
    oakTreeDist += 20;
    
    });
}
});

// Poplar trees
var poplarTreeDist = -70;
var mtlLoader = new THREE.MTLLoader();
 mtlLoader.setTexturePath( "img/tree/" );
 mtlLoader.setPath( "img/tree/" );

 mtlLoader.load("Poplar_Tree.mtl", function(materials)
 {
   materials.preload();
   var objLoader = new THREE.OBJLoader();
   objLoader.setPath( "img/tree/" );
   objLoader.setMaterials(materials);

   for(i = 0; i < 8; i++){
   objLoader.load("Poplar_Tree.obj", function(mesh)
   {
    
    mesh.scale.x = mesh.scale.y = mesh.scale.z = 5;
    mesh.position.z = poplarTreeDist; 
    mesh.position.x = 95; 
    //mesh.name = "loaded_mesh";
    scene.add(mesh);
    poplarTreeDist += 20;
    
    });
}
});

// Poplar trees

// var mtlLoader = new THREE.MTLLoader();
//  mtlLoader.setTexturePath( "img/tree/" );
//  mtlLoader.setPath( "img/tree/" );

//  mtlLoader.load("Poplar_Tree.mtl", function(materials)
// {
//   materials.preload();
//    var objLoader = new THREE.OBJLoader();
//    objLoader.setPath( "img/tree/" );
//    objLoader.setMaterials(materials);

   
//    objLoader.load("Poplar_Tree.obj", function(mesh)
//    {
    
//     mesh.scale.x = mesh.scale.y = mesh.scale.z = 5;
//     mesh.position.z = 0; 
//     mesh.position.x = 0; 
//     //mesh.name = "loaded_mesh";
//     scene.add(mesh);
    
//    });
// });

 //MESH LOADING
 var loader = new THREE.PLYLoader();
 var mesh = null;
 loader.load('img/bunny.ply', function ( geometry )
 {
      // geometry.computeVertexNormals();
      // geometry.computeBoundingBox();

      // var center = geometry.boundingBox.getCenter();
      // var size = geometry.boundingBox.getSize();
      // var min = geometry.boundingBox.min;

      // var sca = new THREE.Matrix4();
      // var tra = new THREE.Matrix4();

      // var ScaleFact=5/size.length();
      // sca.makeScale(ScaleFact,ScaleFact,ScaleFact);
      // //tra.makeTranslation (-center.x,-center.y,-min.z);
      // tra.makeTranslation (-center.x,-center.y,-min.z);

      var material = new THREE.MeshPhongMaterial();
      material.color= new THREE.Color(0.9,0.9,0.9);
      material.shininess=100;
      mesh = new THREE.Mesh( geometry, material );

      // mesh.applyMatrix(tra);
      // mesh.applyMatrix(sca);
      mesh.position.x = 0;
          mesh.position.y = 8; 
          mesh.position.z = 0;
          mesh.scale.x = mesh.scale.y = mesh.scale.z = 44;

      mesh.name = "loaded_mesh";

      scene.add( mesh );
    } );

// //Move tree with mouse control
var raycaster = new THREE.Raycaster();

      var selectedObj = false;

      function onDocumentMouseDown( event ) {

         var mouse = new THREE.Vector3;
         mouse.x = -( event.clientX / renderer.domElement.clientWidth ) * 2 + 1;
         mouse.y = -( event.clientY / renderer.domElement.clientHeight ) * 2 - 1;

         raycaster.setFromCamera( mouse, camera );

         var intersects = raycaster.intersectObjects( scene.children, false );

         if ( intersects.length > 0 ) {
             if ((intersects[ 0 ].object.name=="loaded_mesh")&&(!selectedObj))
             {
               console.log("Selected!");
               //var FaceI=intersects[ 0 ].face;
               intersects[ 0 ].object.material.color= new THREE.Color(1,0.5,0.5);
               selectedObj = true;
             }
             if ((intersects[ 0 ].object.name!="loaded_mesh")&&(selectedObj))
             {
               mesh.material.color= new THREE.Color(0.9,0.9,0.9);
               var pos=intersects[0].point;
               console.log("Placed!");
               mesh.position.x=pos.x;
               mesh.position.y=pos.y;
               selectedObj = false;
             }
         }
      }
      // when the mouse is clicked, call the given function
      document.addEventListener( 'mousedown', onDocumentMouseDown, false );