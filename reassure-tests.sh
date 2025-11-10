#!/usr/bin/env bash
set -e 

BASELINE_BRANCH=${GITHUB_BASE_REF:="main"}

# Required for `git switch` on CI
git fetch origin

# Gather baseline perf measurements
git switch "$BASELINE_BRANCH"

bun install
REASSURE=true
bun reassure --baseline --testMatch '<rootDir>/**/*.perf-test.[jt]s?(x)'

# Gather current perf measurements & compare results
git switch --detach -

bun install
REASSURE=true
bun reassure --branch --testMatch '<rootDir>/**/*.perf-test.[jt]s?(x)'
