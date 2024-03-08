'use strict';

var React = require('react');

const noop = () => {};
// eslint-disable-next-line import/no-mutable-exports
exports.deprecate = noop;
if (process.env.NODE_ENV !== "production") {
  exports.deprecate = ({
    name,
    message,
    version
  }) => {
    Deprecations.deprecate({
      name,
      message,
      version
    });
  };
}

// eslint-disable-next-line import/no-mutable-exports
exports.useDeprecation = null;
if (process.env.NODE_ENV !== "production") {
  exports.useDeprecation = ({
    name,
    message,
    version
  }) => {
    const ref = React.useRef(false);
    const logDeprecation = React.useCallback(() => {
      if (!ref.current) {
        ref.current = true;
        exports.deprecate({
          name,
          message,
          version
        });
      }
    }, [name, message, version]);
    return logDeprecation;
  };
} else {
  exports.useDeprecation = () => {
    return noop;
  };
}
class Deprecations {
  static instance = null;
  static get() {
    if (!Deprecations.instance) {
      Deprecations.instance = new Deprecations();
    }
    return Deprecations.instance;
  }
  constructor() {
    this.deprecations = [];
  }
  static deprecate({
    name,
    message,
    version
  }) {
    const msg = `WARNING! ${name} is deprecated and will be removed in version ${version}. ${message}`;
    // eslint-disable-next-line no-console
    console.warn(msg);
    this.get().deprecations.push({
      name,
      message,
      version
    });
  }
  static getDeprecations() {
    return this.get().deprecations;
  }
  static clearDeprecations() {
    this.get().deprecations.length = 0;
  }
}

exports.Deprecations = Deprecations;
