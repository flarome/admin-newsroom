import { getCustomPlacement } from "./custom";



export function getPreferredCenteredBelowPlacement({
  options,
  measurements,
}: {
  options: any;
  measurements: any;
}) {
 return getCustomPlacement({
        options: {
            ...options,
            position: "below",
            alignment: "center"
        },
        measurements: measurements
    })
}