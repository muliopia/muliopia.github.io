import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.js', // Change to your entry file
    output: {
        file: 'dist/bundle.js',
        format: 'es' // or 'iife' for a script tag
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({ babelHelpers: 'bundled', presets: ['@babel/preset-react'] })
    ]
};