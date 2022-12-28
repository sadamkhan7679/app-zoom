const VALIDATORS = {
  NAME: (input) => /^[a-zA-Z\s]*$/.test(input),
  // eslint-disable-next-line no-useless-escape
  EMAIL: (input) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input,
  ),
  // eslint-disable-next-line no-useless-escape
  PHONE: (input) => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(input)
    && input.length >= 10 + 1,
  DESCRIPTION: (input) => input && input.length >= 100,
  MESSAGE: (input) => input && input.length > 0,
};

export default VALIDATORS;
