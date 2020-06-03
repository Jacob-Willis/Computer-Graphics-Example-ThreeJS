function Lightning(lightningColour, lightningIntensity, lightningDecay) {
	flash = new THREE.PointLight(lightningColour, lightningIntensity, 500, lightningDecay);
	flash.position.set(200, 300, 100);
	scene.add(flash);
}