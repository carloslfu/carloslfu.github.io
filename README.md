# Carlos Galarza's website

Made with NextJS, React, Styled System and love ;).

Code is on branch `code`.
Build is on branch `master` (required in order to work on Github Pages).

## Deploy to Github Pages

- You should be in the branch `code`
- `next build`
- `next export`
- Add `.nojekyll` file to `out` folder
- `git push`
- `git subtree push --prefix out origin master`
