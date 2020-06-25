## Search command history

ctrl-r

## wildcards in paths

Let's say you have a directory 20200625-super-cool-dir.
You can `cd *super-cool*`

## Multiple github accounts

Edit ~/.ssh/config and add this:

Host github.com-<your_github_username>
        HostName github.com
        User git
        IdentityFile <path_to_key>

Then, edit <project>/.git/config and edit origin url from something like this:
git@github.com:ps-dev/unified-content-model.git
To add add github username like this:
git@github.com-<your_github_username>:ps-dev/unified-content-model.git

Now add that key to ssh agent:
ssh-add <path_to_key>

Now this repo will always use the right key, even if you have multiple github accounts and multiple related ssh keys in your agent.