# Publishing

This document walks through everything from an empty repo to `npm install @mohamedd/ui` working for a stranger. Copy-pasteable.

## 0. One-time account setup

- **GitHub** account exists (username `MohamedDerkAmine`).
- **npm** account exists and you can `npm login`.
- The **`gh` CLI** is installed and authed: `gh auth login`.

## 1. Create the GitHub repo

```bash
cd C:\Users\moham\Documents\design-system
git init
git add -A
git commit -m "chore: initial commit"
gh repo create MohamedDerkAmine/ui --public --source=. --remote=origin --push
```

## 2. Publishing prerequisites in the repo

### npm scope

`@mohamedd` must exist on npm. Create it (free, public):

```bash
npm login
npm org create mohamedd     # only if the scope does not exist yet
```

### npm token for CI

Generate an **Automation** token on npmjs.com → Access Tokens.

```bash
gh secret set NPM_TOKEN --body "<token>"
```

### GitHub Actions permissions

Settings → Actions → General → **Workflow permissions**:

- ✅ Read and write permissions
- ✅ Allow GitHub Actions to create and approve pull requests

### Chromatic (optional but recommended)

```bash
# https://www.chromatic.com → New project → import from GitHub → copy project token
gh secret set CHROMATIC_PROJECT_TOKEN --body "<token>"
```

### Vercel Remote Cache for Turborepo (optional)

```bash
npx turbo login
npx turbo link
# Vercel dashboard → Account Settings → Tokens → generate token
gh secret set TURBO_TOKEN --body "<token>"
gh variable set TURBO_TEAM --body "<your-vercel-team-slug>"
```

## 3. Local install & smoke build

```bash
pnpm install
pnpm build
pnpm --filter @mohamedd/ui-playground dev
```

Visit http://localhost:3000 and click through each family page.

## 4. First publish

The Changesets action opens a "Version Packages" PR whenever there are unpublished changesets. Merging that PR triggers the actual `npm publish`.

```bash
# 1. author a changeset for the first release
pnpm changeset
# → pick @mohamedd/ui, choose "minor" (0.1.0), write "Initial release."

# 2. commit and push
git add .changeset
git commit -m "chore: changeset for initial release"
git push
```

GitHub Actions will:
1. Run `ci.yml`: lint, typecheck, build, test, Chromatic.
2. Run `release.yml`: open the Version Packages PR.

Merge the Version Packages PR. `release.yml` runs again and publishes to npm **with provenance** (`npm publish --provenance`).

## 5. Verify

```bash
npm view @mohamedd/ui version
# → 0.1.0

# smoke-test in a scratch directory
mkdir /tmp/ui-smoke && cd /tmp/ui-smoke
npm init -y
npm install react react-dom @mohamedd/ui
```

## 6. Subsequent releases

```bash
# after landing changes on main
pnpm changeset          # describe the change
git add .changeset && git commit -m "chore: changeset" && git push
# → Version Packages PR opens; merge it → publish
```

## Troubleshooting

- **`ERR_PNPM_UNSUPPORTED_ENGINE`** — you are not on Node 22. `nvm use` (Unix) or install Node 22 LTS.
- **`403 Forbidden` on publish** — the scope `@mohamedd` is not linked to the token, or the token is a Read-only token. Regenerate as **Automation**.
- **Provenance fails** — the workflow must run on a public repo and have `id-token: write` permission. Both are set in `release.yml`; check that the repo is public.
- **Chromatic complains "no baseline"** — this is normal on the very first run. Accept the baseline in the Chromatic UI.
