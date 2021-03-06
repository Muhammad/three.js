/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.MeshColorFillMaterial = function ( hex, opacity ) {

	this.color = new THREE.Color( ( opacity !== undefined ? opacity : 1 ) * 0xff << 24 ^ hex );

	this.toString = function () {

		return 'THREE.MeshColorFillMaterial ( color: ' + this.color + ' )';

	};

};
