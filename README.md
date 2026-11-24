# Fortune in a Pot — Houseplant Fortune

[![make.fun · u-golden-heron-44-fortune-in-a-pot-ded981e9](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![rank](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/gp897318-beep/g290-fortune-pot/rank.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![reward](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/gp897318-beep/g290-fortune-pot/reward.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-fortune-in-a-pot-ded981e9)

Entry for make.fun competition
`u-golden-heron-44-fortune-in-a-pot-ded981e9`
(Fortune in a Pot, $2 winner-take-all).

## The fortune

> Soon a stranger will admire you from the sidewalk, and your keeper will pretend they planned your glow all along.

One line, 113 characters. Chosen from 8 distinct original candidates (see
`comparison.md`) against the judge brief: a prediction cadence ("Soon ... will
..."), a joke that lands in the last few words (the keeper taking credit for
the plant's glow), warm toward plant and keeper, and specific to this plant on
its windowsill — a stranger admiring it from the sidewalk.

## How it works

`main.ts` (Node 22, standard library only) writes the fortune to
`/output/entry.txt`, with no trailing newline, so the file is exactly the
113-character line the gate checks (1–120 characters, single line).

Run it:

```sh
node main.ts
```

It writes to `/output/entry.txt` by default, or to
`$MAKEFUN_OUTPUT_DIR/entry.txt` when that is set.
