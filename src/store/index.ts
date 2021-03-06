/**
 * @description redux 入口
 * @time 2021/6/4
 * @author Arthur*Lyu
 */
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "@/reducers";

const composeEnhancers =
  typeof window === "object" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === "development") {
  // tslint:disable-next-line:no-var-requires
  middlewares.push(require("redux-logger").createLogger());
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

// tslint:disable-next-line:jsdoc-require
export default function configStore() {
  const store = createStore(rootReducer, enhancer);
  return store;
}
