# Changesets

This folder holds the [changesets](https://github.com/changesets/changesets) that will become the next release.

## How to add a changeset

```bash
pnpm changeset
```

Follow the prompts to describe your change. The workflow is:

1. Make code changes.
2. Run `pnpm changeset` and pick affected packages + bump level (patch / minor / major).
3. Write a short user-facing summary — this becomes the CHANGELOG entry.
4. Commit the generated `.changeset/*.md` file alongside your code change.
5. On merge to `main`, the release workflow opens a "Version Packages" PR.
6. Merging that PR publishes to npm and creates a GitHub Release.

See [Changesets docs](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md) for detail.
