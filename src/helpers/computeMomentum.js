import {prop, cond, pipe, equals, applySpec} from 'ramda';

import {SHAPES} from '../constants';

// Использовать для округления результата
const round = num => Math.round(num * 10) / 10;

/**
 * Функции возвращающие св-ва объекта эквивалент
 *
 * const propShape = obj => obj.shape
 **/
const propShape = prop('shape');
const propHeight = prop('height');
const propDensity = prop('density');
const propSize = prop('size');


/**
 * Промежуточные формулы для рассчета указанные в задании
 */
const G = 9.8;

const momentumFormula = ({mass, velocity}) => mass * velocity;

const velocityFormula = height => Math.sqrt(2 * G * height);

const massFormula = ({volume, density}) => volume * density;

const cubeVolumeFormula = n => Math.pow(n, 3);

const sphereVolumeFormula = d => (Math.PI * Math.pow(d, 3)) / 6;

const tetrahedronVolumeFormula = r => (Math.pow(r, 3) * Math.sqrt(2)) / 12;

const shapeEquals = shape => pipe(
  propShape,
  equals(shape),
);

const shapeEqualsCube = shapeEquals(SHAPES.CUBE);
const shapeEqualsSphere = shapeEquals(SHAPES.SPHERE);
const shapeEqualsTetrahedron = shapeEquals(SHAPES.TETRAHEDRON);

const calcVolumeWithFormula = formula => pipe(
  propSize,
  formula,
);

const calcCubeVolume = calcVolumeWithFormula(cubeVolumeFormula);
const calcSphereVolume = calcVolumeWithFormula(sphereVolumeFormula);
const calcTetrahedronVolume = calcVolumeWithFormula(tetrahedronVolumeFormula);

const calcVolume = cond([
    [ shapeEqualsCube, calcCubeVolume],
    [ shapeEqualsSphere, calcSphereVolume],
    [ shapeEqualsTetrahedron, calcTetrahedronVolume],
]);

const calcMass = pipe(
  () => {},
);

const calcVelocity = pipe(
    () => {},
    //
);

const propVolume = prop('volume');

const computeMomentum = pipe(
  applySpec({
    volume: calcVolume,
    height: propHeight,
    density: propDensity,
  }),
    // calcVolume(propSize(props), propShape(props)),
    // () => {console.log('Height:', propHeight(props))},
    // () => {console.log('Size:', propSize(props))},
    // () => {console.log('Shape:', propShape(props))},
    // () => {console.log('Density:', propDensity(props))},
  propVolume,
);


export default computeMomentum;
