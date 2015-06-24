/*
 * Thin strictly type checking wrapper around reactive-var.
 * @module strict-reactive-var
 * @author simply
 */

SReactiveVar = function (pattern, val) {
	if (!(this instanceof SReactiveVar)) {
		return new SReactiveVar(pattern, val)
	}
	if (pattern === undefined) {
		throw new ReferenceError('`pattern` is required')
	}

	this._pattern = pattern
	this._reactiveVar = new ReactiveVar(val)
}

SReactiveVar.prototype.get = function () {
	return this._reactiveVar.get()
}

SReactiveVar.prototype.set = function (val) {
	check(val, this._pattern)
	this._reactiveVar.set(val)
}
