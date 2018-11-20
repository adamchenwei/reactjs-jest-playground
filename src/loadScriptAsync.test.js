import loadScriptAsync from './loadScriptAsync';

function print(thing) {
  console.log(thing);
}

describe('loadScriptAsync', () => {

  it('works with promises', () => {
    // function loader() {
    //   return loadScriptAsync('', print, print)
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error));
    // }

    expect.assertions(1);
    return loadScriptAsync('', print, print)
      .then(data => expect(data).toBe('success'))
      .catch(error => expect(error).toBe('rejected'));
  });
});
