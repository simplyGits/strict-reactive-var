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
		// we should erorr and hit this line.
		error = e
	}
	test.isNotNull(error)
})
