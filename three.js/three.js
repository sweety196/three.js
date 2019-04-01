var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 35, aspect, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1);
var material = new THREE.MeshNormalMaterial();

var cube = new THREE.Mesh( geometry, material );
cube.position.x = -1.5;

scene.add( cube );

var cube1 = new THREE.Mesh( geometry, material );
cube1.position.x = 0;
scene.add( cube1 );
// 
camera.position.z = 6;
	var d = new Date();
	var n = d.getMilliseconds();
	console.log(d);
	console.log(n);

	var lastRenderTime = Date.now();
	var speedx = 1;
	var speedy = 1.2;

var render = function () {
	requestAnimationFrame( render );

	dt = (Date.now() - lastRenderTime)/1000.0;
	lastRenderTime = Date.now();

	cube.rotation.x += dt * speedx;
	cube.rotation.y += dt * speedy;

	cube1.rotation.x += dt * speedx;
	cube1.rotation.y += dt * speedy;

	renderer.render( scene, camera );
};

render();