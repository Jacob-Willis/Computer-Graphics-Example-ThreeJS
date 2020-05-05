var mtlLoader = new THREE.MTLLoader();
 mtlLoader.setTexturePath( "img/tree/" );
 mtlLoader.setPath( "img/tree/" );

 mtlLoader.load("Palm_Tree.mtl", function(materials)
 {
   materials.preload();
   var objLoader = new THREE.OBJLoader();
   objLoader.setPath( "img/tree/" );
   objLoader.setMaterials(materials);

   objLoader.load("Palm_Tree.obj", function(mesh)
   {
      var CenterBB;
      var SizeBB;
      mesh.traverse(function ( child )
      {
          if ( child instanceof THREE.Mesh )
          {
              var mygeometry = new THREE.Geometry().fromBufferGeometry( child.geometry );
              mygeometry.computeBoundingBox();
              child.material.color= new THREE.Color(1,1,1);
              CenterBB=mygeometry.boundingBox.getCenter();
              SizeBB=mygeometry.boundingBox.getSize();
          }
      });
      
      scene.add(mesh);
      
      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(60/SizeBB.length(),60/SizeBB.length(),60/SizeBB.length());
      tra.makeTranslation (-CenterBB.x,-CenterBB.y,-CenterBB.z);
      combined.multiply(sca);
      combined.multiply(tra);
      mesh.applyMatrix(combined);
	});
});