import { Measurements } from "../types";
import { getCustomPlacement } from "./custom";



export function getPreferredCenteredMostSpacePlacement({
  options,
  measurements,
}: {
  options: any;
  measurements: Measurements;
}) {
 return getCustomPlacement({
        options: {
            ...options,
            position: "mostSpace",
            alignment: "center"
        },
        measurements: measurements
    })
}