// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

// Add any needed widget imports here (or from controls)
// import {} from '@jupyter-widgets/base';

import { createTestModel } from './utils';

import { QuispIFrameModel } from '..';

describe('Example', () => {
  describe('ExampleModel', () => {
    it('should be createable', () => {
      const model = createTestModel(QuispIFrameModel);
      expect(model).toBeInstanceOf(QuispIFrameModel);
      expect(model.get('value')).toEqual('Hello World');
    });

    it('should be createable with a value', () => {
      const state = { value: 'Foo Bar!' };
      const model = createTestModel(QuispIFrameModel, state);
      expect(model).toBeInstanceOf(QuispIFrameModel);
      expect(model.get('value')).toEqual('Foo Bar!');
    });
  });
});
