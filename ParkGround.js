function ParkGround(width, length, depth, widthSegments, heightSegments, depthSegments) {
  var floorGeometry = new THREE.BoxGeometry(width, length, depth, widthSegments, heightSegments, depthSegments);
  // var floorMaterial = new THREE.MeshLambertMaterial();
  
  var floorMaterial = [
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load( 'img/grass.png'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load( 'img/grass.png'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load( 'img/grass.png'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load( 'img/grass.png'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load( 'img/grass.png'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load( 'img/grass.png'), side: THREE.DoubleSide})
  ]
  var Material = new THREE.MeshFaceMaterial(floorMaterial)

  var floor = new THREE.Mesh(floorGeometry, Material);
  floor.castShadow = true;
  floor.receiveShadow = false;

  return floor;
}
