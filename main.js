import * as THREE from 'three';
import {GLTFLoader, OrbitControls, Reflector} from "three/addons";

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//scene.background = new THREE.Color(0xffffff)


const pointLight = new THREE.PointLight(0xffffff,100)
const pointLight2 = new THREE.PointLight(0x13adda,100)
const pointLight3 = new THREE.PointLight(0x13adda,100)
pointLight.position.set(0, 3, 0)
pointLight2.position.set(3, 1, -2)
pointLight3.position.set(-3, 1, -2)

const lightHelper = new THREE.PointLightHelper(pointLight)
const lightHelper2 = new THREE.PointLightHelper(pointLight2)
const lightHelper3 = new THREE.PointLightHelper(pointLight3)


const ambientLight = new THREE.AmbientLight(0xec5ee8,10)
scene.add(pointLight,pointLight2,pointLight3,ambientLight,lightHelper,lightHelper2,lightHelper3)

const controls = new OrbitControls(camera,renderer.domElement)

camera.position.set( 5, 0, 20 );


const loader = new GLTFLoader();

loader.load( 'assets/porsche/scene.gltf', function ( gltf ) {


    scene.add( gltf.scene );


}, undefined, function ( error ) {

    console.error( error );

} );

function animate() {
    requestAnimationFrame( animate );

    renderer.render( scene, camera );
}
animate();