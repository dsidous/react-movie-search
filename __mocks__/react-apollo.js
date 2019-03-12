const apollo = require.requireActual('react-apollo');
const result = jest.fn(Component => Component);

apollo.graphql = jest.fn().mockReturnValue(result);

module.exports = apollo;
