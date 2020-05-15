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
    
    mesh.scale.x = mesh.scale.y = mesh.scale.z = 5;
    mesh.position.z = 70; 
    mesh.position.x = palmTreeDist; 
    scene.add(mesh);
    palmTreeDist += 20;
    
    });
}
});

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
    scene.add(mesh);
    poplarTreeDist += 20;
    
    });
}
});