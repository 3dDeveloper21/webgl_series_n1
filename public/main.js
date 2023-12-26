const vertexShaderSource = `#version 300 es

in vec4 a_position;

void main()
{

};`

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

if(!gl)
{
    throw new Error('WebGL not supported');
}

// Desired data to store into buffer
const vertexData = [
    0, 1, 0,
    1, -1, 0,
    -1, -1, 0
];

// create buffer
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array, gl.STATIC_DRAW);

// Load vertexData into that buffer

// create vertex shader
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader();

// create fragement shader
const fragementShader = gl.createShader(gl.FRAGMENT_SHADER);

// create program

// attach shaders to the program

// enable the vertex attirbutes

// draw
