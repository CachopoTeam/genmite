import { AngularUtils } from './../../../src';

describe('Angular utils suite', () => {
  it('should create the className by angular styleguide', () => {
    const utils = new AngularUtils();
    const name = 'list-trade-report';
    const className = 'ListTradeReportComponent';
    expect(utils.generateClassName(name)).toBe(className);
  });

  it('should create the className by angular styleguide', () => {
    const utils = new AngularUtils();
    const name = 'app';
    const className = 'AppComponent';
    expect(utils.generateClassName(name)).toBe(className);
  });

  it('should create the className for a service', () => {
    const utils = new AngularUtils();
    const name = 'user';
    const type = 'Service';
    const className = 'UserService';
    expect(utils.generateClassName(name, type)).toBe(className);
  });
});
