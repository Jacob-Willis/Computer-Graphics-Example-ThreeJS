function ParkGround(width, length, depth, widthSegments, heightSegments, depthSegments) {
  var floorGeometry = new THREE.BoxGeometry(width, length, depth, widthSegments, heightSegments, depthSegments);

  var floorMaterial = [
    new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load( 'img/grass.png'), side: THREE.DoubleSide}),
    new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load( 'img/grass.png'), side: THREE.DoubleSide}),
    new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load( 'img/grass.png'), side: THREE.DoubleSide}),
    new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load( 'img/grass.png'), side: THREE.DoubleSide}),
    new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load( 'img/grass.png'), side: THREE.DoubleSide}),
    new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load( 'img/grass.png'), side: THREE.DoubleSide})
  ]

  var Material = new THREE.MeshFaceMaterial(floorMaterial)

  var floor = new THREE.Mesh(floorGeometry, Material);
  floor.name = "Ground";
  floor.receiveShadow = true;
  
  var parkSize = gui.addFolder('Park size');
  parkSize.add(floor.scale, 'x', 1, 2);
  parkSize.add(floor.scale, 'z', 1, 1.5);
  parkSize.open();
  return floor;
}