import bem from '../src';

describe('Blocks & Modifiers', () => {
  test('is bem defined', () => {
    expect(bem).toBeDefined();
  });

  test('it returns an empty string if nothing is passed', () => {
    const className = bem().className;
    expect(className).toBeDefined();
    expect(className).toEqual('');
  });

  test('it generates the right classname for single element', () => {
    const className = bem('button').className;
    expect(className).toBeDefined();
    expect(className).toEqual('button');
  });

  test('it generates the right classname when passing an empty object', () => {
    const className = bem('button', {}).className;
    expect(className).toBeDefined();
    expect(className).toEqual('button');
  });

  test('it generates the right classname for additional blocks', () => {
    const className = bem('button', {
      active: true,
      pressed: false,
    }).className;
    expect(className).toBeDefined();
    expect(className).toEqual('button active');
  });

  test('it generates the right classname for modifiers', () => {
    const className = bem('button', {
      '-active': true,
      '-pressed': false,
    }).className;
    expect(className).toBeDefined();
    expect(className).toEqual('button button-active');
  });

  test('it generates the right classname for mixed input', () => {
    const className = bem('button', {
      '-active': true,
      '-pressed': false,
      bigButton: true,
    }).className;
    expect(className).toBeDefined();
    expect(className).toEqual('button button-active bigButton');
  });
});

describe('Elements and Modifiers', () => {
  const button = bem('button');

  test('it generates the right classname for additional blocks', () => {
    const className = button('text', {
      active: true,
      pressed: false,
    }).className;
    expect(className).toBeDefined();
    expect(className).toEqual('button_text active');
  });

  test('it generates the right classname for modifiers', () => {
    const className = button('text', {
      '-active': true,
      '-pressed': false,
    }).className;
    expect(className).toBeDefined();
    expect(className).toEqual('button_text button_text-active');
  });

  test('it generates the right classname for mixed input', () => {
    const className = button('text', {
      '-active': true,
      '-pressed': false,
      bigButton: true,
    }).className;
    expect(className).toBeDefined();
    expect(className).toEqual('button_text button_text-active bigButton');
  });
});

describe('Custom Prefix', () => {
  const myBem = bem.withPrefix('bem');

  test('it returns a generator', () => {
    expect(myBem).toBeDefined();
    expect(typeof myBem).toEqual('function');
  });

  test('it prefixes blocks & modifiers', () => {
    const className = myBem('button', {
      '-active': true,
      '-pressed': false,
      bigButton: true,
    }).className;
    expect(className).toBeDefined();
    expect(className).toEqual('bem-button bem-button-active bigButton');
  });

  test('it prefixes elements & modifiers', () => {
    const button = myBem('button');
    const className = button('text', {
      '-active': true,
      '-pressed': false,
      bigButton: true,
    }).className;
    expect(className).toBeDefined();
    expect(className).toEqual(
      'bem-button_text bem-button_text-active bigButton'
    );
  });
});
