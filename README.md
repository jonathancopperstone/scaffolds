# scaffolds

Scaffolds for various tooling and configuration. Organised by branch.

##### Contents / Branches

- [gulp-pattern](https://github.com/johnnycopperstone/scaffolds/tree/gulp-pattern)

##### Using scaffolds

Using scaffolds as a helpful development tool is very easy. All you need to do is add this repository's url as a remote in your repo. I generally prefer to give the remote a name like `scaffolds` or `tooling` to indicate what it's for.

    git remote add scaffolds https://github.com/johnnycopperstone/scaffolds.git

That's pretty much it. Whenever you want to use one the scaffolds in your project, for example setting you gulpfile according to [gulp-pattern](https://github.com/snslss/gulp-pattern), simply fetch this repo and then merge the desired scaffold (branch) into your branch.

    git fetch scaffolds
    git merge scaffolds/gulp-pattern

Ideally, you wouldn't have the same files / folders in your repo yet, so you shouldn't have any merge conflicts.

##### Developing scaffolds

Each branch has ignores specific files you wouldn't want merged in when merging into your repo, however are needed for dev of the scaffold. To avoid conflicts in `.gitignore`, and adding files to your `.gitignore` you may not want, these are added locally in `.git/info/exclude`. This won't interfere with your repo. Each branch should list in its README the files to ignore, so you can add these to your exclude.
