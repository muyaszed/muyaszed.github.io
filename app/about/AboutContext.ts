import { createContext, Dispatch } from "react";

export const SideBarContext = createContext<Dispatch<ScoreAction> | null>(null);

interface ScoreActionIncrease {
    type: "INCREASE";
}

interface ScoreActionDecrease {
    type: "DECREASE";
}

type ScoreAction = ScoreActionIncrease | ScoreActionDecrease;

interface ScoreState {
    score: number;
}

export function reducer(state: ScoreState, action: ScoreAction) {
    switch (action.type) {
        case "INCREASE":
            return {
                ...state,
                score: state.score + 10,
            };
        case "DECREASE":
            return {
                ...state,
                score: state.score - 10,
            };
        default:
            return state;
    }
}
