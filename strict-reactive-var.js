/*
 * Thin strictly type checking wrapper around reactive-var.
 * @module strict-reactive-var
 * @author simply
 */

SReactiveVar = function (pattern /*, args */) {
	var args = [].slice.call(arguments, 1)

	if (!(this instanceof SReactiveVar)) {
		return new SReactiveVar(arguments)
	}
	if (pattern === undefined) {
		throw new ReferenceError('`pattern` is required')
	}

	this._pattern = pattern
	this._reactiveVar = ReactiveVar.apply(null, args)
}

SReactiveVar.prototype.get = function () {
	return this._reactiveVar.get()
}

SReactiveVar.prototype.set = function (val) {
	check(val, this._pattern)
	this._reactiveVar.set(val)
}
