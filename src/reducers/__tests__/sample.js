// actionType
import {
  SAMPLE_ACTION,
  SAMPLE_ACTION_SUCCESS,
}
  from '../../actions/actionTypes';

// reducer
import reducer from '../sample';


describe('login reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        data: {
          loading: false,
          progress: false
        }
      }
    );
  });
  it('should run on sample action', () => {
    const sampleAction = {
      type: SAMPLE_ACTION,
      payload: {
        loading: true,
        progress: 'ongoing',
      }
    };
    expect(
      reducer({}, sampleAction)
    ).toEqual({ data: sampleAction.payload });
  });
  it('should run on successful sample action', () => {
    const sampleAction = {
      type: SAMPLE_ACTION_SUCCESS,
      payload: {
        loading: true,
        progress: 'ongoing',
      }
    };
    expect(
      reducer({}, sampleAction)
    ).toEqual({ data: sampleAction.payload });
  });
});
