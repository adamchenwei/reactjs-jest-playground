import loadScriptAsync from './loadScriptAsync';

// const mockGetScript = () => new Promise(resolve => resolve(`var abc='1';`));

describe('loadScriptAsync', () => {
  it('return error when rejected or timedout after execution', async () => {
    expect.assertions(1);
    try {
      await loadScriptAsync('', 1, 'my custom');
    } catch (e) {
      expect(e).toEqual({
        error: 'my custom - load script async promise rejected by timeout'
      });
    }
  });
  it('return default error name when not set', async () => {
    expect.assertions(1);
    try {
      await loadScriptAsync('', 1);
    } catch (e) {
      expect(e).toEqual({
        error: 'unnamed - load script async promise rejected by timeout'
      });
    }
  });
  it('return default error when script resolved to api end point error', async () => {
    expect.assertions(1);
    try {
      await loadScriptAsync('www.abc.com', 1000);
    } catch (e) {
      expect(e).toEqual({
        error: '???'
      });
    }
  });
});
