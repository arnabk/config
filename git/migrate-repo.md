# Migrate from one repo to another

    git fetch --tags
    git remote rm origin
    git remote add origin <Remote repo>
    git push origin --all
    git push --tags
