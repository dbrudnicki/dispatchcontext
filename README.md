# DispatchContext

This is an example of wrapping the React Context with a Component and custom hook to simplify use in an application.

The index.tsx wraps the `<App/>` component in a `<DispatchContext/>` component which takes a reducer function and an initial state object. Child components may then access the `[state, dispatch]` tuple from the `useDispatchContext()` hook

## Load Dependencies

After cloning the app and CD'ing into the root; run `yarn` to install the dependencies.

## Running the example App

After loading the dependencies: run `yarn start` this will start the app at http://localhost:5555

## Notes

The implementation for the `<DispatchContext/>` and `useDispatchContext()` can be found in the: `src/DispatchContext` folder.
