import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";

/**
 * Redux store configuration - the central state container for the entire application.
 * 
 * The store:
 * - Holds the complete state tree of your application
 * - Provides methods to access and update state (via dispatch)
 * - Registers reducers that specify how state changes in response to actions
 * 
 * In a larger enterprise application, this would contain multiple reducers
 * for different domains/features, similar to how microservices architecture
 * divides business logic into separate services.
 */

export const store = configureStore({
  reducer: {
    game: gameReducer,
    // Additional reducers would be added here in a larger application
    // users: usersReducer,
    // settings: settingsReducer,
  },
});

// Inferred types for use in hooks
// These types make Redux fully type-safe when used with useSelector and useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
