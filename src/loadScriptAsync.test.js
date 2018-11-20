import loadScriptAsync from './loadScriptAsync';

describe('loadScriptAsync', () => {
  it('return error when rejected or timedout after execution', async () => {
    expect.assertions(1);
    try {
      await loadScriptAsync('', 'custom loader', 1);
    } catch (e) {
      expect(e).toEqual({
        error: 'custom loader - load script async promise rejected'
      });
    }
  });
});
