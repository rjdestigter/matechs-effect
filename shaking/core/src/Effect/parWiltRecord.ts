import type { Separated } from "fp-ts/lib/Compactable"

import type { Either } from "../Either/either"
import { wilt_ } from "../Record"
import type { Effect, AsyncRE } from "../Support/Common/effect"

import { parEffect } from "./effect"

export const parWiltRecord_ =
  /*#__PURE__*/
  (() => wilt_(parEffect))()

export const parWiltRecord: <A, S, R, E, B, C>(
  f: (a: A) => Effect<S, R, E, Either<B, C>>
) => (
  wa: Record<string, A>
) => AsyncRE<R, E, Separated<Record<string, B>, Record<string, C>>> = (f) => (wa) =>
  parWiltRecord_(wa, f)
