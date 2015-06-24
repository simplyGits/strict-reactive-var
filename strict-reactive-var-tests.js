Tinytest.add('be able to initialized with and without `new`', function (test) {
	test.instanceOf(new SReactiveVar(null), SReactiveVar);
	test.instanceOf(SReactiveVar(null), SReactiveVar);
})

Tinytest.add('set and retrieve values', function (test) {
	var val = new SReactiveVar(Number, 0)
	test.equal(val.get(), 0)
	val.set(420)
	test.equal(val.get(), 420)
})

Tinytest.add('set values and be reactive', function (test) {
	var val = new SReactiveVar(Number, 0)

	Tracker.autorun(Meteor.bindEnvironment(function (c) {
		var value = val.get()
		if (c.firstRun) {
			test.equal(value, 0)
		} else {
			test.equal(value, 1)
		}
	}))

	val.set(1)
})

Tinytest.add('check types', function (test) {
	var val = new SReactiveVar(Number, 0)
	test.equal(val.get(), 0)

	var error = null
	try {
		val.set('5')
	} catch (e) {
		// we should error and hit this line.
		error = e
	}
	test.isNotNull(error)
})
