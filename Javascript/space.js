function g() {
	var particleMat = new THREE.PointsMaterial({
		color: 'rgb(255, 255, 255)',
		size: 4,
		map: new THREE.TextureLoader().load('/img/particle.jpg'),
		transparent: true,
		blending: THREE.AdditiveBlending,
		depthWrite: false
	});

	var particleGeo = new THREE.SphereGeometry(10, 64, 64);

	particleGeo.vertices.forEach(function(vertex) {
		vertex.x += (Math.random() - 0.5);
		vertex.y += (Math.random() - 0.5);
		vertex.z += (Math.random() - 0.5);
	});

	var particleSystem = new THREE.Points(
		particleGeo,
		particleMat
	);
    particleSystem.name = 'particleSystem';
    particleSystem.scale.x = 30;
    particleSystem.scale.y = 30;
    particleSystem.scale.z = 30;

	scene.add(particleSystem);

	// renderer
	var renderer = new THREE.WebGLRenderer();
	//renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;
	renderer.setClearColor('rgb(20, 20, 20)');

	update(renderer, scene, camera, controls);

	return scene;
}

function update(renderer, scene, camera, controls) {
	controls.update();
	renderer.render(scene, camera);

	var particleSystem = scene.getObjectByName('particleSystem');
	particleSystem.rotation.y += 0.0008;
	
	requestAnimationFrame(function() {
		update(renderer, scene, camera, controls);
	});
}

g();
