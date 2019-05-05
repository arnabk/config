#  This script assumes that ssh-add ~/.ssh/id has been called running the following commands
GITHUB_USER=arnabk
AZURE_USER=v3/arnabk/Active/Path/To/Project

REPOSITORY_NAME=$1

git clone git@github.com:$GITHUB_USER/$REPOSITORY_NAME.git
cd $REPOSITORY_NAME
git remote add upstream git@ssh.dev.azure.com:$AZURE_USER/$REPOSITORY_NAME
git push upstream master
git push --tags upstream
cd ..
rm -fR $REPOSITORY_NAME%
