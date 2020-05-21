//var slider = document.getElementById("myRange");
var g = 1;
slider.oninput = function(){
  
  output.innerHTML = this.value;
  g = slider.value;
  console.log(g)

//Palm trees
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
   objLoader.load("Palm_Tree.obj", function(mesh)
   {
    mesh.scale.x = mesh.scale.y = mesh.scale.z = g;
    mesh.position.z = 70; 
    mesh.position.x = palmTreeDist;
    //scene.remove(mesh);
    scene.add(mesh);
    palmTreeDist += 20;
    
    });
}
});}

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
    mesh.name = "loaded_mesh";
    scene.add(mesh);
    poplarTreeDist += 20;
    
    });
}
});

//Move tree with mouse control
var raycaster = new THREE.Raycaster();

      var selectedObj = false;

      function onDocumentMouseDown( event ) {

         var mouse = new THREE.Vector2;
         mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
         mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;

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