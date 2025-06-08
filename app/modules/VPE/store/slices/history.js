import { generateId } from "../../lib/generate-id";
import { useEffect } from "react";
import { useHotkey } from "../../lib/use-hotkey";
 
const EMPTY_HISTORY_INDEX = 0;

function debounce(func, timeout = 300) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

// Tidy the state before going back or forward
const tidyState = (state) => {
  return {
    ...state,
    ui: {
      ...state.ui,
      field: {
        focus: null,
      },
    },
  };
};

export const createHistorySlice = (set, get) => {
  const record = debounce((state) => {
    const { histories, index } = get().history;

    const history = {
      state,
      id: generateId("history"),
    };

    const newHistories = [...histories.slice(0, index + 1), history];

    set({
      history: {
        ...get().history,
        histories: newHistories,
        index: newHistories.length - 1,
      },
    });
  }, 250);

  return {
    initialAppState: {},
    index: EMPTY_HISTORY_INDEX,
    histories: [],
    hasPast: () => get().history.index > EMPTY_HISTORY_INDEX,
    hasFuture: () => get().history.index < get().history.histories.length - 1,
    prevHistory: () => {
      const { history } = get();
      return history.hasPast() ? history.histories[history.index - 1] : null;
    },
    nextHistory: () => {
      const s = get().history;
      return s.hasFuture() ? s.histories[s.index + 1] : null;
    },
    currentHistory: () => get().history.histories[get().history.index],
    back: () => {
      const { history, dispatch } = get();

      if (history.hasPast()) {
        const state = tidyState(
          history.prevHistory()?.state || history.initialAppState
        );

        dispatch({
          type: "set",
          state,
        });

        set({ history: { ...history, index: history.index - 1 } });
      }
    },
    forward: () => {
      const { history, dispatch } = get();

      if (history.hasFuture()) {
        const state = history.nextHistory()?.state;

        dispatch({ type: "set", state: state ? tidyState(state) : {} });

        set({ history: { ...history, index: history.index + 1 } });
      }
    },
    setHistories: (histories) => {
      const { dispatch, history } = get();

      dispatch({
        type: "set",
        state:
          history.histories[history.histories.length - 1]?.state ||
          history.initialAppState,
      });

      set({ history: { ...history, histories, index: histories.length - 1 } });
    },
    setHistoryIndex: (index) => {
      const { dispatch, history } = get();

      dispatch({
        type: "set",
        state: history.histories[index]?.state || history.initialAppState,
      });

      set({ history: { ...history, index } });
    },
    record,
  };
};

export function useRegisterHistorySlice(appStore, { histories, index, initialAppState }) {
  useEffect(() => {
    appStore.setState({
      history: {
        ...appStore.getState().history,
        histories,
        index,
        initialAppState,
      },
    });
  }, [histories, index, initialAppState]);

  const back = () => {
    appStore.getState().history.back();
  };

  const forward = () => {
    appStore.getState().history.forward();
  };

  useHotkey({ meta: true, z: true }, back);
  useHotkey({ meta: true, shift: true, z: true }, forward);
  useHotkey({ meta: true, y: true }, forward);

  useHotkey({ ctrl: true, z: true }, back);
  useHotkey({ ctrl: true, shift: true, z: true }, forward);
  useHotkey({ ctrl: true, y: true }, forward);
}