const IS_INTERNAL = Boolean(
	window.location.hostname === 'localhost' ||
	// [::1] is the IPv6 localhost address.
	window.location.hostname === '[::1]' ||
	// 127.0.0.1/8 is considered localhost for IPv4.
	window.location.hostname.match(
		/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
	) ||
	// Checks all internals IP Adresses
	window.location.hostname.match(
		/(^192\.168\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])$)|(^172\.([1][6-9]|[2][0-9]|[3][0-1])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])$)|(^10\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])$)/gm
	)
);

const matched = x => ({
	case: () => matched(x),
	default: () => x,
})

/**
 * Make a switch case
 * @param {any} x - The value to be evaluated
 */
const when = x => ({
	case: (pred, fn) => (pred(x) ? matched(fn(x)) : when(x)),
	default: fn => fn(x),
})

export default {
    IS_INTERNAL,
    when
}
