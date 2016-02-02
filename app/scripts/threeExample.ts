import three = require("three");

let lights: three.Light[] = [];

function sampleScene(width: number, height: number): HTMLCanvasElement {
    let fov: number = 45;
    let ratio: number = width / height;
    let near: number = 0.1;
    let far: number = 10000;

    let renderer: three.Renderer = new three.WebGLRenderer();
    let camera: three.Camera = new three.PerspectiveCamera(fov, ratio, near, far);
    let scene: three.Scene = new three.Scene();

    scene.add(camera);
    camera.position.z = 300;

    addSphere(scene);

    addLight(scene, 0xFF0000, new three.Vector3(130,  100, 0));
    addLight(scene, 0x00FF00, new three.Vector3(130,    0, 0));
    addLight(scene, 0x0000FF, new three.Vector3(130, -100, 0));

    renderer.setSize(width, height);
    setTimeout(() => renderLoop(renderer, scene, camera), 10);
    return renderer.domElement;  
}

function renderLoop(renderer: three.Renderer, scene: three.Scene, camera: three.Camera): void {
    let angles: number[] = Array(lights.length);
    for (let i = 0; i < lights.length; ++i) {
        angles[i] = 0;
    }

    let t0: number = new Date().getTime();
    let loop = () => {
        let t1: number = new Date().getTime();
        let dt: number = t1 - t0;

        for (let i = 0; i < lights.length; ++i) {
            lights[i].position.x = 130 * Math.cos(angles[i]);
            lights[i].position.z = 130 * Math.sin(angles[i]);
            angles[i] += (0.005 / (i + 1)) * dt;
        }

        t0 = t1;
        renderer.render(scene, camera);
        window.requestAnimationFrame(loop);
    }

    loop();
}

function addSphere(scene: three.Scene): three.Mesh {
    let geometry: three.Geometry = new three.SphereGeometry(50, 16, 16);
    let material: three.Material = new three.MeshPhongMaterial({
        color: 0xFFFFFF
    });
    let sphere: three.Mesh = new three.Mesh(geometry, material);

    scene.add(sphere);
    return sphere;
}

function addLight(scene: three.Scene, color: number, position: three.Vector3): three.Light {
    let light: three.Light = new three.PointLight(color);
    light.position.x = position.x;
    light.position.y = position.y;
    light.position.z = position.z;
    lights.push(light);
    scene.add(light);
    return light;
}

export = sampleScene;
